import { useState } from 'react';
import { PhoneCall, HelpCircle, MapPin, ChevronDown } from 'lucide-react';
import { ORGANIZING_COMMITTEE, FAQS } from '../data/hacknovaData';

export default function ContactSection() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  return (
    <section id="contact" className="py-20 w-full relative">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Organizing Committee Contacts */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-extrabold uppercase tracking-wider mb-3">
                <PhoneCall className="w-3.5 h-3.5" /> Support Committee
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-2">
                ORGANIZING <span className="gradient-teal">COMMITTEE</span>
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm font-medium">
                Reach out to our student/faculty coordinators for enquiries regarding event sponsorships, college registration, or accommodation help.
              </p>
            </div>

            <div className="space-y-3.5">
              {ORGANIZING_COMMITTEE.map((member, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div>
                    <h4 className="font-extrabold text-sm text-slate-900">{member.name}</h4>
                    <p className="text-xs text-orange-700 font-bold">{member.role}</p>
                  </div>
                  <a
                    href={`tel:${member.phone.replace(/\s+/g, '')}`}
                    className="self-start sm:self-center px-4 py-2 rounded-xl bg-orange-50 border border-orange-200 text-orange-950 font-mono text-xs font-bold hover:bg-orange-100 transition-colors flex items-center gap-1.5"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-orange-600" />
                    {member.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-extrabold uppercase tracking-wider mb-3">
                <HelpCircle className="w-3.5 h-3.5" /> General Queries
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-2">
                FREQUENTLY ASKED <span className="gradient-teal">QUESTIONS</span>
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm font-medium">
                Got questions about registration steps, event criteria, or travel? We've got you covered.
              </p>
            </div>

            <div className="space-y-3">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="teal-glass-card rounded-2xl overflow-hidden border-orange-200 bg-white shadow-sm"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 font-extrabold text-slate-900 text-sm focus:outline-none"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-orange-600 shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Maps Section */}
        <div className="mt-16 rounded-3xl overflow-hidden shadow-xl border border-orange-200 bg-white p-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">
            <div>
              <h4 className="font-extrabold text-slate-900 text-base">KLE Society's Degree College Campus Location</h4>
              <span className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                <MapPin className="w-3.5 h-3.5 text-orange-600" /> Station Road, Gangavathi, Karnataka 583227
              </span>
            </div>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-xl bg-orange-50 border border-orange-200 text-orange-950 text-xs font-bold hover:bg-orange-100 flex items-center gap-1.5"
            >
              Get Directions
            </a>
          </div>

          {/* Interactive Google Map Mock Card */}
          <div className="relative rounded-2xl overflow-hidden bg-orange-50 border border-orange-100 h-64 flex flex-col items-center justify-center text-center p-6">
            <MapPin className="w-12 h-12 text-orange-600 animate-bounce mb-3" />
            <h5 className="font-extrabold text-sm text-orange-950">KLE Society's BCA Department</h5>
            <p className="text-xs text-orange-900 max-w-sm mt-1">
              Conveniently located near Gangavathi Station Road. Direct buses available from Koppal, Hosapete, and Hubli.
            </p>
            <div className="absolute inset-0 bg-[radial-gradient(#fed7aa_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none"></div>
          </div>
        </div>

      </div>
    </section>
  );
}
