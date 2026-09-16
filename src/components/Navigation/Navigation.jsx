import React, { useState, useEffect } from 'react';
import { clsx } from 'clsx';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['WORK', 'SERVICES', 'ABOUT', 'CONTACT'];

  return (
    <>
      <nav
        className={clsx(
          'fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out px-6 md:px-12 py-6 flex justify-between items-center',
          scrolled ? 'bg-mw-black/80 backdrop-blur-md py-4' : 'bg-transparent'
        )}
      >
        <div className="font-sans font-bold text-lg md:text-xl tracking-wider text-mw-white z-50">
          MW ZAWION
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-xs font-semibold tracking-[0.2em] text-mw-muted hover:text-mw-accent transition-colors duration-300 relative group"
            >
              {link}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-mw-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-mw-white z-50 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={clsx(
          'fixed inset-0 z-40 bg-mw-black flex flex-col justify-center items-center gap-8 transition-all duration-500 ease-in-out md:hidden',
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        )}
      >
        {links.map((link, i) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            onClick={() => setMobileMenuOpen(false)}
            className="text-3xl font-bold tracking-widest text-mw-white hover:text-mw-accent transition-colors"
            style={{
              transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
              opacity: mobileMenuOpen ? 1 : 0,
              transition: `all 0.5s ease-out ${i * 0.1}s`,
            }}
          >
            {link}
          </a>
        ))}
      </div>
    </>
  );
};

export default Navigation;
