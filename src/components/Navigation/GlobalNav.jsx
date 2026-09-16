import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { clsx } from 'clsx';

const GlobalNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'WORK', path: '/work' },
    { name: 'SERVICES', path: '/services' },
    { name: 'PRICING', path: '/pricing' },
    { name: 'LAB', path: '/lab' },
    { name: 'INTELLIGENCE', path: '/intelligence' },
    { name: 'ABOUT', path: '/about' },
    { name: 'CONTACT', path: '/contact' }
  ];

  const getChapterName = (path) => {
    switch (path) {
      case '/': return 'THE ORIGIN';
      case '/work': return 'THE ARCHIVE';
      case '/services': return 'THE ENGINE';
      case '/pricing': return 'THE SCALE';
      case '/lab': return 'THE UNKNOWN';
      case '/intelligence': return 'INTELLIGENCE';
      case '/about': return 'THE HUMAN';
      case '/contact': return 'THE NEXT MOVE';
      default: return 'SYSTEM';
    }
  };

  const getChapterNumber = (path) => {
    switch (path) {
      case '/': return '01';
      case '/work': return '02';
      case '/services': return '03';
      case '/pricing': return '04';
      case '/lab': return '05';
      case '/intelligence': return '06';
      case '/about': return '07';
      case '/contact': return '08';
      default: return '00';
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 p-6 md:p-12 mix-blend-difference pointer-events-none">
        <div className="flex justify-between items-start pointer-events-auto">
          {/* Left: Brand */}
          <Link to="/" className="text-mw-white font-bold tracking-widest uppercase cursor-hover hover:text-mw-accent transition-colors">
            MW ZAWION
          </Link>

          {/* Center/Desktop HUD */}
          <div className="hidden md:flex flex-col items-center gap-1 text-[10px] font-mono tracking-widest text-mw-muted uppercase pointer-events-none">
            <span>MW / ZAWION</span>
            <span className="text-mw-accent">CHAPTER {getChapterNumber(location.pathname)}</span>
            <span>{getChapterName(location.pathname)}</span>
            <span className="mt-2 text-mw-white opacity-50">SYSTEM STATUS: <span className="text-mw-accent">ONLINE</span></span>
          </div>

          {/* Right: Desktop Links */}
          <div className="hidden md:flex gap-8">
            {links.map(link => (
              <Link 
                key={link.path} 
                to={link.path}
                className={clsx(
                  "text-xs font-bold tracking-widest uppercase cursor-hover transition-colors",
                  location.pathname === link.path ? "text-mw-accent" : "text-mw-muted hover:text-mw-white"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right: Mobile Menu Toggle */}
          <button 
            className="md:hidden text-xs font-bold tracking-widest text-mw-white uppercase"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? 'CLOSE' : 'MENU'}
          </button>
        </div>
      </nav>

      {/* Mobile Cinematic Menu */}
      <div className={clsx(
        "fixed inset-0 bg-mw-black z-40 flex flex-col justify-center items-center transition-all duration-700 ease-[cubic-bezier(0.7,0,0.3,1)]",
        menuOpen ? "clip-path-full opacity-100 pointer-events-auto" : "clip-path-zero opacity-0 pointer-events-none"
      )}>
        <div className="flex flex-col gap-8 text-center">
          <Link to="/" onClick={() => setMenuOpen(false)} className="text-2xl font-bold tracking-widest text-mw-white hover:text-mw-accent transition-colors uppercase">HOME</Link>
          {links.map(link => (
            <Link 
              key={link.path} 
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={clsx(
                "text-2xl font-bold tracking-widest uppercase transition-colors",
                location.pathname === link.path ? "text-mw-accent" : "text-mw-white hover:text-mw-accent"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default GlobalNav;
