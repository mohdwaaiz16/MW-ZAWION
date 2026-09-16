import React from 'react';

const SceneLaunch = ({ innerRef }) => {
  return (
    <div 
      ref={innerRef}
      className="absolute inset-0 w-full h-full flex flex-col items-center justify-center pointer-events-none opacity-0 scene-launch-container"
    >
      <div className="absolute top-12 left-6 md:left-12 flex flex-col gap-1 launch-header opacity-0">
        <span className="text-mw-accent font-mono text-xs tracking-widest font-bold">01</span>
        <span className="text-mw-muted font-sans text-xs tracking-[0.3em] font-semibold">LAUNCH</span>
      </div>

      <div className="relative z-10 flex flex-col items-center md:items-start max-w-5xl w-full px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between w-full gap-12">
          
          {/* Content Left */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left launch-content opacity-0">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-mw-white mb-6">
              GET YOUR<br />BUSINESS ONLINE.
            </h2>
            <p className="text-mw-muted text-sm md:text-base max-w-md mb-12 leading-relaxed">
              For businesses, creators and brands ready to establish a strong digital presence.
            </p>

            <ul className="flex flex-col gap-4 text-sm font-mono text-mw-muted mb-12">
              <li className="flex items-center gap-4"><span className="text-mw-accent">/</span> 4–6 pages</li>
              <li className="flex items-center gap-4"><span className="text-mw-accent">/</span> Custom UI & Responsive design</li>
              <li className="flex items-center gap-4"><span className="text-mw-accent">/</span> Mobile optimization</li>
              <li className="flex items-center gap-4"><span className="text-mw-accent">/</span> Contact / WhatsApp integration</li>
              <li className="flex items-center gap-4"><span className="text-mw-accent">/</span> Basic SEO & Deployment</li>
              <li className="flex items-center gap-4"><span className="text-mw-accent">/</span> 7 days post-launch support</li>
            </ul>

            <div className="flex items-center gap-6">
              <span className="text-xs tracking-widest text-mw-accent border border-mw-accent/30 px-4 py-2 rounded-full">
                7–14 DAYS
              </span>
              <button className="text-xs font-bold tracking-widest text-mw-white uppercase cursor-hover">
                START WITH LAUNCH →
              </button>
            </div>
          </div>

          {/* Pricing Right */}
          <div className="flex-1 flex items-center justify-center md:justify-end launch-price opacity-0">
            <div className="relative">
              <h3 className="text-[20vw] md:text-[10vw] font-bold tracking-tighter text-mw-white leading-none">
                ₹25K<span className="text-mw-accent text-[10vw] md:text-[5vw]">+</span>
              </h3>
              {/* Decorative line that will connect to Growth */}
              <div className="absolute right-0 top-1/2 w-0 h-[1px] bg-mw-accent launch-line -z-10 origin-left pointer-events-none"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SceneLaunch;
