import React from 'react';
import { clsx } from 'clsx';

const SceneImpact = ({ innerRef }) => {
  return (
    <div 
      ref={innerRef}
      className="absolute inset-0 w-full h-full flex flex-col items-center justify-center opacity-0 pointer-events-none"
    >
      <div className="absolute top-12 left-6 md:left-12 flex flex-col gap-1 impact-header opacity-0">
        <span className="text-mw-accent font-mono text-xs tracking-widest font-bold">04 / 04</span>
        <span className="text-mw-muted font-sans text-xs tracking-[0.3em] font-semibold">THE OUTCOME</span>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <h2 className="impact-text text-[15vw] md:text-[12vw] font-bold tracking-tighter text-mw-white leading-none">
          IMPACT
        </h2>
        <div className="impact-subtext mt-12 flex flex-col gap-2 items-center opacity-0">
          <p className="text-mw-muted text-lg md:text-2xl tracking-wide text-center font-light">
            Experiences should move people.
          </p>
          <p className="text-mw-white text-lg md:text-2xl tracking-wide text-center font-medium">
            Not just pixels.
          </p>
        </div>
      </div>

    </div>
  );
};

export default SceneImpact;
