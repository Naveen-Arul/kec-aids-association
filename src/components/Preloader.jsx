import React, { useState, useEffect } from 'react';

export const Preloader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Progress counter animation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFading(true);
            setTimeout(() => {
              if (onFinish) onFinish();
            }, 700); // match transition duration
          }, 300);
          return 100;
        }
        // Smooth random increment
        const next = prev + Math.floor(Math.random() * 12) + 6;
        return next > 100 ? 100 : next;
      });
    }, 90);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-950 text-white transition-opacity duration-700 ease-in-out ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* BACKGROUND NEURAL GLOW BLOBS */}
      <div className="absolute w-96 h-96 bg-brand-cyan/15 rounded-full blur-3xl animate-pulse" />
      <div className="absolute w-96 h-96 bg-blue-600/15 rounded-full blur-3xl animate-pulse delay-500" />

      {/* CENTRAL CIRCULAR LOGO & RING ANIMATION */}
      <div className="relative flex items-center justify-center mb-8">
        
        {/* OUTER SPINNING GRADIENT RING (Enlarged by 30%) */}
        <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full p-1 bg-gradient-to-tr from-brand-cyan via-emerald-400 to-brand-blue animate-spin duration-3000 shadow-2xl shadow-cyan-500/30" />

        {/* SECOND COUNTER-SPINNING RING */}
        <div className="absolute w-60 h-60 sm:w-68 sm:h-68 rounded-full border-2 border-dashed border-cyan-400/40 animate-spin duration-7000" />

        {/* PULSING PING RING */}
        <div className="absolute w-56 h-56 sm:w-64 sm:h-64 rounded-full border-2 border-emerald-400/30 animate-ping" />

        {/* INNER LOGO CONTAINER (Enlarged by 30%) */}
        <div className="absolute w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-slate-900/90 backdrop-blur-md p-2.5 shadow-inner flex items-center justify-center overflow-hidden border border-white/10">
          <img
            src="/assets/circular-logo.png"
            alt="AI & DS Association Logo"
            className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      {/* BRANDING TEXT */}
      <div className="text-center space-y-3 z-10 max-w-sm px-4">
        <h2 className="text-xl sm:text-2xl font-extrabold font-heading tracking-wide bg-gradient-to-r from-white via-slate-100 to-cyan-300 bg-clip-text text-transparent uppercase">
          AI & DS Association
        </h2>

        <p className="text-[11px] font-mono tracking-widest text-brand-cyan uppercase">
          Innovate • Analyze • Transform
        </p>

        {/* PROGRESS BAR & COUNTER */}
        <div className="pt-4 space-y-2">
          <div className="w-56 sm:w-64 h-1.5 bg-slate-800 rounded-full overflow-hidden mx-auto p-0.5 border border-slate-700">
            <div
              className="h-full bg-gradient-to-r from-brand-blue via-brand-cyan to-emerald-400 rounded-full transition-all duration-200"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 w-56 sm:w-64 mx-auto">
            <span>Loading...</span>
            <span className="text-brand-cyan font-bold">{progress}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};
