import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { clsx } from 'clsx';

const GlobalNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'WORK', path: '/work' },
    { name: 'CAPABILITIES', path: '/capabilities' },
    { name: 'INDUSTRIES', path: '/industries' },
    { name: 'ABOUT', path: '/about' },
    { name: 'INSIGHTS', path: '/insights' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={clsx(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 pointer-events-none",
        scrolled ? "py-4 bg-mw-white/90 backdrop-blur-md border-b border-mw-border pointer-events-auto shadow-sm" : "py-8 pointer-events-auto"
      )}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          
          {/* Left: Brand */}
          <Link to="/" className="text-mw-black font-bold tracking-widest uppercase cursor-hover hover:text-mw-accent transition-colors flex items-center gap-3">
            MW ZAWION
            <div className="hidden md:flex items-center gap-1.5 opacity-60">
              <div className="w-1.5 h-1.5 rounded-full bg-mw-lime"></div>
              <span className="text-[10px] font-mono tracking-widest">ONLINE</span>
            </div>
          </Link>

          {/* Center: Desktop Links */}
          <div className="hidden lg:flex gap-8 items-center absolute left-1/2 -translate-x-1/2">
            {links.map(link => (
              <Link 
                key={link.path} 
                to={link.path}
                className={clsx(
                  "text-xs font-bold tracking-widest uppercase cursor-hover transition-colors",
                  location.pathname === link.path ? "text-mw-accent" : "text-mw-muted hover:text-mw-black"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right: CTA (Desktop) & Menu (Mobile) */}
          <div className="flex items-center gap-4">
            <Link to="/contact" className="hidden md:flex text-xs font-bold tracking-widest text-mw-black uppercase items-center gap-2 hover:text-mw-accent transition-colors cursor-hover">
              START A PROJECT <span className="text-mw-accent">→</span>
            </Link>
            
            <button 
              className="lg:hidden text-xs font-bold tracking-widest text-mw-black uppercase hover:text-mw-accent transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? 'CLOSE' : 'MENU'}
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Clean Menu */}
      <div className={clsx(
        "fixed inset-0 bg-mw-black z-40 flex flex-col justify-center items-center transition-opacity duration-500",
        menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}>
        <div className="flex flex-col gap-8 text-center">
          <Link to="/" onClick={() => setMenuOpen(false)} className="text-2xl font-bold tracking-tighter text-mw-white hover:text-mw-accent transition-colors uppercase">HOME</Link>
          {links.map(link => (
            <Link 
              key={link.path} 
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={clsx(
                "text-2xl font-bold tracking-tighter uppercase transition-colors",
                location.pathname === link.path ? "text-mw-accent" : "text-mw-white hover:text-mw-muted"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="mt-8 text-sm font-bold tracking-widest text-mw-black bg-mw-lime px-8 py-4 uppercase hover:bg-mw-white transition-colors">
            START A PROJECT →
          </Link>
        </div>
      </div>
    </>
  );
};

export default GlobalNav;
