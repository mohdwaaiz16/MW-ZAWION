import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-mw-black pt-20 sm:pt-32 pb-12 px-4 sm:px-6 md:px-12 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 sm:gap-16 relative z-10">
        
        {/* Brand Column */}
        <div className="flex flex-col gap-4 sm:gap-6 md:w-1/3">
          <Link 
            to="/" 
            className="font-display font-bold text-3xl sm:text-4xl tracking-tighter hover:text-mw-purple transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mw-purple rounded"
          >
            MW ZAWION
          </Link>
          <p className="text-white/60 text-base sm:text-lg leading-relaxed max-w-sm">
            Websites, digital experiences and technology for ambitious ideas.
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 md:w-2/3">
          
          <div className="flex flex-col gap-3 sm:gap-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-1 sm:mb-2">Navigation</h4>
            <Link to="/work" className="text-sm font-semibold hover:text-mw-purple transition-colors min-h-[44px] flex items-center">WORK</Link>
            <Link to="/services" className="text-sm font-semibold hover:text-mw-pink transition-colors min-h-[44px] flex items-center">SERVICES</Link>
            <Link to="/about" className="text-sm font-semibold hover:text-mw-orange transition-colors min-h-[44px] flex items-center">ABOUT</Link>
            <Link to="/process" className="text-sm font-semibold hover:text-mw-green transition-colors min-h-[44px] flex items-center">PROCESS</Link>
            <Link to="/contact" className="text-sm font-semibold hover:text-mw-cyan transition-colors min-h-[44px] flex items-center">CONTACT</Link>
          </div>

          <div className="flex flex-col gap-3 sm:gap-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-1 sm:mb-2">Social</h4>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-sm font-semibold hover:text-white transition-colors min-h-[44px] flex items-center">INSTAGRAM</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-sm font-semibold hover:text-white transition-colors min-h-[44px] flex items-center">LINKEDIN</a>
            <a href="https://github.com/mohdwaaiz16" target="_blank" rel="noreferrer" className="text-sm font-semibold hover:text-white transition-colors min-h-[44px] flex items-center">GITHUB</a>
          </div>

          <div className="flex flex-col gap-3 sm:gap-4 col-span-2 sm:col-span-1 pt-4 sm:pt-0 border-t sm:border-t-0 border-white/5">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-1 sm:mb-2">Contact</h4>
            <a 
              href="https://wa.me/917200895492" 
              target="_blank" 
              rel="noreferrer" 
              className="text-sm font-semibold hover:text-mw-green transition-colors min-h-[44px] flex items-center break-all"
            >
              WhatsApp: +91 72008 95492
            </a>
            <a 
              href="mailto:mwzawion@gmail.com" 
              className="text-sm font-semibold hover:text-mw-purple transition-colors min-h-[44px] flex items-center break-all"
            >
              Email: mwzawion@gmail.com
            </a>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-16 sm:mt-24 md:mt-32 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-medium text-white/40 relative z-10">
        <p>© 2026 MW ZAWION</p>
        <div className="flex flex-wrap gap-6 sm:gap-8 min-h-[44px] items-center">
          <Link to="/privacy" className="hover:text-white transition-colors py-2">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-white transition-colors py-2">Terms & Conditions</Link>
        </div>
      </div>
      
      {/* Footer Ambient Background */}
      <div className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[120%] h-[400px] bg-gradient-to-t from-mw-purple/20 via-mw-pink/5 to-transparent blur-[100px] pointer-events-none" />
    </footer>
  );
};
