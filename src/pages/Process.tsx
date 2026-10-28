import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Lenis from 'lenis';
import { processSteps } from '../data/process';

export default function Process() {
  const containerRef = useRef<HTMLElement>(null);
  const [activeStep, setActiveStep] = useState(0);

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
      <section className="min-h-[75vh] sm:min-h-[90vh] flex flex-col justify-center relative overflow-hidden px-4 sm:px-6 md:px-12 py-16 sm:py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs font-bold tracking-widest text-white/50 mb-6 sm:mb-8 uppercase"
        >
          PROCESS / 04
        </motion.div>
        
        <div className="max-w-6xl relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[clamp(2.5rem,9.5vw,8rem)] font-bold uppercase tracking-tight sm:tracking-tighter leading-[0.88] text-white"
          >
            How We <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Turn Ideas</span> <br />
            Into Digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mw-purple via-mw-pink to-mw-orange">Experiences.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-8 sm:mt-12 text-white/60 max-w-xl text-base sm:text-lg md:text-xl font-light leading-relaxed"
          >
            Great digital work doesn't happen by accident. We combine strategy, design, technology and iteration to turn an idea into something people actually want to use.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto"
          >
            <Link 
              to="/contact" 
              data-cursor="hover" 
              className="bg-white text-black font-semibold px-6 sm:px-8 py-3.5 sm:py-4 min-h-[48px] rounded-full text-xs tracking-widest uppercase hover:bg-mw-purple hover:text-white transition-colors inline-flex items-center justify-center text-center"
            >
              START A PROJECT ↗
            </Link>
            <Link 
              to="/work" 
              data-cursor="hover" 
              className="bg-transparent border border-white/20 text-white font-semibold px-6 sm:px-8 py-3.5 sm:py-4 min-h-[48px] rounded-full text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-colors inline-flex items-center justify-center text-center"
            >
              SEE OUR WORK ↗
            </Link>
          </motion.div>
        </div>
        
        {/* Abstract Background Elements */}
        <motion.div 
          animate={{ 
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 right-[-10%] md:right-1/4 w-[350px] sm:w-[800px] h-[350px] sm:h-[800px] border-[1px] border-white/5 rounded-full pointer-events-none flex items-center justify-center"
        >
           <div className="w-[250px] sm:w-[600px] h-[250px] sm:h-[600px] border-[1px] border-white/10 rounded-full" />
           <div className="absolute w-[180px] sm:w-[400px] h-[180px] sm:h-[400px] border-[1px] border-mw-purple/20 rounded-full bg-mw-purple/5 blur-[30px] sm:blur-[50px]" />
        </motion.div>
      </section>

      {/* 04 SCROLL INTRO */}
      <section className="py-20 sm:py-36 md:py-48 px-4 sm:px-6 md:px-12 border-t border-white/10 bg-mw-black">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-display text-[clamp(2.25rem,6vw,4.5rem)] font-bold uppercase tracking-tighter leading-none mb-8 sm:mb-16"
          >
            No Chaos. <br />
            No Guesswork. <br />
            <span className="text-mw-pink">Just A Clear <br /> Way Forward.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg sm:text-2xl md:text-3xl text-white/50 leading-relaxed font-light max-w-4xl mx-auto px-2"
          >
            Every project is different, but our approach stays structured. We figure out the problem, shape the idea, design the experience, build it properly, test everything and launch with confidence.
          </motion.p>
        </div>
      </section>

      {/* 05 & 06 PROCESS JOURNEY WITH INTERACTIVE PROGRESS */}
      <section className="relative flex flex-col md:flex-row">
        
        {/* Desktop Sticky Progress Indicator */}
        <div className="hidden md:block w-1/3 border-r border-white/10 relative">
          <div className="sticky top-0 h-screen flex flex-col justify-center px-12">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-12">Process Map</h3>
            <div className="flex flex-col gap-6">
              {processSteps.map((step, idx) => (
                <div key={step.id} className="flex items-center gap-6">
                  <div className={`w-2 h-2 rounded-full transition-colors duration-500 ${activeStep >= idx ? 'bg-white' : 'bg-white/20'}`} />
                  <span className={`text-sm font-bold uppercase tracking-widest transition-colors duration-500 ${activeStep === idx ? 'text-white' : 'text-white/40'}`}>
                    {step.number} {step.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process Stages */}
        <div className="w-full md:w-2/3">
          {processSteps.map((step, idx) => (
            <motion.div 
              key={step.id}
              className="min-h-[80vh] md:min-h-screen border-b border-white/10 flex flex-col justify-center px-4 sm:px-6 md:px-24 py-16 sm:py-24 relative overflow-hidden"
              onViewportEnter={() => setActiveStep(idx)}
              viewport={{ amount: 0.3 }}
            >
              <div className="relative z-10">
                <span className={`text-xs sm:text-sm font-bold tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r ${step.color} mb-6 sm:mb-8 block`}>
                  {step.number} — {step.title}
                </span>
                
                <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-bold uppercase tracking-tight sm:tracking-tighter leading-none mb-6 sm:mb-8 text-white break-words">
                  {step.headline}
                </h2>
                
                <p className="text-base sm:text-xl md:text-2xl text-white/70 leading-relaxed font-light mb-8 sm:mb-16 max-w-2xl">
                  {step.description}
                </p>
                
                <div className="mb-8 sm:mb-16">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-white/30 mb-4 sm:mb-8">What's Included</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {step.features.map(feature => (
                      <div key={feature} className="flex items-center gap-3">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${step.color} shrink-0`} />
                        <span className="text-xs sm:text-sm font-medium text-white/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="inline-block border border-white/20 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs font-bold tracking-widest uppercase text-white/60 bg-white/5">
                  {step.microcopy}
                </div>
              </div>
              
              {/* Abstract Background Gradient specific to step */}
              <div className={`absolute top-0 right-0 w-full h-full bg-gradient-to-bl ${step.color} opacity-5 pointer-events-none`} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* 13 QUALITY CHECK SECTION */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 md:px-12 bg-mw-black border-b border-white/10 relative overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 sm:gap-16 items-start md:items-center">
          <div className="md:w-1/2">
            <h2 className="font-display text-3xl sm:text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-none mb-6 sm:mb-8">
              Before We Say <br />
              <span className="text-mw-cyan">"It's Done."</span>
            </h2>
            <p className="text-base sm:text-xl text-white/60 leading-relaxed font-light">
              We test the experience across devices, browsers and real interactions to find problems before launch.
            </p>
          </div>
          
          <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 sm:gap-y-4 w-full">
            {[
              'Responsive', 'Mobile navigation', 'Forms', 'Buttons',
              'Links', 'Animations', 'Loading states', 'Error states',
              'Accessibility', 'SEO', 'Performance', 'Browser compatibility'
            ].map((item, i) => (
              <motion.div 
                key={item}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="flex items-center gap-3 min-h-[36px]"
              >
                <div className="w-5 h-5 rounded-full bg-mw-cyan flex items-center justify-center text-black text-xs font-bold shrink-0">✓</div>
                <span className="text-xs sm:text-sm font-medium text-white/80">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 14 BIG MANIFESTO SECTION */}
      <section className="min-h-[90vh] sm:h-[120vh] bg-mw-black flex items-center justify-center sticky top-0 px-4 sm:px-6 py-20 sm:py-0">
        <div className="font-display text-[clamp(2.25rem,8.5vw,9rem)] font-bold uppercase tracking-tighter leading-[0.88] text-center">
          <motion.div initial={{ opacity: 0.2 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} className="text-mw-purple">THINK.</motion.div>
          <motion.div initial={{ opacity: 0.2 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-mw-pink">DESIGN.</motion.div>
          <motion.div initial={{ opacity: 0.2 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-mw-orange">BUILD.</motion.div>
          <motion.div initial={{ opacity: 0.2 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }} className="text-mw-yellow">TEST.</motion.div>
          <motion.div initial={{ opacity: 0.2 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }} className="text-mw-green">LAUNCH.</motion.div>
          <motion.div initial={{ opacity: 0.2 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }} className="text-mw-cyan">REPEAT.</motion.div>
        </div>
      </section>

      {/* 15 FINAL CTA */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 md:px-12 bg-mw-purple relative overflow-hidden text-mw-black z-20">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="font-display text-[clamp(2.5rem,8vw,8rem)] font-bold uppercase tracking-tighter mb-6 sm:mb-8 leading-none">
            Got An Idea?
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl font-medium mb-8 sm:mb-12 max-w-2xl mx-auto px-2">
            Let's turn it into something people remember.
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
      </section>

    </main>
  );
}
