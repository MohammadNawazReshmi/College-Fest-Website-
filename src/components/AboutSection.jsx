import { Info, Flag, Award, BookOpen } from 'lucide-react';
import { CODECHAKRA_DETAILS } from '../data/hacknovaData';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 w-full relative bg-gradient-to-b from-transparent via-orange-50/30 to-transparent">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Supporting Imagery */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white h-[420px] image-shine glow-teal-shadow cursor-pointer">
              <img
                src="/mascot.jpg"
                alt="CODECHAKRA 2026 Brand Mascot"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-950/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="px-3 py-1 rounded-full bg-orange-600 text-white text-[10px] font-extrabold uppercase tracking-wider mb-1 inline-block">
                  Official Brand Mascot
                </span>
                <h4 className="text-xl font-bold">Cybernetic Student Ambassador</h4>
                <p className="text-xs text-orange-200">Department of BCA • KLE Gangavathi</p>
              </div>
            </div>

            {/* Overlapping Badge */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 teal-glass-card p-4 rounded-2xl border-orange-300 shadow-xl max-w-xs bg-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-700 shrink-0">
                  <Flag className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Independence Day 2026</div>
                  <div className="text-[10px] text-slate-500">Celebrating 79 Years of Swatantrata</div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-extrabold uppercase tracking-wider">
              <Info className="w-3.5 h-3.5" /> About The Fest
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              WELCOME TO <span className="gradient-teal">{CODECHAKRA_DETAILS.title}</span>
            </h2>

            <p className="text-slate-600 text-base leading-relaxed font-medium">
              Organized by the **Department of Computer Applications (BCA)** at **KLE Society's Degree College, Gangavathi**, CODECHAKRA 2026 is an annual inter-collegiate technical and cultural extravaganza held on **August 15th (Independence Day)**.
            </p>

            <p className="text-slate-600 text-sm leading-relaxed">
              The fest serves as an empowering platform for young tech enthusiasts, programmers, designers, and performers to demonstrate their skills, collaborate on real-world challenges, and celebrate the spirit of Indian innovation and freedom.
            </p>

            {/* Key Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-orange-100 shadow-sm flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-700 flex items-center justify-center shrink-0">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-slate-900">Technical Rigor</h4>
                  <p className="text-xs text-slate-500">Coding battles, web design, and AI paper presentations.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-orange-100 shadow-sm flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-pink-100 text-pink-700 flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-slate-900">Patriotic Spirit</h4>
                  <p className="text-xs text-slate-500">Independence Day theme competitions & digital art showcase.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
