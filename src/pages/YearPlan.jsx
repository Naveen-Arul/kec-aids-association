import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, CheckCircle2, Clock, Hourglass, ArrowRight } from 'lucide-react';
import { yearPlanData } from '../data/yearPlanData';

export const YearPlan = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-14 pb-16 animate-fadeIn">
      
      {/* PAGE HEADER */}
      <section className="text-center max-w-3xl mx-auto space-y-4 pt-6 px-4">
        <span className="text-xs font-extrabold uppercase tracking-widest text-brand-cyan font-mono bg-cyan-50/80 px-4 py-1.5 rounded-full border border-cyan-200 inline-block">
          Strategic Roadmap • Academic Year {yearPlanData.academicYear}
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900">
          Academic Year Plan
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
          {yearPlanData.subtitle}
        </p>
      </section>

      {/* TIMELINE ROADMAP (MATCHING PROTOTYPE SPECIFICATION) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full py-8">
          
          {/* CENTER LINE (Desktop: Center 50%, Mobile: Left 24px) */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-blue via-brand-cyan to-slate-300 z-0" />
          <div className="md:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-blue via-brand-cyan to-slate-300 z-0" />

          {/* TIMELINE ITEMS */}
          <div className="space-y-12 md:space-y-16">
            {yearPlanData.timeline.map((item, idx) => {
              const isCompleted = item.status === 'Completed';
              const isUpcoming = item.status === 'Upcoming';
              const isEven = idx % 2 === 0;

              return (
                <div 
                  key={item.id} 
                  className="relative flex flex-col md:flex-row items-center justify-between w-full group"
                >
                  {/* CENTRAL TIMELINE NODE */}
                  <div 
                    className={`absolute z-10 w-5 h-5 rounded-full border-4 bg-white transition-all duration-300 group-hover:scale-125 ${
                      isEven ? 'md:left-1/2' : 'md:left-1/2'
                    } left-6 -translate-x-1/2 top-6 md:top-1/2 md:-translate-y-1/2 ${
                      isCompleted ? 'border-emerald-500 text-emerald-500 shadow-sm shadow-emerald-500/50' :
                      isUpcoming ? 'border-brand-cyan text-brand-cyan animate-pulse shadow-md shadow-cyan-500/50' :
                      'border-slate-300 text-slate-400'
                    }`}
                  />

                  {/* LEFT SIDE CONTENT (For even items on desktop) */}
                  {isEven ? (
                    <div className="w-full md:w-[45%] pl-14 md:pl-0 text-left md:text-right md:pr-8">
                      <div className={`glass-panel p-6 rounded-3xl space-y-3 border transition-all duration-300 hover:shadow-lg ${
                        isUpcoming ? 'border-brand-cyan shadow-md bg-gradient-to-br from-white via-white to-cyan-50/40' : 'border-slate-200/80 shadow-sm'
                      }`}>
                        <div className="flex flex-wrap items-center justify-between md:justify-end gap-2">
                          <span className="px-3 py-1 rounded-full bg-cyan-100/80 text-brand-blue text-[11px] font-bold font-mono">
                            {item.type}
                          </span>
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

                        <h3 className="text-lg font-bold font-heading text-slate-900 group-hover:text-brand-blue transition-colors">
                          {item.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {item.description}
                        </p>

                        <div className="pt-2 flex items-center gap-1.5 text-xs font-bold text-brand-blue md:justify-end border-t border-slate-100">
                          <Calendar className="w-4 h-4 text-brand-cyan" />
                          <span>{item.month} • {item.dateRange}</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="hidden md:block w-[45%]" />
                  )}

                  {/* RIGHT SIDE CONTENT (For odd items on desktop) */}
                  {!isEven ? (
                    <div className="w-full md:w-[45%] pl-14 md:pl-8 text-left">
                      <div className={`glass-panel p-6 rounded-3xl space-y-3 border transition-all duration-300 hover:shadow-lg ${
                        isUpcoming ? 'border-brand-cyan shadow-md bg-gradient-to-br from-white via-white to-cyan-50/40' : 'border-slate-200/80 shadow-sm'
                      }`}>
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="px-3 py-1 rounded-full bg-cyan-100/80 text-brand-blue text-[11px] font-bold font-mono">
                            {item.type}
                          </span>
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

                        <h3 className="text-lg font-bold font-heading text-slate-900 group-hover:text-brand-blue transition-colors">
                          {item.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {item.description}
                        </p>

                        <div className="pt-2 flex items-center gap-1.5 text-xs font-bold text-brand-blue border-t border-slate-100">
                          <Calendar className="w-4 h-4 text-brand-cyan" />
                          <span>{item.month} • {item.dateRange}</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="hidden md:block w-[45%]" />
                  )}

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="text-center pt-8">
        <button
          onClick={() => navigate('/events')}
          className="px-8 py-3.5 rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan text-white text-xs font-bold shadow-lg hover:scale-105 transition-all inline-flex items-center space-x-2"
        >
          <span>Explore Detailed Events List</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>

    </div>
  );
};
