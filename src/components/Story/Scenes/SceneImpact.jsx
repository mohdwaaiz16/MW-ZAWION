import React from 'react';

const SceneImpact = ({ innerRef }) => {
  return (
    <div ref={innerRef} className="absolute inset-0 flex flex-col items-center justify-center opacity-0 pointer-events-none z-40 w-full h-full bg-mw-black">
      
      <div className="impact-header absolute top-12 left-6 md:left-12 opacity-0">
        <span className="text-mw-accent font-mono text-xs tracking-widest uppercase">04 / IMPACT</span>
      </div>

      <h2 className="impact-text text-[20vw] md:text-[18vw] font-bold tracking-tighter text-mw-white uppercase m-0 leading-none">
        IMPACT
      </h2>
      
      <p className="impact-subtext text-mw-muted font-bold text-sm md:text-xl tracking-widest uppercase mt-8 text-center opacity-0">
        EXPERIENCES SHOULD MOVE PEOPLE.
      </p>

    </div>
  );
};

export default SceneImpact;
