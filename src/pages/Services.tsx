import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import { services } from '../data/services';

export default function Services() {
  const containerRef = useRef<HTMLElement>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

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
    <main ref={containerRef} className="w-full bg-mw-black pt-24 min-h-screen">
      
      {/* 03 PAGE HERO */}
      <section className="min-h-[80vh] flex flex-col items-center justify-center relative overflow-hidden px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs font-bold tracking-widest text-mw-purple mb-8 uppercase"
        >
          SERVICES / 01
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl md:text-[8rem] font-bold uppercase tracking-tighter leading-[0.85] z-10"
        >
          We Build <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-mw-purple via-mw-pink to-mw-orange">Digital</span> <br />
          Experiences.
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-12 text-white/60 max-w-xl mx-auto text-sm md:text-lg z-10"
        >
          From strategy and design to development and launch, we create digital experiences built to make businesses stand out.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-12 flex gap-6 z-10"
        >
          <button data-cursor="hover" className="bg-white text-black font-semibold px-8 py-4 rounded-full text-xs tracking-widest uppercase hover:bg-mw-purple hover:text-white transition-colors">
            START A PROJECT ↗
          </button>
        </motion.div>
        
        {/* Abstract Background Elements */}
        <motion.div 
          animate={{ 
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-mw-purple rounded-full blur-[150px] opacity-20 mix-blend-screen pointer-events-none"
        />
      </section>

      {/* 05 SERVICE INTRODUCTION */}
      <section className="py-32 px-6 md:px-12 border-t border-white/10 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <h2 className="font-display text-4xl md:text-7xl font-bold uppercase tracking-tighter leading-none">
            Not Just <br />
            <span className="text-mw-pink">Websites.</span>
          </h2>
          <div className="flex items-end pb-2">
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-lg">
              We design and build digital experiences that combine strong visual identity, thoughtful UX and modern technology.
            </p>
          </div>
        </div>
      </section>

      {/* 06 MAIN SERVICES ACCORDION */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {services.map((service) => {
            const isExpanded = expandedId === service.id;
            
            return (
              <div 
                key={service.id} 
                className="border-t border-white/10 group relative"
              >
                {/* Accordion Header */}
                <button
                  data-cursor="explore"
                  onClick={() => setExpandedId(isExpanded ? null : service.id)}
                  className="w-full py-12 md:py-16 flex flex-col md:flex-row md:items-center justify-between text-left group-hover:bg-white/5 transition-colors px-4 rounded-2xl"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-16">
                    <span className="text-sm font-sans font-medium text-white/40 tracking-widest group-hover:text-white transition-colors">
                      {service.number}
                    </span>
                    <h3 className="font-display text-4xl md:text-6xl font-bold tracking-tighter uppercase group-hover:text-mw-purple transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  
                  <div className="mt-6 md:mt-0 flex items-center justify-between w-full md:w-auto md:gap-12">
                    <p className="text-white/50 max-w-xs text-sm md:text-base hidden lg:block">
                      {service.shortDescription}
                    </p>
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                      <span className="text-lg transition-transform duration-300" style={{ transform: isExpanded ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                        +
                      </span>
                    </div>
                  </div>
                </button>

                {/* Expanded Content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-16 px-4 md:px-24 flex flex-col lg:flex-row gap-12 lg:gap-24">
                        
                        <div className="flex-1">
                          <p className="text-xl md:text-3xl text-white/80 leading-relaxed font-light mb-12">
                            {service.description}
                          </p>
                          
                          <div className="mb-12">
                            <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-6">Capabilities</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {service.features.map(feature => (
                                <div key={feature} className="flex items-center gap-3">
                                  <div className={`w-1.5 h-1.5 rounded-full ${service.colour}`} />
                                  <span className="text-sm font-medium text-white/80">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <button data-cursor="hover" className={`px-8 py-4 rounded-full text-xs font-bold tracking-widest uppercase transition-colors text-mw-black ${service.colour}`}>
                            {service.cta}
                          </button>
                        </div>
                        
                        {/* Abstract Visual Placeholder */}
                        <div className={`hidden lg:block w-full max-w-sm aspect-[4/5] rounded-3xl opacity-80 ${service.colour} bg-opacity-20 border border-white/10 relative overflow-hidden flex items-center justify-center`}>
                           <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay" />
                           <span className="font-display font-bold text-6xl text-white/10 uppercase rotate-90 whitespace-nowrap">
                             {service.title}
                           </span>
                        </div>
                        
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* 22 CTA SECTION */}
      <section className="py-32 px-6 md:px-12 bg-mw-purple relative overflow-hidden text-mw-black">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="font-display text-5xl md:text-8xl font-bold uppercase tracking-tighter mb-8">
            Got an idea?
          </h2>
          <p className="text-xl md:text-2xl font-medium mb-12 max-w-2xl mx-auto">
            Tell us what you're building. We'll figure out the digital side.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button data-cursor="hover" className="bg-mw-black text-white font-bold px-8 py-4 rounded-full text-xs tracking-widest uppercase hover:bg-mw-pink transition-colors">
              START A PROJECT ↗
            </button>
            <a href="https://wa.me/917200895492" target="_blank" rel="noreferrer" data-cursor="hover" className="border-2 border-mw-black text-mw-black font-bold px-8 py-4 rounded-full text-xs tracking-widest uppercase hover:bg-mw-black hover:text-white transition-colors flex items-center justify-center">
              TALK ON WHATSAPP ↗
            </a>
          </div>
        </div>
        
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none" />
      </section>

    </main>
  );
}
