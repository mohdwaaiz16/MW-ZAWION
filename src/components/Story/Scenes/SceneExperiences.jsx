import React from 'react';
import { clsx } from 'clsx';

const SceneExperiences = ({ innerRef }) => {
  return (
    <div 
      ref={innerRef}
      className="absolute inset-0 w-full h-full flex flex-col items-center justify-center opacity-0 pointer-events-none"
    >
      <div className="absolute top-12 left-6 md:left-12 flex flex-col gap-1 experiences-header opacity-0">
        <span className="text-mw-accent font-mono text-xs tracking-widest font-bold">03 / 04</span>
        <span className="text-mw-muted font-sans text-xs tracking-[0.3em] font-semibold">THE PRODUCT</span>
      </div>

      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden experiences-bg opacity-0">
        {/* Abstract flowing particles/ribbons placeholder */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-mw-accent/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00AAFF]/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>
        
        {/* Project UI Fragments */}
        <div className="experiences-fragment absolute top-[15%] left-[10%] w-64 h-32 bg-mw-dark/80 backdrop-blur border border-mw-muted/20 rounded-lg opacity-0 -rotate-6"></div>
        <div className="experiences-fragment absolute bottom-[15%] right-[10%] w-48 h-48 bg-mw-dark/80 backdrop-blur border border-mw-muted/20 rounded-lg opacity-0 rotate-12"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <h2 className="experiences-text text-[12vw] md:text-[9vw] font-bold tracking-tighter text-mw-white leading-none cursor-hover">
          EXPERIENCES
        </h2>
        <p className="experiences-subtext text-mw-muted text-sm md:text-lg tracking-widest text-center mt-8 opacity-0">
          Systems become experiences.
        </p>
      </div>

    </div>
  );
};

export default SceneExperiences;
