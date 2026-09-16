import React from 'react';

const SceneSystems = ({ innerRef }) => {
  const labels = ["DESIGN", "CODE", "DATA", "AI", "AUTOMATION"];

  return (
    <div ref={innerRef} className="absolute inset-0 flex flex-col items-center justify-center opacity-0 pointer-events-none z-20 w-full h-full bg-mw-black">
      
      {/* Structural Grid */}
      <div className="systems-network absolute inset-0 opacity-0 pointer-events-none">
        <div className="absolute top-0 bottom-0 left-1/3 w-[1px] bg-mw-white opacity-10"></div>
        <div className="absolute top-0 bottom-0 left-2/3 w-[1px] bg-mw-white opacity-10"></div>
        <div className="absolute left-0 right-0 top-1/3 h-[1px] bg-mw-white opacity-10"></div>
        <div className="absolute left-0 right-0 top-2/3 h-[1px] bg-mw-white opacity-10"></div>
      </div>

      <div className="systems-header absolute top-12 left-6 md:left-12 opacity-0">
        <span className="text-mw-accent font-mono text-xs tracking-widest uppercase">02 / SYSTEM</span>
      </div>

      <h2 className="systems-text text-[15vw] md:text-[12vw] font-bold tracking-tighter text-mw-white uppercase m-0 leading-none">
        SYSTEM
      </h2>
      
      <p className="systems-subtext text-mw-muted font-bold text-sm md:text-xl tracking-widest uppercase mt-8 text-center opacity-0">
        IDEAS BECOME SYSTEMS.
      </p>

      {/* Floating Labels */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {labels.map((label, i) => {
          // Calculate randomish but fixed positions for the labels
          const angle = (i / labels.length) * Math.PI * 2;
          const radius = typeof window !== 'undefined' && window.innerWidth < 768 ? 120 : 250;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          
          return (
            <span 
              key={label}
              className="systems-label absolute text-xs font-mono tracking-widest text-mw-muted border border-mw-dark bg-mw-black px-4 py-2 opacity-0"
              style={{ transform: `translate(${x}px, ${y}px)` }}
            >
              {label}
            </span>
          );
        })}
      </div>

    </div>
  );
};

export default SceneSystems;
