import React from 'react';

const PricingProgress = ({ currentTier }) => {
  const tiers = [
    { id: 1, name: "LAUNCH" },
    { id: 2, name: "GROWTH" },
    { id: 3, name: "SCALE" },
    { id: 4, name: "CUSTOM" }
  ];

  // We only show progress for the main 4 tiers.
  const activeIndex = Math.max(0, Math.min(3, currentTier - 1));

  return (
    <div className="fixed top-1/2 left-6 -translate-y-1/2 z-50 hidden md:flex flex-col gap-6 pointer-events-none mix-blend-difference">
      {tiers.map((tier, idx) => {
        const isActive = idx === activeIndex;
        const isPast = idx < activeIndex;
        
        return (
          <div 
            key={tier.id} 
            className={`flex items-center gap-4 transition-all duration-500 ${isActive ? 'opacity-100 scale-100' : 'opacity-30 scale-90'}`}
          >
            <span className="text-xs font-mono font-bold tracking-widest text-mw-white">
              0{tier.id}
            </span>
            <div className={`w-12 h-[1px] transition-all duration-500 ${isActive ? 'bg-mw-accent w-16' : isPast ? 'bg-mw-white' : 'bg-mw-dark'}`} />
            <span className={`text-[10px] font-sans font-semibold tracking-[0.2em] uppercase transition-all duration-500 ${isActive ? 'text-mw-accent' : 'text-mw-white'}`}>
              {tier.name}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default PricingProgress;
