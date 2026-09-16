import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TheHuman = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    
    // Animate the intro text
    gsap.fromTo(textRef.current, 
      { autoAlpha: 0, y: 50 },
      { 
        autoAlpha: 1, 
        y: 0, 
        duration: 1,
        scrollTrigger: {
          trigger: container,
          start: "top 60%",
        }
      }
    );

    // Fade in human content
    gsap.fromTo(contentRef.current,
      { autoAlpha: 0, y: 50 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1.5,
        delay: 0.5,
        scrollTrigger: {
          trigger: container,
          start: "top 40%",
        }
      }
    );

  }, []);

  const skills = [
    "Python", "JavaScript", "React", "Node.js", 
    "Web Development", "AI", "Automation", "Robotics", "Supabase"
  ];

  return (
    <section id="about" ref={containerRef} className="w-full min-h-screen bg-mw-black pt-32 pb-32 flex flex-col justify-center px-6 md:px-12 relative overflow-hidden">
      
      <div className="max-w-4xl mx-auto w-full">
        <p ref={textRef} className="text-mw-muted font-bold tracking-[0.2em] mb-16 md:mb-32 text-sm md:text-base border-l border-mw-accent pl-4">
          BEHIND EVERY SYSTEM IS A HUMAN.
        </p>
        
        <div ref={contentRef} className="flex flex-col gap-12">
          <div>
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-mw-white mb-4">
              MOHAMMED WAAIZ
            </h2>
            <div className="flex items-center gap-4 text-mw-accent font-medium tracking-widest text-sm md:text-base">
              <span>Founder / Developer / Builder</span>
              <span className="w-12 h-[1px] bg-mw-dark"></span>
              <span className="text-mw-muted">Bangalore, India</span>
            </div>
          </div>

          <p className="text-mw-white/90 text-lg md:text-2xl leading-relaxed max-w-2xl font-light">
            I build digital products, websites and intelligent systems at the intersection of technology and creativity.
          </p>

          <div className="mt-8">
            <h4 className="text-mw-muted text-xs font-bold tracking-widest mb-6 uppercase">Toolkit & Capabilities</h4>
            <div className="flex flex-wrap gap-3">
              {skills.map(skill => (
                <div key={skill} className="px-5 py-2 border border-mw-dark text-mw-white text-sm tracking-wider rounded-full hover:border-mw-accent hover:text-mw-accent transition-colors cursor-default">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default TheHuman;
