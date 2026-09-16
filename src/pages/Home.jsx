import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

const Home = () => {
  const containerRef = useRef(null);
  const textGroupRef = useRef(null);

  useEffect(() => {
    document.title = "MW Zawion — Digital Experiences, Web & AI";
    
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

    const init = container.querySelector('.hero-init');
    const build = container.querySelector('.hero-build');
    const create = container.querySelector('.hero-create');
    const transform = container.querySelector('.hero-transform');
    const brand = container.querySelector('.hero-brand');
    const ctas = container.querySelector('.hero-ctas');

    gsap.set([build, create, transform, brand, ctas], { autoAlpha: 0, scale: 0.8, filter: "blur(10px)", position: "absolute", top: "50%", left: "50%", xPercent: -50, yPercent: -50 });
    gsap.set(init, { autoAlpha: 1 });

    tl.to(init, { autoAlpha: 0, duration: 1 })
      .to(build, { autoAlpha: 1, scale: 1, filter: "blur(0px)", duration: 2 })
      .to(build, { autoAlpha: 0, scale: 1.5, filter: "blur(10px)", duration: 1 })
      .to(create, { autoAlpha: 1, scale: 1, filter: "blur(0px)", duration: 2 }, "-=0.5")
      .to(create, { autoAlpha: 0, scale: 1.5, filter: "blur(10px)", duration: 1 })
      .to(transform, { autoAlpha: 1, scale: 1, filter: "blur(0px)", duration: 2 }, "-=0.5")
      .to(transform, { autoAlpha: 0, scale: 1.5, filter: "blur(10px)", duration: 1 })
      .to(brand, { autoAlpha: 1, scale: 1, filter: "blur(0px)", duration: 2 }, "-=0.5")
      .to(ctas, { autoAlpha: 1, y: 50, duration: 1 }, "-=1")
      .to({}, { duration: 1 }); // Pause

    return () => {
      ScrollTrigger.getAll().forEach(t => {
        if(t.vars.trigger === container) t.kill();
      });
    };
  }, []);

  return (
    <div ref={containerRef} className="h-screen w-full relative overflow-hidden flex items-center justify-center">
      <div className="hero-init flex flex-col items-center gap-4 absolute">
        <span className="text-mw-muted font-mono text-xs tracking-widest uppercase">MW ZAWION / 2026</span>
        <span className="text-mw-accent font-mono text-[10px] tracking-widest animate-pulse">SYSTEM INITIALIZING...</span>
      </div>

      <h1 className="hero-build text-[15vw] md:text-[10vw] font-bold tracking-tighter text-mw-white uppercase m-0 leading-none">BUILD.</h1>
      <h1 className="hero-create text-[15vw] md:text-[10vw] font-bold tracking-tighter text-mw-white uppercase m-0 leading-none">CREATE.</h1>
      <h1 className="hero-transform text-[15vw] md:text-[10vw] font-bold tracking-tighter text-mw-white uppercase m-0 leading-none">TRANSFORM.</h1>
      
      <div className="hero-brand flex flex-col items-center w-full">
        <h1 className="text-[12vw] md:text-[8vw] font-bold tracking-tighter text-mw-white uppercase m-0 leading-none text-center">MW ZAWION</h1>
        <p className="text-mw-muted text-sm md:text-xl tracking-widest mt-6 text-center max-w-xl">
          Digital experiences engineered for the next generation.
        </p>
      </div>

      <div className="hero-ctas flex flex-col md:flex-row gap-6 mt-12 w-full justify-center text-center px-4">
        <Link to="/services" className="text-mw-black bg-mw-white hover:bg-mw-accent transition-colors font-bold tracking-widest uppercase text-xs px-8 py-4 cursor-hover w-full md:w-auto">
          ENTER THE SYSTEM →
        </Link>
        <Link to="/work" className="text-mw-white border border-mw-dark hover:border-mw-white transition-colors font-bold tracking-widest uppercase text-xs px-8 py-4 cursor-hover w-full md:w-auto">
          EXPLORE THE WORK →
        </Link>
      </div>
    </div>
  );
};

export default Home;
