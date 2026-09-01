import React from 'react';
import { X, Calendar, Clock, MapPin, ExternalLink, CheckCircle2, Sparkles, Image as ImageIcon } from 'lucide-react';

export const EventDetailModal = ({ event, onClose, onSelectImage }) => {
  if (!event) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div 
        className="relative bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-white/60 my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER BANNER */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-900">
          <img 
            src={event.poster} 
            alt={event.title} 
            className="w-full h-full object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
          
          {/* CLOSE BUTTON */}
          <button 
            onClick={onClose}
            aria-label="Close detail modal"
            className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-900/60 text-white hover:bg-slate-900 backdrop-blur-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* BADGES & TITLE OVERLAY */}
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="flex items-center space-x-2 mb-2">
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-brand-cyan/90 text-slate-900 backdrop-blur-sm">
                {event.type}
              </span>
              <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                event.isUpcoming ? 'bg-emerald-500 text-white' : 'bg-slate-700 text-slate-200'
              }`}>
                {event.status}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading leading-tight">
              {event.title}
            </h2>
          </div>
        </div>

        {/* CONTENT BODY */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1">
          
          {/* META BAR */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs font-medium">
            <div className="flex items-center space-x-2.5 text-slate-700">
              <Calendar className="w-4 h-4 text-brand-blue flex-shrink-0" />
              <div>
                <span className="text-[10px] text-slate-400 block uppercase font-bold">Date</span>
                <span>{event.date}</span>
              </div>
            </div>

            <div className="flex items-center space-x-2.5 text-slate-700">
              <Clock className="w-4 h-4 text-brand-cyan flex-shrink-0" />
              <div>
                <span className="text-[10px] text-slate-400 block uppercase font-bold">Time</span>
                <span>{event.time}</span>
              </div>
            </div>

            <div className="flex items-center space-x-2.5 text-slate-700">
              <MapPin className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              <div>
                <span className="text-[10px] text-slate-400 block uppercase font-bold">Venue</span>
                <span>{event.venue}</span>
              </div>
            </div>
          </div>

          {/* FULL DESCRIPTION */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2 font-heading">
              About the Event
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {event.fullDescription || event.shortDescription}
            </p>
          </div>

          {/* HIGHLIGHTS */}
          {event.highlights && event.highlights.length > 0 && (
            <div>
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3 font-heading flex items-center">
                <Sparkles className="w-4 h-4 text-brand-cyan mr-1.5" />
                Event Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {event.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-2 p-2.5 rounded-xl bg-cyan-50/50 border border-cyan-100/70 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* EVENT GALLERY PHOTOS */}
          {event.galleryImages && event.galleryImages.length > 0 && (
            <div>
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3 font-heading flex items-center">
                <ImageIcon className="w-4 h-4 text-brand-blue mr-1.5" />
                Event Photographs
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {event.galleryImages.map((imgUrl, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => onSelectImage && onSelectImage({ image: imgUrl, caption: `${event.title} Photo ${idx+1}`, eventName: event.title })}
                    className="relative group h-32 rounded-xl overflow-hidden cursor-pointer border border-slate-200 shadow-sm hover:shadow-md"
                  >
                    <img 
                      src={imgUrl} 
                      alt={`${event.title} ${idx+1}`} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-semibold">
                      View Photo
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ACTION BUTTON */}
          {event.isUpcoming && event.registrationUrl && (
            <div className="pt-4 border-t border-slate-100 flex justify-end">
              <a
                href={event.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan text-white text-sm font-bold shadow-lg hover:shadow-cyan-500/20 hover:scale-105 transition-all text-center flex items-center justify-center space-x-2"
              >
                <span>Register Now (Google Form)</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
