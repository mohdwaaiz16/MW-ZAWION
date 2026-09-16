import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  useEffect(() => {
    document.title = "MW Zawion — Web, AI & Digital Services";
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      id: "01",
      title: "WEBSITE DEVELOPMENT",
      description: "Custom websites designed around your brand and business. We build lightning-fast, accessible, and highly optimized marketing sites that convert.",
      deliverables: ["Marketing Websites", "Landing Pages", "Corporate Sites", "Headless CMS"]
    },
    {
      id: "02",
      title: "WEB APPLICATIONS",
      description: "Complex digital products, dashboards and platforms. We engineer scalable frontends and secure backends tailored to your specific operations.",
      deliverables: ["SaaS Platforms", "Internal Dashboards", "Customer Portals", "Progressive Web Apps"]
    },
    {
      id: "03",
      title: "E-COMMERCE",
      description: "High-converting digital storefronts and commerce experiences. We integrate headless architecture with robust payment systems.",
      deliverables: ["Custom Storefronts", "Headless Shopify", "B2B Commerce", "Checkout Optimization"]
    },
    {
      id: "04",
      title: "AI SYSTEMS",
      description: "AI-powered products, assistants and intelligent workflows. We integrate LLMs and machine learning into practical, usable business tools.",
      deliverables: ["AI Chatbots", "Internal AI Assistants", "Document Processing", "Semantic Search"]
    },
    {
      id: "05",
      title: "AUTOMATION",
      description: "Connect your tools and eliminate repetitive work. We design complex workflow automations using modern orchestration tools.",
      deliverables: ["n8n Workflows", "CRM Automation", "Data Pipelines", "API Integrations"]
    },
    {
      id: "06",
      title: "DIGITAL EXPERIENCES",
      description: "Launch pages, interactive experiences and digital identities. We combine 3D, WebGL, and advanced motion design for maximum impact.",
      deliverables: ["Campaign Sites", "Interactive Storytelling", "Brand Portals", "WebGL Experiences"]
    }
  ];

  return (
    <div className="w-full bg-mw-black min-h-screen text-mw-white pt-32 pb-48">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 md:mt-24 mb-32">
        <h1 className="text-5xl md:text-[6vw] font-bold tracking-tighter uppercase leading-none mb-6">
          WHAT WE BUILD
        </h1>
        <p className="text-mw-muted text-lg md:text-2xl font-light max-w-3xl">
          We combine premium design with rigorous engineering to build websites, products, and intelligent systems.
        </p>
      </div>

      {/* Services List */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col border-t border-mw-border">
          {services.map((service) => (
            <div key={service.id} className="grid grid-cols-1 md:grid-cols-12 gap-8 py-16 border-b border-mw-border group">
              
              <div className="md:col-span-2">
                <span className="text-mw-accent font-mono text-sm tracking-widest">{service.id}</span>
              </div>
              
              <div className="md:col-span-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter uppercase mb-6 group-hover:text-mw-muted transition-colors">
                  {service.title}
                </h2>
                <p className="text-mw-white/80 text-lg md:text-xl font-light leading-relaxed max-w-xl">
                  {service.description}
                </p>
              </div>
              
              <div className="md:col-span-4 flex flex-col justify-between">
                <div>
                  <h4 className="text-xs font-mono tracking-widest text-mw-muted uppercase mb-4">TYPICAL DELIVERABLES</h4>
                  <ul className="flex flex-col gap-2">
                    {service.deliverables.map(item => (
                      <li key={item} className="text-sm border-b border-mw-border pb-2 last:border-0 opacity-80">{item}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-12 md:mt-0 text-right md:text-left">
                   <Link to="/contact" className="text-xs font-bold tracking-widest text-mw-white uppercase hover:text-mw-accent transition-colors">
                    REQUEST SERVICE →
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

export default Services;
