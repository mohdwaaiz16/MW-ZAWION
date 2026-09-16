import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Lab = () => {
  useEffect(() => {
    document.title = "MW Zawion — The Lab";
    window.scrollTo(0, 0);
  }, []);

  const experiments = [
    { name: "PARTICLE FIELD", status: "ONLINE", id: "01" },
    { name: "SIGNAL", status: "TESTING", id: "02" },
    { name: "NEURAL NETWORK", status: "ACTIVE", id: "03" },
    { name: "GRAVITY", status: "ARCHIVED", id: "04" },
    { name: "SYSTEM", status: "PROTOTYPE", id: "05" },
    { name: "INTERFACE", status: "DEVELOPMENT", id: "06" }
  ];

  return (
    <div className="w-full bg-mw-white min-h-screen text-mw-black pt-32 pb-48">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 md:mt-24 mb-32">
        <h1 className="text-5xl md:text-[6vw] font-bold tracking-tighter uppercase leading-none mb-6">
          EXPERIMENTS IN DIGITAL TECHNOLOGY.
        </h1>
        <p className="text-mw-muted text-lg md:text-2xl font-light">
          Prototypes, ideas in progress, and creative engineering.
        </p>
      </div>

      {/* Lab Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiments.map((exp, index) => (
            <div key={index} className="aspect-square border border-mw-border flex flex-col justify-between p-8 group cursor-hover hover:border-mw-accent transition-colors relative overflow-hidden bg-mw-lightgrey">
              
              {/* Abstract decorative element */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-mw-border/50 rounded-full group-hover:scale-150 transition-transform duration-1000 ease-out opacity-20"></div>

              <div className="flex justify-between items-start z-10">
                <span className="font-mono text-xs tracking-widest text-mw-muted">EXP—{exp.id}</span>
                <span className={`font-mono text-[10px] tracking-widest px-2 py-1 border ${exp.status === 'ONLINE' || exp.status === 'ACTIVE' ? 'border-mw-accent text-mw-accent' : 'border-mw-border text-mw-muted'}`}>
                  {exp.status}
                </span>
              </div>
              
              <div className="z-10">
                <h3 className="text-2xl font-bold tracking-tighter uppercase mb-4 group-hover:text-mw-accent transition-colors">
                  {exp.name}
                </h3>
                <button className="text-xs font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                  RUN EXPERIMENT →
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Lab;
