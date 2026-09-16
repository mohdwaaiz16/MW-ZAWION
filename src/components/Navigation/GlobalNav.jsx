import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { clsx } from 'clsx';
import Button from '../UI/Button';

const GlobalNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'WORK', path: '/work' },
    { name: 'CAPABILITIES', path: '/capabilities' },
    { name: 'INDUSTRIES', path: '/industries' },
    { name: 'PRICING', path: '/pricing' },
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

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [menuOpen]);

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
              <div className="w-2 h-2 rounded-full bg-mw-lime animate-pulse"></div>
              <span className="text-[10px] font-mono tracking-widest text-mw-muted">ONLINE</span>
            </div>
          </Link>

          {/* Center: Desktop Links */}
          <div className="hidden lg:flex gap-8 items-center absolute left-1/2 -translate-x-1/2">
            {links.map(link => (
              <Link 
                key={link.path} 
                to={link.path}
                className={clsx(
                  "text-[10px] md:text-xs font-bold tracking-widest uppercase cursor-hover transition-colors",
                  location.pathname === link.path ? "text-mw-accent" : "text-mw-muted hover:text-mw-black"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right: CTA (Desktop) & Menu (Mobile) */}
          <div className="flex items-center gap-4">
            <Link to="/contact" className="hidden lg:flex text-xs font-bold tracking-widest text-mw-black uppercase items-center gap-2 hover:text-mw-accent transition-colors cursor-hover">
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
        
        <div className="absolute top-8 right-6">
          <button 
            className="text-xs font-bold tracking-widest text-mw-white uppercase hover:text-mw-accent transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            CLOSE
          </button>
        </div>

        <div className="flex flex-col gap-6 text-center w-full px-6">
          <Link to="/" onClick={() => setMenuOpen(false)} className="text-3xl font-bold tracking-tighter text-mw-white hover:text-mw-accent transition-colors uppercase">HOME</Link>
          {links.map(link => (
            <Link 
              key={link.path} 
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={clsx(
                "text-3xl font-bold tracking-tighter uppercase transition-colors",
                location.pathname === link.path ? "text-mw-accent" : "text-mw-white hover:text-mw-muted"
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="mt-8">
            <Button to="/contact" variant="accent" fullWidth onClick={() => setMenuOpen(false)}>
              START A PROJECT →
            </Button>
          </div>
          
          <div className="flex justify-center gap-6 mt-12 border-t border-mw-dark pt-8">
             <a href="https://instagram.com" className="text-xs font-mono tracking-widest text-mw-muted uppercase hover:text-mw-white">Instagram</a>
             <a href="https://linkedin.com" className="text-xs font-mono tracking-widest text-mw-muted uppercase hover:text-mw-white">LinkedIn</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default GlobalNav;
