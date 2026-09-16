import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '../../data/projects';

gsap.registerPlugin(ScrollTrigger);

const SelectedWork = () => {
  const containerRef = useRef(null);
  const projectsRef = useRef([]);

  useEffect(() => {
    projectsRef.current.forEach((projectSection, i) => {
      if (!projectSection) return;

      const image = projectSection.querySelector('.project-image');
      const content = projectSection.querySelector('.project-content');
      
      gsap.fromTo(image, 
        { scale: 0.8, filter: "brightness(0.3)" },
        { 
          scale: 1, 
          filter: "brightness(0.8)",
          ease: "power2.out",
          scrollTrigger: {
            trigger: projectSection,
            start: "top center",
            end: "center center",
            scrub: 1
          }
        }
      );

      gsap.fromTo(content,
        { autoAlpha: 0, y: 50 },
        {
          autoAlpha: 1,
          y: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: projectSection,
            start: "top center+=100",
            end: "center center",
            scrub: 1
          }
        }
      );
    });
  }, []);

  return (
    <section id="work" ref={containerRef} className="w-full bg-mw-black pt-32 pb-16">
      
      <div className="px-6 md:px-12 mb-32 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-6xl font-bold tracking-tighter text-mw-white">
          SELECTED WORK
        </h2>
      </div>

      <div className="flex flex-col gap-[30vh]">
        {projects.map((project, index) => (
          <div 
            key={project.id}
            ref={el => projectsRef.current[index] = el}
            className="w-full min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
          >
            {/* Background Image Parallax / Scale */}
            <div className="absolute inset-0 w-full h-full p-4 md:p-12 z-0">
              <div 
                className="project-image w-full h-full bg-cover bg-center rounded-xl md:rounded-3xl shadow-2xl relative"
                style={{ backgroundImage: `url(${project.imagePlaceholder})` }}
              >
                <div className="absolute inset-0 bg-mw-black/40 rounded-xl md:rounded-3xl" />
              </div>
            </div>

            {/* Content Overlay */}
            <div className="project-content relative z-10 w-full max-w-7xl px-6 md:px-24 flex flex-col gap-6">
              <div className="text-mw-accent font-mono text-sm tracking-widest font-bold">
                {project.id} / {projects.length.toString().padStart(2, '0')}
              </div>
              
              <h3 className="text-4xl md:text-7xl font-bold tracking-tighter text-mw-white max-w-4xl">
                {project.title}
              </h3>
              
              <div className="text-mw-white font-medium tracking-wider text-sm md:text-base border-l-2 border-mw-accent pl-4">
                {project.category}
              </div>
              
              <p className="text-mw-white/90 text-sm md:text-xl max-w-2xl mt-4 leading-relaxed bg-mw-black/50 p-6 backdrop-blur-md rounded-lg border border-mw-white/10">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-3 mt-6">
                {project.technologies.map(tech => (
                  <span key={tech} className="px-4 py-2 bg-mw-black/80 backdrop-blur text-mw-white text-xs tracking-wider rounded border border-mw-dark">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8">
                <button className="px-8 py-4 bg-mw-white text-mw-black font-bold tracking-wider text-xs md:text-sm hover:bg-mw-accent hover:text-mw-black transition-colors duration-300 flex items-center gap-2 group">
                  VIEW PROJECT
                  <span className="transform transition-transform group-hover:translate-x-1">→</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SelectedWork;
