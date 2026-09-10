import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Calendar, Clock, MapPin, ExternalLink, CheckCircle2, Sparkles, Image as ImageIcon, ArrowLeft } from 'lucide-react';
import { eventsData } from '../data/eventsData';

export const EventDetails = ({ onOpenLightbox }) => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [rollNumber, setRollNumber] = useState('');
  const [rollNumberError, setRollNumberError] = useState('');
  const event = eventsData.find((item) => item.slug === slug);

  const handleRollNumberSubmit = (submitEvent) => {
    submitEvent.preventDefault();
    const normalizedRollNumber = rollNumber.trim().toUpperCase();

    if (normalizedRollNumber.startsWith('24')) {
      navigate('/events/newells-2k26/third-year');
      return;
    }

    if (normalizedRollNumber.startsWith('25')) {
      navigate('/events/newells-2k26/second-year');
      return;
    }

    setRollNumberError('Please enter a roll number that starts with 24 or 25.');
  };

  if (!event) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-center">
        <h1 className="text-3xl font-extrabold font-heading text-slate-900">Event not found</h1>
        <Link to="/events" className="inline-flex items-center gap-2 mt-6 text-sm font-bold text-brand-blue hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to Events
        </Link>
      </div>
    );
  }

  return (
    <article className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 animate-fadeIn">
      <Link to="/events" className="inline-flex items-center gap-2 mt-4 mb-8 text-sm font-bold text-slate-600 hover:text-brand-blue transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back to Events
      </Link>

      <div className="grid lg:grid-cols-[minmax(0,1.1fr)_minmax(360px,0.9fr)] gap-8 lg:gap-12 items-start">
        <div className="lg:sticky lg:top-28">
          <div className="overflow-hidden rounded-3xl bg-slate-900 shadow-xl border border-white/70">
            <img src={event.poster} alt={event.title} className="w-full h-auto max-h-[75vh] object-contain" />
          </div>
        </div>

        <div className="space-y-8 pt-2">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="px-3 py-1 text-xs font-bold rounded-full bg-brand-cyan text-slate-900">{event.type}</span>
              <span className={`px-3 py-1 text-xs font-bold rounded-full ${event.isUpcoming ? 'bg-emerald-500 text-white' : 'bg-slate-200 text-slate-700'}`}>
                {event.status}
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading leading-tight text-slate-900">{event.title}</h1>
            <p className="mt-5 text-base text-slate-600 leading-relaxed">{event.fullDescription || event.shortDescription}</p>
          </div>

          {event.slug === 'newells-2k26' && (
            <section className="p-5 rounded-2xl bg-amber-50 border border-amber-200">
              <p className="text-xs leading-relaxed text-amber-900">
                <strong>Disclaimer:</strong> This information is used only to direct participants to the event details for their academic year. Enter your roll number exactly as issued by the college.
              </p>
              <form onSubmit={handleRollNumberSubmit} className="mt-4 space-y-3">
                <label htmlFor="roll-number" className="block text-sm font-bold text-slate-900">Enter your roll number</label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    id="roll-number"
                    type="text"
                    value={rollNumber}
                    onChange={(inputEvent) => {
                      setRollNumber(inputEvent.target.value);
                      setRollNumberError('');
                    }}
                    placeholder="Example: 24ADR116"
                    className="min-w-0 flex-1 px-4 py-3 rounded-xl bg-white border border-amber-200 text-sm text-slate-900 uppercase focus:outline-none focus:ring-2 focus:ring-brand-cyan"
                    required
                  />
                  <button type="submit" className="px-5 py-3 rounded-xl bg-brand-blue text-white text-sm font-bold hover:bg-brand-cyan hover:text-slate-900 transition-colors">Continue</button>
                </div>
                {rollNumberError && <p className="text-xs font-semibold text-red-600">{rollNumberError}</p>}
              </form>
            </section>
          )}

          <div className="grid sm:grid-cols-3 gap-3 p-5 rounded-2xl bg-white/80 border border-slate-200 shadow-sm">
            <div className="flex items-start gap-3 text-sm text-slate-700"><Calendar className="w-5 h-5 text-brand-blue shrink-0" /><span><strong className="block text-[10px] uppercase text-slate-400">Date</strong>{event.date}</span></div>
            <div className="flex items-start gap-3 text-sm text-slate-700"><Clock className="w-5 h-5 text-brand-cyan shrink-0" /><span><strong className="block text-[10px] uppercase text-slate-400">Time</strong>{event.time}</span></div>
            <div className="flex items-start gap-3 text-sm text-slate-700"><MapPin className="w-5 h-5 text-emerald-500 shrink-0" /><span><strong className="block text-[10px] uppercase text-slate-400">Venue</strong>{event.venue}</span></div>
          </div>

          {event.highlights?.length > 0 && (
            <section>
              <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-900 mb-4"><Sparkles className="w-4 h-4 text-brand-cyan" /> Event Highlights</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {event.highlights.map((item) => <div key={item} className="flex items-start gap-2.5 p-3 rounded-xl bg-cyan-50/60 border border-cyan-100 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />{item}</div>)}
              </div>
            </section>
          )}

          {event.galleryImages?.length > 0 && (
            <section>
              <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-900 mb-4"><ImageIcon className="w-4 h-4 text-brand-blue" /> Event Photographs</h2>
              <div className="grid grid-cols-2 gap-3">
                {event.galleryImages.map((image, index) => <button key={image} onClick={() => onOpenLightbox([image], 0)} className="h-32 overflow-hidden rounded-xl border border-slate-200"><img src={image} alt={`${event.title} ${index + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform" /></button>)}
              </div>
            </section>
          )}

          {event.isUpcoming && event.registrationUrl && <a href={event.registrationUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan text-white text-sm font-bold shadow-lg"><span>Register Now</span><ExternalLink className="w-4 h-4" /></a>}
        </div>
      </div>
    </article>
  );
};

export const YearEventDetails = () => {
  const { year } = useParams();
  const isThirdYear = year === 'third-year';
  const isSecondYear = year === 'second-year';
  const yearLabel = isThirdYear ? '3rd Year' : isSecondYear ? '2nd Year' : null;
  const rollPrefix = isThirdYear ? '24ADR' : isSecondYear ? '25ADR' : null;

  if (!yearLabel) {
    return <NavigateToEvents />;
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 animate-fadeIn">
      <Link to="/events/newells-2k26" className="inline-flex items-center gap-2 mt-4 mb-8 text-sm font-bold text-slate-600 hover:text-brand-blue transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back to NEWELL'S 2K26
      </Link>
      <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-cyan-100 shadow-lg">
        <span className="text-xs font-extrabold uppercase tracking-widest text-brand-cyan font-mono">NEWELL'S 2K26</span>
        <h1 className="mt-3 text-3xl sm:text-5xl font-extrabold font-heading text-slate-900">{yearLabel} Events</h1>
        <p className="mt-5 text-slate-600 leading-relaxed">You have been directed here because your roll number starts with <strong>{rollPrefix}</strong>. Event information for this year will be shared here.</p>
      </div>
    </article>
  );
};

const NavigateToEvents = () => (
  <div className="max-w-3xl mx-auto px-4 py-24 text-center">
    <h1 className="text-3xl font-extrabold font-heading text-slate-900">Event page not found</h1>
    <Link to="/events" className="inline-flex items-center gap-2 mt-6 text-sm font-bold text-brand-blue hover:underline">
      <ArrowLeft className="w-4 h-4" /> Back to Events
    </Link>
  </div>
);