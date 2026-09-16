import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-mw-black text-mw-white py-24 px-6 md:px-12 border-t border-mw-dark">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16 md:gap-8">
        
        {/* Brand & Mission */}
        <div className="max-w-xs">
          <div className="font-sans font-bold text-2xl tracking-widest mb-6">
            MW ZAWION
          </div>
          <p className="text-mw-muted text-sm leading-relaxed mb-6">
            Digital studio for websites, products, AI & automation.
          </p>
          <div className="text-sm font-medium tracking-wider">
            Bangalore, India
          </div>
        </div>

        {/* Links */}
        <div className="flex gap-16 md:gap-32">
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold tracking-widest text-mw-muted mb-2">NAVIGATE</h4>
            {['WORK', 'SERVICES', 'ABOUT', 'CONTACT'].map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase()}`}
                className="text-sm tracking-wider hover:text-mw-accent transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold tracking-widest text-mw-muted mb-2">SOCIAL</h4>
            {['Instagram', 'LinkedIn', 'GitHub'].map((link) => (
              <a 
                key={link} 
                href="#"
                className="text-sm tracking-wider hover:text-mw-accent transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-mw-dark flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-widest text-mw-muted">
        <div>© 2026 MW ZAWION</div>
        <div className="flex gap-8">
          <a href="#" className="hover:text-mw-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-mw-white transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
