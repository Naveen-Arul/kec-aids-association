import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export const Lightbox = ({ images = [], currentIndex = 0, onClose, onPrev, onNext }) => {
  if (images.length === 0 || currentIndex < 0 || currentIndex >= images.length) {
    return null;
  }

  const currentItem = images[currentIndex];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext]);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-md p-4 animate-fadeIn"
      onClick={onClose}
    >
      {/* CLOSE BUTTON */}
      <button
        onClick={onClose}
        aria-label="Close lightbox"
        className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 backdrop-blur-md transition-colors"
      >
        <X className="w-6 h-6" />
      </button>

      {/* PREVIOUS BUTTON */}
      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          aria-label="Previous photo"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 backdrop-blur-md transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* NEXT BUTTON */}
      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          aria-label="Next photo"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 backdrop-blur-md transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* MAIN IMAGE & CAPTION */}
      <div 
        className="relative max-w-5xl max-h-[85vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={currentItem.image || currentItem}
          alt={currentItem.caption || currentItem.eventName || "Gallery Image"}
          className="max-h-[75vh] max-w-full object-contain rounded-2xl shadow-2xl border border-white/20"
        />

        {/* CAPTION BAR */}
        <div className="mt-4 bg-slate-900/80 backdrop-blur-md border border-white/10 px-6 py-3 rounded-2xl text-center max-w-xl text-white">
          {currentItem.eventName && (
            <span className="text-xs font-bold text-cyan-400 block uppercase tracking-wider mb-1 font-heading">
              {currentItem.eventName}
            </span>
          )}
          {currentItem.caption && (
            <p className="text-xs text-slate-200">{currentItem.caption}</p>
          )}
          <span className="text-[10px] text-slate-400 block mt-1">
            Image {currentIndex + 1} of {images.length}
          </span>
        </div>
      </div>
    </div>
  );
};
