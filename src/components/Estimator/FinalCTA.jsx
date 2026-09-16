import React from 'react';

const FinalCTA = () => {
  return (
    <section className="w-full bg-mw-black py-48 px-6 md:px-12 relative z-10 flex flex-col items-center justify-center text-center">
      <span className="text-[10px] md:text-xs tracking-[0.3em] font-mono text-mw-muted uppercase mb-8">
        NO PERFECT PACKAGE?
      </span>
      <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-mw-white mb-8">
        LET'S BUILD YOURS.
      </h2>
      <p className="text-mw-muted text-sm md:text-lg max-w-xl mx-auto mb-16 leading-relaxed">
        Tell us what you're imagining. We'll figure out the right way to build it.
      </p>
      <button className="px-8 py-4 bg-mw-white text-mw-black font-bold tracking-widest uppercase hover:bg-mw-accent transition-colors cursor-hover">
        START A PROJECT →
      </button>
    </section>
  );
};

export default FinalCTA;
