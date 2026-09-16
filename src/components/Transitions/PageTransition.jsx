import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';

const PageTransition = ({ children }) => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  
  const overlayRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    if (location !== displayLocation) {
      // Outro animation
      const tl = gsap.timeline({
        onComplete: () => {
          setDisplayLocation(location);
          window.scrollTo(0, 0);
          
          // Intro animation
          gsap.to(overlayRef.current, { autoAlpha: 0, duration: 0.3, ease: 'power2.inOut', delay: 0.1 });
        }
      });

      tl.set(overlayRef.current, { autoAlpha: 1 })
        .set(lineRef.current, { scaleX: 0 })
        .to(lineRef.current, { scaleX: 1, duration: 0.3, ease: 'power2.out' })
        .to(lineRef.current, { autoAlpha: 0, duration: 0.2 }, "+=0.1");
    }
  }, [location, displayLocation]);

  return (
    <>
      <div className="w-full min-h-screen relative z-10">
        {children}
      </div>
      
      {/* Rapid Transition Overlay */}
      <div 
        ref={overlayRef} 
        className="fixed inset-0 z-[100] bg-mw-black flex flex-col items-center justify-center pointer-events-none opacity-0 invisible"
      >
        <div 
          ref={lineRef} 
          className="absolute top-1/2 left-0 w-full h-[1px] bg-mw-accent scale-x-0 origin-left" 
        />
      </div>
    </>
  );
};

export default PageTransition;
