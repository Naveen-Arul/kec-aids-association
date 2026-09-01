import React, { useState } from 'react';
import { Phone, Mail, Instagram, MapPin, Send, CheckCircle2, ExternalLink } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <div className="space-y-16 pb-16 animate-fadeIn">
      
      {/* PAGE HEADER */}
      <section className="text-center max-w-3xl mx-auto space-y-4 pt-6">
        <span className="text-xs font-extrabold uppercase tracking-widest text-brand-cyan font-mono">
          Get In Touch
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900">
          Contact Us
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Have questions regarding upcoming technical events, workshops, or association membership? We'd love to hear from you.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT: CONTACT CARDS (5 COLS) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-panel p-8 rounded-3xl space-y-6 border border-cyan-100">
              <h3 className="text-xl font-bold font-heading text-slate-900 border-l-4 border-brand-cyan pl-3">
                Contact Information
              </h3>

              <div className="space-y-5 text-sm text-slate-700">
                
                {/* LOCATION */}
                <a 
                  href={siteConfig.contact.locationUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start space-x-3.5 group cursor-pointer hover:bg-slate-50 p-1.5 rounded-2xl transition-colors"
                >
                  <div className="p-3 rounded-2xl bg-cyan-50 text-brand-blue flex-shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block font-mono">
                      Location (Google Maps)
                    </span>
                    <span className="text-xs font-semibold text-slate-900 group-hover:text-brand-blue block mt-0.5 flex items-center">
                      <span>{siteConfig.institution.fullName}</span>
                      <ExternalLink className="w-3 h-3 ml-1 text-brand-cyan" />
                    </span>
                    <span className="text-xs text-slate-600">
                      Perundurai, Erode - 638060, Tamil Nadu
                    </span>
                  </div>
                </a>

                {/* PHONE */}
                <div className="flex items-center space-x-3.5">
                  <div className="p-3 rounded-2xl bg-emerald-50 text-emerald-600 flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block font-mono">
                      Phone Number
                    </span>
                    <a href={`tel:${siteConfig.contact.phone}`} className="text-xs font-bold text-slate-900 hover:text-brand-blue transition-colors">
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>

                {/* EMAIL */}
                <div className="flex items-center space-x-3.5">
                  <div className="p-3 rounded-2xl bg-blue-50 text-brand-blue flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block font-mono">
                      Official Email
                    </span>
                    <a href={`mailto:${siteConfig.contact.email}`} className="text-xs font-bold text-slate-900 hover:text-brand-blue transition-colors">
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                {/* INSTAGRAM */}
                <div className="flex items-center space-x-3.5 pt-2 border-t border-slate-100">
                  <div className="p-3 rounded-2xl bg-pink-50 text-pink-600 flex-shrink-0">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block font-mono">
                      Instagram Handle
                    </span>
                    <a 
                      href={siteConfig.contact.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-pink-600 hover:underline flex items-center space-x-1"
                    >
                      <span>{siteConfig.contact.instagramHandle}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* QUICK DEPT CARD */}
            <div className="glass-panel p-6 rounded-3xl bg-gradient-to-br from-brand-blue to-brand-teal text-white space-y-2">
              <h4 className="text-sm font-bold font-heading">
                Department of AI & Data Science
              </h4>
              <p className="text-xs text-cyan-100 leading-relaxed">
                Kongu Engineering College, Perundurai, Erode.
              </p>
            </div>

          </div>

          {/* RIGHT: CONTACT FORM (7 COLS) */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 sm:p-10 rounded-3xl space-y-6 border border-cyan-100">
              
              <h3 className="text-xl font-bold font-heading text-slate-900">
                Send Us a Message
              </h3>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2 animate-fadeIn">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="text-base font-bold text-slate-900">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-xs text-slate-600">
                    Thank you for reaching out to the AI & DS Association. We will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 font-mono">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/80 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 font-mono">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="nishanthp.23aid@kongu.edu"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/80 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 font-mono">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Workshop Inquiry / Event Registration"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/80 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 font-mono">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Type your message here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/80 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan text-white text-xs font-bold shadow-lg hover:shadow-cyan-500/20 hover:scale-[1.01] transition-all flex items-center justify-center space-x-2"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>
      </section>

      {/* ==================================================
          LOCATION MAP
         ================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-4 rounded-3xl overflow-hidden border border-slate-200 shadow-md">
          <div className="mb-3 px-4 pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono block">
                Campus Location
              </span>
              <h4 className="text-base font-bold font-heading text-slate-900">
                Kongu Engineering College, Perundurai, Erode
              </h4>
            </div>

            <a
              href={siteConfig.contact.locationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full bg-slate-900 text-white text-xs font-semibold hover:bg-brand-blue transition-colors self-start sm:self-auto"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 text-brand-cyan" />
            </a>
          </div>
          
          <div className="h-80 w-full rounded-2xl overflow-hidden border border-slate-200">
            <iframe 
              title="Kongu Engineering College Location Map"
              src={siteConfig.contact.mapEmbedUrl}
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
            />
          </div>
        </div>
      </section>

    </div>
  );
};
