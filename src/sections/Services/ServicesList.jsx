import React from 'react';
import { services } from '../../data/services';

const ServicesList = () => {
  return (
    <section id="services" className="w-full bg-mw-black py-32 px-6 md:px-12 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 md:gap-12">
        <div className="mb-8">
          <h2 className="text-xl md:text-3xl font-bold tracking-tighter text-mw-muted border-l-2 border-mw-accent pl-4">
            That's what we build.
          </h2>
        </div>
        {services.map((service) => (
          <div 
            key={service.id}
            className="flex flex-col md:flex-row gap-6 md:gap-16 items-start md:items-center py-8 border-b border-mw-dark hover:border-mw-accent transition-colors duration-500 group"
          >
            <div className="text-mw-muted font-mono text-sm">/{service.id}</div>
            <div className="flex-1">
              <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-mw-white mb-4 group-hover:text-mw-accent transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-mw-muted text-sm md:text-base max-w-xl">
                {service.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 md:max-w-[250px] justify-start md:justify-end">
              {service.technologies.map(tech => (
                <span key={tech} className="text-[10px] tracking-wider border border-mw-dark px-3 py-1 text-mw-muted rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesList;
