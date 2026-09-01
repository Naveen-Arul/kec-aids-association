import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Maximize2, Filter, Image as ImageIcon } from 'lucide-react';
import { galleryData, galleryCategories } from '../data/galleryData';

export const Gallery = ({ onOpenLightbox }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [slideshowIdx, setSlideshowIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const heroSlides = galleryData.slice(0, 6);

  // Filter gallery images by category
  const filteredGallery = selectedCategory === 'All'
    ? galleryData
    : galleryData.filter(item => item.category === selectedCategory);

  // Autoplay slideshow effect
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setSlideshowIdx((prev) => (prev + 1) % heroSlides.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [isPlaying, heroSlides.length]);

  return (
    <div className="space-y-14 pb-16 animate-fadeIn">
      
      {/* PAGE HEADER */}
      <section className="text-center max-w-3xl mx-auto space-y-4 pt-6">
        <span className="text-xs font-extrabold uppercase tracking-widest text-brand-cyan font-mono">
          Event Photography
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900">
          Moments That Define Us
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Visual memories from our hackathons, workshops, symposiums, and departmental activities.
        </p>
      </section>

      {/* ==================================================
          1. HERO SLIDESHOW
         ================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-4 sm:p-6 rounded-3xl relative overflow-hidden shadow-xl border border-cyan-100">
          
          <div className="relative h-80 sm:h-[420px] rounded-2xl overflow-hidden group">
            {/* ACTIVE SLIDE IMAGE */}
            <img
              src={heroSlides[slideshowIdx].image}
              alt={heroSlides[slideshowIdx].eventName}
              className="w-full h-full object-cover transition-all duration-700 transform group-hover:scale-105"
            />

            {/* GLASS OVERLAY CAPTION PANEL */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent p-6 sm:p-10 flex flex-col justify-end text-white">
              <div className="max-w-2xl space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="px-3 py-1 rounded-full bg-brand-cyan text-slate-900 text-[10px] font-bold uppercase tracking-wider">
                    {heroSlides[slideshowIdx].category}
                  </span>
                  <span className="text-xs text-slate-300 font-mono">
                    Slide {slideshowIdx + 1} of {heroSlides.length}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-extrabold font-heading">
                  {heroSlides[slideshowIdx].eventName}
                </h2>

                <p className="text-xs sm:text-sm text-slate-200 line-clamp-2">
                  {heroSlides[slideshowIdx].caption}
                </p>
              </div>
            </div>

            {/* SLIDESHOW CONTROLS */}
            <button
              onClick={() => setSlideshowIdx((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
              aria-label="Previous slide"
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/60 text-white hover:bg-slate-900 backdrop-blur-md transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={() => setSlideshowIdx((prev) => (prev + 1) % heroSlides.length)}
              aria-label="Next slide"
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/60 text-white hover:bg-slate-900 backdrop-blur-md transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* PLAY / PAUSE BUTTON */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-900/60 text-white hover:bg-slate-900 backdrop-blur-md transition-colors flex items-center space-x-1 text-xs"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>

            {/* EXPAND LIGHTBOX BUTTON */}
            <button
              onClick={() => onOpenLightbox(galleryData, slideshowIdx)}
              aria-label="Expand photo"
              className="absolute top-4 left-4 p-2.5 rounded-full bg-slate-900/60 text-white hover:bg-slate-900 backdrop-blur-md transition-colors"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>

          {/* PROGRESS INDICATOR DOTS */}
          <div className="flex items-center justify-center space-x-2 pt-4">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setSlideshowIdx(idx)}
                className={`h-2 rounded-full transition-all ${
                  slideshowIdx === idx ? 'w-8 bg-brand-cyan' : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>

        </div>
      </section>

      {/* ==================================================
          2. CATEGORY FILTERS
         ================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2 overflow-x-auto pb-3 pt-1 scrollbar-none">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-brand-blue to-brand-cyan text-white shadow-md scale-105'
                  : 'bg-white/80 text-slate-700 hover:bg-cyan-50 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ==================================================
          3. PHOTO GRID WITH HOVER ZOOM & LIGHTBOX TRIGGER
         ================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredGallery.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(filteredGallery, idx)}
              className="glass-panel group relative rounded-2xl overflow-hidden cursor-pointer border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-64 flex flex-col justify-end"
            >
              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.eventName}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* OVERLAY ON HOVER */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end text-white">
                <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest font-mono">
                  {item.category}
                </span>
                <h4 className="text-sm font-bold font-heading line-clamp-1">
                  {item.eventName}
                </h4>
                <p className="text-[11px] text-slate-200 line-clamp-2 mt-0.5">
                  {item.caption}
                </p>
              </div>

              {/* LIGHTBOX ICON BADGE */}
              <div className="absolute top-3 right-3 p-2 rounded-full bg-slate-900/60 text-white opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
