import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const CinematicPricing = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "+=6000",
        scrub: 1,
        pin: true,
      }
    });

    const intro = container.querySelector('.pricing-intro');
    const plans = container.querySelectorAll('.pricing-plan');
    const aiPlan = container.querySelector('.pricing-ai');
    
    // Initial Setup
    gsap.set(plans, { autoAlpha: 0, scale: 0.8, y: 50 });
    gsap.set(aiPlan, { autoAlpha: 0, scale: 1.2, filter: "blur(20px)" });

    tl.to(intro, { autoAlpha: 0, y: -100, duration: 1 })
      
      // LAUNCH (Small Structure)
      .to(plans[0], { autoAlpha: 1, scale: 1, y: 0, duration: 1 })
      .to(plans[0], { autoAlpha: 0, scale: 1.2, duration: 1 }, "+=0.5")
      
      // GROWTH (Larger Structure)
      .to(plans[1], { autoAlpha: 1, scale: 1, y: 0, duration: 1 })
      .to(plans[1], { autoAlpha: 0, scale: 1.2, duration: 1 }, "+=0.5")
      
      // SCALE (Complex System)
      .to(plans[2], { autoAlpha: 1, scale: 1, y: 0, duration: 1 })
      .to(plans[2], { autoAlpha: 0, scale: 1.2, duration: 1 }, "+=0.5")
      
      // CUSTOM (Large Architecture)
      .to(plans[3], { autoAlpha: 1, scale: 1, y: 0, duration: 1 })
      .to(plans[3], { autoAlpha: 0, scale: 1.2, duration: 1 }, "+=0.5")
      
      // AI SYSTEMS
      .to(aiPlan, { autoAlpha: 1, scale: 1, filter: "blur(0px)", duration: 1.5 })
      .to({}, { duration: 1 });

    return () => {
      ScrollTrigger.getAll().forEach(t => {
        if(t.vars.trigger === container) t.kill();
      });
    };
  }, []);

  return (
    <div ref={containerRef} className="h-screen w-full relative overflow-hidden bg-mw-black flex items-center justify-center">
      
      <div className="pricing-intro absolute inset-0 flex flex-col items-center justify-center px-4">
        <h1 className="text-[12vw] md:text-[8vw] font-bold tracking-tighter text-mw-white uppercase m-0 leading-none text-center">
          WHAT ARE WE BUILDING?
        </h1>
        <p className="text-mw-muted font-light text-sm md:text-xl tracking-widest uppercase mt-8 text-center max-w-2xl">
          From a first digital presence to a complete intelligent system.
        </p>
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-4">
        {/* LAUNCH */}
        <div className="pricing-plan absolute text-center">
          <div className="w-16 h-16 border border-mw-white/20 mx-auto mb-12 flex items-center justify-center">
            <div className="w-4 h-4 bg-mw-white"></div>
          </div>
          <h2 className="text-[10vw] md:text-[6vw] font-bold tracking-tighter text-mw-white leading-none">01 / LAUNCH</h2>
          <p className="text-mw-muted text-xl md:text-2xl mt-4 tracking-widest font-mono">₹25K+</p>
        </div>
        
        {/* GROWTH */}
        <div className="pricing-plan absolute text-center">
          <div className="w-32 h-32 border border-mw-white/20 mx-auto mb-12 grid grid-cols-2 grid-rows-2 gap-2 p-2">
            <div className="bg-mw-white/50"></div><div className="bg-mw-white/30"></div>
            <div className="bg-mw-white/80"></div><div className="bg-mw-white/10"></div>
          </div>
          <h2 className="text-[10vw] md:text-[6vw] font-bold tracking-tighter text-mw-white leading-none">02 / GROWTH</h2>
          <p className="text-mw-muted text-xl md:text-2xl mt-4 tracking-widest font-mono">₹50K+</p>
        </div>
        
        {/* SCALE */}
        <div className="pricing-plan absolute text-center">
          <div className="w-48 h-48 border border-mw-white/20 mx-auto mb-12 grid grid-cols-4 grid-rows-4 gap-1 p-1">
            {Array.from({length: 16}).map((_, i) => (
              <div key={i} className="bg-mw-white" style={{ opacity: Math.random() }}></div>
            ))}
          </div>
          <h2 className="text-[10vw] md:text-[6vw] font-bold tracking-tighter text-mw-white leading-none">03 / SCALE</h2>
          <p className="text-mw-muted text-xl md:text-2xl mt-4 tracking-widest font-mono">₹1L+</p>
        </div>
        
        {/* CUSTOM */}
        <div className="pricing-plan absolute text-center w-full max-w-4xl">
          <div className="w-full h-64 border border-mw-white/20 mx-auto mb-12 flex flex-col gap-2 p-2 relative overflow-hidden">
            <div className="absolute top-0 bottom-0 left-1/3 w-[1px] bg-mw-white/20"></div>
            <div className="absolute top-0 bottom-0 left-2/3 w-[1px] bg-mw-white/20"></div>
            <div className="w-1/3 h-1/4 bg-mw-white/40 mb-auto"></div>
            <div className="w-2/3 h-1/3 bg-mw-white/80 ml-auto"></div>
            <div className="w-1/2 h-1/4 bg-mw-white/20 mr-auto mt-auto"></div>
          </div>
          <h2 className="text-[10vw] md:text-[6vw] font-bold tracking-tighter text-mw-white leading-none">04 / CUSTOM</h2>
          <p className="text-mw-muted text-xl md:text-2xl mt-4 tracking-widest font-mono">₹2L+</p>
        </div>

        {/* AI SYSTEMS */}
        <div className="pricing-ai absolute text-center">
          <div className="w-32 h-32 rounded-full border border-mw-accent mx-auto mb-12 flex items-center justify-center">
             <div className="w-16 h-16 rounded-full bg-mw-white animate-pulse"></div>
          </div>
          <h2 className="text-[10vw] md:text-[6vw] font-bold tracking-tighter text-mw-white leading-none">AI SYSTEMS</h2>
          <p className="text-mw-muted text-xl md:text-2xl mt-4 tracking-widest font-mono">₹75,000 – ₹5,00,000+</p>
          <p className="text-mw-muted text-xs mt-8 tracking-widest uppercase">Final pricing depends on scope and complexity.</p>
        </div>
      </div>
      
    </div>
  );
};

export default CinematicPricing;
