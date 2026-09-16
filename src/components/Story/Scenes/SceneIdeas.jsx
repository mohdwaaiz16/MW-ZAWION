import React from 'react';

const SceneIdeas = ({ innerRef }) => {
  return (
    <div 
      ref={innerRef}
      className="absolute inset-0 w-full h-full flex flex-col items-center justify-center opacity-0 pointer-events-none"
    >
      <div className="absolute top-12 left-6 md:left-12 flex flex-col gap-1">
        <span className="text-mw-accent font-mono text-xs tracking-widest font-bold">01 / 04</span>
        <span className="text-mw-muted font-sans text-xs tracking-[0.3em] font-semibold">THE BEGINNING</span>
      </div>

      {/* Decorative Line */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-[1px] bg-mw-accent shadow-[0_0_10px_#00FFD1] z-0 origin-left ideas-line"></div>

      <div className="relative z-10 flex flex-col items-center">
        <h2 className="ideas-text text-[20vw] md:text-[15vw] font-bold tracking-tighter text-mw-white leading-none cursor-hover">
          IDEAS
        </h2>
        <p className="ideas-subtext text-mw-muted text-sm md:text-lg tracking-widest text-center mt-8 opacity-0">
          Every experience starts somewhere.
        </p>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-4 ideas-scroll-hint opacity-0">
        <span className="text-mw-muted text-xs tracking-widest">SCROLL TO BUILD</span>
        <span className="text-mw-accent animate-bounce">↓</span>
      </div>
    </div>
  );
};

export default SceneIdeas;
