import { Music, Calendar, Clock, Sparkles } from 'lucide-react';
import { PRONITE_STAR_ARTISTS } from '../data/festData';

export default function ProniteSection() {
  return (
    <section id="pronite" className="py-24 relative z-10 bg-gradient-to-b from-transparent via-purple-950/20 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Music className="w-3.5 h-3.5" /> Star Pronites & Celebrities
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            LIVE IN CONCERT: <span className="gradient-text-accent">CELEBRITY HEADLINERS</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            Experience massive concert production, laser lights, world-class acoustic stages, and unforgettable live performances.
          </p>
        </div>

        {/* Performer Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PRONITE_STAR_ARTISTS.map((artist) => (
            <div
              key={artist.id}
              className="glass-panel glass-panel-interactive rounded-3xl overflow-hidden border-white/10 group flex flex-col justify-between"
            >
              {/* Image Banner */}
              <div className="relative h-72 sm:h-80 overflow-hidden">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080914] via-[#080914]/40 to-transparent"></div>

                {/* Badge Top Left */}
                <div className="absolute top-4 left-4 bg-pink-600 text-white font-extrabold text-xs px-3.5 py-1.5 rounded-full shadow-lg border border-pink-400/40">
                  {artist.badge}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 relative -mt-12 z-10 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4">
                  <div>
                    <h3 className="text-3xl font-extrabold text-white group-hover:text-cyan-400 transition-colors">
                      {artist.name}
                    </h3>
                    <p className="text-sm font-semibold text-pink-400">{artist.genre}</p>
                  </div>

                  <div className="flex flex-col text-right text-xs text-gray-300">
                    <span className="flex items-center gap-1 font-bold text-white">
                      <Calendar className="w-3.5 h-3.5 text-purple-400" />
                      {artist.day}
                    </span>
                    <span className="flex items-center gap-1 text-gray-400 mt-0.5">
                      <Clock className="w-3.5 h-3.5 text-cyan-400" />
                      {artist.time}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-gray-300 leading-relaxed">{artist.description}</p>

                <div className="pt-2 flex items-center justify-between text-xs text-gray-400">
                  <span className="flex items-center gap-1.5 text-cyan-400 font-semibold">
                    <Sparkles className="w-4 h-4" /> Entry Included with All Fest Passes
                  </span>
                  <span className="text-gray-400 font-medium">Main Outdoor Grounds</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
