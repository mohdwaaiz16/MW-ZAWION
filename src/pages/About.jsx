import React, { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    document.title = "MW Zawion — About";
  }, []);

  return (
    <div className="w-full min-h-screen bg-mw-black pt-32 pb-48 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-mw-white uppercase mb-4">
          BEHIND EVERY SYSTEM<br />
          <span className="text-mw-muted">IS A HUMAN.</span>
        </h1>
        
        <div className="mt-24">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-mw-accent uppercase mb-2">
            MOHAMMED WAAIZ
          </h2>
          <span className="text-mw-muted font-mono text-sm tracking-widest uppercase">Founder / Developer / Builder</span>
          
          <p className="text-mw-white/80 text-lg md:text-2xl mt-8 max-w-2xl leading-relaxed font-light">
            "I build digital products, websites and intelligent systems at the intersection of technology and creativity."
          </p>
        </div>

        <div className="mt-32">
          <div className="flex flex-col gap-12 border-l border-mw-dark pl-8 relative">
            <div className="relative">
              <div className="absolute -left-[37px] top-1 w-2 h-2 bg-mw-accent rounded-full"></div>
              <span className="text-mw-accent font-mono text-xs tracking-widest block mb-2">2024</span>
              <h3 className="text-2xl font-bold tracking-widest text-mw-white uppercase">IDEAS</h3>
            </div>
            
            <div className="relative">
              <div className="absolute -left-[37px] top-1 w-2 h-2 bg-mw-accent rounded-full"></div>
              <span className="text-mw-accent font-mono text-xs tracking-widest block mb-2">2025</span>
              <h3 className="text-2xl font-bold tracking-widest text-mw-white uppercase">ENGINEERING</h3>
            </div>
            
            <div className="relative">
              <div className="absolute -left-[37px] top-1 w-2 h-2 bg-mw-accent rounded-full shadow-[0_0_10px_#00FFD1]"></div>
              <span className="text-mw-accent font-mono text-xs tracking-widest block mb-2">2026</span>
              <h3 className="text-3xl font-bold tracking-widest text-mw-white uppercase">MW ZAWION</h3>
            </div>
            
            <div className="relative">
              <div className="absolute -left-[37px] top-1 w-2 h-2 border border-mw-dark bg-mw-black rounded-full"></div>
              <span className="text-mw-muted font-mono text-xs tracking-widest block mb-2">2027</span>
              <h3 className="text-2xl font-bold tracking-widest text-mw-muted uppercase">?</h3>
            </div>
          </div>
        </div>

        <div className="mt-32 flex flex-col md:flex-row justify-between items-start md:items-end border-t border-mw-dark pt-8">
          <div>
            <span className="text-mw-muted font-mono text-xs tracking-widest block mb-4">LOCATION</span>
            <span className="text-mw-white font-bold tracking-widest uppercase">Bangalore / India</span>
          </div>
          
          <div className="mt-12 md:mt-0 text-left md:text-right">
            <span className="text-mw-muted font-mono text-xs tracking-widest block mb-4">WHAT I BUILD</span>
            <div className="flex flex-wrap gap-x-4 gap-y-2 max-w-sm justify-start md:justify-end">
              {["WEB", "AI", "AUTOMATION", "ROBOTICS", "DIGITAL PRODUCTS"].map(item => (
                <span key={item} className="text-mw-white font-bold tracking-widest uppercase text-sm">{item}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
