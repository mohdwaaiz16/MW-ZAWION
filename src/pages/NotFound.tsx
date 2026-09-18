import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Lenis from 'lenis';
import { Link } from 'react-router-dom';

export default function NotFound() {
  const containerRef = useRef<HTMLElement>(null);

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
    <main ref={containerRef} className="w-full bg-mw-black pt-24 min-h-screen text-mw-offwhite relative overflow-hidden flex flex-col justify-center items-center px-6 md:px-12">
      
      {/* 404 Grid Background */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay pointer-events-none" />

      {/* Decorative Blob */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute w-[600px] h-[600px] bg-gradient-to-tr from-mw-purple/20 to-mw-pink/10 rounded-full blur-[80px] pointer-events-none mix-blend-screen"
      />

      <div className="max-w-4xl w-full relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs font-bold tracking-widest text-mw-pink mb-8 uppercase"
        >
          ERROR 404
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-6xl md:text-[8rem] font-bold uppercase tracking-tighter leading-[0.85] text-white flex flex-col"
        >
          <span>Lost</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-mw-pink to-mw-orange">In The</span>
          <span>Internet?</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-12 text-white/60 text-xl font-light"
        >
          Looks like this page doesn't exist.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-16 flex flex-col sm:flex-row justify-center gap-6"
        >
          <Link to="/" data-cursor="hover" className="bg-white text-black font-bold px-8 py-4 rounded-full text-xs tracking-widest uppercase hover:bg-mw-purple hover:text-white transition-colors">
            BACK HOME →
          </Link>
          <Link to="/work" data-cursor="hover" className="border border-white/20 text-white font-bold px-8 py-4 rounded-full text-xs tracking-widest uppercase hover:bg-white/10 transition-colors">
            VIEW OUR WORK →
          </Link>
        </motion.div>
      </div>

    </main>
  );
}
