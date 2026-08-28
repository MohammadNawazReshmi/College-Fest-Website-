import { Flag, ArrowUp, Heart } from 'lucide-react';
import { CODECHAKRA_DETAILS } from '../data/hacknovaData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 pt-14 pb-10 w-full relative z-10">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-600 flex items-center justify-center text-white shadow-md shadow-orange-600/20">
              <Flag className="w-5 h-5" />
            </div>
            <div>
              <span className="font-extrabold text-xl text-white tracking-tight">{CODECHAKRA_DETAILS.title}</span>
              <p className="text-xs text-orange-400 font-semibold">{CODECHAKRA_DETAILS.subtitle}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-bold uppercase tracking-wider">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#events" className="hover:text-white transition-colors">Events</a>
            <a href="#register" className="hover:text-white transition-colors">Register</a>
            <a href="#vouchers" className="hover:text-white transition-colors">Vouchers</a>
            <a href="#schedule" className="hover:text-white transition-colors">Timeline</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-slate-800 text-white hover:bg-orange-600 hover:text-white transition-all shadow-md flex items-center gap-2 text-xs font-bold"
            aria-label="Scroll to top"
          >
            Back to Top
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Legal & Credits */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-semibold">
          <p>© {new Date().getFullYear()} KLE Society Degree College Gangavathi. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-3.5 h-3.5 text-rose-500 fill-current" /> by BCA Department Students
          </p>
        </div>

      </div>
    </footer>
  );
}
