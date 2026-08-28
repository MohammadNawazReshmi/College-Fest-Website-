import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Announcements from './components/Announcements';
import AboutSection from './components/AboutSection';
import EventsSection from './components/EventsSection';
import RegistrationSection from './components/RegistrationSection';
import VouchersSection from './components/VouchersSection';
import ScheduleSection from './components/ScheduleSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [selectedEventIdForRegister, setSelectedEventIdForRegister] = useState(null);

  const handleRegisterClick = () => {
    const regEl = document.getElementById('register');
    if (regEl) {
      regEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRegisterForEvent = (eventId) => {
    setSelectedEventIdForRegister(eventId);
    handleRegisterClick();
  };

  const handleExploreEvents = () => {
    const eventsEl = document.getElementById('events');
    if (eventsEl) {
      eventsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-orange-500 selection:text-white">
      {/* Navbar */}
      <Navbar onOpenRegister={handleRegisterClick} />

      {/* Hero Header */}
      <Hero
        onRegisterClick={handleRegisterClick}
        onExploreEvents={handleExploreEvents}
      />

      {/* Live Marquee Announcements Ticker */}
      <Announcements />

      {/* Main Content Sections */}
      <main className="flex-1 space-y-8">
        <AboutSection />
        <EventsSection onRegisterEvent={handleRegisterForEvent} />
        <RegistrationSection initialSelectedEventId={selectedEventIdForRegister} />
        <VouchersSection />
        <ScheduleSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
