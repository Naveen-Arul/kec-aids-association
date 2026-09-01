import React from 'react';
import { 
  Brain, 
  Target, 
  Flag, 
  Compass, 
  Award, 
  CheckCircle2, 
  Sparkles, 
  Users, 
  Lightbulb, 
  BookOpen, 
  BarChart3, 
  Layers,
  ArrowRight
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const About = ({ setActivePage }) => {
  return (
    <div className="space-y-16 pb-16 animate-fadeIn">
      
      {/* PAGE HEADER */}
      <section className="text-center max-w-3xl mx-auto space-y-4 pt-6">
        <span className="text-xs font-extrabold uppercase tracking-widest text-brand-cyan font-mono">
          Department & Association Profile
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900">
          About AI & Data Science
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Nurturing academic excellence, pioneering computational research, and empowering students to excel in intelligent systems and analytics.
        </p>
      </section>

      {/* ==================================================
          1. ABOUT THE DEPARTMENT
         ================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl space-y-8">
          <div className="space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-blue font-mono">
              Academic Foundation
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900">
              {siteConfig.aboutDepartment.title}
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed max-w-4xl">
              {siteConfig.aboutDepartment.description}
            </p>
          </div>

          {/* 7 DOMAIN GLASS CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {siteConfig.aboutDepartment.coreDomains.map((domain, idx) => (
              <div 
                key={idx} 
                className="bg-white/80 p-5 rounded-2xl border border-slate-200/80 shadow-sm hover:border-brand-cyan transition-colors space-y-2"
              >
                <div className="flex items-center space-x-2 text-brand-blue font-bold font-heading text-sm">
                  <Brain className="w-4 h-4 text-brand-cyan flex-shrink-0" />
                  <span>{domain.name}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {domain.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          2. VISION & MISSION
         ================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* VISION CARD */}
        <div className="lg:col-span-4 glass-panel p-8 rounded-3xl border border-cyan-200/80 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-blue to-brand-cyan flex items-center justify-center text-white shadow-md">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold font-heading text-slate-900">
              Department Vision
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed italic border-l-4 border-brand-cyan pl-4 bg-cyan-50/50 py-2 rounded-r-xl">
              "{siteConfig.vision}"
            </p>
          </div>

          <div className="pt-4 border-t border-slate-200/60 text-xs text-slate-500 font-mono">
            Kongu Engineering College • Autonomous
          </div>
        </div>

        {/* MISSION GRID */}
        <div className="lg:col-span-8 space-y-6">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600">
              <Flag className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono font-extrabold uppercase tracking-widest text-emerald-600">
                Action Driven
              </span>
              <h3 className="text-2xl font-bold font-heading text-slate-900">
                Department Mission
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {siteConfig.mission.map((item, idx) => (
              <div key={idx} className="glass-panel p-5 rounded-2xl space-y-2 border border-slate-200/80">
                <div className="flex items-center space-x-2 text-slate-900 font-bold font-heading text-xs">
                  <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px] font-mono">
                    0{idx + 1}
                  </span>
                  <span>{item.title}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* ==================================================
          3. ABOUT THE ASSOCIATION
         ================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl relative overflow-hidden bg-gradient-to-br from-white/90 via-slate-50/80 to-cyan-50/40">
          
          <div className="max-w-3xl space-y-6">
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-cyan font-mono">
              Student Platform
            </span>
            <h2 className="text-3xl font-bold font-heading text-slate-900">
              About the Association
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              The Artificial Intelligence and Data Science Association serves as the flagship technical body of the department. It provides a collaborative environment for students to transform classroom knowledge into practical computational solutions.
            </p>

            {/* 6 PILLARS OF GROWTH */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              {[
                { title: "Learn", desc: "Foundational theory & concepts" },
                { title: "Build", desc: "Hands-on projects & apps" },
                { title: "Analyze", desc: "Data insights & modeling" },
                { title: "Compete", desc: "Hackathons & challenges" },
                { title: "Innovate", desc: "Emerging AI solutions" },
                { title: "Improve", desc: "Continuous skill refinement" }
              ].map((p, idx) => (
                <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200/80 text-center space-y-1">
                  <span className="text-sm font-extrabold font-heading text-brand-blue block">
                    {p.title}
                  </span>
                  <span className="text-[10px] text-slate-500 block">
                    {p.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ==================================================
          4. OBJECTIVES
         ================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-cyan font-mono">
            Core Objectives
          </span>
          <h2 className="text-3xl font-bold font-heading text-slate-900">
            Association Objectives
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {siteConfig.objectives.map((obj, idx) => (
            <div key={idx} className="glass-panel p-5 rounded-2xl space-y-3 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-xl bg-cyan-100 text-brand-blue font-bold font-mono text-xs flex items-center justify-center">
                  #{idx + 1}
                </span>
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              </div>
              <p className="text-xs text-slate-700 font-medium leading-relaxed">
                {obj}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ==================================================
          5. HOD SECTION
         ================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-cyan-200">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-4 flex flex-col items-center text-center">
              <div className="w-44 h-44 rounded-full overflow-hidden border-4 border-white shadow-xl mb-4">
                <img 
                  src={siteConfig.hod.photo} 
                  alt={siteConfig.hod.name}
                  className="w-full h-full object-cover" 
                />
              </div>
              <h3 className="text-xl font-bold font-heading text-slate-900">
                {siteConfig.hod.name}
              </h3>
              <p className="text-xs font-semibold text-brand-blue uppercase tracking-wider">
                {siteConfig.hod.designation}
              </p>
              <p className="text-[11px] text-slate-500">
                {siteConfig.hod.department}
              </p>
            </div>

            <div className="md:col-span-8 space-y-4">
              <span className="text-xs font-mono font-extrabold uppercase tracking-widest text-brand-cyan">
                HOD Message
              </span>
              <h3 className="text-2xl font-bold font-heading text-slate-900">
                Message from Head of the Department
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed bg-white/70 p-6 rounded-2xl border border-slate-200/80">
                {siteConfig.hod.message}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================
          6. OUR JOURNEY (VISUAL TIMELINE)
         ================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-cyan font-mono">
            Growth & Evolution
          </span>
          <h2 className="text-3xl font-bold font-heading text-slate-900">
            Our Journey
          </h2>
        </div>

        <div className="relative border-l-2 border-brand-cyan/40 ml-4 sm:ml-32 space-y-8 pl-6 sm:pl-8">
          {[
            { year: "2023", title: "Establishment of Department", desc: "Founding of the Artificial Intelligence and Data Science department at Kongu Engineering College with state-of-the-art computational infrastructure." },
            { year: "2024", title: "Association Formation", desc: "Formal inauguration of the AI & DS Student Association to coordinate technical workshops, guest lectures, and coding competitions." },
            { year: "2025", title: "Flagship Hackathons & Expansion", desc: "Organized multi-college hackathons, industrial expert sessions, and launched domain-specific technical learning circles." },
            { year: "2026", title: "Present & Future Roadmap", desc: "Expanding interactive learning platforms, industrial consultancy projects, and student innovation research." }
          ].map((milestone, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute -left-10 sm:-left-[42px] top-1 w-5 h-5 rounded-full bg-white border-4 border-brand-cyan group-hover:scale-125 transition-transform" />
              <div className="hidden sm:block absolute -left-36 top-0 text-xs font-extrabold font-mono text-brand-blue">
                {milestone.year}
              </div>
              <div className="glass-panel p-5 rounded-2xl max-w-2xl space-y-1">
                <span className="sm:hidden text-xs font-extrabold font-mono text-brand-blue block">
                  {milestone.year}
                </span>
                <h4 className="text-sm font-bold font-heading text-slate-900">
                  {milestone.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {milestone.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
