import React from 'react';
import { Calendar, CheckCircle2, Clock, Hourglass, ArrowRight } from 'lucide-react';
import { yearPlanData } from '../data/yearPlanData';

export const YearPlan = ({ setActivePage }) => {
  return (
    <div className="space-y-14 pb-16 animate-fadeIn">
      
      {/* PAGE HEADER */}
      <section className="text-center max-w-3xl mx-auto space-y-4 pt-6">
        <span className="text-xs font-extrabold uppercase tracking-widest text-brand-cyan font-mono">
          Annual Roadmap • Academic Year {yearPlanData.academicYear}
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900">
          Academic Year Plan
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          {yearPlanData.subtitle}
        </p>
      </section>

      {/* TIMELINE ROADMAP */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative border-l-4 border-cyan-200 ml-4 sm:ml-36 space-y-8 pl-6 sm:pl-10">
          {yearPlanData.timeline.map((item, idx) => {
            const isCompleted = item.status === 'Completed';
            const isUpcoming = item.status === 'Upcoming';

            return (
              <div key={item.id} className="relative group">
                
                {/* TIMELINE NODE PIN */}
                <div className={`absolute -left-[31px] sm:-left-[47px] top-1 w-6 h-6 rounded-full border-4 flex items-center justify-center bg-white transition-transform duration-300 group-hover:scale-125 ${
                  isCompleted ? 'border-emerald-500 text-emerald-500' :
                  isUpcoming ? 'border-cyan-500 text-cyan-500 animate-pulse' : 'border-slate-300 text-slate-400'
                }`}>
                  <span className="w-2 h-2 rounded-full bg-current" />
                </div>

                {/* MONTH LABEL (DESKTOP) */}
                <div className="hidden sm:block absolute -left-44 top-0 text-right w-36">
                  <span className="text-sm font-extrabold font-heading text-slate-900 block">
                    {item.month}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500 block">
                    {item.dateRange || 'Scheduled'}
                  </span>
                </div>

                {/* TIMELINE ITEM GLASS CARD */}
                <div className={`glass-panel p-6 rounded-3xl space-y-3 border transition-all ${
                  isUpcoming ? 'border-cyan-300 shadow-md bg-gradient-to-r from-white to-cyan-50/40' : 'border-slate-200/80 shadow-sm'
                }`}>
                  {/* MOBILE MONTH BADGE */}
                  <div className="sm:hidden flex items-center justify-between">
                    <span className="text-xs font-bold font-mono text-brand-blue">
                      {item.month}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">
                      {item.dateRange}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-full bg-cyan-100/80 text-brand-blue text-[11px] font-semibold font-mono">
                      {item.type}
                    </span>

                    {/* STATUS BADGE */}
                    <span className={`px-3 py-0.5 rounded-full text-xs font-bold flex items-center space-x-1 ${
                      isCompleted ? 'bg-emerald-100 text-emerald-700' :
                      isUpcoming ? 'bg-cyan-100 text-cyan-700' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {isCompleted ? <CheckCircle2 className="w-3.5 h-3.5 mr-1" /> :
                       isUpcoming ? <Clock className="w-3.5 h-3.5 mr-1 animate-spin" /> :
                       <Hourglass className="w-3.5 h-3.5 mr-1" />}
                      <span>{item.status}</span>
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-heading text-slate-900">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

              </div>
            );
          })}
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="text-center pt-8">
        <button
          onClick={() => setActivePage('events')}
          className="px-8 py-3.5 rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan text-white text-xs font-bold shadow-lg hover:scale-105 transition-all inline-flex items-center space-x-2"
        >
          <span>Explore Detailed Events List</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>

    </div>
  );
};
