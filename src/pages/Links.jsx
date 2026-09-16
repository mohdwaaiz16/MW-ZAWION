import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Links = () => {
  useEffect(() => {
    document.title = "MW Zawion — Links";
    window.scrollTo(0, 0);
  }, []);

  const internalLinks = [
    { label: "START A PROJECT →", url: "/contact", primary: true },
    { label: "VIEW OUR WORK →", url: "/work" },
    { label: "OUR SERVICES →", url: "/capabilities" },
    { label: "AI & AUTOMATION →", url: "/intelligence" },
    { label: "PRICING →", url: "/pricing" },
    { label: "ABOUT MW ZAWION →", url: "/about" },
    { label: "CONTACT →", url: "/contact" }
  ];

  const socialLinks = [
    { label: "INSTAGRAM ↗", url: "https://instagram.com" },
    { label: "LINKEDIN ↗", url: "https://linkedin.com" },
    { label: "GITHUB ↗", url: "https://github.com" }
  ];

  return (
    <div className="w-full bg-mw-white min-h-screen text-mw-black pt-16 pb-32 flex flex-col items-center">
      
      {/* Header Profile */}
      <div className="flex flex-col items-center mb-12 px-6 text-center">
        <Link to="/" className="w-20 h-20 bg-mw-black text-mw-white rounded-full flex items-center justify-center font-bold tracking-widest uppercase mb-6 hover:scale-105 transition-transform">
          MW
        </Link>
        <h1 className="text-2xl font-bold tracking-tighter uppercase mb-2">MW ZAWION</h1>
        <p className="text-mw-muted font-light text-sm max-w-[280px]">
          Digital Product & Technology Studio<br />
          Bangalore / India
        </p>
      </div>

      {/* Link List */}
      <div className="w-full max-w-[400px] px-6 flex flex-col gap-4">
        
        {/* Main Destinations */}
        {internalLinks.map((link, index) => (
          <Link 
            key={index} 
            to={link.url}
            className={`w-full py-4 px-6 text-center text-sm font-bold tracking-widest uppercase rounded-full transition-transform active:scale-95 hover:scale-[1.02] ${
              link.primary 
                ? 'bg-mw-accent text-mw-white shadow-lg shadow-mw-accent/20 border-2 border-mw-accent' 
                : 'bg-mw-white text-mw-black border-2 border-mw-border hover:border-mw-black'
            }`}
          >
            {link.label}
          </Link>
        ))}

        <div className="w-full h-px bg-mw-border my-6"></div>

        {/* Social */}
        {socialLinks.map((link, index) => (
          <a 
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 px-6 text-center text-sm font-bold tracking-widest uppercase rounded-full bg-mw-lightgrey text-mw-black transition-transform active:scale-95 hover:scale-[1.02]"
          >
            {link.label}
          </a>
        ))}
        
      </div>

    </div>
  );
};

export default Links;
