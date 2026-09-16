import React from 'react';

const SceneGrowth = ({ innerRef }) => {
  return (
    <div 
      ref={innerRef}
      className="absolute inset-0 w-full h-full flex flex-col items-center justify-center pointer-events-none opacity-0 scene-growth-container"
    >
      <div className="absolute top-12 left-6 md:left-12 flex flex-col gap-1 growth-header opacity-0">
        <span className="text-mw-accent font-mono text-xs tracking-widest font-bold">02</span>
        <span className="text-mw-muted font-sans text-xs tracking-[0.3em] font-semibold">GROWTH</span>
      </div>

      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden growth-bg opacity-0">
        {/* Subtle grid or abstract interface fragments */}
        <div className="absolute top-1/3 right-1/4 w-64 h-32 border border-mw-dark bg-mw-black/50 backdrop-blur rounded opacity-30 rotate-3"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-[1px] bg-mw-dark opacity-50"></div>
        <div className="absolute top-1/4 left-1/3 w-[1px] h-64 bg-mw-dark opacity-50"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center md:items-start max-w-5xl w-full px-6 md:px-12">
        <div className="flex flex-col md:flex-row-reverse items-center md:items-start justify-between w-full gap-12">
          
          {/* Content Right */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left growth-content opacity-0">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-mw-white mb-6">
              BUILD FOR<br />GROWTH.
            </h2>
            <p className="text-mw-muted text-sm md:text-base max-w-md mb-12 leading-relaxed">
              For growing businesses that need more than a basic website.
            </p>

            <ul className="flex flex-col gap-4 text-sm font-mono text-mw-muted mb-12">
              <li className="flex items-center gap-4"><span className="text-mw-accent">/</span> 6–10 pages</li>
              <li className="flex items-center gap-4"><span className="text-mw-accent">/</span> Premium custom design & Advanced animations</li>
              <li className="flex items-center gap-4"><span className="text-mw-accent">/</span> CMS / Content management</li>
              <li className="flex items-center gap-4"><span className="text-mw-accent">/</span> Lead capture & SEO setup</li>
              <li className="flex items-center gap-4"><span className="text-mw-accent">/</span> Analytics & Third-party integrations</li>
              <li className="flex items-center gap-4"><span className="text-mw-accent">/</span> Performance optimization & 14 days support</li>
            </ul>

            <div className="flex items-center gap-6">
              <span className="text-xs tracking-widest text-mw-accent border border-mw-accent/30 px-4 py-2 rounded-full">
                2–4 WEEKS
              </span>
              <button className="text-xs font-bold tracking-widest text-mw-white uppercase cursor-hover">
                BUILD FOR GROWTH →
              </button>
            </div>
          </div>

          {/* Pricing Left */}
          <div className="flex-1 flex items-center justify-center md:justify-start growth-price opacity-0">
            <h3 className="text-[20vw] md:text-[10vw] font-bold tracking-tighter text-mw-white leading-none">
              ₹50K<span className="text-mw-accent text-[10vw] md:text-[5vw]">+</span>
            </h3>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SceneGrowth;
