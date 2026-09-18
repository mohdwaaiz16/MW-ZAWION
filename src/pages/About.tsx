import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Lenis from 'lenis';
import { Marquee } from '../components/UI/Marquee';

export default function About() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const statementY = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  const statementOpacity = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 0.5, 0]);
  const replacementOpacity = useTransform(scrollYProgress, [0.1, 0.2, 0.3], [0, 0.5, 1]);
  const replacementY = useTransform(scrollYProgress, [0.1, 0.2], [50, 0]);

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
      
      {/* 04 ABOUT HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs font-bold tracking-widest text-mw-green mb-8 uppercase"
        >
          ABOUT / MW ZAWION
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl md:text-[8rem] font-bold uppercase tracking-tighter leading-[0.85] z-10 flex flex-col items-center"
        >
          <span>We're</span>
          <span>Here To</span>
          <motion.span 
            className="text-transparent bg-clip-text bg-gradient-to-r from-mw-green via-mw-cyan to-mw-blue mt-2"
            animate={{ 
              opacity: [1, 0, 1],
              scale: [1, 1.05, 1]
            }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
          >
            BUILD.
          </motion.span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-12 text-white/60 max-w-xl mx-auto text-sm md:text-lg z-10"
        >
          MW Zawion is a creative digital studio building websites, digital experiences and technology for businesses, brands, startups and creators.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-12 flex gap-6 z-10"
        >
          <button data-cursor="hover" className="bg-transparent border border-white/20 text-white font-semibold px-8 py-4 rounded-full text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-colors">
            MEET THE STUDIO ↓
          </button>
        </motion.div>
        
        {/* Abstract Background Elements */}
        <motion.div 
          animate={{ 
            rotate: [0, -90, -180, -270, -360],
            scale: [1, 1.5, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-mw-green rounded-full blur-[150px] opacity-10 mix-blend-screen pointer-events-none"
        />
        <motion.div 
          animate={{ 
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-mw-cyan rounded-full blur-[120px] opacity-20 mix-blend-screen pointer-events-none"
        />
      </section>

      {/* 06 THE BIG STATEMENT */}
      <section className="h-[150vh] relative border-y border-white/10">
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          <motion.h2 
            style={{ y: statementY, opacity: statementOpacity }}
            className="absolute font-display text-5xl md:text-[7rem] font-bold uppercase tracking-tighter text-center leading-none text-white/80"
          >
            We Don't <br /> Just Build <br /> Websites.
          </motion.h2>
          
          <motion.h2 
            style={{ y: replacementY, opacity: replacementOpacity }}
            className="absolute font-display text-5xl md:text-[7rem] font-bold uppercase tracking-tighter text-center leading-none text-mw-purple"
          >
            We Build <br /> Experiences.
          </motion.h2>
        </div>
      </section>

      {/* 07 WHO WE ARE */}
      <section className="py-32 px-6 md:px-12 bg-mw-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24 items-start">
          <h3 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-tighter md:w-1/3">
            Who is <br /> MW Zawion?
          </h3>
          <div className="md:w-2/3">
            <p className="text-xl md:text-4xl text-white/70 leading-relaxed font-light">
              MW Zawion is a digital studio focused on creating distinctive websites, digital products and technology experiences. We bring together design, development and experimentation to create digital work that feels intentional, useful and memorable.
            </p>
          </div>
        </div>
      </section>

      {/* 27 MARQUEE DIVIDER */}
      <section className="py-8 bg-mw-black relative z-10 overflow-hidden">
        <Marquee speed={30} className="font-display font-bold text-3xl md:text-5xl uppercase text-white/20 tracking-tighter">
          <span className="px-8">DESIGN</span> • 
          <span className="px-8">CODE</span> • 
          <span className="px-8">MOTION</span> • 
          <span className="px-8">IDEAS</span> • 
          <span className="px-8">EXPERIMENTATION</span> • 
        </Marquee>
      </section>

      {/* 08 OUR PHILOSOPHY */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h3 className="font-display text-xs font-bold tracking-widest text-mw-orange uppercase mb-16">Our Philosophy</h3>
          
          <div className="flex flex-col gap-24">
            {[
              { num: '01', title: 'DESIGN MATTERS.', desc: 'Good technology should also feel good to use.' },
              { num: '02', title: 'BORING IS OPTIONAL.', desc: 'Digital experiences do not need to look like everyone else\'s.' },
              { num: '03', title: 'FUNCTION COMES FIRST.', desc: 'Creative design must still solve real problems.' },
              { num: '04', title: 'DETAILS MATTER.', desc: 'Small interactions can change the entire experience.' },
              { num: '05', title: 'KEEP MOVING.', desc: 'Technology changes constantly. Good digital work should evolve with it.' },
            ].map((item, i) => (
              <motion.div 
                key={item.num}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="flex flex-col md:flex-row gap-6 md:gap-16 items-start"
              >
                <span className="text-2xl font-sans text-white/30">{item.num}</span>
                <div>
                  <h4 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-4">{item.title}</h4>
                  <p className="text-lg md:text-2xl text-white/60 font-light">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 09 MANIFESTO */}
      <section className="py-48 px-6 flex items-center justify-center bg-mw-black relative overflow-hidden">
        <div className="text-center font-display text-6xl md:text-[9rem] font-bold uppercase tracking-tighter leading-[0.85] z-10">
          <motion.div whileHover={{ scale: 1.05 }} className="text-mw-purple cursor-pointer">MAKE IT USEFUL.</motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="text-mw-pink cursor-pointer">MAKE IT BEAUTIFUL.</motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="text-mw-orange cursor-pointer">MAKE IT FAST.</motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="text-mw-green cursor-pointer">MAKE IT MEMORABLE.</motion.div>
        </div>
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none" />
      </section>
      
      {/* 22 FINAL CTA */}
      <section className="py-32 px-6 md:px-12 bg-mw-yellow relative overflow-hidden text-mw-black">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="font-display text-5xl md:text-8xl font-bold uppercase tracking-tighter mb-8">
            Got Something <br /> Worth Building?
          </h2>
          <p className="text-xl md:text-2xl font-medium mb-12 max-w-2xl mx-auto">
            Tell us what you're thinking. We'll take it from there.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button data-cursor="hover" className="bg-mw-black text-white font-bold px-8 py-4 rounded-full text-xs tracking-widest uppercase hover:bg-mw-pink hover:text-mw-black transition-colors">
              START A PROJECT ↗
            </button>
            <a href="https://wa.me/917200895492" target="_blank" rel="noreferrer" data-cursor="hover" className="border-2 border-mw-black text-mw-black font-bold px-8 py-4 rounded-full text-xs tracking-widest uppercase hover:bg-mw-black hover:text-white transition-colors flex items-center justify-center">
              TALK ON WHATSAPP ↗
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
