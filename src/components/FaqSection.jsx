import { useState } from 'react';
import { ChevronDown, HelpCircle, MapPin, Navigation, Phone, Mail } from 'lucide-react';
import { FAQS, FEST_DETAILS } from '../data/festData';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* FAQ Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-2">
              <HelpCircle className="w-3.5 h-3.5" /> Help & Info
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              FREQUENTLY ASKED <span className="gradient-text-primary">QUESTIONS</span>
            </h2>

            <div className="space-y-4 pt-4">
              {FAQS.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={idx}
                    className="glass-panel rounded-2xl overflow-hidden border-white/10 transition-colors"
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                      className="w-full p-5 text-left font-bold text-white text-base flex items-center justify-between gap-4"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-purple-400 shrink-0 transition-transform ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-sm text-gray-300 border-t border-white/5 pt-3 leading-relaxed">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Venue & Location Map Card */}
          <div id="venue" className="lg:col-span-5">
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border-white/10 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5" /> Campus Location
              </div>

              <h3 className="text-2xl font-extrabold text-white">Festival Venue & Map</h3>
              <p className="text-xs text-gray-300">{FEST_DETAILS.venue}</p>

              {/* Map Visual Card */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 h-48 bg-gradient-to-br from-purple-950/60 to-cyan-950/60 flex items-center justify-center p-6 text-center">
                <div className="space-y-2 z-10">
                  <Navigation className="w-8 h-8 text-cyan-400 mx-auto animate-bounce" />
                  <div className="font-bold text-white text-sm">St. Xavier Institute Campus</div>
                  <div className="text-[10px] text-gray-400">Gate #2 Student Festival Arena, Tech Park</div>
                </div>
              </div>

              <div className="space-y-3 pt-2 text-xs text-gray-300">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                  <Phone className="w-4 h-4 text-purple-400" />
                  <div>
                    <strong className="text-white block">Helpline & Registration Desk</strong>
                    <span>+91 (022) 2890-1234 / +91 98765 43210</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                  <Mail className="w-4 h-4 text-pink-400" />
                  <div>
                    <strong className="text-white block">Official Email</strong>
                    <span>pulse2026@stxavier.edu</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
