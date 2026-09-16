import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Intelligence = () => {
  useEffect(() => {
    document.title = "MW Zawion — Intelligence";
    window.scrollTo(0, 0);
  }, []);

  const capabilities = [
    "AI APPLICATIONS",
    "AI AGENTS",
    "AI AUTOMATION",
    "AI SEARCH",
    "AI WORKFLOWS",
    "INTELLIGENT BUSINESS SYSTEMS"
  ];

  return (
    <div className="w-full bg-mw-white min-h-screen text-mw-black pt-32 pb-48">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 md:mt-24 mb-32">
        <h1 className="text-5xl md:text-[6vw] font-bold tracking-tighter uppercase leading-none mb-6">
          WE DON'T JUST USE AI.<br />
          <span className="text-mw-accent">WE BUILD WITH IT.</span>
        </h1>
        <p className="text-mw-muted text-lg md:text-2xl font-light max-w-2xl">
          From intelligent assistants to automated workflows, MW Zawion builds practical AI systems that connect intelligence with real business operations.
        </p>
      </div>

      {/* Network Visualization Placeholder */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-32">
        <div className="w-full h-[40vh] md:h-[60vh] bg-mw-lightgrey border border-mw-border flex items-center justify-center relative overflow-hidden">
          {/* Abstract Data Nodes */}
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #3155FF 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
          <div className="z-10 bg-mw-white px-8 py-4 border border-mw-border shadow-sm">
            <span className="font-mono text-sm tracking-widest uppercase font-bold text-mw-accent">SYSTEM ARCHITECTURE: ACTIVE</span>
          </div>
        </div>
      </div>

      {/* Capabilities */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 border-t border-mw-border pt-16">
          {capabilities.map((cap, index) => (
            <div key={index} className="flex items-center gap-4 group">
              <div className="w-2 h-2 rounded-full bg-mw-border group-hover:bg-mw-lime transition-colors"></div>
              <h3 className="text-xl font-bold tracking-widest uppercase">{cap}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-32 text-center">
        <Link to="/contact" className="inline-block bg-mw-black text-mw-white hover:bg-mw-accent transition-colors font-bold tracking-widest uppercase text-sm px-12 py-5">
          DISCUSS AI SYSTEMS →
        </Link>
      </div>

    </div>
  );
};

export default Intelligence;
