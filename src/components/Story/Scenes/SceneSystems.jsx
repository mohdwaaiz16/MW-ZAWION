import React from 'react';
import { clsx } from 'clsx';

const SceneSystems = ({ innerRef }) => {
  const labels = ["DESIGN", "CODE", "DATA", "AI", "AUTOMATION"];

  return (
    <div 
      ref={innerRef}
      className="absolute inset-0 w-full h-full flex flex-col items-center justify-center opacity-0 pointer-events-none"
    >
      <div className="absolute top-12 left-6 md:left-12 flex flex-col gap-1 systems-header opacity-0">
        <span className="text-mw-accent font-mono text-xs tracking-widest font-bold">02 / 04</span>
        <span className="text-mw-muted font-sans text-xs tracking-[0.3em] font-semibold">THE STRUCTURE</span>
      </div>

      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden systems-network opacity-0">
        {/* We'll animate these SVGs in the main GSAP timeline to act as the network */}
        <svg className="w-full h-full absolute inset-0 opacity-20" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20%" cy="30%" r="2" fill="#00FFD1" className="node" />
          <circle cx="80%" cy="70%" r="2" fill="#00FFD1" className="node" />
          <circle cx="70%" cy="20%" r="2" fill="#00FFD1" className="node" />
          <circle cx="30%" cy="80%" r="2" fill="#00FFD1" className="node" />
          
          <path d="M 20% 30% L 70% 20% L 80% 70% L 30% 80% Z" stroke="#8A8A8A" strokeWidth="0.5" fill="none" className="edge" />
          <path d="M 20% 30% L 80% 70%" stroke="#8A8A8A" strokeWidth="0.5" fill="none" className="edge" />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <h2 className="systems-text text-[15vw] md:text-[12vw] font-bold tracking-tighter text-mw-white leading-none cursor-hover">
          SYSTEMS
        </h2>
        <p className="systems-subtext text-mw-muted text-sm md:text-lg tracking-widest text-center mt-8 opacity-0">
          Ideas become systems.
        </p>
      </div>

      <div className="absolute w-full max-w-4xl mx-auto inset-0 pointer-events-none z-20 flex items-center justify-center">
        {labels.map((label, i) => {
          // Calculate positions in a rough circle
          const angle = (i / labels.length) * Math.PI * 2 - Math.PI / 2;
          const radius = window.innerWidth > 768 ? 300 : 150;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <div 
              key={label}
              className="systems-label absolute text-xs md:text-sm font-bold tracking-[0.2em] text-mw-accent border border-mw-accent/20 bg-mw-black/60 backdrop-blur-sm px-4 py-2 rounded-full opacity-0"
              style={{ transform: `translate(${x}px, ${y}px)` }}
            >
              {label}
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default SceneSystems;
