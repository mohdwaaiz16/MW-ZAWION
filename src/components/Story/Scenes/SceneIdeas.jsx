import React from 'react';

const SceneIdeas = ({ innerRef }) => {
  return (
    <div ref={innerRef} className="absolute inset-0 flex flex-col items-center justify-center opacity-0 pointer-events-none z-10 w-full h-full bg-mw-black">
      
      {/* Subtle light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-mw-white opacity-5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="ideas-header absolute top-12 left-6 md:left-12 opacity-0">
        <span className="text-mw-accent font-mono text-xs tracking-widest uppercase">01 / IDEA</span>
      </div>

      <h2 className="ideas-text text-[20vw] md:text-[18vw] font-bold tracking-tighter text-mw-white uppercase m-0 leading-none">
        IDEA
      </h2>
      
      <p className="ideas-subtext text-mw-muted font-bold text-sm md:text-xl tracking-widest uppercase mt-8 text-center max-w-xl opacity-0">
        EVERY EXPERIENCE<br/>STARTS SOMEWHERE.
      </p>

    </div>
  );
};

export default SceneIdeas;
