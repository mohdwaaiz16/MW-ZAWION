import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Lenis from 'lenis';
import { projects } from '../data/work';

export default function Home() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Parallax effects
  const yHeroText = useTransform(scrollYProgress, [0, 0.1], [0, 200]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

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
    <main ref={containerRef} className="w-full bg-mw-black min-h-screen text-mw-offwhite overflow-x-hidden">
      
      {/* 03 & 04 HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden px-6 md:px-12 pt-24">
        {/* Interactive World Background */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <motion.div 
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-32 h-32 border border-white/20 rounded-xl backdrop-blur-md flex items-center justify-center text-xs font-bold text-white/50"
          >
            UI / UX
          </motion.div>
          <motion.div 
            animate={{ 
              y: [0, 30, 0],
              rotate: [0, -10, 0]
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-1/4 right-1/4 w-48 h-32 border border-mw-purple/30 bg-mw-purple/5 rounded-xl backdrop-blur-md flex items-center justify-center text-xs font-bold text-mw-purple"
          >
            &lt;CODE /&gt;
          </motion.div>
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-gradient-to-tr from-mw-orange/10 via-mw-pink/5 to-transparent rounded-full blur-[100px] mix-blend-screen"
          />
        </div>

        <motion.div 
          style={{ y: yHeroText, opacity: opacityHero }}
          className="relative z-10 w-full max-w-7xl mx-auto flex flex-col justify-center"
        >
          <div className="font-display text-6xl md:text-[11rem] font-bold uppercase tracking-tighter leading-[0.8] flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              WE MAKE
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-mw-purple via-mw-pink to-mw-orange pl-8 md:pl-24"
            >
              THE INTERNET
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="pl-4 md:pl-12"
            >
              LOOK BETTER.
            </motion.div>
          </div>

          <div className="mt-16 md:mt-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <motion.p 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
              className="max-w-md text-lg text-white/60 leading-relaxed font-light"
            >
              Websites, digital products, brands and technology experiences built with design and code.
            </motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="flex flex-col sm:flex-row gap-4">
              <a href="/contact" className="bg-white text-black font-bold px-8 py-4 rounded-full text-xs tracking-widest uppercase hover:bg-mw-green hover:text-black transition-colors">
                START A PROJECT →
              </a>
              <a href="/work" className="border border-white/20 text-white font-bold px-8 py-4 rounded-full text-xs tracking-widest uppercase hover:bg-white/10 transition-colors">
                EXPLORE OUR WORK ↓
              </a>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 05 WHAT ARE WE? */}
      <section className="py-48 px-6 md:px-12 bg-mw-offwhite text-mw-black relative z-20">
        <div className="max-w-6xl mx-auto flex flex-col gap-24">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="font-display text-5xl md:text-[8rem] font-bold uppercase tracking-tighter leading-[0.85]"
          >
            WE'RE NOT <br />
            JUST A <br />
            WEB AGENCY.
          </motion.h2>
          
          <div className="flex flex-col md:flex-row justify-between items-end border-t border-black/10 pt-16 gap-12">
            <motion.h3
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-display text-4xl md:text-7xl font-bold uppercase tracking-tighter leading-[0.85] text-mw-orange"
            >
              WE BUILD <br />
              DIGITAL <br />
              EXPERIENCES.
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="max-w-md text-xl md:text-2xl font-light leading-relaxed"
            >
              From websites and e-commerce to digital products, automation and technology experiments — we design and build things that exist in the real world.
            </motion.p>
          </div>
        </div>
      </section>

      {/* 06 REAL-WORLD BUILDER */}
      <section className="py-48 px-6 md:px-12 bg-mw-black text-mw-offwhite overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-24">
          <div className="md:w-1/2 flex flex-col justify-center">
            <h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-none mb-8">
              WE LIKE <br />
              BUILDING <br />
              <span className="text-mw-cyan">REAL THINGS.</span>
            </h2>
            <p className="text-xl text-white/50 font-light max-w-sm">
              A website is only one kind of thing we can build.
            </p>
          </div>
          
          <div className="md:w-1/2">
            <div className="flex flex-col items-center md:items-start font-display text-3xl md:text-5xl font-bold uppercase tracking-tighter gap-6">
              {['WEBSITE', 'DIGITAL PRODUCT', 'MOBILE APP', 'AI SYSTEM', 'AUTOMATION', 'PHYSICAL PRODUCT', 'REAL WORLD'].map((item, i, arr) => (
                <div key={item} className="flex flex-col items-center md:items-start gap-6 w-full">
                  <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className={`hover:text-mw-cyan transition-colors cursor-default ${i === arr.length - 1 ? 'text-mw-cyan scale-110 origin-left' : 'text-white/40'}`}
                  >
                    {item}
                  </motion.div>
                  {i < arr.length - 1 && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      whileInView={{ height: '40px', opacity: 1 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ delay: i * 0.1 + 0.1, duration: 0.3 }}
                      className="w-px bg-white/20 md:ml-12"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 07 LIVE PROJECT SHOWCASE */}
      <section className="py-48 bg-white/5 border-y border-white/10 overflow-hidden relative">
        <div className="px-6 md:px-12 mb-24 max-w-7xl mx-auto">
          <h2 className="font-display text-5xl md:text-[8rem] font-bold uppercase tracking-tighter leading-none">
            CURRENTLY <br />
            BUILDING.
          </h2>
        </div>
        
        {/* Horizontal Marquee / Stream */}
        <div className="relative w-full flex overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-12 px-6 md:px-12 gap-8 md:gap-16">
          {projects.map((project, i) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="min-w-[85vw] md:min-w-[45vw] snap-center flex flex-col gap-8 group"
            >
              <div className={`aspect-[4/3] w-full rounded-2xl ${project.accentColor} bg-opacity-20 flex items-center justify-center relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-700`}>
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-30 mix-blend-overlay" />
                <span className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tighter text-white/20 mix-blend-overlay text-center px-4">
                  {project.title}
                </span>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2 border border-white/20 px-3 py-1.5 rounded-full bg-white/5 self-start">
                  <div className={`w-2 h-2 rounded-full ${project.statusColor}`} />
                  <span className="text-[10px] font-bold tracking-widest uppercase text-white/80">{project.status}</span>
                </div>
                <h3 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-tighter">{project.title}</h3>
                <p className="text-white/60 font-light text-lg">{project.description}</p>
              </div>
            </motion.div>
          ))}
          
          <div className="min-w-[85vw] md:min-w-[45vw] snap-center flex flex-col justify-center items-center text-center gap-6 px-12 border border-white/10 rounded-2xl border-dashed">
             <h3 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tighter text-mw-orange">AND MORE IN <br />DEVELOPMENT →</h3>
             <p className="text-white/50 text-xl max-w-md">We're constantly working on new real-world projects, products and experiments.</p>
             <a href="/work" className="mt-8 border-b border-white pb-1 font-bold text-xs tracking-widest uppercase hover:text-mw-orange hover:border-mw-orange transition-colors">EXPLORE ALL WORK</a>
          </div>
        </div>
      </section>

      {/* 08 YOU COULD BE NEXT */}
      <section className="py-48 px-6 md:px-12 bg-mw-purple text-mw-offwhite text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <motion.h2 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "backOut" }}
            className="font-display text-6xl md:text-[9rem] font-bold uppercase tracking-tighter leading-[0.85] mb-12"
          >
            YOUR <br />
            PROJECT <br />
            COULD BE <br />
            NEXT.
          </motion.h2>
          <p className="text-xl md:text-3xl font-light mb-16 max-w-2xl">
            Every project starts somewhere. Maybe yours starts here.
          </p>
          <a href="/contact" className="bg-mw-black text-white font-bold px-12 py-6 rounded-full text-sm tracking-widest uppercase hover:scale-105 transition-transform duration-300">
            START A PROJECT →
          </a>
        </div>
      </section>

      {/* 09 SERVICES */}
      <section className="py-48 px-6 md:px-12 bg-mw-black border-y border-white/10 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xs font-bold tracking-widest text-white/50 mb-16 uppercase">CAPABILITIES</h2>
          <div className="flex flex-col border-t border-white/10">
            {[
              'WEB DESIGN', 'DEVELOPMENT', 'UI / UX', 'E-COMMERCE', 'BRANDING', 'AI + AUTOMATION', 'DIGITAL PRODUCTS', 'MAINTENANCE'
            ].map((service, i) => (
              <a 
                href="/services" 
                key={service}
                className="group border-b border-white/10 py-8 flex flex-col md:flex-row md:items-center justify-between hover:bg-white/5 transition-colors px-4 -mx-4"
                data-cursor="view"
              >
                <div className="font-display text-4xl md:text-7xl font-bold uppercase tracking-tighter text-white/20 group-hover:text-white transition-colors flex items-center gap-8">
                  <span className="text-lg md:text-2xl font-sans font-light tracking-widest text-mw-pink opacity-0 group-hover:opacity-100 transition-opacity">0{i+1}</span>
                  {service}
                </div>
                <div className="hidden md:block w-32 h-24 bg-gradient-to-r from-mw-purple to-mw-pink rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100 -rotate-6 group-hover:rotate-0" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 10 DESIGN x TECHNOLOGY */}
      <section className="min-h-screen flex flex-col bg-mw-black relative">
        <div className="flex flex-col md:flex-row flex-1">
          <div className="w-full md:w-1/2 border-b md:border-b-0 md:border-r border-white/10 p-12 md:p-24 flex flex-col justify-center">
            <h2 className="font-display text-6xl md:text-[8rem] font-bold uppercase tracking-tighter text-white/10 mb-12">DESIGN</h2>
            <ul className="flex flex-col gap-4 text-2xl md:text-4xl font-light text-white/60">
              <li>Typography</li>
              <li>Visual systems</li>
              <li>UI/UX</li>
              <li>Motion</li>
              <li>Branding</li>
              <li>Interaction</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center items-end text-right">
            <h2 className="font-display text-6xl md:text-[8rem] font-bold uppercase tracking-tighter text-white/10 mb-12">TECHNOLOGY</h2>
            <ul className="flex flex-col gap-4 text-2xl md:text-4xl font-light text-white/60">
              <li>Frontend</li>
              <li>Backend</li>
              <li>APIs</li>
              <li>Databases</li>
              <li>AI</li>
              <li>Automation</li>
            </ul>
          </div>
        </div>
        
        {/* Absolute Center Equation */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center mix-blend-difference">
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-display text-5xl md:text-[6rem] font-bold uppercase tracking-tighter text-white flex flex-col items-center leading-none"
          >
            <div>DESIGN</div>
            <div className="text-mw-pink my-4">+</div>
            <div>CODE</div>
            <div className="text-mw-cyan my-4">=</div>
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-mw-orange to-mw-purple">EXPERIENCE</div>
          </motion.div>
        </div>
      </section>

      {/* 11 HOW WE WORK (PROCESS PREVIEW) */}
      <section className="py-48 px-6 md:px-12 bg-white/5 border-y border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col gap-24">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <h2 className="font-display text-5xl md:text-[7rem] font-bold uppercase tracking-tighter leading-[0.85]">
              FROM <br />
              <span className="text-white/30">IDEA</span> <br />
              TO <br />
              <span className="text-mw-green">LIVE.</span>
            </h2>
            <a href="/process" className="bg-white text-black font-bold px-8 py-4 rounded-full text-xs tracking-widest uppercase hover:bg-mw-green hover:text-black transition-colors shrink-0">
              SEE THE FULL PROCESS →
            </a>
          </div>
          
          <div className="flex overflow-x-auto scrollbar-hide pb-8 gap-8 items-center relative">
            <div className="absolute top-1/2 left-0 w-[150%] h-px bg-gradient-to-r from-mw-green via-mw-pink to-transparent -translate-y-1/2 -z-10" />
            {['DISCOVER', 'DESIGN', 'BUILD', 'TEST', 'LAUNCH', 'GROW'].map((step, i) => (
              <motion.div 
                key={step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="shrink-0 flex flex-col items-center gap-6 bg-mw-black px-8 py-6 rounded-2xl border border-white/10"
              >
                <span className="text-sm font-bold tracking-widest text-mw-green">0{i+1}</span>
                <span className="font-display text-3xl font-bold uppercase tracking-tighter">{step}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 12 THE MW ZAWION LAB */}
      <section className="py-48 px-6 md:px-12 bg-mw-black">
         <div className="max-w-7xl mx-auto">
            <div className="mb-24">
              <h2 className="font-display text-6xl md:text-[8rem] font-bold uppercase tracking-tighter leading-none mb-6">
                THE <br /> <span className="text-mw-pink">LAB.</span>
              </h2>
              <p className="text-xl md:text-2xl font-light text-white/50 max-w-lg">Not everything we build starts as a client project.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'INTERACTION', desc: 'Cursor and scroll experiments.' },
                { title: 'MOTION', desc: 'Typography and animation experiments.' },
                { title: 'AI', desc: 'AI interfaces and automation experiments.' },
                { title: 'HARDWARE', desc: 'Physical + digital experiments.' },
                { title: 'WEB', desc: 'Experimental layouts.' },
                { title: 'CODE', desc: 'Technical experiments.' },
              ].map((item, i) => (
                <div key={i} className="aspect-square border border-white/10 rounded-3xl p-8 flex flex-col justify-between hover:bg-white/5 transition-colors group cursor-crosshair">
                   <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-mw-pink group-hover:border-mw-pink transition-colors">
                     <span className="text-xl">⚗️</span>
                   </div>
                   <div>
                     <h3 className="font-display text-3xl font-bold uppercase tracking-tighter text-white/80 group-hover:text-white mb-2">{item.title}</h3>
                     <p className="text-sm font-light text-white/40 group-hover:text-white/60">{item.desc}</p>
                   </div>
                </div>
              ))}
            </div>
         </div>
      </section>

      {/* 13 NO TEMPLATE SECTION */}
      <section className="py-48 px-6 md:px-12 bg-mw-offwhite text-mw-black">
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-display text-5xl md:text-[7rem] font-bold uppercase tracking-tighter leading-[0.85] mb-12"
          >
            YOUR BUSINESS <br />
            ISN'T A TEMPLATE. <br />
            <span className="text-mw-orange">YOUR WEBSITE</span> <br />
            <span className="text-mw-purple">SHOULDN'T BE</span> <br />
            ONE.
          </motion.div>
          <p className="text-xl md:text-3xl font-light mb-16 max-w-3xl opacity-80">
            We don't start with a template and squeeze your business into it. We start with the problem, the audience and the idea.
          </p>
          <a href="/about" className="bg-mw-black text-white font-bold px-10 py-5 rounded-full text-sm tracking-widest uppercase hover:bg-mw-orange transition-colors">
            WHY MW ZAWION? →
          </a>
        </div>
      </section>

      {/* 15 WHY MW ZAWION? (EDITORIAL) */}
      <section className="py-48 px-6 md:px-12 bg-mw-black border-y border-white/10">
        <div className="max-w-4xl mx-auto flex flex-col gap-32">
          {[
            { t: 'DESIGN FIRST.', d: 'Because technology should feel good to use.' },
            { t: 'BUILT FOR REAL PEOPLE.', d: 'Not just screenshots.' },
            { t: 'MOBILE FIRST.', d: 'Because that\'s where people are.' },
            { t: 'PERFORMANCE MATTERS.', d: 'Beautiful isn\'t enough if it\'s slow.' },
            { t: 'BUILT TO GROW.', d: 'Your website shouldn\'t become a limitation.' },
            { t: 'DETAILS MATTER.', d: 'The little things make the experience.' }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-6 border-l-4 border-mw-purple pl-8 md:pl-16"
            >
              <h3 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tighter">{item.t}</h3>
              <p className="text-xl md:text-3xl text-white/50 font-light">{item.d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 16 DIGITAL FOUNDATION */}
      <section className="py-48 px-6 md:px-12 bg-mw-black flex flex-col items-center text-center">
         <div className="max-w-5xl">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="font-display text-5xl md:text-[7rem] font-bold uppercase tracking-tighter leading-[0.85] mb-24 text-white/20"
            >
              WE DON'T JUST <br /> HAND YOU <br /> A WEBSITE.
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-display text-5xl md:text-[7rem] font-bold uppercase tracking-tighter leading-[0.85] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 mb-12"
            >
              WE GIVE YOU <br /> A DIGITAL <br /> FOUNDATION.
            </motion.div>
            <p className="text-2xl text-white/60 font-light max-w-xl mx-auto">
              A system you can use, grow, improve and build on.
            </p>
         </div>
      </section>

      {/* 17 WHO WE BUILD FOR */}
      <section className="py-24 bg-mw-pink overflow-hidden">
        <div className="px-6 md:px-12 mb-16">
           <h2 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tighter text-mw-black">
             WHO WE <br /> BUILD FOR.
           </h2>
        </div>
        
        <div className="relative flex overflow-x-hidden group">
          <div className="flex animate-marquee whitespace-nowrap gap-8 font-display text-5xl md:text-[6rem] font-bold uppercase tracking-tighter text-mw-black/80">
            {['STARTUPS', 'BRANDS', 'FOUNDERS', 'CREATORS', 'LOCAL BUSINESSES', 'E-COMMERCE', 'PRODUCT TEAMS', 'PEOPLE WITH WEIRD IDEAS'].map(client => (
              <span key={client} className="px-8">{client}</span>
            ))}
          </div>
          <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap gap-8 font-display text-5xl md:text-[6rem] font-bold uppercase tracking-tighter text-mw-black/80">
            {['STARTUPS', 'BRANDS', 'FOUNDERS', 'CREATORS', 'LOCAL BUSINESSES', 'E-COMMERCE', 'PRODUCT TEAMS', 'PEOPLE WITH WEIRD IDEAS'].map(client => (
              <span key={client} className="px-8">{client}</span>
            ))}
          </div>
        </div>
      </section>

      {/* 18 WHAT IF? */}
      <section className="py-48 px-6 md:px-12 bg-mw-black relative overflow-hidden">
         <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-24">
            <div className="md:w-1/2">
               <h2 className="font-display text-6xl md:text-[8rem] font-bold uppercase tracking-tighter leading-none sticky top-48">
                 WHAT IF <br />
                 YOUR WEBSITE <br />
                 <span className="text-white/20">WASN'T JUST</span> <br />
                 <span className="text-white/20">A WEBSITE?</span>
               </h2>
            </div>
            <div className="md:w-1/2 flex flex-col gap-32 pt-24 md:pt-96 pb-48">
               {[
                 'WHAT IF IT SOLD?',
                 'WHAT IF IT TOLD YOUR STORY?',
                 'WHAT IF IT FELT LIKE YOUR BRAND?',
                 'WHAT IF PEOPLE REMEMBERED IT?',
                 'WHAT IF IT ACTUALLY HELPED YOUR BUSINESS?'
               ].map((text, i) => (
                 <motion.h3 
                   key={i}
                   initial={{ opacity: 0, y: 50 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true, margin: "-20%" }}
                   className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tighter text-mw-cyan"
                 >
                   {text}
                 </motion.h3>
               ))}
            </div>
         </div>
      </section>

      {/* 21 FINAL CTA */}
      <section className="py-48 px-6 md:px-12 bg-mw-orange text-mw-black text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
          <motion.h2 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="font-display text-6xl md:text-[10rem] font-bold uppercase tracking-tighter leading-none mb-12"
          >
            GOT AN <br /> IDEA? <br /> LET'S <br /> BUILD <br /> IT.
          </motion.h2>
          <p className="text-xl md:text-3xl font-medium mb-16 max-w-xl opacity-80">
            You bring the idea. We'll figure out the digital side.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 w-full sm:w-auto">
            <a href="/contact" className="bg-mw-black text-white font-bold px-12 py-6 rounded-full text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-colors w-full sm:w-auto">
              START A PROJECT →
            </a>
            <a href="https://wa.me/917200895492?text=Hi%20MW%20Zawion!%20I%20have%20a%20project%20idea%20and%20I'd%20like%20to%20discuss%20working%20with%20you." target="_blank" rel="noreferrer" className="border-2 border-mw-black text-mw-black font-bold px-12 py-6 rounded-full text-sm tracking-widest uppercase hover:bg-mw-black hover:text-white transition-colors w-full sm:w-auto flex items-center justify-center">
              TALK ON WHATSAPP →
            </a>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-30 mix-blend-overlay pointer-events-none" />
      </section>

    </main>
  );
}
