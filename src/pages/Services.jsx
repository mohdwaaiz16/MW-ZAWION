import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ServicesList from '../sections/Services/ServicesList';

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    document.title = "MW Zawion — Digital Services";
    
    const container = containerRef.current;
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "+=5000",
        scrub: 1,
        pin: true,
      }
    });

    const w1 = container.querySelector('.engine-w1');
    const w2 = container.querySelector('.engine-w2');
    const w3 = container.querySelector('.engine-w3');
    const w4 = container.querySelector('.engine-w4');
    const w5 = container.querySelector('.engine-w5');
    const engine = container.querySelector('.engine-final');

    gsap.set([w1, w2, w3, w4, w5, engine], { autoAlpha: 0, scale: 0.8, filter: "blur(10px)", position: "absolute", top: "50%", left: "50%", xPercent: -50, yPercent: -50 });
    
    tl.to(w1, { autoAlpha: 1, scale: 1, filter: "blur(0px)", duration: 2 })
      .to(w1, { autoAlpha: 0, scale: 1.5, filter: "blur(20px)", letterSpacing: "0.2em", duration: 1 })
      
      .to(w2, { autoAlpha: 1, scale: 1, filter: "blur(0px)", duration: 2 }, "-=0.5")
      .to(w2, { autoAlpha: 0, scale: 1.5, filter: "blur(20px)", letterSpacing: "0.2em", duration: 1 })
      
      .to(w3, { autoAlpha: 1, scale: 1, filter: "blur(0px)", duration: 2 }, "-=0.5")
      .to(w3, { autoAlpha: 0, scale: 1.5, filter: "blur(20px)", letterSpacing: "0.2em", duration: 1 })
      
      .to(w4, { autoAlpha: 1, scale: 1, filter: "blur(0px)", duration: 2 }, "-=0.5")
      .to(w4, { autoAlpha: 0, scale: 1.5, filter: "blur(20px)", letterSpacing: "0.2em", duration: 1 })
      
      .to(w5, { autoAlpha: 1, scale: 1, filter: "blur(0px)", duration: 2 }, "-=0.5")
      .to(w5, { autoAlpha: 0, scale: 1.5, filter: "blur(20px)", letterSpacing: "0.2em", duration: 1 })

      .to(engine, { autoAlpha: 1, scale: 1, filter: "blur(0px)", duration: 2 })
      .to({}, { duration: 1 });

    return () => {
      ScrollTrigger.getAll().forEach(t => {
        if(t.vars.trigger === container) t.kill();
      });
    };
  }, []);

  return (
    <div className="w-full bg-mw-black">
      <div ref={containerRef} className="h-screen w-full relative overflow-hidden flex items-center justify-center">
        <div className="absolute top-12 left-6 md:left-12 flex flex-col gap-1">
          <span className="text-mw-accent font-mono text-xs tracking-widest uppercase">WHAT WE BUILD.</span>
        </div>

        <h2 className="engine-w1 text-[12vw] md:text-[8vw] font-bold tracking-tighter text-mw-white uppercase m-0 leading-none text-center whitespace-nowrap">WEBSITES</h2>
        <h2 className="engine-w2 text-[12vw] md:text-[8vw] font-bold tracking-tighter text-mw-white uppercase m-0 leading-none text-center whitespace-nowrap">WEB APPLICATIONS</h2>
        <h2 className="engine-w3 text-[12vw] md:text-[8vw] font-bold tracking-tighter text-mw-white uppercase m-0 leading-none text-center whitespace-nowrap">AI SYSTEMS</h2>
        <h2 className="engine-w4 text-[12vw] md:text-[8vw] font-bold tracking-tighter text-mw-white uppercase m-0 leading-none text-center whitespace-nowrap">AUTOMATION</h2>
        <h2 className="engine-w5 text-[12vw] md:text-[8vw] font-bold tracking-tighter text-mw-white uppercase m-0 leading-none text-center whitespace-nowrap">DIGITAL EXPERIENCES</h2>
        <h2 className="engine-final text-[15vw] md:text-[10vw] font-bold tracking-tighter text-mw-accent uppercase m-0 leading-none text-center whitespace-nowrap">THE ENGINE</h2>
      </div>

      <ServicesList />
    </div>
  );
};

export default Services;
