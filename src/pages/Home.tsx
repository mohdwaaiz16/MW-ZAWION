import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { motion, useScroll } from 'framer-motion';
import { Marquee } from '../components/UI/Marquee';

export default function Home() {
  const containerRef = useRef<HTMLElement>(null);
  useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main ref={containerRef} className="w-full">
      {/* 10. HERO SECTION */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="z-10 text-center flex flex-col items-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl md:text-[7rem] font-bold uppercase tracking-tighter leading-[0.9]"
          >
            We Make <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mw-purple via-mw-pink to-mw-orange">The Internet</span> <br />
            Look Better.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 text-white/70 max-w-lg mx-auto text-sm md:text-base"
          >
            MW Zawion is a creative digital studio building bold websites, digital experiences and technology for ambitious businesses, brands and creators.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 flex flex-col md:flex-row gap-6"
          >
            <button 
              data-cursor="hover" 
              className="bg-mw-offwhite text-mw-black font-semibold px-8 py-4 rounded-full uppercase tracking-wider text-xs hover:scale-105 transition-transform"
            >
              Start a Project ↗
            </button>
            <button 
              data-cursor="hover" 
              className="border border-mw-offwhite/30 text-mw-offwhite font-semibold px-8 py-4 rounded-full uppercase tracking-wider text-xs hover:bg-mw-offwhite hover:text-mw-black transition-colors"
            >
              View Our Work
            </button>
          </motion.div>
        </div>
        
        {/* Background Visual System (11) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-[800px] aspect-square bg-mw-purple rounded-full blur-[120px] opacity-20 pointer-events-none mix-blend-screen" />
        <div className="absolute top-1/4 right-1/4 w-[40vw] max-w-[400px] aspect-square bg-mw-pink rounded-full blur-[100px] opacity-10 pointer-events-none mix-blend-screen" />
        
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-5 pointer-events-none"></div>
      </section>
      
      {/* 12. MARQUEE SECTION */}
      <section className="py-12 md:py-24 border-y border-white/10 overflow-hidden bg-mw-black relative z-10">
        <Marquee speed={25} className="font-display font-bold text-4xl md:text-7xl uppercase text-white/40 tracking-tighter">
          <span className="px-8 text-mw-purple">WE DESIGN</span> • 
          <span className="px-8 text-mw-pink">WE BUILD</span> • 
          <span className="px-8 text-mw-orange">WE EXPERIMENT</span> • 
          <span className="px-8 text-mw-green">WE CREATE</span> • 
        </Marquee>
      </section>

      {/* 13. INTRODUCTION SECTION */}
      <section className="min-h-screen flex items-center justify-center py-32 px-6 md:px-12 relative">
        <div className="max-w-6xl w-full">
          <h2 className="font-display text-4xl md:text-[5.5rem] font-bold leading-[1.1] tracking-tighter uppercase mb-12">
            Digital Experiences <br />
            <span className="text-white/30">That Don't Feel</span> <br />
            Generic.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div></div>
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed">
              From the first idea to the final launch, MW Zawion combines design, development and technology to create digital experiences people remember.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
