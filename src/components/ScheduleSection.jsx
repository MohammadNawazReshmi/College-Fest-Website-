import { Calendar, Clock, MapPin } from 'lucide-react';
import { SCHEDULE_TIMELINE } from '../data/hacknovaData';

export default function ScheduleSection() {
  return (
    <section id="schedule" className="py-20 w-full relative">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-extrabold uppercase tracking-wider mb-3">
            <Calendar className="w-3.5 h-3.5" /> August 15 Timeline
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4">
            DAY <span className="gradient-teal">TIMELINE SCHEDULE</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium">
            Join us for all technical matches, digital showcases, and cultural sessions from morning till evening awards.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="relative border-l-2 border-orange-200 ml-4 sm:ml-8 space-y-8">
          {SCHEDULE_TIMELINE.map((item, idx) => (
            <div key={idx} className="relative pl-8 sm:pl-10 group">
              
              {/* Timeline Pin */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 border-orange-600 bg-white group-hover:scale-125 transition-transform duration-200">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-600 m-auto absolute inset-0"></div>
              </div>

              {/* Event Card */}
              <div className="teal-glass-card p-5 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-orange-700 bg-orange-50 px-2.5 py-1 rounded-lg border border-orange-200 mb-2">
                    <Clock className="w-3 h-3" />
                    {item.time}
                  </span>
                  <h4 className="font-extrabold text-base sm:text-lg text-slate-900 mb-1 group-hover:text-orange-600 transition-colors">
                    {item.title}
                  </h4>
                  <span className="inline-flex items-center gap-1 text-xs text-slate-500">
                    <MapPin className="w-3.5 h-3.5 text-orange-600" />
                    {item.venue}
                  </span>
                </div>

                <span className="px-3.5 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 font-extrabold text-[10px] uppercase tracking-wider self-start sm:self-center">
                  {item.type}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
