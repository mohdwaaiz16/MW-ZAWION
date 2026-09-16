import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Industries = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    document.title = "MW Zawion — Industries";
    window.scrollTo(0, 0);
  }, []);

  const industries = [
    { name: "FASHION & RETAIL", desc: "Headless e-commerce and premium brand experiences." },
    { name: "HOSPITALITY", desc: "Booking systems, internal operations, and digital concierge apps." },
    { name: "MANUFACTURING", desc: "B2B portals, inventory dashboards, and supply chain visualization." },
    { name: "TECHNOLOGY", desc: "SaaS platforms, AI integrations, and developer tools." },
    { name: "EDUCATION", desc: "Learning management systems and student portals." },
    { name: "STARTUPS", desc: "MVPs, scalable architectures, and rapid go-to-market websites." },
    { name: "PROFESSIONAL SERVICES", desc: "Corporate websites, client portals, and automated CRM workflows." },
    { name: "CONSUMER BRANDS", desc: "Interactive storytelling and direct-to-consumer funnels." }
  ];

  return (
    <div className={`w-full min-h-screen pt-32 pb-48 transition-colors duration-700 ${hoveredIndex !== null ? 'bg-mw-dark text-mw-white' : 'bg-mw-white text-mw-black'}`}>
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 md:mt-24 mb-32">
        <h1 className="text-4xl md:text-[5vw] font-bold tracking-tighter uppercase leading-none mb-6">
          BUILT FOR DIFFERENT INDUSTRIES.<br />
          <span className="text-mw-muted">ENGINEERED AROUND DIFFERENT PROBLEMS.</span>
        </h1>
      </div>

      {/* Industries Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col border-t border-mw-border">
          {industries.map((industry, index) => (
            <div 
              key={industry.name} 
              className="flex flex-col md:flex-row justify-between items-start md:items-center py-12 border-b border-mw-border group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              
              <div className="flex items-center gap-8 mb-4 md:mb-0 z-10">
                <span className={`font-mono text-sm tracking-widest w-8 ${hoveredIndex !== null ? 'text-mw-muted' : 'text-mw-muted'}`}>
                  0{index + 1}
                </span>
                <h3 className={`text-3xl md:text-5xl font-bold tracking-tighter uppercase transition-transform duration-500 ${hoveredIndex === index ? 'translate-x-4 text-mw-lime' : ''}`}>
                  {industry.name}
                </h3>
              </div>
              
              <div className="z-10 md:text-right md:w-1/3">
                <p className={`text-sm md:text-base font-light transition-opacity duration-500 ${hoveredIndex === index ? 'opacity-100 text-mw-white' : 'opacity-0'}`}>
                  {industry.desc}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-48 text-center relative z-10">
        <Link to="/contact" className={`font-bold tracking-widest uppercase text-sm px-12 py-5 border transition-colors ${hoveredIndex !== null ? 'border-mw-white text-mw-white hover:bg-mw-white hover:text-mw-black' : 'border-mw-black text-mw-black hover:bg-mw-black hover:text-mw-white'}`}>
          DISCUSS YOUR INDUSTRY →
        </Link>
      </div>

    </div>
  );
};

export default Industries;
