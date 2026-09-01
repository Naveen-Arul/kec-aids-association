import React, { useState } from 'react';
import { Calendar, Clock, MapPin, ExternalLink, Sparkles, Filter, Search } from 'lucide-react';
import { eventsData } from '../data/eventsData';

export const Events = ({ setSelectedEvent }) => {
  const [activeTab, setActiveTab] = useState('past'); // 'past' | 'upcoming'
  const [searchTerm, setSearchTerm] = useState('');

  const upcomingEvents = eventsData.filter(e => e.isUpcoming);
  const pastEvents = eventsData.filter(e => !e.isUpcoming);

  const displayedEvents = activeTab === 'upcoming' ? upcomingEvents : pastEvents;

  const filteredEvents = displayedEvents.filter(e => 
    e.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    e.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    e.shortDescription.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-12 pb-16 animate-fadeIn">
      
      {/* PAGE HEADER */}
      <section className="text-center max-w-3xl mx-auto space-y-4 pt-6">
        <span className="text-xs font-extrabold uppercase tracking-widest text-brand-cyan font-mono">
          Knowledge & Competitions
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900">
          Association Events
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Discover our upcoming hackathons and workshops, or explore past technical symposiums and guest lectures.
        </p>
      </section>

      {/* CONTROLS BAR: TABS & SEARCH */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-4 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* SEGMENTED TAB BUTTONS */}
          <div className="flex p-1 bg-slate-100/90 rounded-full border border-slate-200 w-full sm:w-auto">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`flex-1 sm:flex-none px-6 py-2 rounded-full text-xs font-bold transition-all ${
                activeTab === 'upcoming'
                  ? 'bg-gradient-to-r from-brand-blue to-brand-cyan text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Upcoming Events ({upcomingEvents.length})
            </button>
            <button
              onClick={() => setActiveTab('past')}
              className={`flex-1 sm:flex-none px-6 py-2 rounded-full text-xs font-bold transition-all ${
                activeTab === 'past'
                  ? 'bg-gradient-to-r from-brand-blue to-brand-cyan text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Past Events ({pastEvents.length})
            </button>
          </div>

          {/* SEARCH INPUT */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search events by title or type..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full bg-white/90 border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan"
            />
          </div>

        </div>
      </section>

      {/* EVENT GRID DISPLAY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* IF UPCOMING TAB AND ZERO EVENTS (STATE 2) */}
        {activeTab === 'upcoming' && filteredEvents.length === 0 ? (
          <div className="glass-panel p-16 rounded-3xl text-center max-w-2xl mx-auto border border-cyan-200/80 shadow-md space-y-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-100 to-blue-100 flex items-center justify-center mx-auto text-brand-blue">
              <Sparkles className="w-8 h-8 animate-pulse text-brand-cyan" />
            </div>
            
            <h3 className="text-2xl font-extrabold font-heading text-slate-900 tracking-wider uppercase">
              STAY TUNED
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
              "Exciting technical experiences are on the way. Keep watching this space for upcoming events."
            </p>

            <div className="pt-2">
              <button
                onClick={() => setActiveTab('past')}
                className="px-6 py-2.5 rounded-full bg-slate-900 text-white text-xs font-semibold hover:bg-brand-blue transition-colors"
              >
                Browse Past Events
              </button>
            </div>
          </div>
        ) : filteredEvents.length === 0 ? (
          /* NO SEARCH RESULTS */
          <div className="text-center py-12 text-slate-500 text-sm">
            No events match your search term "{searchTerm}".
          </div>
        ) : (
          /* EVENT CARDS GRID */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((evt) => (
              <div 
                key={evt.id}
                className="glass-panel rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* POSTER */}
                  <div className="relative h-52 overflow-hidden bg-slate-900">
                    <img 
                      src={evt.poster} 
                      alt={evt.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-95"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-brand-blue text-white text-[11px] font-bold">
                      {evt.type}
                    </div>
                    {evt.isUpcoming && (
                      <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-wider animate-pulse">
                        Upcoming
                      </span>
                    )}
                  </div>

                  {/* CONTENT */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center space-x-2 text-[11px] font-mono text-slate-500">
                      <Calendar className="w-3.5 h-3.5 text-brand-cyan" />
                      <span>{evt.date}</span>
                    </div>

                    <h3 className="text-lg font-bold font-heading text-slate-900 group-hover:text-brand-blue transition-colors leading-snug">
                      {evt.title}
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {evt.shortDescription}
                    </p>

                    <div className="pt-2 text-xs text-slate-500 space-y-1">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>{evt.time}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        <span>{evt.venue}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CARD FOOTER */}
                <div className="p-6 pt-0 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedEvent(evt)}
                    className="px-4 py-2 rounded-full bg-slate-100 hover:bg-cyan-50 text-brand-blue text-xs font-bold transition-colors"
                  >
                    View Details
                  </button>

                  {evt.isUpcoming && evt.registrationUrl && (
                    <a
                      href={evt.registrationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan text-white text-xs font-bold shadow-sm hover:scale-105 transition-all flex items-center space-x-1"
                    >
                      <span>Register</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

      </section>

    </div>
  );
};
