import { useState } from 'react';
import { X, Trophy, Calendar, MapPin, Users, CheckCircle2, Ticket, ShieldCheck, User, Mail, Phone, Building } from 'lucide-react';

export default function EventModal({ event, onClose, onRegisterSuccess, isRegistered }) {
  const [activeTab, setActiveTab] = useState(isRegistered ? 'success' : 'details');
  const [formData, setFormData] = useState({
    participantName: '',
    email: '',
    phone: '',
    college: '',
    teamName: '',
  });
  const [registeredTicket, setRegisteredTicket] = useState(null);

  if (!event) return null;

  const handleSubmitRegistration = (e) => {
    e.preventDefault();
    const ticket = {
      passId: `PLS26-${Math.floor(100000 + Math.random() * 900000)}`,
      eventName: event.title,
      participantName: formData.participantName,
      college: formData.college,
      teamName: formData.teamName || 'Solo Participant',
      date: event.day,
      venue: event.venue,
    };

    setRegisteredTicket(ticket);
    onRegisterSuccess(event.id, ticket);
    setActiveTab('success');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="glass-panel w-full max-w-2xl rounded-3xl overflow-hidden border-white/20 shadow-2xl relative max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-purple-900/60 to-pink-900/60 border-b border-white/10 flex items-start justify-between">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-extrabold uppercase bg-purple-500/20 text-purple-300 border border-purple-500/30 mb-2">
              {event.category} • {event.day}
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">{event.title}</h3>
            <p className="text-xs sm:text-sm text-cyan-300 font-medium">{event.tagline}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        {!registeredTicket && !isRegistered && (
          <div className="flex border-b border-white/10 bg-white/5">
            <button
              onClick={() => setActiveTab('details')}
              className={`flex-1 py-3 text-sm font-semibold transition-colors border-b-2 ${
                activeTab === 'details'
                  ? 'border-purple-500 text-purple-300 bg-white/5'
                  : 'border-transparent text-gray-400 hover:text-white'
              }`}
            >
              Event Details & Rules
            </button>
            <button
              onClick={() => setActiveTab('register')}
              className={`flex-1 py-3 text-sm font-semibold transition-colors border-b-2 ${
                activeTab === 'register'
                  ? 'border-pink-500 text-pink-300 bg-white/5'
                  : 'border-transparent text-gray-400 hover:text-white'
              }`}
            >
              Register Now ({event.fee})
            </button>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-gray-200 text-sm">
          {activeTab === 'details' && (
            <div className="space-y-6">
              {/* Key Details Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                  <div className="text-xs text-gray-400 mb-1 flex items-center gap-1">
                    <Trophy className="w-3.5 h-3.5 text-yellow-400" /> Prize Pool
                  </div>
                  <div className="font-bold text-white text-base">{event.prize}</div>
                </div>
                <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                  <div className="text-xs text-gray-400 mb-1 flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-pink-400" /> Team Size
                  </div>
                  <div className="font-bold text-white text-xs sm:text-sm">{event.teamSize}</div>
                </div>
                <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                  <div className="text-xs text-gray-400 mb-1 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-purple-400" /> Date & Time
                  </div>
                  <div className="font-bold text-white text-xs">{event.time}</div>
                </div>
                <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                  <div className="text-xs text-gray-400 mb-1 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" /> Venue
                  </div>
                  <div className="font-bold text-white text-xs truncate">{event.venue}</div>
                </div>
              </div>

              {/* Description */}
              <div>
                <h4 className="text-base font-bold text-white mb-2">About the Event</h4>
                <p className="text-gray-300 leading-relaxed">{event.description}</p>
              </div>

              {/* Rules List */}
              <div>
                <h4 className="text-base font-bold text-white mb-3">Rules & Guidelines</h4>
                <ul className="space-y-2">
                  {event.rules.map((rule, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-300">
                      <ShieldCheck className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Coordinator */}
              <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-500/20 text-xs">
                <span className="text-purple-300 font-semibold uppercase tracking-wider block mb-1">
                  Event Coordinator:
                </span>
                <span className="text-white font-medium">{event.coordinator}</span>
              </div>

              {/* CTA */}
              {!isRegistered && (
                <button
                  onClick={() => setActiveTab('register')}
                  className="w-full py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 hover:opacity-95 shadow-lg shadow-purple-500/30 text-center"
                >
                  Proceed to Register ({event.fee})
                </button>
              )}
            </div>
          )}

          {activeTab === 'register' && (
            <form onSubmit={handleSubmitRegistration} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.participantName}
                    onChange={(e) => setFormData({ ...formData, participantName: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      placeholder="john@college.edu"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 text-sm"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    College / University Name *
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="St. Xavier Institute"
                      value={formData.college}
                      onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    Team Name (Optional for Solo)
                  </label>
                  <div className="relative">
                    <Users className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="CyberKnights Squad"
                      value={formData.teamName}
                      onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 text-sm"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 hover:opacity-95 shadow-lg shadow-purple-500/30 flex items-center justify-center gap-2"
                >
                  <Ticket className="w-4 h-4" />
                  Confirm & Generate Event Pass
                </button>
              </div>
            </form>
          )}

          {(activeTab === 'success' || registeredTicket) && (
            <div className="text-center py-4 space-y-4">
              <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <h4 className="text-2xl font-bold text-white">Registration Confirmed!</h4>
              <p className="text-xs text-gray-300">
                You are registered for <span className="text-pink-400 font-bold">{event.title}</span>.
              </p>

              {/* Digital Pass Preview Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-950/90 via-[#0d0f28] to-pink-950/90 border border-purple-500/30 text-left relative overflow-hidden shadow-xl max-w-md mx-auto">
                <div className="flex justify-between items-start mb-4 border-b border-white/10 pb-3">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-purple-400 tracking-wider block">
                      OFFICIAL EVENT PASS
                    </span>
                    <span className="font-extrabold text-lg text-white">PULSE 2026</span>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-pink-500/20 text-pink-300 font-mono text-xs font-bold border border-pink-500/30">
                    {registeredTicket?.passId || 'PLS26-REGISTERED'}
                  </span>
                </div>

                <div className="space-y-2 text-xs text-gray-300 mb-4">
                  <div><strong className="text-white">Event:</strong> {event.title}</div>
                  <div><strong className="text-white">Participant:</strong> {registeredTicket?.participantName || 'Registered Delegate'}</div>
                  <div><strong className="text-white">College:</strong> {registeredTicket?.college || 'Verified College'}</div>
                  <div><strong className="text-white">Date & Venue:</strong> {event.day} ({event.venue})</div>
                </div>

                {/* Simulated QR Code Canvas */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                  <div className="text-[10px] text-gray-400">Scan at Security Gate Entrance</div>
                  <div className="w-12 h-12 bg-white rounded p-1 flex items-center justify-center">
                    <div className="w-full h-full bg-black flex flex-wrap gap-1 p-1">
                      <div className="w-3 h-3 bg-white"></div>
                      <div className="w-2 h-2 bg-white"></div>
                      <div className="w-2 h-2 bg-white"></div>
                      <div className="w-3 h-3 bg-white"></div>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-white/10 text-white font-semibold text-sm hover:bg-white/20"
              >
                Close Window
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
