import { SPONSORS } from '../data/festData';

export default function SponsorsSection() {
  return (
    <section className="py-20 border-t border-white/10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h3 className="text-xs uppercase tracking-widest text-gray-400 font-extrabold mb-8">
          POWERED BY OUR INDUSTRY SPONSORS & PARTNERS
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {SPONSORS.map((sp, idx) => (
            <div
              key={idx}
              className="glass-panel p-4 rounded-2xl border-white/10 hover:border-purple-500/30 transition-all flex flex-col items-center justify-center group"
            >
              <span className="font-extrabold text-white text-base tracking-wider group-hover:text-cyan-400 transition-colors">
                {sp.logoText}
              </span>
              <span className="text-[10px] text-gray-400 font-medium uppercase mt-1">
                {sp.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
