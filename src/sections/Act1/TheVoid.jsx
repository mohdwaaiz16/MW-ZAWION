import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TheVoid = () => {
  const containerRef = useRef(null);
  const wordsRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    
    // Create a timeline pinned to the container
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "+=4000",
        scrub: 1,
        pin: true,
      }
    });

    // Animate words
    // Initial state: hide all
    gsap.set(wordsRef.current, { autoAlpha: 0, scale: 0.8, z: -500 });
    
    // BUILD.
    tl.to(wordsRef.current[0], { autoAlpha: 1, scale: 1, z: 0, duration: 1 })
      .to(wordsRef.current[0], { autoAlpha: 0, scale: 1.5, z: 500, duration: 1, filter: "blur(10px)" })
      
    // CREATE.
      .to(wordsRef.current[1], { autoAlpha: 1, scale: 1, z: 0, duration: 1 })
      .to(wordsRef.current[1], { autoAlpha: 0, scale: 1.5, z: 500, duration: 1, filter: "blur(10px)" })
      
    // TRANSFORM.
      .to(wordsRef.current[2], { autoAlpha: 1, scale: 1, z: 0, duration: 1 })
      .to(wordsRef.current[2], { autoAlpha: 0, scale: 1.5, z: 500, duration: 1, filter: "blur(10px)" })
      
    // MW ZAWION
      .to(wordsRef.current[3], { autoAlpha: 1, scale: 1, z: 0, duration: 1 })
      
      // Supporting copy fades in
      .to(wordsRef.current[4], { autoAlpha: 1, y: -20, duration: 1 }, "<")
      .to(wordsRef.current[5], { autoAlpha: 1, y: -20, duration: 1 }, "<");

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="h-screen w-full bg-mw-black relative overflow-hidden perspective-1000">
      
      {/* Small corner text */}
      <div className="absolute top-8 right-8 text-xs font-medium tracking-widest text-mw-muted">
        MW ZAWION / 2026
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {["BUILD.", "CREATE.", "TRANSFORM."].map((word, index) => (
          <h1
            key={word}
            ref={el => wordsRef.current[index] = el}
            className="absolute text-5xl md:text-[12vw] font-bold tracking-tighter text-mw-white leading-none mix-blend-difference"
          >
            {word}
          </h1>
        ))}

        {/* Final State container */}
        <div 
          ref={el => wordsRef.current[3] = el}
          className="absolute flex flex-col items-center justify-center gap-8"
        >
          <h1 className="text-5xl md:text-[10vw] font-bold tracking-tight text-mw-white leading-none">
            MW ZAWION
          </h1>
        </div>

        <p 
          ref={el => wordsRef.current[4] = el}
          className="absolute mt-[15vw] md:mt-[8vw] text-mw-muted text-sm md:text-lg tracking-widest text-center max-w-md px-6 opacity-0"
        >
          Digital experiences engineered for the next generation.
        </p>
        
        <div 
          ref={el => wordsRef.current[5] = el}
          className="absolute mt-[25vw] md:mt-[16vw] flex gap-6 opacity-0"
        >
          <a href="#contact" className="px-8 py-4 bg-mw-white text-mw-black font-bold tracking-wider text-xs md:text-sm hover:bg-mw-accent hover:text-mw-black transition-colors duration-300 flex items-center gap-2 group">
            START A PROJECT
            <span className="transform transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a href="#work" className="px-8 py-4 border border-mw-dark text-mw-white font-bold tracking-wider text-xs md:text-sm hover:border-mw-accent hover:text-mw-accent transition-colors duration-300">
            EXPLORE THE WORK
          </a>
        </div>

      </div>

    </section>
  );
};

export default TheVoid;
