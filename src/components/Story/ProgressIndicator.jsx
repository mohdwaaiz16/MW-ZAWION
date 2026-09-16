import React from 'react';

const ProgressIndicator = ({ currentScene, progress }) => {
  const scenes = ["IDEAS", "SYSTEMS", "EXPERIENCES", "IMPACT"];
  const index = Math.max(0, Math.min(3, currentScene));

  return (
    <div className="fixed bottom-12 right-6 md:right-12 z-50 flex flex-col gap-2 pointer-events-none mix-blend-difference">
      <div className="flex justify-between items-end gap-4">
        <span className="text-mw-accent font-mono text-xs tracking-widest font-bold">
          0{index + 1}
        </span>
        <span className="text-mw-white font-sans text-[10px] md:text-xs tracking-[0.3em] font-semibold uppercase">
          {scenes[index]}
        </span>
      </div>
      <div className="w-32 md:w-48 h-[1px] bg-mw-dark relative overflow-hidden">
        <div 
          className="absolute top-0 left-0 h-full bg-mw-white transition-all duration-300 ease-out"
          style={{ width: `${progress * 100}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressIndicator;
