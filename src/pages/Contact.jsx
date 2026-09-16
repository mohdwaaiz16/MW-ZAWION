import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectEstimator from '../components/Estimator/ProjectEstimator';

const Contact = () => {
  const containerRef = useRef(null);
  const [showEstimator, setShowEstimator] = useState(false);

  useEffect(() => {
    document.title = "MW Zawion — Start a Project";
    
    if (showEstimator) return; // Disable scroll animations if modal is open

    const container = containerRef.current;
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "+=3000",
        scrub: 1,
        pin: true,
      }
    });

    const label = container.querySelector('.contact-label');
    const txt1 = container.querySelector('.contact-txt-1');
    const txt2 = container.querySelector('.contact-txt-2');
    const cta = container.querySelector('.contact-cta');

    gsap.set([txt1, txt2, cta], { autoAlpha: 0, scale: 0.9, position: "absolute", top: "50%", left: "50%", xPercent: -50, yPercent: -50 });
    gsap.set(label, { autoAlpha: 1 });

    tl.to(label, { autoAlpha: 0, duration: 0.5 })
      .to(txt1, { autoAlpha: 1, scale: 1, duration: 1 })
      .to(txt1, { autoAlpha: 0, scale: 1.1, duration: 1 })
      .to(txt2, { autoAlpha: 1, scale: 1, duration: 1 })
      .to(txt2, { autoAlpha: 0, scale: 1.1, duration: 1 })
      .to({}, { duration: 0.5 }) // Pause black screen
      .to(cta, { autoAlpha: 1, scale: 1, duration: 1 })
      .to({}, { duration: 1 });

    return () => {
      ScrollTrigger.getAll().forEach(t => {
        if(t.vars.trigger === container) t.kill();
      });
    };
  }, [showEstimator]);

  return (
    <>
      <div className="w-full bg-mw-black relative overflow-hidden">
        <div ref={containerRef} className="h-screen w-full relative z-10 flex flex-col items-center justify-center">
          <span className="contact-label text-mw-muted font-mono text-[10px] tracking-widest uppercase">
            FINAL CHAPTER
          </span>
          
          <h2 className="contact-txt-1 text-[12vw] md:text-[8vw] font-bold tracking-tighter text-mw-white uppercase text-center leading-none w-full">
            YOU HAVE<br />
            <span className="text-mw-accent">THE IDEA.</span>
          </h2>

          <h2 className="contact-txt-2 text-[12vw] md:text-[8vw] font-bold tracking-tighter text-mw-white uppercase text-center leading-none w-full">
            WE HAVE<br />
            <span className="text-mw-accent">THE TOOLS.</span>
          </h2>

          <div className="contact-cta flex flex-col items-center text-center w-full">
            <h2 className="text-[15vw] md:text-[10vw] font-bold tracking-tighter text-mw-white uppercase leading-none mb-8">
              LET'S BUILD.
            </h2>
            <p className="text-mw-muted text-lg tracking-widest mb-12">
              Have something worth building?
            </p>
            <button 
              onClick={() => setShowEstimator(true)}
              className="text-mw-black bg-mw-accent hover:bg-mw-white transition-colors font-bold tracking-widest uppercase text-sm px-12 py-6 cursor-hover"
            >
              START A PROJECT →
            </button>
          </div>
        </div>
      </div>

      {/* Project Estimator Modal overlay */}
      {showEstimator && (
        <div className="fixed inset-0 z-[100] bg-mw-black overflow-y-auto pt-24">
          <button 
            onClick={() => setShowEstimator(false)}
            className="fixed top-8 right-8 z-[110] text-xs font-bold tracking-widest text-mw-muted uppercase hover:text-mw-white cursor-hover"
          >
            CLOSE ✕
          </button>
          <ProjectEstimator />
        </div>
      )}
    </>
  );
};

export default Contact;
