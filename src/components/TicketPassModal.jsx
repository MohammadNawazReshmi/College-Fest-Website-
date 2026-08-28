import { useState } from 'react';
import { X, Ticket, CheckCircle, ShieldCheck, User, Mail, Phone, Building, Download } from 'lucide-react';
import { FEST_DETAILS } from '../data/festData';

export default function TicketPassModal({ onClose }) {
  const [passType, setPassType] = useState('all-access');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    idNumber: '',
  });
  const [passGenerated, setPassGenerated] = useState(null);

  const handleGeneratePass = (e) => {
    e.preventDefault();
    const newPass = {
      passId: `PLS26-PASS-${Math.floor(100000 + Math.random() * 900000)}`,
      name: formData.name,
      email: formData.email,
      college: formData.college,
      passType: passType === 'all-access' ? 'All-Access VIP Delegate' : 'Student Day Pass',
      issueDate: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    };
    setPassGenerated(newPass);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="glass-panel w-full max-w-xl rounded-3xl overflow-hidden border-white/20 shadow-2xl relative max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-purple-900/80 via-pink-950/80 to-purple-900/80 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-pink-500/20 border border-pink-500/30 flex items-center justify-center text-pink-400">
              <Ticket className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-white">Get Official Fest Pass</h3>
              <p className="text-xs text-gray-300">Fast-track gate access for PULSE 2026</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1">
          {!passGenerated ? (
            <form onSubmit={handleGeneratePass} className="space-y-4">
              {/* Pass Tier Selection */}
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-2">Select Pass Category</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setPassType('all-access')}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      passType === 'all-access'
                        ? 'bg-gradient-to-br from-purple-900/60 to-pink-900/60 border-purple-500 text-white shadow-lg'
                        : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'
                    }`}
                  >
                    <div className="text-xs font-bold text-pink-400 mb-1">ALL-ACCESS VIP</div>
                    <div className="text-sm font-bold text-white">3-Day Pass</div>
                    <div className="text-[10px] text-gray-300 mt-1">Includes Pronite Concerts + All Events</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPassType('day-pass')}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      passType === 'day-pass'
                        ? 'bg-gradient-to-br from-purple-900/60 to-pink-900/60 border-purple-500 text-white shadow-lg'
                        : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'
                    }`}
                  >
                    <div className="text-xs font-bold text-cyan-400 mb-1">SINGLE DAY</div>
                    <div className="text-sm font-bold text-white">General Entry</div>
                    <div className="text-[10px] text-gray-300 mt-1">Access to competition arenas</div>
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">Student Full Name *</label>
                <div className="relative">
                  <User className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="Alex Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-purple-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">Email *</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      placeholder="alex@college.edu"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-purple-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">Phone Number *</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-purple-500"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">College / Institution *</label>
                <div className="relative">
                  <Building className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="St. Xavier Institute of Technology"
                    value={formData.college}
                    onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-purple-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 hover:opacity-95 shadow-xl shadow-purple-600/30 flex items-center justify-center gap-2 mt-4"
              >
                <Ticket className="w-4 h-4" /> Issue My Digital Pass Now
              </button>
            </form>
          ) : (
            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <CheckCircle className="w-8 h-8" />
                </div>
              </div>

              <div>
                <h4 className="text-2xl font-extrabold text-white">Fest Pass Issued!</h4>
                <p className="text-xs text-gray-300 mt-1">
                  Present this digital pass at entry gates for instant verification.
                </p>
              </div>

              {/* Digital Holographic Pass Card */}
              <div className="p-6 rounded-3xl bg-gradient-to-br from-purple-900 via-[#0d0d26] to-pink-900 border-2 border-purple-500/40 text-left relative overflow-hidden shadow-2xl">
                {/* Background watermark */}
                <div className="absolute top-0 right-0 p-8 text-8xl font-black text-white/5 select-none pointer-events-none">
                  PULSE
                </div>

                <div className="flex items-center justify-between border-b border-white/15 pb-4 mb-4">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase text-pink-400 tracking-widest block">
                      OFFICIAL DELEGATE PASS
                    </span>
                    <span className="text-xl font-extrabold text-white">{FEST_DETAILS.name}</span>
                  </div>
                  <span className="px-3 py-1 rounded-lg bg-pink-500/20 text-pink-300 font-mono text-xs font-bold border border-pink-500/30">
                    {passGenerated.passId}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs mb-6">
                  <div>
                    <span className="text-gray-400 block text-[10px] uppercase">Attendee Name</span>
                    <span className="font-bold text-white text-sm">{passGenerated.name}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 block text-[10px] uppercase">Category</span>
                    <span className="font-bold text-cyan-400">{passGenerated.passType}</span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-gray-400 block text-[10px] uppercase">Institution</span>
                    <span className="font-medium text-gray-200">{passGenerated.college}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/15 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[10px] text-emerald-400 font-semibold">
                    <ShieldCheck className="w-4 h-4" /> Verified College Pass
                  </div>
                  {/* Dynamic QR canvas placeholder */}
                  <div className="w-14 h-14 bg-white p-1 rounded-lg flex items-center justify-center">
                    <div className="w-full h-full bg-black flex flex-wrap gap-1 p-1">
                      <div className="w-3.5 h-3.5 bg-white"></div>
                      <div className="w-2.5 h-2.5 bg-white"></div>
                      <div className="w-2.5 h-2.5 bg-white"></div>
                      <div className="w-3.5 h-3.5 bg-white"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 justify-center">
                <button
                  onClick={() => alert("Pass screenshot saved to downloads!")}
                  className="px-5 py-2.5 rounded-xl bg-purple-600 text-white font-semibold text-xs flex items-center gap-2 hover:bg-purple-700"
                >
                  <Download className="w-4 h-4" /> Download Ticket Pass
                </button>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-xl bg-white/10 text-white font-semibold text-xs hover:bg-white/20"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
