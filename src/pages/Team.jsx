import React from 'react';
import { ShieldCheck, UserCheck, Code, Palette, Video } from 'lucide-react';
import { teamData } from '../data/teamData';

export const Team = () => {
  return (
    <div className="space-y-16 pb-16 animate-fadeIn">
      
      {/* PAGE HEADER */}
      <section className="text-center max-w-3xl mx-auto space-y-4 pt-6">
        <span className="text-xs font-extrabold uppercase tracking-widest text-brand-cyan font-mono">
          Hierarchy & Leadership
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900">
          Association Team
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Guided by esteemed faculty mentors and led by dedicated student office bearers.
        </p>
      </section>

      {/* ==================================================
          1. FACULTY LEADERSHIP
         ================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
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
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md mx-auto group-hover:scale-105 transition-transform duration-300">
                <img 
                  src={member.photo} 
                  alt={member.name} 
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
          2. STUDENT LEADERSHIP HIERARCHY
         ================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex items-center space-x-3 border-l-4 border-brand-cyan pl-3">
          <UserCheck className="w-6 h-6 text-brand-cyan" />
          <h2 className="text-2xl font-bold font-heading text-slate-900">
            Student Leadership
          </h2>
        </div>

        {/* PRESIDENT (EMPHASIZED TOP CARD) */}
        <div className="max-w-md mx-auto">
          {teamData.leadership.slice(0, 1).map((member) => (
            <div 
              key={member.id}
              className="glass-panel p-8 rounded-3xl text-center space-y-4 border-2 border-brand-cyan shadow-xl bg-gradient-to-b from-white to-cyan-50/30 group relative overflow-hidden"
            >
              <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-brand-cyan text-slate-900 text-[10px] font-bold uppercase tracking-wider">
                Top Leadership
              </span>

              <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-lg mx-auto group-hover:scale-105 transition-transform duration-300">
                <img 
                  src={member.photo} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-extrabold font-heading text-slate-900">
                  {member.name}
                </h3>
                <p className="text-xs font-bold text-brand-blue uppercase tracking-widest font-mono">
                  {member.designation}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* SUBORDINATE LEADERS (VP, SECRETARY, JOINT SEC, TREASURER) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {teamData.leadership.slice(1).map((member) => (
            <div 
              key={member.id}
              className="glass-panel p-6 rounded-2xl text-center space-y-3 border border-slate-200/80 hover:shadow-md transition-all group"
            >
              <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-white shadow-sm mx-auto group-hover:scale-105 transition-transform duration-300">
                <img 
                  src={member.photo} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-0.5">
                <h4 className="text-base font-bold font-heading text-slate-900">
                  {member.name}
                </h4>
                <p className="text-xs font-semibold text-brand-teal uppercase tracking-wider">
                  {member.designation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================================================
          3. DOMAIN TEAMS (TECHNICAL, DESIGN, MEDIA)
         ================================================== */}
      
      {/* TECHNICAL TEAM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center space-x-3 border-l-4 border-emerald-500 pl-3">
          <Code className="w-5 h-5 text-emerald-500" />
          <h3 className="text-xl font-bold font-heading text-slate-900">
            Technical Team
          </h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {teamData.technical.map((member) => (
            <div key={member.id} className="glass-panel p-4 rounded-2xl text-center space-y-2 border border-slate-200/80">
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white shadow-sm mx-auto">
                <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h5 className="text-xs font-bold text-slate-900">{member.name}</h5>
                <p className="text-[10px] text-slate-500 uppercase">{member.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DESIGN TEAM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center space-x-3 border-l-4 border-amber-500 pl-3">
          <Palette className="w-5 h-5 text-amber-500" />
          <h3 className="text-xl font-bold font-heading text-slate-900">
            Design Team
          </h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {teamData.design.map((member) => (
            <div key={member.id} className="glass-panel p-4 rounded-2xl text-center space-y-2 border border-slate-200/80">
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white shadow-sm mx-auto">
                <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h5 className="text-xs font-bold text-slate-900">{member.name}</h5>
                <p className="text-[10px] text-slate-500 uppercase">{member.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MEDIA TEAM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center space-x-3 border-l-4 border-pink-500 pl-3">
          <Video className="w-5 h-5 text-pink-500" />
          <h3 className="text-xl font-bold font-heading text-slate-900">
            Media Team
          </h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 max-w-md">
          {teamData.media.map((member) => (
            <div key={member.id} className="glass-panel p-4 rounded-2xl text-center space-y-2 border border-slate-200/80">
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white shadow-sm mx-auto">
                <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h5 className="text-xs font-bold text-slate-900">{member.name}</h5>
                <p className="text-[10px] text-slate-500 uppercase">{member.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
