import React from 'react';
import { Phone, Mail, Instagram, MapPin, ArrowRight, ExternalLink } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const Footer = ({ setActivePage }) => {
  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Department' },
    { id: 'events', label: 'Technical Events' },
    { id: 'gallery', label: 'Event Gallery' },
    { id: 'team', label: 'Association Team' },
    { id: 'year-plan', label: 'Academic Year Plan' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const handleLinkClick = (id) => {
    setActivePage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-900 text-white overflow-hidden pt-16 pb-12 border-t border-slate-800">
      {/* Background circuit lines overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full stroke-cyan-400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <pattern id="footer-circuit" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M0 40 H80 M40 0 V80" strokeWidth="0.5" />
            <circle cx="40" cy="40" r="3" fill="#00BCD4" />
            <circle cx="0" cy="40" r="2" fill="#10B981" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#footer-circuit)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* COLUMN 1: BRANDING & LOGOS */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 bg-white/10 p-2.5 rounded-xl backdrop-blur-md w-fit border border-white/10">
              <img 
                src={siteConfig.institution.collegeLogo} 
                alt="Kongu Engineering College Logo" 
                className="h-10 w-auto bg-white rounded p-1 object-contain"
              />
              <div className="h-8 w-px bg-slate-700" />
              <img 
                src={siteConfig.association.logo} 
                alt="AI & DS Association Logo" 
                className="h-10 w-auto bg-white rounded p-1 object-contain"
              />
            </div>
            
            <h3 className="text-lg font-bold text-white font-heading">
              {siteConfig.association.fullName}
            </h3>
            <p className="text-xs text-cyan-400 font-semibold uppercase tracking-wider">
              {siteConfig.institution.fullName}, Perundurai, Erode
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              "Innovate. Analyze. Transform." <br />
              Empowering students through technical excellence, practical projects, and continuous learning.
            </p>
          </div>

          {/* COLUMN 2: QUICK NAVIGATION */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-brand-cyan pl-2">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleLinkClick(link.id)}
                    className="text-xs text-slate-300 hover:text-cyan-400 transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-1.5 opacity-0 group-hover:opacity-100 transition-all text-brand-cyan transform group-hover:translate-x-0.5" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: CONTACT INFORMATION */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-brand-cyan pl-2">
              Contact Info
            </h4>
            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-start space-x-2.5 group">
                <MapPin className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <a 
                  href={siteConfig.contact.locationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-300 transition-colors flex flex-col"
                  title="Open Location in Google Maps"
                >
                  <span className="font-semibold text-white flex items-center">
                    <span>{siteConfig.contact.address}</span>
                    <ExternalLink className="w-3 h-3 ml-1 text-cyan-400 flex-shrink-0" />
                  </span>
                  <span className="text-[10px] text-cyan-400 mt-0.5 underline">Get Directions (Google Maps)</span>
                </a>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-center space-x-2.5 pt-1">
                <Instagram className="w-4 h-4 text-pink-400 flex-shrink-0" />
                <a 
                  href={siteConfig.contact.instagramUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-pink-300 hover:text-pink-200 transition-colors flex items-center font-medium"
                >
                  <span>{siteConfig.contact.instagramHandle}</span>
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: INSTITUTIONAL NOTE */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-brand-cyan pl-2">
              Institution
            </h4>
            <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/60 backdrop-blur-sm space-y-2">
              <h5 className="text-xs font-bold text-white">
                Kongu Engineering College
              </h5>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Autonomous Institution Affiliated to Anna University. Perundurai, Erode - 638060.
              </p>
              
              <div className="pt-1 flex flex-col space-y-1 text-[11px]">
                <a 
                  href={siteConfig.contact.locationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-brand-cyan hover:underline flex items-center"
                >
                  <span>Google Maps Navigation ↗</span>
                </a>
                <button 
                  onClick={() => handleLinkClick('about')}
                  className="text-slate-300 hover:text-white transition-colors text-left font-medium"
                >
                  Learn About AI & DS Dept →
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 space-y-3 sm:space-y-0">
          <p>© {new Date().getFullYear()} Artificial Intelligence and Data Science Association, Kongu Engineering College. All rights reserved.</p>
          <div className="flex items-center space-x-4 text-[11px]">
            <span className="text-slate-500">Autonomous Institution</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-500">Perundurai, Erode</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
