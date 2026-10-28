import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
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
    <main ref={containerRef} className="w-full bg-mw-black pt-20 sm:pt-24 min-h-screen">
      
      {/* 03 PAGE HERO */}
      <section className="min-h-[75vh] sm:min-h-[80vh] flex flex-col items-center justify-center relative overflow-hidden px-4 sm:px-6 text-center py-16 sm:py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs font-bold tracking-widest text-mw-purple mb-6 sm:mb-8 uppercase"
        >
          SERVICES / 01
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[clamp(2.5rem,9vw,8rem)] font-bold uppercase tracking-tight sm:tracking-tighter leading-[0.88] z-10"
        >
          We Build <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-mw-purple via-mw-pink to-mw-orange">Digital</span> <br />
          Experiences.
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-8 sm:mt-12 text-white/60 max-w-xl mx-auto text-sm sm:text-base md:text-lg z-10 leading-relaxed px-2"
        >
          From strategy and design to development and launch, we create digital experiences built to make businesses stand out.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-8 sm:mt-12 flex gap-4 sm:gap-6 z-10"
        >
          <Link 
            to="/contact" 
            data-cursor="hover" 
            className="bg-white text-black font-semibold px-6 sm:px-8 py-3.5 sm:py-4 min-h-[48px] rounded-full text-xs tracking-widest uppercase hover:bg-mw-purple hover:text-white transition-colors inline-flex items-center justify-center"
          >
            START A PROJECT ↗
          </Link>
        </motion.div>
        
        {/* Abstract Background Elements */}
        <motion.div 
          animate={{ 
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-mw-purple rounded-full blur-[100px] sm:blur-[150px] opacity-20 mix-blend-screen pointer-events-none"
        />
      </section>

      {/* 05 SERVICE INTRODUCTION */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 md:px-12 border-t border-white/10 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          <h2 className="font-display text-3xl sm:text-4xl md:text-7xl font-bold uppercase tracking-tighter leading-none">
            Not Just <br />
            <span className="text-mw-pink">Websites.</span>
          </h2>
          <div className="flex items-end pb-2">
            <p className="text-lg sm:text-xl md:text-2xl text-white/70 leading-relaxed max-w-lg font-light">
              We design and build digital experiences that combine strong visual identity, thoughtful UX and modern technology.
            </p>
          </div>
        </div>
      </section>

      {/* 06 MAIN SERVICES ACCORDION */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-12">
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
                  aria-expanded={isExpanded}
                  className="w-full py-8 sm:py-12 md:py-16 flex flex-col md:flex-row md:items-center justify-between text-left group-hover:bg-white/5 transition-colors px-2 sm:px-4 rounded-2xl min-h-[48px]"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 md:gap-16">
                    <span className="text-xs sm:text-sm font-sans font-medium text-white/40 tracking-widest group-hover:text-white transition-colors">
                      {service.number}
                    </span>
                    <h3 className="font-display text-2xl sm:text-4xl md:text-6xl font-bold tracking-tight sm:tracking-tighter uppercase group-hover:text-mw-purple transition-colors break-words">
                      {service.title}
                    </h3>
                  </div>
                  
                  <div className="mt-4 md:mt-0 flex items-center justify-between w-full md:w-auto md:gap-12">
                    <p className="text-white/50 max-w-xs text-xs sm:text-sm md:text-base hidden lg:block">
                      {service.shortDescription}
                    </p>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors shrink-0">
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
                      <div className="pb-12 sm:pb-16 px-2 sm:px-4 md:px-24 flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-24">
                        
                        <div className="flex-1">
                          <p className="text-lg sm:text-xl md:text-3xl text-white/80 leading-relaxed font-light mb-8 sm:mb-12">
                            {service.description}
                          </p>
                          
                          <div className="mb-8 sm:mb-12">
                            <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4 sm:mb-6">Capabilities</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                              {service.features.map(feature => (
                                <div key={feature} className="flex items-center gap-3">
                                  <div className={`w-1.5 h-1.5 rounded-full ${service.colour} shrink-0`} />
                                  <span className="text-xs sm:text-sm font-medium text-white/80">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <Link 
                            to="/contact" 
                            data-cursor="hover" 
                            className={`px-6 sm:px-8 py-3.5 sm:py-4 min-h-[48px] rounded-full text-xs font-bold tracking-widest uppercase transition-colors text-mw-black ${service.colour} inline-flex items-center justify-center`}
                          >
                            {service.cta}
                          </Link>
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
      <section className="py-20 sm:py-32 px-4 sm:px-6 md:px-12 bg-mw-purple relative overflow-hidden text-mw-black">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="font-display text-[clamp(2.5rem,8vw,8rem)] font-bold uppercase tracking-tighter mb-6 sm:mb-8 leading-none">
            Got an idea?
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl font-medium mb-8 sm:mb-12 max-w-2xl mx-auto px-2">
            Tell us what you're building. We'll figure out the digital side.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 w-full sm:w-auto">
            <Link 
              to="/contact" 
              data-cursor="hover" 
              className="bg-mw-black text-white font-bold px-8 py-4 min-h-[48px] rounded-full text-xs tracking-widest uppercase hover:bg-mw-pink transition-colors inline-flex items-center justify-center text-center"
            >
              START A PROJECT ↗
            </Link>
            <a 
              href="https://wa.me/917200895492" 
              target="_blank" 
              rel="noreferrer" 
              data-cursor="hover" 
              className="border-2 border-mw-black text-mw-black font-bold px-8 py-4 min-h-[48px] rounded-full text-xs tracking-widest uppercase hover:bg-mw-black hover:text-white transition-colors inline-flex items-center justify-center text-center"
            >
              TALK ON WHATSAPP ↗
            </a>
          </div>
        </div>
        
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none" />
      </section>

    </main>
  );
}
