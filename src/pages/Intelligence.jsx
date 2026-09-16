import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Intelligence = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    document.title = "MW Zawion — AI & Intelligent Systems";
    
    const container = containerRef.current;
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "+=4000",
        scrub: 1,
        pin: true,
      }
    });

    const intro1 = container.querySelector('.ai-intro-1');
    const intro2 = container.querySelector('.ai-intro-2');
    const list = container.querySelector('.ai-list');
    const core = container.querySelector('.ai-core-text');
    const formula = container.querySelector('.ai-formula');

    gsap.set([intro2, list, core, formula], { autoAlpha: 0, scale: 0.9, position: "absolute", top: "50%", left: "50%", xPercent: -50, yPercent: -50 });
    gsap.set(intro1, { position: "absolute", top: "50%", left: "50%", xPercent: -50, yPercent: -50 });

    tl.to(intro1, { autoAlpha: 0, scale: 1.1, duration: 1 })
      .to(intro2, { autoAlpha: 1, scale: 1, duration: 1 })
      .to(intro2, { autoAlpha: 0, scale: 1.1, duration: 1 })
      .to(list, { autoAlpha: 1, scale: 1, duration: 2 })
      .to(list, { autoAlpha: 0, scale: 1.1, duration: 1 })
      .to(core, { autoAlpha: 1, scale: 1, duration: 2 })
      .to(core, { autoAlpha: 0, scale: 1.1, duration: 1 })
      .to(formula, { autoAlpha: 1, scale: 1, duration: 2 })
      .to({}, { duration: 1 });

    return () => {
      ScrollTrigger.getAll().forEach(t => {
        if(t.vars.trigger === container) t.kill();
      });
    };
  }, []);

  return (
    <div className="w-full bg-mw-black relative overflow-hidden">
      {/* Network Background Mock */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="w-full h-full border border-mw-accent/20 rounded-full scale-[2] translate-y-1/2 translate-x-1/2 animate-spin-slow"></div>
        <div className="w-full h-full border border-[#00AAFF]/20 rounded-full scale-[3] -translate-y-1/4 -translate-x-1/4 animate-spin-slow reverse"></div>
      </div>

      <div ref={containerRef} className="h-screen w-full relative z-10">
        <h2 className="ai-intro-1 text-[8vw] md:text-[5vw] font-bold tracking-tighter text-mw-muted uppercase text-center w-full">
          WE DON'T JUST USE AI.
        </h2>
        
        <h2 className="ai-intro-2 text-[10vw] md:text-[6vw] font-bold tracking-tighter text-mw-white uppercase text-center w-full text-mw-accent">
          WE BUILD WITH IT.
        </h2>

        <div className="ai-list flex flex-col items-center gap-4 w-full">
          {["AI APPLICATIONS", "AI AGENTS", "AI AUTOMATION", "AI SEARCH", "AI WORKFLOWS", "AI SYSTEMS"].map((item) => (
            <h3 key={item} className="text-2xl md:text-5xl font-bold tracking-widest text-mw-white uppercase opacity-80 hover:opacity-100 hover:text-mw-accent transition-colors cursor-hover">
              {item}
            </h3>
          ))}
        </div>

        <h2 className="ai-core-text text-[15vw] md:text-[10vw] font-bold tracking-tighter text-mw-white uppercase text-center w-full">
          THE MACHINE
        </h2>

        <div className="ai-formula flex flex-col items-center gap-6 w-full text-center">
          <span className="text-xl md:text-3xl font-mono text-mw-accent tracking-widest">INTELLIGENCE</span>
          <span className="text-mw-muted">+</span>
          <span className="text-xl md:text-3xl font-mono text-mw-white tracking-widest">DESIGN</span>
          <span className="text-mw-muted">+</span>
          <span className="text-xl md:text-3xl font-mono text-mw-white tracking-widest">CODE</span>
          <span className="text-mw-accent">=</span>
          <span className="text-3xl md:text-6xl font-bold tracking-tighter text-mw-white uppercase">EXPERIENCE</span>
        </div>
      </div>
    </div>
  );
};

export default Intelligence;
