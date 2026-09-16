import React from 'react';

const SceneCustom = ({ innerRef }) => {
  return (
    <div 
      ref={innerRef}
      className="absolute inset-0 w-full h-full flex flex-col items-center justify-center pointer-events-none opacity-0 scene-custom-container"
    >
      <div className="absolute top-12 left-6 md:left-12 flex flex-col gap-1 custom-header opacity-0">
        <span className="text-mw-accent font-mono text-xs tracking-widest font-bold">04 / CUSTOM</span>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl w-full px-6">
        <h2 className="custom-title text-[12vw] md:text-[8vw] font-bold tracking-tighter text-mw-white leading-none mb-8 opacity-0">
          SOMETHING BIGGER?
        </h2>
        
        <h3 className="custom-price text-[10vw] md:text-[6vw] font-bold tracking-tighter text-mw-accent leading-none mb-6 opacity-0">
          ₹2L+
        </h3>
        
        <p className="custom-desc text-mw-white text-lg md:text-2xl tracking-wide font-medium mb-4 opacity-0">
          Complex ideas need custom engineering.
        </p>
        
        <p className="custom-subdesc text-mw-muted text-sm md:text-base max-w-2xl mb-12 opacity-0">
          For AI products, automation, SaaS platforms, intelligent systems and complex digital experiences.
        </p>

        <div className="custom-services opacity-0 flex flex-wrap justify-center gap-4 max-w-3xl mb-12">
          {["AI APPLICATIONS", "AI AGENTS", "AUTOMATION", "SAAS", "ADVANCED DASHBOARDS", "CUSTOM PLATFORMS", "INTERNAL TOOLS", "API ARCHITECTURE"].map(s => (
            <span key={s} className="text-xs font-mono font-bold tracking-widest text-mw-muted">
              {s}
            </span>
          ))}
        </div>

        <div className="custom-cta opacity-0 flex flex-col items-center gap-4">
          <span className="text-[10px] tracking-widest text-mw-muted uppercase">
            STARTING FROM ₹2,00,000
          </span>
          <button className="text-sm md:text-base font-bold tracking-widest text-mw-white uppercase cursor-hover border-b border-mw-accent pb-1 hover:text-mw-accent transition-colors">
            LET'S BUILD SOMETHING BIG →
          </button>
        </div>
      </div>
    </div>
  );
};

export default SceneCustom;
