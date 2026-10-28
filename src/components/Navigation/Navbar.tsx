import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'WORK', path: '/work' },
  { name: 'SERVICES', path: '/services' },
  { name: 'ABOUT', path: '/about' },
  { name: 'PROCESS', path: '/process' },
  { name: 'CONTACT', path: '/contact' },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Close drawer automatically on route navigation
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Handle scroll state
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock background scroll and handle Escape key when drawer is open
  useEffect(() => {
    if (menuOpen) {
      // Lock scroll
      const originalBodyOverflow = document.body.style.overflow;
      const originalHtmlOverflow = document.documentElement.style.overflow;
      document.body.style.overflow = 'hidden';
      document.documentElement.classList.add('lenis-stopped');

      // Focus close button on open
      closeButtonRef.current?.focus();

      // Escape key handler
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setMenuOpen(false);
          menuButtonRef.current?.focus();
        }
      };

      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = originalBodyOverflow;
        document.documentElement.style.overflow = originalHtmlOverflow;
        document.documentElement.classList.remove('lenis-stopped');
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.documentElement.classList.remove('lenis-stopped');
    }
  }, [menuOpen]);

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-40 hidden md:flex justify-center transition-all duration-300 px-6 ${
          scrolled ? 'py-4' : 'py-8'
        }`}
      >
        <div 
          className={`flex items-center justify-between transition-all duration-300 w-full max-w-7xl backdrop-blur-md rounded-full border border-white/10 ${
            scrolled ? 'bg-mw-black/80 px-8 py-3' : 'bg-transparent px-2 py-2 border-transparent'
          }`}
        >
          <Link 
            to="/" 
            data-cursor="hover" 
            className="font-display font-bold text-xl tracking-tighter focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mw-purple rounded-md"
          >
            MW ZAWION
          </Link>

          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                data-cursor="hover"
                className="text-xs font-semibold tracking-widest hover:text-mw-purple transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mw-purple rounded-md px-1 py-1"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <Link
            to="/contact"
            data-cursor="hover"
            className="bg-mw-purple text-white px-6 py-2.5 rounded-full text-xs font-bold tracking-widest hover:bg-mw-pink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            START A PROJECT ↗
          </Link>
        </div>
      </motion.nav>

      {/* Mobile Navbar Header */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-40 md:hidden flex items-center justify-between px-4 sm:px-6 py-3 transition-colors duration-300 ${
          scrolled && !menuOpen ? 'bg-mw-black/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
        }`}
      >
        <Link 
          to="/" 
          className="font-display font-bold text-xl tracking-tighter text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mw-purple rounded p-1"
          aria-label="MW Zawion Home"
        >
          MWZ
        </Link>
        <button
          ref={menuButtonRef}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation-drawer"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="min-h-[48px] min-w-[48px] inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-mw-black/60 backdrop-blur-md text-xs font-bold tracking-widest uppercase text-white hover:bg-white/10 active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mw-purple"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-mw-green animate-pulse" />
          {menuOpen ? 'CLOSE' : 'MENU'}
        </button>
      </nav>

      {/* Mobile Menu Overlay / Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-navigation-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setMenuOpen(false);
              }
            }}
            className="fixed inset-0 z-50 bg-mw-black/95 backdrop-blur-2xl flex flex-col justify-between overflow-y-auto px-6 py-8"
          >
            {/* Drawer Top Bar */}
            <div className="flex items-center justify-between w-full max-w-lg mx-auto pb-6 border-b border-white/10">
              <Link 
                to="/" 
                onClick={() => setMenuOpen(false)}
                className="font-display font-bold text-2xl tracking-tighter text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mw-purple rounded"
              >
                MW ZAWION
              </Link>
              <button
                ref={closeButtonRef}
                onClick={() => setMenuOpen(false)}
                aria-label="Close navigation menu"
                className="min-h-[48px] min-w-[48px] inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-white/30 bg-white/10 text-xs font-bold tracking-widest uppercase text-white hover:bg-white hover:text-black active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mw-purple"
              >
                CLOSE ✕
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col gap-4 my-auto py-8 w-full max-w-lg mx-auto">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.3 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className="group min-h-[48px] py-3 flex items-baseline gap-4 font-display text-[clamp(1.85rem,7.5vw,3rem)] font-bold tracking-tight text-white hover:text-mw-purple focus-visible:text-mw-purple transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mw-purple rounded-lg px-2 -mx-2"
                  >
                    <span className="text-xs font-sans text-white/40 tracking-widest font-mono">
                      0{i + 1}
                    </span>
                    <span className="group-hover:translate-x-2 transition-transform duration-200">
                      {link.name}
                    </span>
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: 0.1 + navLinks.length * 0.05, duration: 0.3 }}
                className="pt-6"
              >
                <Link
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="min-h-[48px] w-full inline-flex items-center justify-center border border-white/20 bg-white/5 hover:bg-white hover:text-black text-white px-6 py-3.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mw-purple"
                >
                  START A PROJECT ↗
                </Link>
              </motion.div>
            </div>

            {/* Drawer Footer Details */}
            <div className="w-full max-w-lg mx-auto pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-4 text-xs text-white/40">
              <a 
                href="https://wa.me/917200895492" 
                target="_blank" 
                rel="noreferrer"
                className="hover:text-mw-green transition-colors min-h-[44px] inline-flex items-center"
              >
                WhatsApp: +91 72008 95492
              </a>
              <a 
                href="mailto:mwzawion@gmail.com" 
                className="hover:text-mw-purple transition-colors min-h-[44px] inline-flex items-center"
              >
                Email: mwzawion@gmail.com
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
