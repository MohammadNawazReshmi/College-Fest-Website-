import { useState, useEffect } from 'react';
import { Flag, Menu, X, Ticket, Calendar, Award, Gift, PhoneCall, Home, Info, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenRegister }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Section intersection detection for active link state
      const sections = ['home', 'about', 'events', 'register', 'vouchers', 'schedule', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home', icon: Home },
    { label: 'About', href: '#about', id: 'about', icon: Info },
    { label: 'Events', href: '#events', id: 'events', icon: Award },
    { label: 'Register', href: '#register', id: 'register', icon: Ticket },
    { label: 'Vouchers', href: '#vouchers', id: 'vouchers', icon: Gift },
    { label: 'Schedule', href: '#schedule', id: 'schedule', icon: Calendar },
    { label: 'Contact', href: '#contact', id: 'contact', icon: PhoneCall },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-orange-200/80 shadow-md py-2.5'
          : 'bg-white/90 backdrop-blur-sm py-3.5 border-b border-orange-100'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo with Interactive Hover */}
        <a href="#home" className="flex items-center gap-2.5 shrink-0 group">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-orange-500 via-pink-500 to-rose-400 p-[2px] shadow-md group-hover:scale-110 group-hover:shadow-orange-500/30 transition-all duration-300">
            <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
              <Flag className="w-5 h-5 text-orange-600 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-base sm:text-xl tracking-tight text-slate-900 flex items-center gap-1.5 leading-none group-hover:text-orange-700 transition-colors">
              CODECHAKRA <span className="text-[10px] sm:text-xs px-2 py-0.5 rounded-full bg-orange-100 text-orange-800 font-bold border border-orange-200 group-hover:bg-orange-600 group-hover:text-white transition-colors">2026</span>
            </span>
            <span className="text-[9px] sm:text-[10px] text-orange-700 font-bold tracking-wider uppercase mt-0.5">
              KLE BCA • Gangavathi
            </span>
          </div>
        </a>

        {/* Desktop Nav Links with Pill Hover & Active State */}
        <div className="hidden lg:flex items-center gap-1.5 bg-slate-100/90 p-1.5 rounded-full border border-orange-200/60 shadow-inner">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.label}
                href={link.href}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all duration-200 group relative ${
                  isActive
                    ? 'bg-orange-600 text-white shadow-md shadow-orange-600/30 scale-105'
                    : 'text-slate-700 hover:bg-white hover:text-orange-700 hover:shadow-sm border border-transparent hover:border-orange-200'
                }`}
              >
                <Icon
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    isActive
                      ? 'text-white'
                      : 'text-orange-600 group-hover:scale-110 group-hover:-translate-y-0.5'
                  }`}
                />
                <span>{link.label}</span>
              </a>
            );
          })}
        </div>

        {/* Action CTA with Glow & Hover Pulse */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenRegister}
            className="px-5 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider text-white bg-gradient-to-r from-orange-500 via-pink-600 to-rose-500 hover:from-orange-600 hover:to-rose-600 shadow-md shadow-orange-600/20 hover:shadow-lg hover:shadow-orange-600/40 flex items-center gap-2 transition-all duration-300 hover:scale-105 group"
          >
            <Sparkles className="w-4 h-4 text-amber-300 group-hover:rotate-45 transition-transform duration-300" />
            Register Now
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-orange-600 bg-orange-50 border border-orange-200 hover:bg-orange-100 transition-colors"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-orange-100 px-6 py-5 mt-2 space-y-3 shadow-xl animate-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-2.5 font-bold text-sm p-2.5 rounded-xl transition-all ${
                    isActive
                      ? 'bg-orange-600 text-white shadow-sm'
                      : 'text-slate-700 hover:text-orange-700 hover:bg-orange-50'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-orange-600'}`} />
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRegister();
              }}
              className="w-full py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-orange-500 via-pink-600 to-rose-500 hover:from-orange-600 hover:to-rose-600 flex items-center justify-center gap-2 shadow-md hover:scale-[1.02] transition-transform"
            >
              <Ticket className="w-4 h-4" />
              Register Now for CODECHAKRA
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
