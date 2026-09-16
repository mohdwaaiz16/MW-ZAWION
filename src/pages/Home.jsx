import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const Home = () => {
  useEffect(() => {
    document.title = "MW Zawion — Digital Product & Technology Studio";
    window.scrollTo(0, 0);
  }, []);

  const featuredProjects = projects.slice(0, 3);

  const exploreDestinations = [
    { title: "OUR WORK", desc: "View our portfolio of digital systems.", url: "/work", color: "bg-mw-softblue text-mw-electric border-mw-electric/30 hover:border-mw-electric" },
    { title: "WHAT WE BUILD", desc: "Explore our capabilities and services.", url: "/capabilities", color: "bg-mw-lime text-mw-black border-mw-lime hover:border-mw-black" },
    { title: "AI & AUTOMATION", desc: "Intelligent systems for business.", url: "/intelligence", color: "bg-mw-purple text-mw-white border-mw-purple hover:border-mw-black" },
    { title: "PRICING", desc: "Transparent starting points.", url: "/pricing", color: "bg-mw-coral text-mw-white border-mw-coral hover:border-mw-black" },
    { title: "ABOUT US", desc: "The studio behind the work.", url: "/about", color: "bg-mw-softblue text-mw-black border-mw-softblue hover:border-mw-black" },
    { title: "START A PROJECT", desc: "Tell us what you're building.", url: "/contact", color: "bg-mw-electric text-mw-white border-mw-electric hover:border-mw-black" }
  ];

  const buildOptions = [
    { label: "I NEED A WEBSITE", dest: "Explore Website Development", url: "/capabilities" },
    { label: "I NEED AN ONLINE STORE", dest: "Explore E-commerce", url: "/capabilities" },
    { label: "I NEED A WEB APP", dest: "Explore Applications", url: "/capabilities" },
    { label: "I WANT TO USE AI", dest: "Explore AI Systems", url: "/intelligence" },
    { label: "I WANT TO AUTOMATE MY BUSINESS", dest: "Explore Automation", url: "/capabilities" },
    { label: "I HAVE A COMPLEX IDEA", dest: "Talk to MW Zawion", url: "/contact", highlight: true }
  ];

  return (
    <div className="w-full bg-mw-white min-h-screen text-mw-black pt-32 pb-48">
      
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 md:mt-24">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 border-b border-mw-border pb-6">
          <div>
            <span className="text-mw-black font-bold tracking-widest uppercase block mb-1">
              MW ZAWION
            </span>
            <span className="text-mw-muted font-mono text-[10px] tracking-widest uppercase block">
              DIGITAL PRODUCT & TECHNOLOGY STUDIO
            </span>
          </div>
          <span className="text-mw-muted font-mono text-[10px] tracking-widest uppercase block mt-4 md:mt-0">
            BANGALORE / INDIA
          </span>
        </div>
        
        <h1 className="text-5xl md:text-[6vw] font-bold tracking-tighter uppercase leading-none max-w-5xl mb-8">
          <span className="text-mw-electric">WE BUILD</span> DIGITAL PRODUCTS FOR AMBITIOUS BUSINESSES.
        </h1>
        
        <p className="text-mw-muted text-lg md:text-2xl max-w-2xl mb-12 font-light leading-relaxed">
          Websites, applications, AI systems and digital experiences designed around real business problems.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 mb-24">
          <Link to="/contact" className="bg-mw-electric text-mw-white hover:bg-mw-black transition-colors font-bold tracking-widest uppercase text-sm px-8 py-4 text-center rounded-full shadow-lg shadow-mw-electric/20">
            START A PROJECT →
          </Link>
          <Link to="/work" className="border-2 border-mw-border text-mw-black hover:border-mw-black transition-colors font-bold tracking-widest uppercase text-sm px-8 py-4 text-center rounded-full">
            EXPLORE OUR WORK →
          </Link>
        </div>
      </div>

      {/* Quick Action Strip */}
      <div className="w-full bg-mw-electric text-mw-white sticky top-0 z-40 overflow-x-auto hide-scrollbar shadow-xl shadow-mw-electric/10">
        <div className="max-w-7xl mx-auto flex items-center justify-start md:justify-between whitespace-nowrap min-w-max md:min-w-0">
          {['BUILD A WEBSITE', 'BUILD AN APP', 'ADD AI', 'AUTOMATE YOUR BUSINESS', 'TALK TO US'].map((action, i) => (
            <Link key={i} to="/contact" className="px-6 md:px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-mw-white hover:text-mw-electric transition-colors flex items-center gap-2 border-r border-mw-white/20 last:border-r-0">
              {action} <span>→</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Explore MW Zawion (Linktree-inspired Grid) */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-32">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase mb-12">
          EXPLORE MW ZAWION
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exploreDestinations.map((dest, i) => (
            <Link key={i} to={dest.url} className={`p-8 border-2 rounded-2xl group cursor-hover transition-all hover:-translate-y-2 hover:shadow-2xl ${dest.color}`}>
              <div className="flex justify-between items-start mb-12">
                <h3 className="text-2xl font-bold tracking-tighter uppercase w-2/3 leading-tight">{dest.title}</h3>
                <div className="w-10 h-10 rounded-full border border-current flex items-center justify-center group-hover:scale-110 transition-transform bg-white/10">
                  →
                </div>
              </div>
              <p className="font-light text-sm opacity-90">{dest.desc}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Intro */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-48">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-mw-border pt-16">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-8">
              WE TURN IDEAS INTO DIGITAL SYSTEMS.
            </h2>
          </div>
          <div className="flex flex-col justify-between">
            <p className="text-mw-muted text-lg md:text-xl font-light leading-relaxed mb-12">
              MW Zawion is a digital product and technology studio based in Bangalore, India. We combine strategy, design and engineering to build websites, applications, AI systems and digital experiences for businesses ready to move forward.
            </p>
            <div className="flex gap-8">
              <span className="font-bold tracking-widest text-xs uppercase border-b-2 border-mw-accent pb-1">DESIGN</span>
              <span className="font-bold tracking-widest text-xs uppercase border-b-2 border-mw-accent pb-1">ENGINEERING</span>
              <span className="font-bold tracking-widest text-xs uppercase border-b-2 border-mw-accent pb-1">INTELLIGENCE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Choose Your Path */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-48">
        <div className="bg-mw-dark text-mw-white rounded-3xl p-8 md:p-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase mb-12 text-center">
            WHAT ARE YOU TRYING TO BUILD?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {buildOptions.map((opt, i) => (
              <Link key={i} to={opt.url} className={`p-6 rounded-xl flex flex-col group transition-colors ${opt.highlight ? 'bg-mw-lime text-mw-black' : 'bg-white/5 hover:bg-white/10'}`}>
                <span className="font-mono text-xs tracking-widest uppercase mb-4 opacity-60">{opt.label}</span>
                <span className="font-bold tracking-widest text-sm uppercase flex justify-between items-center">
                  {opt.dest} <span className="group-hover:translate-x-2 transition-transform">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Work */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-48">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-mw-border pb-8 mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-2">BUILT IN THE REAL WORLD.</h2>
            <p className="text-mw-muted text-sm md:text-base">A selection of projects, experiments and digital systems.</p>
          </div>
          <Link to="/work" className="hidden md:block text-xs font-bold tracking-widest text-mw-black border-2 border-mw-border rounded-full px-6 py-3 uppercase hover:border-mw-black transition-colors">
            VIEW ALL WORK →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-24">
          {featuredProjects.map((project, index) => (
            <div key={project.id} className={`flex flex-col group ${index === 2 ? 'md:col-span-2' : ''}`}>
              <Link to={`/work/${project.id}`}>
                <div className={`w-full ${index === 2 ? 'h-[50vh]' : 'h-[60vh]'} bg-mw-lightgrey rounded-xl overflow-hidden mb-8 border border-mw-border group-hover:border-mw-black transition-colors relative`}>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
                  />
                </div>
              </Link>
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-mw-accent font-mono text-xs tracking-widest uppercase mb-2 block">
                    0{index + 1} — {project.category}
                  </span>
                  <h3 className="text-3xl font-bold tracking-tighter uppercase mb-4 group-hover:text-mw-accent transition-colors">
                    <Link to={`/work/${project.id}`}>{project.title}</Link>
                  </h3>
                </div>
                <Link to={`/work/${project.id}`} className="w-12 h-12 rounded-full border border-mw-border flex items-center justify-center group-hover:bg-mw-black group-hover:text-mw-white transition-colors">
                  →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Home;
