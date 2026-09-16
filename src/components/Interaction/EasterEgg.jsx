import React, { useState, useEffect } from 'react';

const EasterEgg = () => {
  const [clickCount, setClickCount] = useState(0);
  const [showDeepSystem, setShowDeepSystem] = useState(false);

  useEffect(() => {
    const handleLogoClick = (e) => {
      // Very naive check to see if they clicked the MW ZAWION text in the nav
      if (e.target.innerText === 'MW ZAWION') {
        setClickCount(prev => prev + 1);
      }
    };

    window.addEventListener('click', handleLogoClick);
    return () => window.removeEventListener('click', handleLogoClick);
  }, []);

  useEffect(() => {
    if (clickCount >= 5) {
      setShowDeepSystem(true);
      setClickCount(0); // reset
    }
  }, [clickCount]);

  if (!showDeepSystem) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-mw-black flex flex-col items-center justify-center font-mono cursor-default">
      <button 
        onClick={() => setShowDeepSystem(false)}
        className="absolute top-8 right-8 text-xs font-bold text-mw-muted hover:text-mw-accent transition-colors"
      >
        EXIT SYSTEM ✕
      </button>

      <div className="text-left w-full max-w-lg border border-mw-accent/20 bg-mw-dark/30 p-8 shadow-[0_0_50px_rgba(0,255,209,0.1)]">
        <h1 className="text-mw-accent text-2xl mb-8 animate-pulse">THE DEEP SYSTEM</h1>
        
        <div className="flex justify-between border-b border-mw-dark py-4 text-sm">
          <span className="text-mw-muted">SYSTEM STATUS</span>
          <span className="text-mw-white animate-pulse">ONLINE</span>
        </div>
        
        <div className="flex justify-between border-b border-mw-dark py-4 text-sm">
          <span className="text-mw-muted">CORE</span>
          <span className="text-mw-accent">ONLINE</span>
        </div>
        
        <div className="flex justify-between border-b border-mw-dark py-4 text-sm">
          <span className="text-mw-muted">MEMORY</span>
          <span className="text-mw-white opacity-50">STANDBY</span>
        </div>
        
        <div className="flex justify-between border-b border-mw-dark py-4 text-sm">
          <span className="text-mw-muted">CREATIVE ENGINE</span>
          <span className="text-mw-accent">ACTIVE</span>
        </div>

        <p className="mt-12 text-mw-muted text-xs tracking-widest text-center">
          "YOU FOUND SOMETHING."
        </p>

        {/* Decorative interactive element */}
        <div className="mt-8 flex justify-center">
          <div className="w-16 h-16 border border-mw-accent rounded-full animate-spin-slow relative">
            <div className="absolute top-0 left-1/2 w-2 h-2 bg-mw-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-mw-white rounded-full -translate-x-1/2 translate-y-1/2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EasterEgg;
