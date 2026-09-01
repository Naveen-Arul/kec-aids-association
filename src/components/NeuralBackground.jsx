import React from 'react';

export const NeuralBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-40">
      {/* Light blue and green soft gradient blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-200/40 rounded-full blur-3xl" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-emerald-100/40 rounded-full blur-3xl" />
      
      {/* Subtle circuit line SVG grid overlay */}
      <svg className="w-full h-full stroke-blue-600/10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <pattern id="neural-grid" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M 60 0 L 0 0 0 60" fill="none" strokeWidth="0.75" />
          <circle cx="60" cy="0" r="2" fill="rgba(0, 188, 212, 0.3)" />
          <circle cx="0" cy="60" r="2" fill="rgba(13, 71, 161, 0.2)" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#neural-grid)" />
      </svg>
    </div>
  );
};
