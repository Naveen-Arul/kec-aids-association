import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowRight, 
  Calendar, 
  Clock, 
  MapPin, 
  Sparkles, 
  Code2, 
  Cpu, 
  TrendingUp, 
  Share2, 
  Lightbulb,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Bell,
  CheckCircle2,
  Info
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { eventsData } from '../data/eventsData';
import { galleryData } from '../data/galleryData';
import { yearPlanData } from '../data/yearPlanData';
import { announcementsData } from '../data/announcementsData';

export const Home = ({ setSelectedEvent, hasUpcomingEvents }) => {
  const navigate = useNavigate();
  const [currentGalleryIdx, setCurrentGalleryIdx] = useState(0);

  // Filter upcoming & past events
  const upcomingEvents = hasUpcomingEvents 
    ? eventsData.filter(e => e.isUpcoming) 
    : [];
  const pastEventsPreview = eventsData.filter(e => !e.isUpcoming).slice(0, 3);
  const featuredGallery = galleryData.slice(0, 6);

  const iconMap = {
    Code2: <Code2 className="w-7 h-7 text-brand-blue" />,
    Cpu: <Cpu className="w-7 h-7 text-brand-cyan" />,
    TrendingUp: <TrendingUp className="w-7 h-7 text-emerald-500" />,
    Share2: <Share2 className="w-7 h-7 text-brand-teal" />,
    Lightbulb: <Lightbulb className="w-7 h-7 text-amber-500" />
  };

  const handleNextGallery = () => {
    setCurrentGalleryIdx((prev) => (prev + 1) % featuredGallery.length);
  };

  const handlePrevGallery = () => {
    setCurrentGalleryIdx((prev) => (prev - 1 + featuredGallery.length) % featuredGallery.length);
  };

  return (
    <div className="space-y-20 pb-16 animate-fadeIn">

      {/* ==================================================
          1. HERO SECTION
         ================================================== */}
      <section className="relative pt-12 pb-20 overflow-hidden circuit-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* HERO LEFT COLUMN */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* INSTITUTION & DEPARTMENT PILL BADGE */}
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-cyan-200/80 shadow-sm text-xs font-semibold text-brand-blue">
                <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
                <span>{siteConfig.institution.fullName} • Perundurai, Erode</span>
              </div>

              {/* MAIN HEADING */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-slate-900 tracking-tight leading-tight">
                Artificial Intelligence & <br className="hidden sm:block" />
                <span className="text-gradient">Data Science</span> Association
              </h1>

              {/* EDITABLE PLACEHOLDER TAGLINE */}
              <div className="text-xl sm:text-2xl font-bold font-mono text-brand-blue tracking-wide">
                "{siteConfig.association.tagline}"
              </div>

              {/* SUBTITLE */}
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed mx-auto lg:mx-0">
                {siteConfig.association.heroDescription}
              </p>

              {/* CTA BUTTONS */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4">
                <button
                  id="hero-explore-events-btn"
                  onClick={() => navigate('/events')}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan text-white text-sm font-bold shadow-lg shadow-blue-500/20 hover:shadow-cyan-500/30 hover:scale-105 transition-all flex items-center justify-center space-x-2 group"
                >
                  <span>Explore Events</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  id="hero-about-association-btn"
                  onClick={() => navigate('/about')}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/80 backdrop-blur-md text-brand-blue border border-cyan-200 text-sm font-bold shadow-sm hover:bg-cyan-50 hover:border-cyan-300 transition-all text-center"
                >
                  About Association
                </button>
              </div>

            </div>

            {/* HERO RIGHT COLUMN: PROMINENT ASSOCIATION LOGO */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group w-72 h-72 sm:w-96 sm:h-96">
                
                {/* GLASS BACKGROUND SHIELD */}
                <div className="absolute inset-0 rounded-3xl bg-white/70 backdrop-blur-xl border border-white/90 shadow-2xl transform rotate-3 group-hover:rotate-0 transition-transform duration-500" />
                
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-100/50 via-transparent to-blue-100/50 p-6 flex flex-col items-center justify-center text-center z-10 border border-cyan-200/50">
                  
                  {/* UPLOADED ASSOCIATION LOGO */}
                  <img 
                    src={siteConfig.association.logo} 
                    alt="Artificial Intelligence and Data Science Association Official Logo"
                    className="w-44 h-44 sm:w-56 sm:h-56 object-contain filter drop-shadow-xl group-hover:scale-105 transition-transform duration-500" 
                  />

                  <div className="mt-4 pt-3 border-t border-slate-200/60 w-full">
                    <p className="text-xs font-bold text-slate-800 font-heading">
                      AI & DS Association
                    </p>
                    <p className="text-[10px] text-cyan-600 font-semibold uppercase tracking-widest">
                      Kongu Engineering College
                    </p>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================
          2. ANNOUNCEMENTS COMPACT BAR
         ================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-4 rounded-2xl border border-cyan-200/60 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            <div className="flex items-center space-x-3">
              <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-600 flex-shrink-0">
                <Bell className="w-5 h-5 animate-bounce" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 block font-mono">
                  Latest Announcement
                </span>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                  {announcementsData[0].title}
                </h4>
              </div>
            </div>

            <p className="text-xs text-slate-600 line-clamp-1 max-w-xl">
              {announcementsData[0].summary}
            </p>

            <button 
              onClick={() => navigate('/events')}
              className="px-4 py-2 rounded-full bg-slate-900 text-white text-xs font-semibold hover:bg-brand-blue transition-colors self-start md:self-auto flex items-center space-x-1"
            >
              <span>{announcementsData[0].linkText}</span>
              <ArrowRight className="w-3 h-3" />
            </button>

          </div>
        </div>
      </section>

      {/* ==================================================
          3. ASSOCIATION INTRODUCTION
         ================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl relative overflow-hidden">
          
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-cyan font-mono">
              Our Core Identity
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-heading text-slate-900">
              Where Intelligence Meets Innovation
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              The Artificial Intelligence and Data Science Association at Kongu Engineering College is a vibrant, student-led platform dedicated to technical excellence and practical learning. We aim to bridge theoretical concepts with real-world industry demands.
            </p>

            {/* KEY PURPOSE BULLETS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "Conduct hands-on technical events & hackathons",
                "Organize interactive workshops & expert bootcamps",
                "Identify and bridge student technical skill gaps",
                "Help students refine analytical & coding skills",
                "Promote innovation in AI & Data Science",
                "Build a strong, collaborative student community"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-2 text-xs font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={() => navigate('/about')}
                className="px-6 py-3 rounded-full bg-brand-blue text-white text-xs font-bold shadow-md hover:bg-brand-darkBlue transition-colors flex items-center space-x-2"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* ==================================================
          4. WHAT WE DO (5 PREMIUM GLASS CARDS)
         ================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-cyan font-mono">
            Key Pillars
          </span>
          <h2 className="text-3xl font-bold font-heading text-slate-900">
            What We Do
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Fostering technical competence, practical application, and collaborative problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {siteConfig.whatWeDo.map((card) => (
            <div 
              key={card.id}
              className="glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col items-start justify-between text-left group"
            >
              <div className="space-y-4">
                <div className="p-3 rounded-2xl bg-white shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
                  {iconMap[card.icon] || <Cpu className="w-7 h-7 text-brand-blue" />}
                </div>
                <h3 className="text-base font-bold font-heading text-slate-900">
                  {card.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================================================
          5. ACADEMIC YEAR PLAN PREVIEW
         ================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 rounded-3xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-brand-cyan font-mono">
                Academic Year {yearPlanData.academicYear}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900">
                Our Academic Year Ahead
              </h2>
            </div>
            
            <button
              onClick={() => navigate('/year-plan')}
              className="px-5 py-2.5 rounded-full bg-white text-brand-blue border border-cyan-200 text-xs font-bold hover:bg-cyan-50 transition-colors flex items-center space-x-1.5 self-start md:self-auto"
            >
              <span>View Full Year Plan</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* COMPACT ROADMAP GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {yearPlanData.timeline.slice(0, 4).map((item) => (
              <div key={item.id} className="bg-white/80 p-4 rounded-2xl border border-slate-200/70 shadow-sm space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold font-mono text-brand-blue">
                    {item.month}
                  </span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                    item.status === 'Completed' ? 'bg-emerald-100 text-emerald-700' :
                    item.status === 'Upcoming' ? 'bg-cyan-100 text-cyan-700' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {item.status}
                  </span>
                </div>
                <h4 className="text-xs font-bold text-slate-900 line-clamp-1">
                  {item.title}
                </h4>
                <p className="text-[11px] text-slate-500 line-clamp-2">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          6. UPCOMING EVENTS (STATE 1 & STATE 2 DUAL SUPPORT)
         ================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-cyan font-mono">
            Mark Your Calendar
          </span>
          <h2 className="text-3xl font-bold font-heading text-slate-900">
            Upcoming Events
          </h2>
        </div>

        {upcomingEvents.length > 0 ? (
          /* STATE 1: UPCOMING EVENTS EXIST */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.map((evt) => (
              <div 
                key={evt.id} 
                className="glass-panel rounded-3xl overflow-hidden shadow-lg border border-cyan-100 flex flex-col hover:shadow-xl transition-all"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={evt.poster} 
                    alt={evt.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-brand-blue text-white text-xs font-bold">
                    {evt.type}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold font-heading text-slate-900">
                      {evt.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {evt.shortDescription}
                    </p>
                  </div>

                  <div className="space-y-2 text-xs text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-200">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-3.5 h-3.5 text-brand-blue" />
                      <span>{evt.date} • {evt.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-3.5 h-3.5 text-emerald-500" />
                      <span>{evt.venue}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <button
                      onClick={() => setSelectedEvent(evt)}
                      className="text-xs font-semibold text-brand-blue hover:underline"
                    >
                      View Details
                    </button>

                    {evt.registrationUrl && (
                      <a
                        href={evt.registrationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan text-white text-xs font-bold shadow-md hover:scale-105 transition-all flex items-center space-x-1.5"
                      >
                        <span>Register Now</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* STATE 2: NO UPCOMING EVENTS - STAY TUNED EMPTY STATE */
          <div className="glass-panel p-12 rounded-3xl text-center max-w-2xl mx-auto border border-cyan-200/80 shadow-md space-y-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-100 to-blue-100 flex items-center justify-center mx-auto text-brand-blue">
              <Sparkles className="w-8 h-8 animate-pulse" />
            </div>
            
            <h3 className="text-2xl font-extrabold font-heading text-slate-900 tracking-wider uppercase">
              STAY TUNED
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
              "Exciting technical experiences are on the way. Keep watching this space for upcoming events."
            </p>

            <div className="pt-2">
              <button
                onClick={() => navigate('/events')}
                className="px-6 py-2.5 rounded-full bg-slate-900 text-white text-xs font-semibold hover:bg-brand-blue transition-colors"
              >
                Browse Past Events
              </button>
            </div>
          </div>
        )}
      </section>

      {/* ==================================================
          7. PAST EVENTS PREVIEW
         ================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-cyan font-mono">
              Memorable Highlights
            </span>
            <h2 className="text-3xl font-bold font-heading text-slate-900">
              Past Technical Events
            </h2>
          </div>

          <button
            onClick={() => navigate('/events')}
            className="px-6 py-2.5 rounded-full bg-white text-brand-blue border border-slate-200 text-xs font-bold hover:bg-slate-50 transition-colors flex items-center space-x-1.5 self-start sm:self-auto"
          >
            <span>View All Events</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pastEventsPreview.map((evt) => (
            <div 
              key={evt.id}
              className="glass-panel rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="h-44 overflow-hidden relative">
                  <img 
                    src={evt.poster} 
                    alt={evt.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute bottom-2 left-2 px-2.5 py-0.5 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-semibold">
                    {evt.type}
                  </span>
                </div>

                <div className="p-5 space-y-2">
                  <span className="text-[11px] font-mono text-slate-400 block">
                    {evt.date}
                  </span>
                  <h3 className="text-base font-bold font-heading text-slate-900 line-clamp-1">
                    {evt.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2">
                    {evt.shortDescription}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <button
                  onClick={() => setSelectedEvent(evt)}
                  className="w-full py-2 rounded-xl bg-slate-100 hover:bg-cyan-50 text-brand-blue text-xs font-bold transition-colors"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================================================
          8. CINEMATIC GALLERY PREVIEW SLIDER
         ================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 sm:p-10 rounded-3xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-brand-cyan font-mono">
                Visual Journey
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900">
                Moments That Define Us
              </h2>
            </div>

            <button
              onClick={() => navigate('/gallery')}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-brand-blue to-brand-teal text-white text-xs font-bold shadow-md hover:scale-105 transition-all flex items-center space-x-1.5 self-start sm:self-auto"
            >
              <span>Explore Full Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* SLIDER CONTAINER */}
          <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden group shadow-lg">
            <img 
              src={featuredGallery[currentGalleryIdx].image} 
              alt={featuredGallery[currentGalleryIdx].eventName} 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            
            {/* OVERLAY CAPTION */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent p-6 sm:p-8 flex flex-col justify-end text-white">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest font-mono">
                {featuredGallery[currentGalleryIdx].category}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-heading">
                {featuredGallery[currentGalleryIdx].eventName}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl mt-1">
                {featuredGallery[currentGalleryIdx].caption}
              </p>
            </div>

            {/* CONTROLS */}
            <button
              onClick={handlePrevGallery}
              aria-label="Previous photo"
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/60 text-white hover:bg-slate-900 backdrop-blur-md transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={handleNextGallery}
              aria-label="Next photo"
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/60 text-white hover:bg-slate-900 backdrop-blur-md transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
