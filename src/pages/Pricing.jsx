import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/UI/Button';

const Pricing = () => {
  useEffect(() => {
    document.title = "MW Zawion — Pricing";
    window.scrollTo(0, 0);
  }, []);

  const packages = [
    {
      name: "LAUNCH",
      price: "₹25,000+",
      for: "For focused websites and small digital projects.",
      features: [
        "4–6 Custom Pages",
        "Responsive Design",
        "Mobile Optimization",
        "Contact / WhatsApp Integration",
        "Basic SEO",
        "7 Days Post-Launch Support"
      ]
    },
    {
      name: "GROWTH",
      price: "₹50,000+",
      for: "For businesses that need a stronger digital presence.",
      features: [
        "6–10 Custom Pages",
        "Premium UI & Interactions",
        "Content Management System",
        "Lead Capture & Analytics",
        "Advanced SEO",
        "14 Days Post-Launch Support"
      ]
    },
    {
      name: "SCALE",
      price: "₹1,00,000+",
      for: "For advanced websites, applications and integrations.",
      features: [
        "Web Application Architecture",
        "Custom Authentication",
        "Database Setup",
        "Admin Dashboard",
        "API Integrations",
        "30 Days Post-Launch Support"
      ]
    },
    {
      name: "CUSTOM",
      price: "₹2,00,000+",
      for: "For complex digital products and custom platforms.",
      features: [
        "SaaS Architecture",
        "Custom Enterprise Platforms",
        "Advanced Backend Engineering",
        "Complex Integrations",
        "Scalable Infrastructure",
        "Dedicated Support SLAs"
      ]
    }
  ];

  return (
    <div className="w-full bg-mw-white min-h-screen text-mw-black pt-32 pb-48">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 md:mt-24 mb-32">
        <h1 className="text-5xl md:text-[6vw] font-bold tracking-tighter uppercase leading-none mb-6">
          START WITH THE RIGHT SCALE.
        </h1>
        <p className="text-mw-muted text-lg md:text-2xl font-light max-w-2xl">
          Every project is scoped individually based on complexity, integrations, design requirements and timeline.
        </p>
      </div>

      {/* Standard Pricing Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-32">
        {packages.map((pkg, i) => {
          const colors = ['border-mw-coral/30 hover:border-mw-coral', 'border-mw-electric/30 hover:border-mw-electric', 'border-mw-lime/50 hover:border-mw-lime', 'border-mw-purple/30 hover:border-mw-purple'];
          const bgColors = ['bg-mw-coral/5', 'bg-mw-electric/5', 'bg-mw-lime/10', 'bg-mw-purple/5'];
          const textColors = ['text-mw-coral', 'text-mw-electric', 'text-mw-black', 'text-mw-purple'];
          
          return (
            <div key={i} className={`border-2 p-8 flex flex-col h-full transition-all duration-300 group hover:shadow-xl rounded-2xl ${colors[i % 4]} ${bgColors[i % 4]}`}>
              <h3 className={`text-xl font-bold tracking-widest uppercase mb-4 transition-colors ${textColors[i % 4]}`}>{pkg.name}</h3>
              <div className="text-3xl font-bold tracking-tighter mb-4 text-mw-black">{pkg.price}</div>
              <p className="text-sm text-mw-black/70 mb-8 h-12 font-light">{pkg.for}</p>
              
              <ul className="flex flex-col gap-4 mb-12 flex-grow">
                {pkg.features.map((feature, j) => (
                  <li key={j} className="text-sm font-light flex items-start gap-3">
                    <span className={`mt-0.5 ${textColors[i % 4]}`}>●</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button to={`/estimate?package=${pkg.name} (${pkg.price})`} variant="outline" fullWidth className="bg-mw-white hover:bg-mw-black hover:text-mw-white hover:border-mw-black">
                INQUIRE →
              </Button>
            </div>
          )
        })}
      </div>

      {/* AI Systems Special Block */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-32">
        <div className="bg-mw-purple text-mw-white rounded-3xl p-8 md:p-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 shadow-2xl shadow-mw-purple/20">
          <div className="md:w-1/2">
            <h2 className="text-sm font-mono tracking-widest text-mw-lime uppercase mb-4 bg-mw-black/20 inline-block px-3 py-1 rounded-full">SPECIALIZED ENGINEERING</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-4">AI SYSTEMS</h3>
            <p className="text-white/80 font-light mb-2">For AI applications, automation and intelligent workflows.</p>
            <div className="text-2xl font-bold tracking-tighter mt-4 text-mw-lime">Starting at ₹75,000+</div>
          </div>
          <div className="md:w-1/2 flex justify-start md:justify-end">
            <Button to="/estimate?type=AI System&package=AI Systems (₹75K+)" variant="accent" className="bg-mw-lime text-mw-black hover:bg-mw-white shadow-lg shadow-mw-lime/20">
              DISCUSS AI PROJECT →
            </Button>
          </div>
        </div>
      </div>

      {/* FAQ & Next Steps Section */}
      <div className="max-w-3xl mx-auto px-6 md:px-12 text-center border-t border-mw-border pt-32">
        <h2 className="text-sm font-bold tracking-widest uppercase text-mw-muted mb-4">NOT SURE WHICH OPTION FITS?</h2>
        <h3 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase mb-12">
          TELL US WHAT YOU'RE BUILDING.
        </h3>
        <Button to="/estimate" variant="primary" className="mb-24">GET A PROJECT ESTIMATE →</Button>
        
        <div className="text-left bg-mw-lightgrey rounded-3xl p-8 md:p-12">
          <h4 className="text-2xl font-bold tracking-tighter uppercase mb-8 border-b border-mw-border pb-4">FREQUENTLY ASKED QUESTIONS</h4>
          <div className="space-y-8">
            <div>
              <h5 className="font-bold tracking-widest text-sm uppercase mb-2">How does pricing work?</h5>
              <p className="text-mw-muted text-sm font-light">We price based on the project's scope, complexity, and the engineering effort required, not hourly rates.</p>
            </div>
            <div>
              <h5 className="font-bold tracking-widest text-sm uppercase mb-2">How long does a project take?</h5>
              <p className="text-mw-muted text-sm font-light">Launch projects take 2-4 weeks. Larger web applications and AI systems typically take 1-3 months.</p>
            </div>
            <div>
              <h5 className="font-bold tracking-widest text-sm uppercase mb-2">Do you build custom applications?</h5>
              <p className="text-mw-muted text-sm font-light">Yes. We specialize in custom React/Node architectures and full-stack web applications.</p>
            </div>
            <div>
              <h5 className="font-bold tracking-widest text-sm uppercase mb-2">Can you provide ongoing support?</h5>
              <p className="text-mw-muted text-sm font-light">Every project includes a post-launch support period, and we offer retainers for ongoing development.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Pricing;
