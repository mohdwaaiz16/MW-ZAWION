import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../UI/Button';

const Footer = () => {
  const links = [
    { label: "WORK", url: "/work" },
    { label: "CAPABILITIES", url: "/capabilities" },
    { label: "INDUSTRIES", url: "/industries" },
    { label: "PRICING", url: "/pricing" },
    { label: "ABOUT", url: "/about" },
    { label: "INSIGHTS", url: "/insights" },
    { label: "LAB", url: "/lab" },
    { label: "CONTACT", url: "/contact" }
  ];

  const social = [
    { label: "Instagram", url: "https://instagram.com" },
    { label: "LinkedIn", url: "https://linkedin.com" },
    { label: "GitHub", url: "https://github.com" },
    { label: "Email", url: "mailto:hello@mw-zawion.com" }
  ];

  return (
    <footer className="w-full bg-mw-white text-mw-black border-t border-mw-border pt-16 md:pt-32 pb-8 px-6 md:px-12 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col gap-16 md:gap-24">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="flex flex-col max-w-sm">
            <h2 className="text-2xl font-bold tracking-tighter uppercase mb-2">MW ZAWION</h2>
            <p className="text-mw-muted font-mono text-[10px] tracking-widest uppercase mb-6">
              DIGITAL PRODUCT & TECHNOLOGY STUDIO<br/>
              BANGALORE / INDIA
            </p>
            <Button to="/contact" variant="primary">START A PROJECT →</Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-12 md:gap-24 w-full md:w-auto">
            {/* Navigation */}
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[10px] tracking-widest text-mw-muted uppercase mb-2">Navigation</span>
              {links.map((link, i) => (
                <Link key={i} to={link.url} className="text-sm font-bold tracking-widest uppercase hover:text-mw-accent transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Connect */}
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[10px] tracking-widest text-mw-muted uppercase mb-2">Connect</span>
              {social.map((link, i) => (
                <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-mw-accent transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-mw-border pt-8 gap-4 text-xs text-mw-muted">
          <p>© 2026 MW ZAWION</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-mw-black transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-mw-black transition-colors">Terms</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
