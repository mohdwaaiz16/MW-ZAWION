import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Philosophy = () => {
  const containerRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const quoteRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "+=2000",
        scrub: 1,
        pin: true,
      }
    });

    gsap.set([text2Ref.current, quoteRef.current], { autoAlpha: 0 });

    tl.to(text1Ref.current, { scale: 0.8, autoAlpha: 0, duration: 1 })
      .to(text2Ref.current, { autoAlpha: 1, duration: 1 })
      .to(text2Ref.current, { scale: 0.8, autoAlpha: 0, duration: 1, delay: 0.5 })
      .fromTo(quoteRef.current, { y: 50 }, { autoAlpha: 1, y: 0, duration: 1 });

  }, []);

  return (
    <section ref={containerRef} className="h-screen w-full bg-mw-black relative flex items-center justify-center overflow-hidden">
      
      <h2 
        ref={text1Ref} 
        className="absolute text-5xl md:text-[8vw] font-bold tracking-tighter text-mw-white text-center w-full px-4"
      >
        DON'T JUST BUILD IT.
      </h2>

      <h2 
        ref={text2Ref} 
        className="absolute text-5xl md:text-[8vw] font-bold tracking-tighter text-mw-accent text-center w-full px-4"
      >
        MAKE IT MATTER.
      </h2>

      <div 
        ref={quoteRef} 
        className="absolute flex flex-col items-center gap-6 max-w-3xl px-6 text-center"
      >
        <p className="text-xl md:text-3xl text-mw-muted font-light leading-relaxed">
          Good technology solves problems.
        </p>
        <p className="text-2xl md:text-4xl text-mw-white font-medium leading-relaxed">
          Great technology changes how people experience them.
        </p>
      </div>

    </section>
  );
};

export default Philosophy;
