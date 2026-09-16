import React from 'react';

const SceneScale = ({ innerRef }) => {
  return (
    <div 
      ref={innerRef}
      className="absolute inset-0 w-full h-full flex flex-col items-center justify-center pointer-events-none opacity-0 scene-scale-container"
    >
      <div className="absolute top-12 left-6 md:left-12 flex flex-col gap-1 scale-header opacity-0">
        <span className="text-mw-accent font-mono text-xs tracking-widest font-bold">03</span>
        <span className="text-mw-muted font-sans text-xs tracking-[0.3em] font-semibold">SCALE</span>
      </div>

      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden scale-network opacity-0">
        {/* Futuristic architectural network visualization */}
        <svg className="w-full h-full absolute inset-0 opacity-40" xmlns="http://www.w3.org/2000/svg">
          {/* Abstract Nodes */}
          <circle cx="50%" cy="20%" r="4" fill="#00FFD1" />
          <circle cx="80%" cy="50%" r="4" fill="#00FFD1" />
          <circle cx="20%" cy="50%" r="4" fill="#00FFD1" />
          <circle cx="50%" cy="80%" r="4" fill="#00FFD1" />
          <circle cx="50%" cy="50%" r="6" fill="transparent" stroke="#00FFD1" strokeWidth="2" />
          
          {/* Connecting Lines */}
          <path d="M 50% 20% L 80% 50% L 50% 80% L 20% 50% Z" stroke="#333" strokeWidth="1" fill="none" />
          <path d="M 50% 20% L 50% 50% L 50% 80%" stroke="#333" strokeWidth="1" fill="none" strokeDasharray="4 4" />
          <path d="M 20% 50% L 50% 50% L 80% 50%" stroke="#333" strokeWidth="1" fill="none" strokeDasharray="4 4" />
        </svg>
        
        {/* Labels for the network */}
        <div className="absolute top-[18%] left-[50%] -translate-x-1/2 text-[10px] font-mono text-mw-muted">API</div>
        <div className="absolute top-[50%] right-[15%] -translate-y-1/2 text-[10px] font-mono text-mw-muted">FRONTEND</div>
        <div className="absolute top-[50%] left-[15%] -translate-y-1/2 text-[10px] font-mono text-mw-muted">BACKEND</div>
        <div className="absolute bottom-[18%] left-[50%] -translate-x-1/2 text-[10px] font-mono text-mw-muted">DATABASE</div>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl px-6 md:px-12 mt-20 md:mt-0">
        <h3 className="scale-price text-[15vw] md:text-[8vw] font-bold tracking-tighter text-mw-accent leading-none opacity-0 mb-4">
          ₹1L+
        </h3>
        <h2 className="scale-title text-3xl md:text-5xl font-bold tracking-tighter text-mw-white mb-6 opacity-0">
          BUILD THE SYSTEM.
        </h2>
        <p className="scale-desc text-mw-muted text-sm md:text-base max-w-2xl mb-8 leading-relaxed mx-auto opacity-0">
          For businesses ready for custom digital products and web applications.
        </p>

        <div className="scale-features opacity-0 flex flex-wrap justify-center gap-2 max-w-3xl mb-12">
          {["Custom UI / UX", "Advanced interactions", "Web applications", "Authentication", "Database", "Admin dashboard", "API integrations", "Custom backend", "Advanced animations", "Analytics", "Deployment", "30 days support"].map(f => (
            <span key={f} className="text-xs md:text-sm font-mono text-mw-muted border border-mw-dark px-3 py-1 rounded">
              {f}
            </span>
          ))}
        </div>

        <div className="scale-cta opacity-0 flex items-center justify-center gap-6">
          <span className="text-xs tracking-widest text-mw-accent border border-mw-accent/30 px-4 py-2 rounded-full">
            4–8 WEEKS
          </span>
          <button className="text-xs font-bold tracking-widest text-mw-white uppercase cursor-hover">
            BUILD THE SYSTEM →
          </button>
        </div>
      </div>
    </div>
  );
};

export default SceneScale;
