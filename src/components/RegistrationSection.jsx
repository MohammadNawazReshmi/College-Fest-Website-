import { useState, useEffect } from 'react';
import { Ticket, CheckCircle2, User, Mail, Phone, Building, GraduationCap, Download, Check, Loader2 } from 'lucide-react';
import { EVENTS_DATA } from '../data/hacknovaData';

export default function RegistrationSection({ initialSelectedEventId }) {
  const [formData, setFormData] = useState({
    fullName: '',
    college: '',
    department: 'BCA',
    year: '3rd Year',
    phone: '',
    email: '',
    selectedEventIds: ['codestorm'],
  });

  const [errors, setErrors] = useState({});
  const [submittedTicket, setSubmittedTicket] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState(null);

  useEffect(() => {
    if (initialSelectedEventId) {
      setFormData((prev) => {
        if (!prev.selectedEventIds.includes(initialSelectedEventId)) {
          return { ...prev, selectedEventIds: [...prev.selectedEventIds, initialSelectedEventId] };
        }
        return prev;
      });
    }
  }, [initialSelectedEventId]);

  const toggleEventSelection = (eventId) => {
    if (formData.selectedEventIds.includes(eventId)) {
      if (formData.selectedEventIds.length === 1) return; // keep at least 1
      setFormData({
        ...formData,
        selectedEventIds: formData.selectedEventIds.filter((id) => id !== eventId),
      });
    } else {
      setFormData({
        ...formData,
        selectedEventIds: [...formData.selectedEventIds, eventId],
      });
    }
  };

  const validateForm = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.college.trim()) errs.college = 'College name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid email is required';
    if (!formData.phone.trim() || formData.phone.length < 10) errs.phone = 'Valid phone number is required';
    if (formData.selectedEventIds.length === 0) errs.events = 'Select at least one event';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    setApiError(null);

    const selectedEventNames = EVENTS_DATA
      .filter((e) => formData.selectedEventIds.includes(e.id))
      .map((e) => e.title);

    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await fetch(`${API_URL}/api/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          college: formData.college,
          department: formData.department,
          year: formData.year,
          phone: formData.phone,
          email: formData.email,
          selectedEvents: selectedEventNames,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Something went wrong. Please try again.');
      }

      setSubmittedTicket(result.ticket);
    } catch (err) {
      console.error('Registration API Error:', err);
      setApiError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownloadTicket = () => {
    window.print();
  };


  return (
    <section id="register" className="py-20 w-full relative">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-extrabold uppercase tracking-wider mb-3">
            <Ticket className="w-3.5 h-3.5" /> Online Delegate Registration
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-2">
            CODECHAKRA <span className="gradient-teal">DELEGATE REGISTRATION</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium">
            Fill out the official registration form to participate in events and receive instant free vouchers & entry ticket.
          </p>
        </div>

        {!submittedTicket ? (
          <div className="teal-glass-card rounded-3xl p-6 sm:p-10 border-orange-200 shadow-xl bg-white">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Personal Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-extrabold text-slate-700 uppercase mb-1">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm focus:outline-none ${
                        errors.fullName ? 'border-red-400 bg-red-50' : 'border-slate-200 focus:border-orange-600'
                      }`}
                    />
                  </div>
                  {errors.fullName && <p className="text-[10px] text-red-500 mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-slate-700 uppercase mb-1">
                    College / Institution *
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="e.g. KLE BCA College Gangavathi"
                      value={formData.college}
                      onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm focus:outline-none ${
                        errors.college ? 'border-red-400 bg-red-50' : 'border-slate-200 focus:border-orange-600'
                      }`}
                    />
                  </div>
                  {errors.college && <p className="text-[10px] text-red-500 mt-1">{errors.college}</p>}
                </div>
              </div>

              {/* Department & Year */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-extrabold text-slate-700 uppercase mb-1">
                    Department *
                  </label>
                  <div className="relative">
                    <GraduationCap className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <select
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-orange-600 bg-white"
                    >
                      <option value="BCA">BCA (Computer Applications)</option>
                      <option value="BSc (CS)">B.Sc (Computer Science)</option>
                      <option value="BTech/BE">B.Tech / BE Engineering</option>
                      <option value="BCom (CS)">B.Com (Computers)</option>
                      <option value="Diploma CS">Diploma CS / IT</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-slate-700 uppercase mb-1">
                    Academic Year *
                  </label>
                  <select
                    value={formData.year}
                    onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-orange-600 bg-white"
                  >
                    <option value="1st Year">1st Year</option>
                    <option value="2nd Year">2nd Year</option>
                    <option value="3rd Year">3rd Year</option>
                    <option value="4th Year / PG">4th Year / Post Graduate</option>
                  </select>
                </div>
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-extrabold text-slate-700 uppercase mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      placeholder="student@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm focus:outline-none ${
                        errors.email ? 'border-red-400 bg-red-50' : 'border-slate-200 focus:border-orange-600'
                      }`}
                    />
                  </div>
                  {errors.email && <p className="text-[10px] text-red-500 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-slate-700 uppercase mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      placeholder="+91 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm focus:outline-none ${
                        errors.phone ? 'border-red-400 bg-red-50' : 'border-slate-200 focus:border-orange-600'
                      }`}
                    />
                  </div>
                  {errors.phone && <p className="text-[10px] text-red-500 mt-1">{errors.phone}</p>}
                </div>
              </div>

              {/* Event Selection (Multi-select) */}
              <div>
                <label className="block text-xs font-extrabold text-slate-700 uppercase mb-2">
                  Select Event(s) to Participate * (Single or Multiple)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {EVENTS_DATA.map((event) => {
                    const isSelected = formData.selectedEventIds.includes(event.id);
                    return (
                      <div
                        key={event.id}
                        onClick={() => toggleEventSelection(event.id)}
                        className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                          isSelected
                            ? 'bg-orange-50 border-orange-600 text-orange-950 shadow-sm'
                            : 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-700'
                        }`}
                      >
                        <div>
                          <div className="text-xs font-extrabold">{event.title}</div>
                          <div className="text-[10px] text-slate-500">{event.category} • {event.prize}</div>
                        </div>
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center border ${
                            isSelected ? 'bg-orange-600 border-orange-600 text-white' : 'border-slate-300'
                          }`}
                        >
                          {isSelected && <Check className="w-3.5 h-3.5" />}
                        </div>
                      </div>
                    );
                  })}
                </div>
                {errors.events && <p className="text-[10px] text-red-500 mt-1">{errors.events}</p>}
              </div>

              {apiError && (
                <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs font-semibold text-center">
                  ⚠️ {apiError}
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 rounded-2xl text-base font-extrabold text-white bg-gradient-to-r from-orange-500 via-pink-600 to-rose-500 hover:from-orange-600 hover:to-rose-600 shadow-xl shadow-orange-600/20 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" /> Persisting Registration...
                  </>
                ) : (
                  <>
                    <Ticket className="w-5 h-5" /> Submit Registration & Generate Ticket Pass
                  </>
                )}
              </button>

            </form>
          </div>
        ) : (
          /* Confirmation Success & Ticket Download Screen */
          <div className="teal-glass-card rounded-3xl p-8 border-orange-300 text-center space-y-6 bg-white shadow-2xl animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center mx-auto border border-orange-300">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <h3 className="text-3xl font-black text-slate-900">Registration Successful!</h3>
              <p className="text-xs text-slate-600 mt-1">
                Your entry pass for <strong className="text-orange-700">CODECHAKRA 2026</strong> has been generated.
              </p>
            </div>

            {/* Printable Digital Ticket */}
            <div id="printable-ticket" className="p-6 rounded-3xl bg-gradient-to-br from-orange-900 via-slate-900 to-pink-950 text-white text-left max-w-lg mx-auto shadow-2xl relative overflow-hidden border-2 border-orange-400/40">
              
              <div className="flex items-center justify-between border-b border-orange-700/50 pb-4 mb-4">
                <div>
                  <span className="text-[10px] font-extrabold uppercase text-orange-300 tracking-widest block">
                    KLE GANGAVATHI BCA DELEGATE
                  </span>
                  <span className="text-xl font-black">CODECHAKRA 2026</span>
                </div>
                <span className="px-3 py-1 rounded-lg bg-orange-500/20 font-mono text-xs font-bold text-orange-300 border border-orange-500/40">
                  {submittedTicket.ticketId}
                </span>
              </div>

              <div className="space-y-2 text-xs text-slate-200 mb-6">
                <div><strong className="text-white">Delegate Name:</strong> {submittedTicket.fullName}</div>
                <div><strong className="text-white">Institution:</strong> {submittedTicket.college}</div>
                <div><strong className="text-white">Department / Year:</strong> {submittedTicket.department} ({submittedTicket.year})</div>
                <div><strong className="text-white">Registered Events:</strong> {submittedTicket.events.join(', ')}</div>
                <div><strong className="text-white">Date:</strong> August 15, 2026 (Independence Day)</div>
              </div>

              {/* Dynamic QR Code Simulation */}
              <div className="pt-4 border-t border-orange-700/50 flex items-center justify-between">
                <div className="text-[10px] text-orange-200 font-medium">
                  Scan at Gate #1 Registration Desk
                </div>
                <div className="w-14 h-14 bg-white p-1 rounded-lg flex items-center justify-center shrink-0">
                  <div className="w-full h-full bg-black flex flex-wrap gap-1 p-1">
                    <div className="w-3.5 h-3.5 bg-white"></div>
                    <div className="w-2.5 h-2.5 bg-white"></div>
                    <div className="w-2.5 h-2.5 bg-white"></div>
                    <div className="w-3.5 h-3.5 bg-white"></div>
                  </div>
                </div>
              </div>

            </div>

            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <button
                onClick={handleDownloadTicket}
                className="px-6 py-3 rounded-xl bg-orange-600 text-white font-extrabold text-xs shadow-md flex items-center gap-2 hover:bg-orange-700"
              >
                <Download className="w-4 h-4" /> Download / Print Ticket (PDF)
              </button>
              <button
                onClick={() => setSubmittedTicket(null)}
                className="px-6 py-3 rounded-xl bg-slate-100 text-slate-700 font-bold text-xs hover:bg-slate-200"
              >
                Register Another Participant
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
