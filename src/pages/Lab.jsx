import React, { useEffect, useState, useRef } from 'react';
import { clsx } from 'clsx';
import gsap from 'gsap';

const Lab = () => {
  const [activeExp, setActiveExp] = useState(0);
  const cursorRef = useRef(null);

  useEffect(() => {
    document.title = "MW Zawion — Creative Technology Lab";
    
    // Custom chaotic cursor for Lab
    const onMouseMove = (e) => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.5,
          ease: "power2.out"
        });
      }
    };
    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  const experiments = [
    { id: '01', name: 'PARTICLE FIELD' },
    { id: '02', name: 'AI CORE' },
    { id: '03', name: 'GRAVITY' },
    { id: '04', name: 'SIGNAL' },
    { id: '05', name: 'SYSTEM' },
    { id: '06', name: 'UNKNOWN' }
  ];

  return (
    <div className="w-full min-h-screen bg-mw-black relative overflow-hidden flex flex-col justify-center items-center">
      {/* Experimental Cursor Tracker */}
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-32 h-32 border border-mw-accent/50 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none mix-blend-screen z-0 animate-spin-slow"
      />

      <div className="absolute top-12 left-6 md:left-12 flex flex-col gap-1 z-10 pointer-events-none text-left w-full">
        <span className="text-mw-accent font-mono text-xs tracking-widest uppercase">NOT EVERYTHING NEEDS</span>
        <span className="text-mw-white font-mono text-xs tracking-widest uppercase">TO BE PRACTICAL.</span>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center mt-24">
        <h1 className="text-[15vw] md:text-[10vw] font-bold tracking-tighter text-mw-white leading-none opacity-20 hover:opacity-100 transition-opacity duration-1000 cursor-hover">
          THE LAB
        </h1>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 max-w-4xl mt-12 px-6">
          {["EXPERIMENTS", "PROTOTYPES", "AI", "ROBOTICS", "CREATIVE CODE", "AUTOMATION"].map((item, i) => (
            <span key={item} className="text-xs md:text-sm font-mono tracking-widest text-mw-muted uppercase hover:text-mw-accent transition-colors cursor-hover">
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center mt-24 gap-4 px-6 w-full max-w-2xl">
        {experiments.map((exp, i) => (
          <button 
            key={exp.id}
            onMouseEnter={() => setActiveExp(i)}
            className={clsx(
              "w-full flex items-center justify-between p-4 border transition-all duration-300 cursor-hover",
              activeExp === i ? "border-mw-accent bg-mw-accent/10" : "border-mw-dark/50 hover:border-mw-accent/50 text-mw-muted"
            )}
          >
            <span className="font-mono text-xs tracking-widest">{exp.id}</span>
            <span className="font-bold tracking-widest text-sm md:text-base">{exp.name}</span>
            <span className="font-mono text-[10px] opacity-50">[RUN]</span>
          </button>
        ))}
      </div>

    </div>
  );
};

export default Lab;
