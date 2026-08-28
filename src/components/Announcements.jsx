import { Bell } from 'lucide-react';
import { ANNOUNCEMENTS } from '../data/hacknovaData';

export default function Announcements() {
  return (
    <div className="bg-orange-950 border-y border-orange-900 text-white py-3 overflow-hidden backdrop-blur-md">
      <div className="flex items-center gap-4 max-w-7xl mx-auto px-4">
        {/* Left Badge */}
        <div className="shrink-0 flex items-center gap-2 px-3 py-1 rounded-xl bg-orange-900 border border-orange-800 text-orange-200 text-xs font-extrabold uppercase tracking-wider">
          <Bell className="w-3.5 h-3.5 animate-bounce text-amber-400" />
          Live Announcements
        </div>

        {/* Marquee Track */}
        <div className="overflow-hidden relative w-full">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-12 text-xs sm:text-sm text-orange-100 font-semibold">
            {ANNOUNCEMENTS.concat(ANNOUNCEMENTS).map((item, idx) => (
              <span key={idx} className="inline-flex items-center gap-2">
                {item}
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
