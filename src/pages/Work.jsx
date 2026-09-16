import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '../data/projects';

const Work = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    document.title = "MW Zawion — Selected Work";
    const container = containerRef.current;
    
    // Animate portals on scroll
    const portals = container.querySelectorAll('.project-portal');
    
    portals.forEach((portal) => {
      const image = portal.querySelector('.portal-image');
      const content = portal.querySelector('.portal-content');
      
      gsap.set(image, { scale: 1.2, filter: "brightness(0.2) grayscale(100%) blur(10px)" });
      gsap.set(content, { autoAlpha: 0, y: 50 });

      gsap.timeline({
        scrollTrigger: {
          trigger: portal,
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
        }
      })
      .to(image, { scale: 1, filter: "brightness(0.6) grayscale(0%) blur(0px)", duration: 1 })
      .to(content, { autoAlpha: 1, y: 0, duration: 1 }, "-=0.5");
      
      // Collapse when scrolling past
      gsap.timeline({
        scrollTrigger: {
          trigger: portal,
          start: "bottom 80%",
          end: "bottom 20%",
          scrub: 1,
        }
      })
      .to(portal, { opacity: 0, scale: 0.9, filter: "blur(20px)", duration: 1 });
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => {
        if(t.vars.trigger && container.contains(t.vars.trigger)) t.kill();
      });
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full min-h-screen bg-mw-black pt-32 pb-48">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-32">
        <span className="text-mw-accent font-mono text-xs tracking-widest uppercase">ARCHIVE / 001</span>
        <h1 className="text-4xl md:text-7xl font-bold tracking-tighter text-mw-white uppercase mt-4">PROJECTS ARE SYSTEMS.</h1>
      </div>

      <div className="flex flex-col gap-32 md:gap-64 w-full">
        {projects.map((project, index) => (
          <div key={project.id} className="project-portal relative w-full h-[80vh] flex items-center justify-center overflow-hidden cursor-hover">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="portal-image w-full h-full object-cover object-center"
              />
            </div>
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-mw-black via-mw-black/40 to-transparent z-10" />

            {/* Content */}
            <div className="portal-content relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-end h-full pb-16">
              <div className="flex-1">
                <span className="text-mw-accent font-mono text-xs tracking-widest uppercase mb-4 block">
                  0{index + 1} / {project.category}
                </span>
                <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-mw-white mb-6 leading-none">
                  {project.title}
                </h2>
                <p className="text-mw-white/80 max-w-xl text-sm md:text-lg mb-8">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map(tech => (
                    <span key={tech} className="text-[10px] font-mono tracking-widest uppercase border border-mw-white/20 px-3 py-1 text-mw-white">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-end justify-between h-full pt-16">
                <span className="text-mw-muted font-mono text-xs tracking-widest">{project.year}</span>
                <button className="text-xs font-bold tracking-widest text-mw-white uppercase border-b border-mw-accent pb-1 hover:text-mw-accent transition-colors">
                  VIEW PROJECT →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
