import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { projects } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const projectIndex = projects.findIndex(p => p.id === id);
  
  if (projectIndex === -1) {
    return <Navigate to="/404" />;
  }

  const project = projects[projectIndex];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  useEffect(() => {
    document.title = `MW Zawion — ${project.title}`;
  }, [project.title]);

  return (
    <div className="w-full bg-mw-white min-h-screen text-mw-black pt-32 pb-48">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 md:mt-24 mb-16">
        <h1 className="text-5xl md:text-[7vw] font-bold tracking-tighter uppercase leading-none mb-8">
          {project.title}
        </h1>
        <div className="flex flex-col md:flex-row gap-8 md:gap-24 border-t border-mw-border pt-8">
          <div>
            <span className="text-xs font-mono tracking-widest text-mw-muted uppercase block mb-1">CATEGORY</span>
            <span className="font-bold tracking-widest uppercase text-sm">{project.category}</span>
          </div>
          <div>
            <span className="text-xs font-mono tracking-widest text-mw-muted uppercase block mb-1">YEAR</span>
            <span className="font-bold tracking-widest uppercase text-sm">{project.year}</span>
          </div>
          <div>
            <span className="text-xs font-mono tracking-widest text-mw-muted uppercase block mb-1">SERVICES</span>
            <span className="font-bold tracking-widest uppercase text-sm">{project.technology[0]}, {project.technology[1]}</span>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="w-full h-[60vh] md:h-[80vh] bg-mw-lightgrey mb-24">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-16 mb-48">
        
        {/* Left Column (Sticky Sidebar) */}
        <div className="md:col-span-4 relative">
          <div className="sticky top-32">
            <h3 className="text-2xl font-bold tracking-tighter uppercase mb-6">TECHNOLOGY</h3>
            <ul className="flex flex-col gap-2">
              {project.technology.map(tech => (
                <li key={tech} className="text-mw-muted font-mono tracking-widest text-sm uppercase border-b border-mw-border pb-2">{tech}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column (Text blocks) */}
        <div className="md:col-span-8 flex flex-col gap-24">
          
          <section>
            <h2 className="text-sm font-mono tracking-widest text-mw-muted uppercase mb-6">OVERVIEW</h2>
            <p className="text-xl md:text-3xl font-light leading-relaxed">
              {project.overview}
            </p>
          </section>

          <section>
            <h2 className="text-sm font-mono tracking-widest text-mw-muted uppercase mb-6">THE CHALLENGE</h2>
            <p className="text-lg md:text-xl font-light leading-relaxed text-mw-muted">
              {project.challenge}
            </p>
          </section>

          <section>
            <h2 className="text-sm font-mono tracking-widest text-mw-muted uppercase mb-6">THE APPROACH & BUILD</h2>
            <p className="text-lg md:text-xl font-light leading-relaxed text-mw-muted mb-6">
              {project.approach}
            </p>
            <p className="text-lg md:text-xl font-light leading-relaxed text-mw-muted">
              {project.build}
            </p>
          </section>

          <section>
            <h2 className="text-sm font-mono tracking-widest text-mw-muted uppercase mb-6">RESULT</h2>
            <p className="text-xl md:text-2xl font-bold tracking-tighter leading-relaxed">
              {project.result}
            </p>
          </section>

        </div>
      </div>

      {/* Next Project */}
      <div className="border-t border-mw-border">
        <Link to={`/work/${nextProject.id}`} className="block group">
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <span className="text-xs font-mono tracking-widest text-mw-muted uppercase block mb-4">NEXT PROJECT</span>
              <h2 className="text-4xl md:text-[5vw] font-bold tracking-tighter uppercase leading-none group-hover:text-mw-accent transition-colors">
                {nextProject.title}
              </h2>
            </div>
            <div className="mt-8 md:mt-0 w-12 h-12 rounded-full border border-mw-border flex items-center justify-center group-hover:bg-mw-accent group-hover:border-mw-accent group-hover:text-mw-white transition-colors">
              →
            </div>
          </div>
        </Link>
      </div>

    </div>
  );
};

export default ProjectDetail;
