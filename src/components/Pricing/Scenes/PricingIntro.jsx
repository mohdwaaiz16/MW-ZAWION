import React from 'react';

const PricingIntro = ({ innerRef }) => {
  return (
    <div 
      ref={innerRef}
      className="absolute inset-0 w-full h-full flex flex-col items-center justify-center pointer-events-none opacity-0 pricing-intro-container"
    >
      <div className="flex flex-col items-center gap-4 text-center">
        <span className="text-mw-accent font-mono text-xs tracking-widest font-bold intro-label">
          MW ZAWION / PRICING
        </span>
        
        <div className="w-8 h-[1px] bg-mw-dark my-4 intro-line"></div>
        
        <span className="text-mw-muted font-sans text-xs tracking-[0.3em] font-semibold uppercase intro-tiny">
          EVERY BUILD IS DIFFERENT.
        </span>

        <h2 className="text-[12vw] md:text-[8vw] font-bold tracking-tighter text-mw-white leading-none mt-12 intro-title">
          WHAT ARE WE<br />BUILDING?
        </h2>
        
        <p className="text-mw-muted text-sm md:text-lg tracking-widest text-center mt-8 intro-subtext">
          From a first digital presence to a complete intelligent system.
        </p>
      </div>
    </div>
  );
};

export default PricingIntro;
