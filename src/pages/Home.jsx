import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const Home = () => {
  useEffect(() => {
    document.title = "MW Zawion — Digital Product & Technology Studio";
    window.scrollTo(0, 0);
  }, []);

  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="w-full bg-mw-white min-h-screen text-mw-black pt-32 pb-48">
      
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 md:mt-24">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <span className="text-mw-muted font-mono text-[10px] tracking-widest uppercase block">
            MW ZAWION / DIGITAL PRODUCT & TECHNOLOGY STUDIO
          </span>
          <span className="text-mw-muted font-mono text-[10px] tracking-widest uppercase block mt-2 md:mt-0">
            BANGALORE / INDIA
          </span>
        </div>
        
        <h1 className="text-5xl md:text-[7vw] font-bold tracking-tighter uppercase leading-none max-w-5xl mb-8">
          WE BUILD<br />DIGITAL SYSTEMS<br />THAT MOVE<br />BUSINESSES FORWARD.
        </h1>
        
        <p className="text-mw-muted text-lg md:text-2xl max-w-2xl mb-12 font-light leading-relaxed">
          We design and engineer websites, digital products, AI systems and experiences for ambitious businesses.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6">
          <Link to="/contact" className="bg-mw-accent text-mw-white hover:bg-mw-black transition-colors font-bold tracking-widest uppercase text-sm px-8 py-4 text-center">
            START A PROJECT →
          </Link>
          <Link to="/work" className="border border-mw-border text-mw-black hover:border-mw-black transition-colors font-bold tracking-widest uppercase text-sm px-8 py-4 text-center">
            EXPLORE OUR WORK →
          </Link>
        </div>
      </div>

      {/* Intro */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-48">
        <span className="text-mw-muted font-mono text-[10px] tracking-widest uppercase mb-4 block">WHAT WE DO</span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase mb-8 max-w-3xl">
          FROM BUSINESS IDEA TO DIGITAL SYSTEM.
        </h2>
        <p className="text-mw-muted text-lg md:text-xl font-light leading-relaxed max-w-2xl">
          MW Zawion combines strategy, design and engineering to create digital products and technology systems that help businesses operate, grow and communicate better.
        </p>
      </div>

      {/* Featured Work */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-48">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-mw-border pb-8 mb-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase mb-2">SELECTED WORK</h2>
            <p className="text-mw-muted text-sm md:text-base">A selection of products, platforms and digital systems we've built.</p>
          </div>
          <Link to="/work" className="hidden md:block text-xs font-bold tracking-widest text-mw-black border border-mw-border px-6 py-3 uppercase hover:border-mw-black transition-colors">
            VIEW ALL WORK →
          </Link>
        </div>

        <div className="flex flex-col gap-32">
          {featuredProjects.map((project, index) => (
            <div key={project.id} className="flex flex-col group">
              <Link to={`/work/${project.id}`}>
                <div className="w-full h-[50vh] md:h-[80vh] bg-mw-lightgrey overflow-hidden mb-8 border border-mw-border group-hover:border-mw-black transition-colors relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out grayscale group-hover:grayscale-0"
                  />
                </div>
              </Link>
              <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                <div>
                  <span className="text-mw-accent font-mono text-xs tracking-widest uppercase mb-2 block">
                    0{index + 1} — {project.category}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold tracking-tighter uppercase mb-4 group-hover:text-mw-accent transition-colors">
                    <Link to={`/work/${project.id}`}>{project.title}</Link>
                  </h3>
                  <p className="text-mw-muted max-w-xl text-sm md:text-base">{project.description}</p>
                </div>
                <div className="text-right">
                  <span className="text-mw-muted font-mono text-xs tracking-widest block mb-4">{project.year}</span>
                  <Link to={`/work/${project.id}`} className="text-xs font-bold tracking-widest text-mw-black border border-mw-border px-6 py-3 uppercase hover:border-mw-black transition-colors inline-block">
                    VIEW PROJECT →
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

export default Home;
