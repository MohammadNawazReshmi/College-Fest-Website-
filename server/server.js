import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS and parsing of request bodies
app.use(cors());
app.use(express.json());

// Initialize Supabase Client
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

let supabase;
if (supabaseUrl && supabaseKey) {
  supabase = createClient(supabaseUrl, supabaseKey);
  console.log('Supabase client initialized successfully.');
} else {
  console.warn('WARNING: SUPABASE_URL or SUPABASE_KEY is missing from environment variables. Running in local fallback/offline mode.');
}

// Local mock storage fallback if Supabase is offline/not configured yet
const localMockDb = [];

// Health / Connection Test route
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    timestamp: new Date(),
    supabaseConnected: !!supabase,
    databaseMode: supabase ? 'Supabase cloud' : 'local mock memory fallback'
  });
});

// GET registrations (for administration or confirmation checks)
app.get('/api/registrations', async (req, res) => {
  try {
    if (supabase) {
      const { data, error } = await supabase
        .from('registrations')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return res.json(data);
    } else {
      return res.json(localMockDb);
    }
  } catch (err) {
    console.error('Error fetching registrations:', err);
    res.status(500).json({ error: 'Failed to retrieve registrations', message: err.message });
  }
});

// POST registration (Create a new delegate ticket record)
app.post('/api/register', async (req, res) => {
  const { fullName, college, department, year, phone, email, selectedEvents } = req.body;

  // Basic validations
  if (!fullName || !college || !phone || !email || !selectedEvents || selectedEvents.length === 0) {
    return res.status(400).json({ error: 'Validation failed', message: 'All fields are required.' });
  }

  // Generate unique ticket code: CODE26-XXXXXX
  const ticketId = `CODE26-${Math.floor(100000 + Math.random() * 900000)}`;

  try {
    const newRecord = {
      ticket_id: ticketId,
      full_name: fullName,
      college,
      department,
      academic_year: year,
      phone,
      email,
      selected_events: selectedEvents,
    };

    if (supabase) {
      // Insert into Supabase table
      const { data, error } = await supabase
        .from('registrations')
        .insert([newRecord])
        .select();

      if (error) {
        // Handle common unique constraints or errors
        if (error.code === '23505') {
          return res.status(409).json({
            error: 'Duplicate registration',
            message: 'Email or phone number has already been registered.'
          });
        }
        throw error;
      }

      const inserted = data[0];
      return res.status(201).json({
        success: true,
        message: 'Registration persisted in Supabase database.',
        ticket: {
          ticketId: inserted.ticket_id,
          fullName: inserted.full_name,
          college: inserted.college,
          department: inserted.department,
          year: inserted.academic_year,
          email: inserted.email,
          phone: inserted.phone,
          events: inserted.selected_events,
          issueDate: new Date(inserted.created_at).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })
        }
      });
    } else {
      // In-memory fallback
      const offlineRecord = {
        ...newRecord,
        created_at: new Date().toISOString()
      };
      localMockDb.push(offlineRecord);
      console.log('Stored registration in memory fallback db:', offlineRecord);

      return res.status(201).json({
        success: true,
        message: 'Offline mock fallback mode - persisted in memory.',
        ticket: {
          ticketId: offlineRecord.ticket_id,
          fullName: offlineRecord.full_name,
          college: offlineRecord.college,
          department: offlineRecord.department,
          year: offlineRecord.academic_year,
          email: offlineRecord.email,
          phone: offlineRecord.phone,
          events: offlineRecord.selected_events,
          issueDate: new Date(offlineRecord.created_at).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })
        }
      });
    }
  } catch (err) {
    console.error('Error saving registration:', err);
    res.status(500).json({ error: 'Database transaction failed', message: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`CODECHAKRA Backend API Server is running on http://localhost:${PORT}`);
});
