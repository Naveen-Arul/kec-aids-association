import React, { useState, useEffect } from 'react';
import { Menu, X, ToggleLeft, ToggleRight, Sparkles, ExternalLink } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const Navbar = ({ activePage, setActivePage, hasUpcomingEvents, setHasUpcomingEvents }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'events', label: 'Events' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'team', label: 'Team' },
    { id: 'year-plan', label: 'Year Plan' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-md py-1 border-b border-cyan-100/60' 
        : 'bg-white/70 backdrop-blur-sm py-1.5 border-b border-white/50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          
          {/* LEFT: Institution & Association Logos + Branding */}
          <div className="flex items-center space-x-2 sm:space-x-3 cursor-pointer h-full py-1" onClick={() => handleNavClick('home')}>
            <div className="flex items-center space-x-1.5 sm:space-x-2.5 h-full py-0.5 max-w-[200px] xs:max-w-none">
              {/* Kongu Engineering College Logo */}
              <img 
                src={siteConfig.institution.collegeLogo} 
                alt="Kongu Engineering College Logo" 
                className="h-full max-h-12 sm:max-h-16 w-auto object-contain hover:scale-105 transition-transform duration-200"
              />
              <div className="h-3/4 w-px bg-slate-300 mx-0.5 sm:mx-1 block" />
              {/* Association Logo */}
              <img 
                src={siteConfig.association.logo} 
                alt="AI & DS Association Logo" 
                className="h-full max-h-12 sm:max-h-16 w-auto object-contain hover:scale-105 transition-transform duration-200"
              />
            </div>
            
            <div className="hidden sm:block">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-blue block">
                {siteConfig.institution.shortName}
              </span>
              <span className="text-sm font-extrabold tracking-tight text-slate-900 leading-none">
                AI & DS Association
              </span>
            </div>
          </div>

          {/* DESKTOP NAV LINKS */}
          <nav className="hidden lg:flex items-center space-x-1 bg-white/70 backdrop-blur-md p-1.5 rounded-full border border-slate-200/80 shadow-sm">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-brand-blue to-brand-teal text-white shadow-sm scale-105'
                      : 'text-slate-700 hover:text-brand-blue hover:bg-slate-100/80'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* RIGHT ACTIONS: State Switcher Badge */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={() => setHasUpcomingEvents(!hasUpcomingEvents)}
              title="Toggle between State 1 (Upcoming Events Active) & State 2 (Stay Tuned Empty State)"
              className="flex items-center space-x-1.5 px-3 py-1 text-[11px] font-medium rounded-full bg-slate-100/90 text-slate-700 hover:bg-cyan-50 border border-slate-200 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
              <span>Events: <strong className={hasUpcomingEvents ? "text-emerald-600" : "text-amber-600"}>
                {hasUpcomingEvents ? "Active" : "Stay Tuned"}
              </strong></span>
              {hasUpcomingEvents ? (
                <ToggleRight className="w-4 h-4 text-emerald-600 ml-1" />
              ) : (
                <ToggleLeft className="w-4 h-4 text-slate-400 ml-1" />
              )}
            </button>
          </div>

          {/* MOBILE HAMBURGER BUTTON */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={() => setHasUpcomingEvents(!hasUpcomingEvents)}
              className="text-[10px] bg-slate-100 px-2 py-1 rounded text-slate-600 border"
            >
              State: {hasUpcomingEvents ? 'Active' : 'Stay Tuned'}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
              className="p-2 rounded-lg text-slate-700 hover:text-brand-blue hover:bg-slate-100/80 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE DRAWER / DROPDOWN */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center justify-between px-4 py-3 text-sm font-semibold rounded-xl transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-brand-blue to-brand-teal text-white shadow-sm'
                      : 'text-slate-700 hover:bg-slate-100/80'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-white animate-pulse" />}
                </button>
              );
            })}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-100 text-center">
            <p className="text-xs text-slate-500 font-medium">
              Kongu Engineering College, Perundurai
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
