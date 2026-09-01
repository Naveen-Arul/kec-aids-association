import React from 'react';
import { ShieldCheck, UserCheck, Code, Video, Newspaper, Award, Sparkles, Wallet } from 'lucide-react';
import { teamData } from '../data/teamData';

export const Team = () => {
  return (
    <div className="space-y-16 pb-16 animate-fadeIn">
      
      {/* PAGE HEADER */}
      <section className="text-center max-w-3xl mx-auto space-y-4 pt-6 px-4">
        <span className="text-xs font-extrabold uppercase tracking-widest text-brand-cyan font-mono bg-cyan-50/80 px-4 py-1.5 rounded-full border border-cyan-200 inline-block">
          Hierarchy & Leadership • Academic Year 2026–2027
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900">
          Association Team
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Guided by esteemed faculty mentors and led by dedicated student office bearers.
        </p>
      </section>

      {/* ==================================================
          1. FACULTY LEADERSHIP
         ================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center space-x-3 border-l-4 border-brand-blue pl-3">
          <ShieldCheck className="w-6 h-6 text-brand-blue" />
          <h2 className="text-2xl font-bold font-heading text-slate-900">
            Faculty Leadership
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamData.faculty.map((member) => (
            <div 
              key={member.id}
              className="glass-panel p-6 rounded-3xl text-center space-y-4 border border-cyan-100/80 hover:shadow-lg transition-all group"
            >
              <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-md mx-auto group-hover:scale-105 transition-transform duration-300">
                <img 
                  src={member.photo} 
                  alt={member.name} 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-bold font-heading text-slate-900">
                  {member.name}
                </h3>
                <p className="text-xs font-semibold text-brand-blue uppercase tracking-wider">
                  {member.designation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================================================
          2. SECRETARY (1)
         ================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center space-x-3 border-l-4 border-brand-cyan pl-3">
          <UserCheck className="w-6 h-6 text-brand-cyan" />
          <h2 className="text-2xl font-bold font-heading text-slate-900">
            Secretary (1)
          </h2>
        </div>

        <div className="max-w-md mx-auto">
          {teamData.secretary.map((member) => (
            <div 
              key={member.id}
              className="glass-panel p-6 rounded-3xl text-center space-y-4 border-2 border-brand-cyan shadow-lg bg-gradient-to-b from-white to-cyan-50/30 group"
            >
              <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-white shadow-md mx-auto group-hover:scale-105 transition-transform duration-300">
                <img 
                  src={member.photo} 
                  alt={member.name} 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-extrabold font-heading text-slate-900">
                  {member.name}
                </h3>
                {member.rollNo && (
                  <p className="text-xs text-slate-500 font-mono font-semibold">{member.rollNo}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================================================
          3. ADDITIONAL SECRETARY (1)
         ================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center space-x-3 border-l-4 border-cyan-500 pl-3">
          <Award className="w-6 h-6 text-cyan-500" />
          <h2 className="text-2xl font-bold font-heading text-slate-900">
            Additional Secretary (1)
          </h2>
        </div>

        <div className="max-w-md mx-auto">
          {teamData.additionalSecretary.map((member) => (
            <div 
              key={member.id}
              className="glass-panel p-6 rounded-3xl text-center space-y-4 border border-cyan-200/80 hover:shadow-lg transition-all group"
            >
              <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-white shadow-md mx-auto group-hover:scale-105 transition-transform duration-300">
                <img 
                  src={member.photo} 
                  alt={member.name} 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-bold font-heading text-slate-900">
                  {member.name}
                </h3>
                {member.rollNo && (
                  <p className="text-xs text-slate-500 font-mono font-semibold">{member.rollNo}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================================================
          4. JOINT SECRETARIES (3)
         ================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center space-x-3 border-l-4 border-blue-500 pl-3">
          <Sparkles className="w-6 h-6 text-blue-500" />
          <h2 className="text-2xl font-bold font-heading text-slate-900">
            Joint Secretaries (3)
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {teamData.jointSecretaries.map((member) => (
            <div 
              key={member.id}
              className="glass-panel p-6 rounded-3xl text-center space-y-4 border border-slate-200/80 hover:shadow-md transition-all group"
            >
              <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-white shadow-sm mx-auto group-hover:scale-105 transition-transform duration-300">
                <img 
                  src={member.photo} 
                  alt={member.name} 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-1">
                <h4 className="text-lg font-bold font-heading text-slate-900">
                  {member.name}
                </h4>
                {member.rollNo && (
                  <p className="text-xs text-slate-500 font-mono font-semibold">{member.rollNo}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================================================
          5. TREASURERS (3)
         ================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center space-x-3 border-l-4 border-emerald-500 pl-3">
          <Wallet className="w-6 h-6 text-emerald-500" />
          <h2 className="text-2xl font-bold font-heading text-slate-900">
            Treasurers (3)
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {teamData.treasurers.map((member) => (
            <div 
              key={member.id}
              className="glass-panel p-6 rounded-3xl text-center space-y-4 border border-emerald-100 hover:shadow-md transition-all group"
            >
              <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-white shadow-sm mx-auto group-hover:scale-105 transition-transform duration-300">
                <img 
                  src={member.photo} 
                  alt={member.name} 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-1">
                <h4 className="text-lg font-bold font-heading text-slate-900">
                  {member.name}
                </h4>
                {member.rollNo && (
                  <p className="text-xs text-slate-500 font-mono font-semibold">{member.rollNo}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================================================
          6. EXECUTIVE MEMBERS ({teamData.executives.length})
         ================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center space-x-3 border-l-4 border-indigo-500 pl-3">
          <UserCheck className="w-6 h-6 text-indigo-500" />
          <h2 className="text-2xl font-bold font-heading text-slate-900">
            Executive Members ({teamData.executives.length})
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {teamData.executives.map((member) => (
            <div key={member.id} className="glass-panel p-5 rounded-3xl text-center space-y-3 border border-slate-200/80 hover:shadow-md transition-all group">
              <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 border-white shadow-sm mx-auto group-hover:scale-105 transition-transform duration-300">
                <img src={member.photo} alt={member.name} loading="lazy" decoding="async" className="w-full h-full object-cover" />
              </div>
              <div className="space-y-0.5">
                <h5 className="text-sm sm:text-base font-bold text-slate-900">{member.name}</h5>
                {member.rollNo && (
                  <p className="text-xs text-slate-500 font-mono font-semibold">{member.rollNo}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================================================
          7. MULTIMEDIA TEAM (8)
         ================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center space-x-3 border-l-4 border-pink-500 pl-3">
          <Video className="w-6 h-6 text-pink-500" />
          <h2 className="text-2xl font-bold font-heading text-slate-900">
            Multimedia Team (8)
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {teamData.multimedia.map((member) => (
            <div key={member.id} className="glass-panel p-5 rounded-3xl text-center space-y-3 border border-slate-200/80 hover:shadow-md transition-all group">
              <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 border-white shadow-sm mx-auto group-hover:scale-105 transition-transform duration-300">
                <img src={member.photo} alt={member.name} loading="lazy" decoding="async" className="w-full h-full object-cover" />
              </div>
              <div className="space-y-0.5">
                <h5 className="text-sm sm:text-base font-bold text-slate-900">{member.name}</h5>
                {member.rollNo && (
                  <p className="text-xs text-slate-500 font-mono font-semibold">{member.rollNo}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================================================
          8. TECHNICAL TEAM (7)
         ================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center space-x-3 border-l-4 border-teal-500 pl-3">
          <Code className="w-6 h-6 text-teal-500" />
          <h2 className="text-2xl font-bold font-heading text-slate-900">
            Technical Team (7)
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {teamData.technical.map((member) => (
            <div key={member.id} className="glass-panel p-5 rounded-3xl text-center space-y-3 border border-slate-200/80 hover:shadow-md transition-all group">
              <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 border-white shadow-sm mx-auto group-hover:scale-105 transition-transform duration-300">
                <img src={member.photo} alt={member.name} loading="lazy" decoding="async" className="w-full h-full object-cover" />
              </div>
              <div className="space-y-0.5">
                <h5 className="text-sm sm:text-base font-bold text-slate-900">{member.name}</h5>
                {member.rollNo && (
                  <p className="text-xs text-slate-500 font-mono font-semibold">{member.rollNo}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================================================
          9. NEWSLETTER TEAM (6)
         ================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center space-x-3 border-l-4 border-amber-500 pl-3">
          <Newspaper className="w-6 h-6 text-amber-500" />
          <h2 className="text-2xl font-bold font-heading text-slate-900">
            Newsletter Team (6)
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {teamData.newsletter.map((member) => (
            <div key={member.id} className="glass-panel p-5 rounded-3xl text-center space-y-3 border border-slate-200/80 hover:shadow-md transition-all group">
              <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 border-white shadow-sm mx-auto group-hover:scale-105 transition-transform duration-300">
                <img src={member.photo} alt={member.name} loading="lazy" decoding="async" className="w-full h-full object-cover" />
              </div>
              <div className="space-y-0.5">
                <h5 className="text-sm sm:text-base font-bold text-slate-900">{member.name}</h5>
                {member.rollNo && (
                  <p className="text-xs text-slate-500 font-mono font-semibold">{member.rollNo}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
