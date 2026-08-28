import { useState, useEffect } from 'react';
import { Calendar, MapPin, Sparkles, ArrowRight, Zap, Trophy, Users, Globe, ChevronLeft, ChevronRight, Award } from 'lucide-react';
import { CODECHAKRA_DETAILS, HERO_CAROUSEL_IMAGES, EVENTS_DATA } from '../data/hacknovaData';

export default function Hero({ onRegisterClick, onExploreEvents }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [carouselIndex, setCarouselIndex] = useState(0);

  useEffect(() => {
    const targetDate = new Date(CODECHAKRA_DETAILS.countdownTarget).getTime();
    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateTimer();
    const timerInterval = setInterval(updateTimer, 1000);
    return () => clearInterval(timerInterval);
  }, []);

  // Carousel Auto-play
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % HERO_CAROUSEL_IMAGES.length);
    }, 4500);
    return () => clearInterval(slideTimer);
  }, []);

  const prevSlide = () => {
    setCarouselIndex((prev) => (prev === 0 ? HERO_CAROUSEL_IMAGES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCarouselIndex((prev) => (prev + 1) % HERO_CAROUSEL_IMAGES.length);
  };

  return (
    <section id="home" className="relative pt-28 pb-16 w-full overflow-hidden">
      {/* Hero Background Graphic Overlay */}
      <div className="absolute inset-0 z-0 opacity-55">
        <img src="/hero_cyber_bg.jpg" alt="Cyber background graphic" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/20 via-transparent to-slate-50/40"></div>
      </div>
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-orange-200/25 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Pill */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100/90 border border-orange-300/80 backdrop-blur-md shadow-sm">
            <span className="w-2 h-2 rounded-full bg-orange-600 animate-ping"></span>
            <span className="text-xs sm:text-sm font-extrabold text-orange-900 tracking-wide">
              {CODECHAKRA_DETAILS.subtitle} • {CODECHAKRA_DETAILS.themeTag}
            </span>
          </div>
        </div>

        {/* Main Title & Description */}
        <div className="text-center w-full max-w-4xl mx-auto mb-10">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-4">
            <span className="gradient-independence">{CODECHAKRA_DETAILS.title}</span>
          </h1>
          <p className="text-base sm:text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
            Independence Day BCA Department Tech & Cultural Fest. Showcase innovation, algorithms, and talent on August 15th!
          </p>

          {/* Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6 text-xs sm:text-sm font-bold text-slate-700">
            <div className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-orange-200 shadow-sm">
              <Calendar className="w-4 h-4 text-orange-600" />
              <span>{CODECHAKRA_DETAILS.dates}</span>
            </div>
            <div className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-orange-200 shadow-sm">
              <MapPin className="w-4 h-4 text-orange-600" />
              <span>{CODECHAKRA_DETAILS.venue}</span>
            </div>
          </div>
        </div>

        {/* Hero Photo Carousel */}
        <div className="mb-12 w-full max-w-5xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white h-72 sm:h-[420px] group image-shine glow-teal-shadow cursor-pointer">
            <img
              src={HERO_CAROUSEL_IMAGES[carouselIndex].src}
              alt={HERO_CAROUSEL_IMAGES[carouselIndex].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent"></div>

            {/* Slide Details */}
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="px-3 py-1 rounded-full bg-orange-600 text-white text-[10px] font-extrabold uppercase tracking-widest backdrop-blur-md mb-2 inline-block shadow-md">
                Fest Highlight
              </span>
              <h3 className="text-xl sm:text-3xl font-extrabold">{HERO_CAROUSEL_IMAGES[carouselIndex].title}</h3>
              <p className="text-xs sm:text-sm text-orange-200 font-medium">{HERO_CAROUSEL_IMAGES[carouselIndex].sub}</p>
            </div>

            {/* Carousel Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md text-slate-800 flex items-center justify-center hover:bg-white transition-all shadow-lg"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md text-slate-800 flex items-center justify-center hover:bg-white transition-all shadow-lg"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-4 right-6 flex items-center gap-1.5">
              {HERO_CAROUSEL_IMAGES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCarouselIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    carouselIndex === idx ? 'w-6 bg-orange-400' : 'w-2 bg-white/50'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="mb-12 w-full max-w-3xl mx-auto">
          <div className="text-center text-xs uppercase tracking-widest text-orange-800 font-extrabold mb-3">
            🇮🇳 Event Kickoff Countdown
          </div>
          <div className="grid grid-cols-4 gap-2 sm:gap-4">
            {[
              { label: 'Days', val: timeLeft.days },
              { label: 'Hours', val: timeLeft.hours },
              { label: 'Minutes', val: timeLeft.minutes },
              { label: 'Seconds', val: timeLeft.seconds },
            ].map((item, idx) => (
              <div
                key={idx}
                className="teal-glass-card p-3 sm:p-5 rounded-2xl border-orange-200 flex flex-col items-center justify-center shadow-md bg-white"
              >
                <span className="text-2xl sm:text-4xl font-black text-orange-900 font-mono">
                  {String(item.val).padStart(2, '0')}
                </span>
                <span className="text-[9px] sm:text-xs text-orange-700 font-bold uppercase tracking-wider mt-1">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Primary CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 w-full max-w-xl mx-auto">
          <button
            onClick={onRegisterClick}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl text-base font-extrabold text-white bg-gradient-to-r from-orange-500 via-pink-600 to-rose-500 hover:from-orange-600 hover:to-rose-600 shadow-xl shadow-orange-600/30 flex items-center justify-center gap-3 transition-transform hover:scale-105"
          >
            <Zap className="w-5 h-5" />
            Register Now for CODECHAKRA
          </button>
          <button
            onClick={onExploreEvents}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl text-base font-bold text-slate-800 bg-white border border-orange-200 hover:bg-orange-50 hover:border-orange-300 flex items-center justify-center gap-2 shadow-sm transition-all"
          >
            Explore All Events
            <ArrowRight className="w-5 h-5 text-orange-600" />
          </button>
        </div>

        {/* Key Stats Counter Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-5xl mx-auto mb-16 pt-8 border-t border-orange-200/80">
          <div className="teal-glass-card p-4 rounded-2xl text-center bg-white">
            <div className="flex justify-center mb-1">
              <Users className="w-5 h-5 text-orange-600" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-slate-900">{CODECHAKRA_DETAILS.expectedParticipants}</div>
            <div className="text-xs text-slate-500 font-semibold">Participants Expected</div>
          </div>
          <div className="teal-glass-card p-4 rounded-2xl text-center bg-white">
            <div className="flex justify-center mb-1">
              <Award className="w-5 h-5 text-orange-600" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-slate-900">{CODECHAKRA_DETAILS.totalEvents}+</div>
            <div className="text-xs text-slate-500 font-semibold">Tech & Non-Tech Events</div>
          </div>
          <div className="teal-glass-card p-4 rounded-2xl text-center bg-white">
            <div className="flex justify-center mb-1">
              <Trophy className="w-5 h-5 text-amber-500" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-slate-900">{CODECHAKRA_DETAILS.totalPrize}</div>
            <div className="text-xs text-slate-500 font-semibold">Total Prize Pool</div>
          </div>
          <div className="teal-glass-card p-4 rounded-2xl text-center bg-white">
            <div className="flex justify-center mb-1">
              <Sparkles className="w-5 h-5 text-rose-600" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-slate-900">{CODECHAKRA_DETAILS.participatingColleges}</div>
            <div className="text-xs text-slate-500 font-semibold">Colleges Participating</div>
          </div>
        </div>

        {/* Events Preview Section */}
        <div className="mb-16 w-full max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-orange-700">Quick Preview</span>
              <h3 className="text-2xl font-black text-slate-900">Featured Highlight Events</h3>
            </div>
            <a
              href="#events"
              className="text-xs font-bold text-orange-600 hover:text-orange-800 flex items-center gap-1"
            >
              View All 12 Events →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EVENTS_DATA.slice(0, 3).map((event) => (
              <div
                key={event.id}
                className="teal-glass-card teal-glass-card-interactive p-6 rounded-2xl flex flex-col justify-between bg-white"
              >
                <div>
                  <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-orange-100 text-orange-800 mb-3 inline-block">
                    {event.category}
                  </span>
                  <h4 className="font-extrabold text-lg text-slate-900 mb-1">{event.title}</h4>
                  <p className="text-xs text-slate-500 mb-4">{event.tagline}</p>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <span className="font-bold text-xs text-amber-600">{event.prize} Prize</span>
                  <button
                    onClick={onRegisterClick}
                    className="text-xs font-bold text-orange-600 hover:underline"
                  >
                    Register →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Motivational Quote Box */}
        <div className="teal-glass-card p-8 rounded-3xl border-orange-300 text-center w-full max-w-4xl mx-auto mb-16 relative overflow-hidden bg-gradient-to-r from-orange-50 via-white to-orange-50 shadow-md">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-600 text-white text-[10px] font-extrabold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Inspiring Innovation
          </div>
          <blockquote className="text-base sm:text-xl font-bold text-slate-800 italic max-w-2xl mx-auto mb-4 leading-relaxed">
            "{CODECHAKRA_DETAILS.motivationalQuote}"
          </blockquote>
          <div className="text-xs font-bold text-orange-800 uppercase tracking-wider">
            — Department of Computer Applications (BCA), KLE Gangavathi
          </div>
        </div>

        {/* Follow Us Social Section */}
        <div className="text-center pt-8 border-t border-orange-200/80 w-full max-w-4xl mx-auto">
          <span className="text-xs font-extrabold uppercase tracking-widest text-slate-500 block mb-4">
            Follow CODECHAKRA 2026 On Social Media
          </span>
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-xl bg-white border border-orange-200 text-slate-700 hover:text-pink-600 hover:border-pink-300 text-xs font-bold flex items-center gap-2 shadow-sm transition-all"
            >
              <svg className="w-4 h-4 text-pink-500 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg> Instagram
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-xl bg-white border border-orange-200 text-slate-700 hover:text-blue-600 hover:border-blue-300 text-xs font-bold flex items-center gap-2 shadow-sm transition-all"
            >
              <svg className="w-4 h-4 text-blue-600 fill-current" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/></svg> Facebook
            </a>
            <a
              href="https://klesociety.org"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-xl bg-white border border-orange-200 text-slate-700 hover:text-orange-700 hover:border-orange-400 text-xs font-bold flex items-center gap-2 shadow-sm transition-all"
            >
              <Globe className="w-4 h-4 text-orange-600" /> College Website
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
