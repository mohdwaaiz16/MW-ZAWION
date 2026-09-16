import React from 'react';

const SceneExperiences = ({ innerRef }) => {
  return (
    <div ref={innerRef} className="absolute inset-0 flex flex-col items-center justify-center opacity-0 pointer-events-none z-30 w-full h-full bg-mw-black overflow-hidden">
      
      {/* Fluid/Chaos Background Elements */}
      <div className="experiences-bg absolute inset-0 opacity-0 pointer-events-none">
        <div className="experiences-fragment absolute top-1/4 left-1/4 w-32 h-1 bg-mw-white transform -rotate-45 opacity-20"></div>
        <div className="experiences-fragment absolute bottom-1/3 right-1/4 w-48 h-[1px] bg-mw-white transform rotate-12 opacity-20"></div>
        <div className="experiences-fragment absolute top-1/2 right-1/3 w-16 h-16 border border-mw-white rounded-full opacity-10"></div>
        <div className="experiences-fragment absolute bottom-1/4 left-1/3 w-24 h-24 border border-mw-accent opacity-20"></div>
      </div>

      <div className="experiences-header absolute top-12 left-6 md:left-12 opacity-0">
        <span className="text-mw-accent font-mono text-xs tracking-widest uppercase">03 / EXPERIENCE</span>
      </div>

      <h2 className="experiences-text text-[12vw] md:text-[10vw] font-bold tracking-tighter text-mw-white uppercase m-0 leading-none z-10 mix-blend-difference">
        EXPERIENCE
      </h2>
      
      <p className="experiences-subtext text-mw-muted font-bold text-sm md:text-xl tracking-widest uppercase mt-8 text-center opacity-0 z-10">
        SYSTEMS BECOME EXPERIENCES.
      </p>

    </div>
  );
};

export default SceneExperiences;
