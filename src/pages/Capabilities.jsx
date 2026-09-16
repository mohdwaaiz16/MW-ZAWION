import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/UI/Button';

const Capabilities = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    document.title = "MW Zawion — Capabilities";
    window.scrollTo(0, 0);
  }, []);

  const capabilities = [
    {
      title: "DIGITAL PRODUCTS",
      desc: "Websites, Web Applications, Customer Portals, Internal Platforms",
      tech: "React, Next.js, Node.js"
    },
    {
      title: "E-COMMERCE",
      desc: "Online Stores, Commerce Experiences, Product Systems, Conversion-focused Interfaces",
      tech: "Shopify Plus, Stripe, Medusa"
    },
    {
      title: "INTELLIGENT SYSTEMS",
      desc: "AI Applications, AI Agents, AI Automation, AI Workflows",
      tech: "OpenAI, Python, Vector DBs"
    },
    {
      title: "ENGINEERING",
      desc: "Frontend, Backend, APIs, Databases, Cloud Systems",
      tech: "PostgreSQL, Supabase, Vercel"
    },
    {
      title: "DIGITAL EXPERIENCES",
      desc: "UI/UX, Design Systems, Interactive Experiences, Brand Websites",
      tech: "Framer Motion, WebGL, GSAP"
    }
  ];

  return (
    <div className="w-full bg-mw-white min-h-screen text-mw-black pt-32 pb-48">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 md:mt-24 mb-32">
        <h1 className="text-5xl md:text-[6vw] font-bold tracking-tighter uppercase leading-none mb-6">
          WHAT WE BUILD.
        </h1>
        <p className="text-mw-muted text-lg md:text-2xl font-light">
          Strategy, design and engineering for ambitious businesses.
        </p>
      </div>

      {/* Capabilities List */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col border-t-2 border-mw-border">
          {capabilities.map((cap, index) => {
            const hoverColors = ['group-hover:text-mw-coral', 'group-hover:text-mw-electric', 'group-hover:text-mw-purple', 'group-hover:text-mw-lime', 'group-hover:text-mw-accent'];
            return (
              <div 
                key={index} 
                className="flex flex-col lg:flex-row justify-between items-start lg:items-center py-16 border-b-2 border-mw-border group relative transition-colors duration-500 hover:bg-mw-lightgrey px-8 -mx-8 rounded-2xl"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                
                <div className="flex items-start lg:items-center gap-8 mb-6 lg:mb-0 lg:w-1/2">
                  <span className={`font-mono text-sm tracking-widest transition-colors ${hoveredIndex === index ? hoverColors[index].replace('group-hover:', '') : 'text-mw-muted'}`}>
                    0{index + 1}
                  </span>
                  <h3 className={`text-3xl md:text-5xl font-bold tracking-tighter uppercase leading-none transition-colors duration-300 ${hoverColors[index]}`}>
                    {cap.title}
                  </h3>
                </div>
                
                <div className="lg:w-1/2 flex flex-col md:flex-row justify-between items-start gap-8">
                  <p className="text-mw-muted text-lg font-light leading-relaxed max-w-sm group-hover:text-mw-black transition-colors">
                    {cap.desc}
                  </p>
                  <div className="text-left md:text-right">
                    <span className="block text-xs font-mono tracking-widest text-mw-muted uppercase mb-2">Technology</span>
                    <span className="block text-sm font-bold tracking-widest uppercase text-mw-black/80">{cap.tech}</span>
                  </div>
                </div>

              </div>
            )
          })}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-32 text-center md:text-left">
        <Button to="/contact" variant="primary">
          START A PROJECT →
        </Button>
      </div>

    </div>
  );
};

export default Capabilities;
