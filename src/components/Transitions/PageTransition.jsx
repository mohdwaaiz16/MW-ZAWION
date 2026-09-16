import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';

const PageTransition = ({ children }) => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const transitionRef = useRef(null);

  useEffect(() => {
    if (location !== displayLocation) {
      // Outro animation
      const tl = gsap.timeline({
        onComplete: () => {
          setDisplayLocation(location);
          // Scroll to top instantly before intro
          window.scrollTo(0, 0);
          
          // Intro animation
          gsap.fromTo(
            transitionRef.current,
            { clipPath: 'circle(0% at 50% 50%)', opacity: 0 },
            { clipPath: 'circle(150% at 50% 50%)', opacity: 1, duration: 1.2, ease: 'power3.inOut' }
          );
        }
      });

      tl.to(transitionRef.current, {
        opacity: 0,
        clipPath: 'circle(0% at 50% 50%)',
        duration: 0.8,
        ease: 'power3.inOut'
      });
    }
  }, [location, displayLocation]);

  return (
    <div ref={transitionRef} className="w-full min-h-screen relative z-10" style={{ clipPath: 'circle(150% at 50% 50%)' }}>
      {children}
    </div>
  );
};

export default PageTransition;
