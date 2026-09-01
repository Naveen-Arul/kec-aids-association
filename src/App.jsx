import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { NeuralBackground } from './components/NeuralBackground';
import { EventDetailModal } from './components/EventDetailModal';
import { Lightbox } from './components/Lightbox';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Events } from './pages/Events';
import { Gallery } from './pages/Gallery';
import { Team } from './pages/Team';
import { YearPlan } from './pages/YearPlan';
import { Contact } from './pages/Contact';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [hasUpcomingEvents, setHasUpcomingEvents] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [lightboxState, setLightboxState] = useState({
    isOpen: false,
    images: [],
    index: 0
  });

  const handleOpenLightbox = (images, index) => {
    setLightboxState({
      isOpen: true,
      images: images,
      index: index
    });
  };

  const handleCloseLightbox = () => {
    setLightboxState(prev => ({ ...prev, isOpen: false }));
  };

  const handlePrevLightbox = () => {
    setLightboxState(prev => ({
      ...prev,
      index: (prev.index - 1 + prev.images.length) % prev.images.length
    }));
  };

  const handleNextLightbox = () => {
    setLightboxState(prev => ({
      ...prev,
      index: (prev.index + 1) % prev.images.length
    }));
  };

  return (
    <div className="min-h-screen flex flex-col relative bg-[#F8FAFC] text-slate-800 font-sans selection:bg-cyan-500 selection:text-white">
      
      {/* BACKGROUND AI CIRCUITS & BLOBS */}
      <NeuralBackground />

      {/* STICKY GLASS NAVBAR */}
      <Navbar 
        activePage={activePage} 
        setActivePage={setActivePage}
        hasUpcomingEvents={hasUpcomingEvents}
        setHasUpcomingEvents={setHasUpcomingEvents}
      />

      {/* MAIN CONTENT VIEWER */}
      <main className="flex-1 relative z-10 pt-4">
        {activePage === 'home' && (
          <Home 
            setActivePage={setActivePage} 
            setSelectedEvent={setSelectedEvent} 
            hasUpcomingEvents={hasUpcomingEvents}
          />
        )}

        {activePage === 'about' && (
          <About setActivePage={setActivePage} />
        )}

        {activePage === 'events' && (
          <Events 
            setSelectedEvent={setSelectedEvent} 
            hasUpcomingEvents={hasUpcomingEvents}
          />
        )}

        {activePage === 'gallery' && (
          <Gallery onOpenLightbox={handleOpenLightbox} />
        )}

        {activePage === 'team' && (
          <Team />
        )}

        {activePage === 'year-plan' && (
          <YearPlan setActivePage={setActivePage} />
        )}

        {activePage === 'contact' && (
          <Contact />
        )}
      </main>

      {/* FOOTER */}
      <Footer setActivePage={setActivePage} />

      {/* EVENT DETAIL MODAL */}
      {selectedEvent && (
        <EventDetailModal 
          event={selectedEvent} 
          onClose={() => setSelectedEvent(null)}
          onSelectImage={(item) => handleOpenLightbox([item], 0)}
        />
      )}

      {/* FULL-SCREEN LIGHTBOX */}
      {lightboxState.isOpen && (
        <Lightbox 
          images={lightboxState.images}
          currentIndex={lightboxState.index}
          onClose={handleCloseLightbox}
          onPrev={handlePrevLightbox}
          onNext={handleNextLightbox}
        />
      )}

    </div>
  );
}
