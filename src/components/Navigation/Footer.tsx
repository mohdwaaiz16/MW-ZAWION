import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-mw-black pt-32 pb-12 px-6 md:px-12 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16 relative z-10">
        
        {/* Brand Column */}
        <div className="flex flex-col gap-6 md:w-1/3">
          <Link to="/" className="font-display font-bold text-4xl tracking-tighter">
            MW ZAWION
          </Link>
          <p className="text-white/60 text-lg leading-relaxed max-w-sm">
            Websites, digital experiences and technology for ambitious ideas.
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:w-2/3">
          
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Navigation</h4>
            <Link to="/work" className="text-sm font-semibold hover:text-mw-purple transition-colors">WORK</Link>
            <Link to="/services" className="text-sm font-semibold hover:text-mw-pink transition-colors">SERVICES</Link>
            <Link to="/about" className="text-sm font-semibold hover:text-mw-orange transition-colors">ABOUT</Link>
            <Link to="/process" className="text-sm font-semibold hover:text-mw-green transition-colors">PROCESS</Link>
            <Link to="/contact" className="text-sm font-semibold hover:text-mw-cyan transition-colors">CONTACT</Link>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Social</h4>
            <a href="#" className="text-sm font-semibold hover:text-white transition-colors">INSTAGRAM</a>
            <a href="#" className="text-sm font-semibold hover:text-white transition-colors">LINKEDIN</a>
            <a href="#" className="text-sm font-semibold hover:text-white transition-colors">GITHUB</a>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Contact</h4>
            <a href="https://wa.me/917200895492" target="_blank" rel="noreferrer" className="text-sm font-semibold hover:text-mw-green transition-colors">
              WhatsApp: +91 72008 95492
            </a>
            <a href="mailto:mwzawion@gmail.com" className="text-sm font-semibold hover:text-mw-purple transition-colors">
              Email: mwzawion@gmail.com
            </a>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-white/40 relative z-10">
        <p>© 2026 MW ZAWION</p>
        <div className="flex gap-8">
          <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
        </div>
      </div>
      
      {/* Footer Ambient Background */}
      <div className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[120%] h-[400px] bg-gradient-to-t from-mw-purple/20 via-mw-pink/5 to-transparent blur-[100px] pointer-events-none" />
    </footer>
  );
};
