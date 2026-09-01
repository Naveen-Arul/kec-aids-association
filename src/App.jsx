import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
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

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
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
      <ScrollToTop />
      
      {/* BACKGROUND AI CIRCUITS & BLOBS */}
      <NeuralBackground />

      {/* STICKY GLASS NAVBAR */}
      <Navbar />

      {/* MAIN ROUTER CONTENT VIEWER */}
      <main className="flex-1 relative z-10 pt-4">
        <Routes>
          <Route 
            path="/" 
            element={
              <Home 
                setSelectedEvent={setSelectedEvent} 
              />
            } 
          />
          <Route path="/about" element={<About />} />
          <Route 
            path="/events" 
            element={
              <Events 
                setSelectedEvent={setSelectedEvent} 
              />
            } 
          />
          <Route 
            path="/gallery" 
            element={<Gallery onOpenLightbox={handleOpenLightbox} />} 
          />
          <Route path="/team" element={<Team />} />
          <Route path="/year-plan" element={<YearPlan />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Catch-all fallback */}
          <Route 
            path="*" 
            element={
              <Home 
                setSelectedEvent={setSelectedEvent} 
              />
            } 
          />
        </Routes>
      </main>

      {/* FOOTER */}
      <Footer />

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
