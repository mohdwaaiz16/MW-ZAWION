import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
            scrolled ? 'bg-mw-black/70 px-8 py-3' : 'bg-transparent px-2 py-2 border-transparent'
          }`}
        >
          <Link to="/" data-cursor="hover" className="font-display font-bold text-xl tracking-tighter">
            MW ZAWION
          </Link>

          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                data-cursor="hover"
                className="text-xs font-semibold tracking-widest hover:text-mw-purple transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <Link
            to="/contact"
            data-cursor="hover"
            className="bg-mw-purple text-white px-6 py-2.5 rounded-full text-xs font-bold tracking-widest hover:bg-mw-pink transition-colors"
          >
            START A PROJECT ↗
          </Link>
        </div>
      </motion.nav>

      {/* Mobile Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-40 md:hidden flex items-center justify-between p-6">
        <Link to="/" className="font-display font-bold text-xl tracking-tighter mix-blend-difference">
          MWZ
        </Link>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="font-semibold text-xs tracking-widest uppercase mix-blend-difference"
        >
          {menuOpen ? 'CLOSE' : 'MENU'}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ clipPath: 'circle(0% at 100% 0)' }}
            animate={{ clipPath: 'circle(150% at 100% 0)' }}
            exit={{ clipPath: 'circle(0% at 100% 0)' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-30 bg-mw-black flex flex-col justify-center px-12"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className="font-display text-5xl font-bold flex items-baseline gap-4 hover:text-mw-purple transition-colors"
                  >
                    <span className="text-sm font-sans text-white/30 tracking-widest">
                      0{i + 1}
                    </span>
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.2 + navLinks.length * 0.1 }}
                className="mt-8"
              >
                <Link
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="inline-block border border-white/20 px-8 py-4 rounded-full text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-colors"
                >
                  START A PROJECT ↗
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
