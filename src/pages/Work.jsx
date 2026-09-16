import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const Work = () => {
  useEffect(() => {
    document.title = "MW Zawion — Selected Work";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-mw-white min-h-screen text-mw-black pt-32 pb-48">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 md:mt-24 mb-32">
        <h1 className="text-5xl md:text-[6vw] font-bold tracking-tighter uppercase leading-none mb-6">
          SELECTED WORK.
        </h1>
        <p className="text-mw-muted text-lg md:text-2xl font-light">
          A selection of products, platforms and digital systems we've built.
        </p>
      </div>

      {/* Portfolio Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col gap-32">
          {projects.map((project, index) => (
            <div key={project.id} className="flex flex-col md:flex-row gap-12 group items-center">
              
              <div className="w-full md:w-3/5 order-2 md:order-1 relative">
                <Link to={`/work/${project.id}`}>
                  <div className="w-full aspect-[4/3] bg-mw-lightgrey overflow-hidden border border-mw-border group-hover:border-mw-black transition-colors relative">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
                    />
                  </div>
                </Link>
              </div>
              
              <div className="w-full md:w-2/5 order-1 md:order-2 flex flex-col justify-center">
                <span className="text-mw-accent font-mono text-xs tracking-widest uppercase mb-4 block">
                  0{index + 1}
                </span>
                <h3 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-4 group-hover:text-mw-accent transition-colors">
                  <Link to={`/work/${project.id}`}>{project.title}</Link>
                </h3>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-mw-muted font-mono text-xs tracking-widest uppercase">{project.category}</span>
                  <span className="text-mw-border">|</span>
                  <span className="text-mw-muted font-mono text-xs tracking-widest">{project.year}</span>
                </div>
                <p className="text-mw-muted text-base md:text-lg mb-8 leading-relaxed">
                  {project.description}
                </p>
                <div>
                  <Link to={`/work/${project.id}`} className="text-xs font-bold tracking-widest text-mw-black border border-mw-border px-6 py-3 uppercase hover:border-mw-black transition-colors inline-flex items-center gap-2">
                    VIEW PROJECT <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Work;
