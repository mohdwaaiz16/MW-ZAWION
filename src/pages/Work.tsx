import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import { projects, categories } from '../data/work';

export default function Work() {
  const containerRef = useRef<HTMLElement>(null);
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filteredProjects = projects.filter(project => project.category.includes(activeFilter));

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
    <main ref={containerRef} className="w-full bg-mw-black pt-24 min-h-screen text-mw-offwhite">
      
      {/* 03 HERO */}
      <section className="min-h-[80vh] flex flex-col justify-center relative overflow-hidden px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs font-bold tracking-widest text-white/50 mb-8 uppercase"
        >
          WORK / 01
        </motion.div>
        
        <div className="max-w-6xl relative z-10 flex flex-col md:flex-row gap-12 items-end">
          <div className="flex-1">
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-5xl md:text-[9rem] font-bold uppercase tracking-tighter leading-[0.85] text-white"
            >
              Things <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-mw-purple via-mw-pink to-mw-orange">We've</span> <br />
              Built.
            </motion.h1>
          </div>
          
          <div className="flex-1 pb-4">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-white/80 text-xl md:text-3xl font-bold mb-6"
            >
              We like building things that exist beyond a pitch deck.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-white/60 text-lg leading-relaxed"
            >
              From business websites and fashion brands to government projects, physical products and experimental technology — here's a look at what we're working on.
            </motion.p>
          </div>
        </div>
        
        {/* Animated Hero Background */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] border-[1px] border-white/5 rounded-full pointer-events-none flex items-center justify-center opacity-30"
        >
           <div className="w-[40vw] h-[40vw] border-[1px] border-white/10 rounded-full flex items-center justify-center">
             <div className="w-[20vw] h-[20vw] border-[1px] border-mw-purple/30 rounded-full bg-mw-purple/5 blur-[30px]" />
           </div>
        </motion.div>
      </section>

      {/* 05 PROJECT FILTER */}
      <section className="py-8 px-6 md:px-12 border-y border-white/10 sticky top-0 bg-mw-black/80 backdrop-blur-md z-30">
        <div className="max-w-7xl mx-auto flex gap-4 overflow-x-auto pb-4 md:pb-0 scrollbar-hide snap-x">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`snap-start whitespace-nowrap px-6 py-3 rounded-full text-xs font-bold tracking-widest uppercase transition-all ${
                activeFilter === category 
                  ? 'bg-white text-black' 
                  : 'bg-transparent text-white/50 hover:text-white border border-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* 06 FEATURED PROJECTS */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col gap-32">
          
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              // Alternate layouts based on index for asymmetry
              const isEven = idx % 2 === 0;
              
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-24 items-center group`}
                >
                  {/* Visual Preview */}
                  <div className={`w-full md:w-3/5 aspect-[4/3] rounded-2xl overflow-hidden relative ${project.accentColor} bg-opacity-20 flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-700 ease-out cursor-pointer`} data-cursor="view">
                    <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay pointer-events-none" />
                    
                    {/* Abstract Project Representation instead of empty cards */}
                    <motion.div 
                      className="font-display text-4xl md:text-7xl font-bold uppercase tracking-tighter text-white/10 p-12 text-center"
                      whileHover={{ scale: 1.05 }}
                    >
                      {project.title.split(' ')[0]}
                    </motion.div>
                  </div>
                  
                  {/* Project Info */}
                  <div className="w-full md:w-2/5 flex flex-col gap-8">
                    <div className="flex flex-col gap-4">
                      {/* Status Badges */}
                      <div className="flex flex-wrap gap-3">
                        <div className="flex items-center gap-2 border border-white/20 px-3 py-1.5 rounded-full bg-white/5">
                          <div className={`w-2 h-2 rounded-full ${project.statusColor}`} />
                          <span className="text-[10px] font-bold tracking-widest uppercase text-white/80">{project.status}</span>
                        </div>
                      </div>
                      
                      <h2 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tighter mt-4 group-hover:text-mw-pink transition-colors">
                        {project.title}
                      </h2>
                      <p className="text-xs font-bold tracking-widest uppercase text-white/40 mb-2">
                        {project.displayCategory}
                      </p>
                    </div>
                    
                    <p className="text-lg text-white/70 leading-relaxed font-light">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-4 pt-4">
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="bg-white text-black font-bold px-6 py-4 rounded-full text-xs tracking-widest uppercase hover:bg-mw-purple hover:text-white transition-colors">
                          {project.ctaText}
                        </a>
                      )}
                      {project.repositoryUrl && (
                        <a href={project.repositoryUrl} target="_blank" rel="noopener noreferrer" className="border border-white/20 text-white font-bold px-6 py-4 rounded-full text-xs tracking-widest uppercase hover:bg-white/10 transition-colors">
                          VIEW SOURCE →
                        </a>
                      )}
                    </div>
                  </div>
                  
                </motion.div>
              );
            })}
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <div className="py-32 text-center text-white/40 text-xl font-medium">
              No projects found in this category.
            </div>
          )}
        </div>
      </section>

      {/* 07 & 08 ONGOING WORK SECTION */}
      <section className="py-32 px-6 md:px-12 bg-white/5 border-y border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <div className="flex flex-col md:flex-row justify-between md:items-end gap-8">
            <h2 className="font-display text-4xl md:text-7xl font-bold uppercase tracking-tighter leading-none">
              And This <br /> Isn't <span className="text-mw-orange">Everything.</span>
            </h2>
            <p className="text-xl text-white/60 max-w-md font-light leading-relaxed">
              We're constantly building, testing and experimenting. More real-world projects are currently in development across websites, digital products, and business systems.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['WEB EXPERIENCES', 'DIGITAL PRODUCTS', 'BUSINESS SYSTEMS', 'AI + AUTOMATION', 'PHYSICAL + DIGITAL', 'EXPERIMENTAL TECH'].map((item, i) => (
              <div key={i} className="border border-white/10 rounded-2xl p-8 flex flex-col justify-between aspect-square hover:bg-white/5 transition-colors group">
                <div className="flex items-center gap-2 bg-white/10 self-start px-3 py-1.5 rounded-full">
                  <div className="w-1.5 h-1.5 rounded-full bg-mw-yellow animate-pulse" />
                  <span className="text-[10px] font-bold tracking-widest uppercase text-white/70">In Progress</span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold uppercase tracking-tighter text-white/50 group-hover:text-white transition-colors">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 16 WHAT WE ACTUALLY DO */}
      <section className="py-48 px-6 md:px-12 bg-mw-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-8">
            See Something <br /> You Need?
          </h2>
          <p className="text-xl text-white/60 mb-24 max-w-2xl font-light">
            Every project here started with a problem, an idea or a business that needed something built.
          </p>
          
          <div className="flex flex-col gap-12">
            {[
              { q: 'NEED A WEBSITE?', a: '→ We can build it.' },
              { q: 'NEED A DIGITAL PRODUCT?', a: '→ We can design and develop it.' },
              { q: 'HAVE A PHYSICAL PRODUCT?', a: '→ We can explore the digital layer.' },
              { q: 'HAVE A BUSINESS PROBLEM?', a: '→ Let\'s figure out the technology.' },
              { q: 'HAVE AN IDEA THAT DOESN\'T FIT A BOX?', a: '→ Even better.' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 border-b border-white/10 pb-12">
                <h3 className="font-display text-2xl md:text-4xl font-bold uppercase tracking-tighter sm:w-1/2">{item.q}</h3>
                <p className="text-lg md:text-2xl text-white/60 font-light">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 18 PORTFOLIO MANIFESTO */}
      <section className="h-screen bg-mw-black flex items-center justify-center sticky top-0 px-6 border-t border-white/10">
        <div className="font-display text-5xl md:text-[8rem] font-bold uppercase tracking-tighter leading-[0.85] text-center">
          <motion.div initial={{ opacity: 0.2 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>WE DON'T</motion.div>
          <motion.div initial={{ opacity: 0.2 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.1 }}>BUILD FOR THE</motion.div>
          <motion.div initial={{ opacity: 0.2 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-white/20">PORTFOLIO.</motion.div>
          <motion.div initial={{ opacity: 0.2 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }} className="mt-8 text-mw-pink">WE BUILD FOR</motion.div>
          <motion.div initial={{ opacity: 0.2 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }} className="text-mw-purple">THE REAL WORLD.</motion.div>
        </div>
      </section>

      {/* 19 FINAL CTA */}
      <section className="py-48 px-6 md:px-12 bg-mw-cyan relative overflow-hidden text-mw-black z-20">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="font-display text-5xl md:text-8xl font-bold uppercase tracking-tighter mb-8">
            Have Something <br /> In Mind?
          </h2>
          <p className="text-xl md:text-2xl font-medium mb-16 max-w-2xl mx-auto">
            Let's turn the idea into something real.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="/contact" data-cursor="hover" className="bg-mw-black text-white font-bold px-8 py-4 rounded-full text-xs tracking-widest uppercase hover:bg-mw-purple transition-colors">
              START A PROJECT →
            </a>
            <a href="https://wa.me/917200895492?text=Hi%20MW%20Zawion!%20I%20saw%20your%20work%20and%20I'd%20like%20to%20discuss%20a%20project." target="_blank" rel="noreferrer" data-cursor="hover" className="border-2 border-mw-black text-mw-black font-bold px-8 py-4 rounded-full text-xs tracking-widest uppercase hover:bg-mw-black hover:text-white transition-colors flex items-center justify-center">
              TALK ON WHATSAPP →
            </a>
          </div>
        </div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 pointer-events-none" />
      </section>

    </main>
  );
}
