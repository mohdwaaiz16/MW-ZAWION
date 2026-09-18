import { useEffect } from 'react';
import Lenis from 'lenis';

export default function Home() {
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
    <main className="w-full">
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        {/* Placeholder Hero for now */}
        <div className="z-10 text-center flex flex-col items-center">
          <h1 className="font-display text-5xl md:text-8xl font-bold uppercase tracking-tight leading-none">
            We Make <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mw-purple via-mw-pink to-mw-orange">The Internet</span> <br />
            Look Better.
          </h1>
          
          <div className="mt-12 flex gap-6">
            <button 
              data-cursor="hover" 
              className="bg-mw-offwhite text-mw-black font-semibold px-8 py-4 rounded-full uppercase tracking-wider text-sm hover:scale-105 transition-transform"
            >
              Start a Project ↗
            </button>
            <button 
              data-cursor="hover" 
              className="border border-mw-offwhite text-mw-offwhite font-semibold px-8 py-4 rounded-full uppercase tracking-wider text-sm hover:bg-mw-offwhite hover:text-mw-black transition-colors"
            >
              View Our Work
            </button>
          </div>
        </div>
        
        {/* Background blobs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-mw-purple rounded-full blur-[120px] opacity-20 pointer-events-none" />
      </section>
      
      <section className="h-screen bg-mw-black flex items-center justify-center border-t border-mw-offwhite/10">
        <h2 className="text-4xl">Scroll Test</h2>
      </section>
    </main>
  );
}
