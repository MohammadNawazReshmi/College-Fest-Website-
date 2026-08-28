import { useState } from 'react';
import { Award, Trophy, Users, MapPin, Clock, ShieldCheck, ArrowRight, X } from 'lucide-react';
import { EVENTS_DATA } from '../data/hacknovaData';

export default function EventsSection({ onRegisterEvent }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [rulesModalEvent, setRulesModalEvent] = useState(null);

  const categories = ['All', 'Technical', 'Non-Technical'];

  const filteredEvents = EVENTS_DATA.filter(
    (e) => activeCategory === 'All' || e.category === activeCategory
  );

  return (
    <section id="events" className="py-20 w-full relative">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-extrabold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" /> Competition Arenas
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4">
            CODECHAKRA <span className="gradient-teal">EVENTS & RALLIES</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium">
            Explore 12+ technical and non-technical competitions. Win trophies, cash rewards, and official certificates.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all ${
                activeCategory === cat
                  ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/20 scale-105'
                  : 'bg-white border border-orange-200 text-slate-700 hover:bg-orange-50'
              }`}
            >
              {cat} Events
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="teal-glass-card teal-glass-card-interactive rounded-3xl p-6 flex flex-col justify-between group relative overflow-hidden bg-white"
            >
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-orange-100 text-orange-800 border border-orange-200">
                    {event.category}
                  </span>
                  <span className="text-xs font-black text-amber-600 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200 flex items-center gap-1">
                    <Trophy className="w-3.5 h-3.5" />
                    {event.prize}
                  </span>
                </div>

                {/* Event Name */}
                <h3 className="text-xl font-extrabold text-slate-900 mb-1 group-hover:text-orange-600 transition-colors">
                  {event.title}
                </h3>
                <p className="text-xs text-orange-700 font-bold mb-3 italic">"{event.tagline}"</p>
                <p className="text-xs text-slate-600 line-clamp-3 mb-5 leading-relaxed">
                  {event.description}
                </p>
              </div>

              <div>
                {/* Meta details */}
                <div className="space-y-2 text-xs text-slate-500 py-3 border-t border-slate-100 mb-5">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 font-medium"><Users className="w-3.5 h-3.5 text-orange-600" /> {event.teamSize}</span>
                    <span className="flex items-center gap-1.5 font-medium"><Clock className="w-3.5 h-3.5 text-orange-600" /> {event.time}</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium text-slate-700">
                    <MapPin className="w-3.5 h-3.5 text-orange-600" /> {event.venue}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setRulesModalEvent(event)}
                    className="py-2.5 px-3 rounded-xl border border-orange-200 text-slate-700 text-xs font-bold hover:bg-orange-50 transition-colors flex items-center justify-center gap-1"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-orange-600" /> Rules
                  </button>
                  <button
                    onClick={() => onRegisterEvent(event.id)}
                    className="py-2.5 px-3 rounded-xl bg-gradient-to-r from-orange-500 to-pink-600 text-white text-xs font-bold hover:from-orange-600 hover:to-pink-700 shadow-md flex items-center justify-center gap-1 transition-transform hover:scale-105"
                  >
                    Register <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Rules Modal */}
      {rulesModalEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white max-w-lg w-full rounded-3xl p-6 shadow-2xl relative border border-orange-200">
            <button
              onClick={() => setRulesModalEvent(null)}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-[10px] font-extrabold uppercase text-orange-700 tracking-wider block mb-1">
              Event Guidelines
            </span>
            <h3 className="text-2xl font-black text-slate-900 mb-2">{rulesModalEvent.title}</h3>
            <p className="text-xs text-amber-600 font-bold mb-4">Prize Pool: {rulesModalEvent.prize} • Entry Fee: {rulesModalEvent.fee}</p>

            <div className="space-y-3 text-xs text-slate-700 mb-6">
              <h4 className="font-extrabold text-slate-900 text-sm">Rules & Instructions:</h4>
              <ul className="space-y-2">
                {rulesModalEvent.rules.map((rule, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-600 mt-1.5 shrink-0"></span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>

              <div className="p-3 rounded-xl bg-orange-50 border border-orange-200 text-orange-950 font-medium mt-4">
                <strong>Event Staff Contact:</strong> {rulesModalEvent.coordinator}
              </div>
            </div>

            <button
              onClick={() => {
                const id = rulesModalEvent.id;
                setRulesModalEvent(null);
                onRegisterEvent(id);
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-orange-500 to-pink-600 text-white font-bold text-sm shadow-md"
            >
              Proceed to Register for {rulesModalEvent.title}
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
