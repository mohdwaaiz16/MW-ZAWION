import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { clsx } from 'clsx';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    const cursor = cursorRef.current;
    
    // Quick setter for performance
    const xSet = gsap.quickSetter(cursor, "x", "px");
    const ySet = gsap.quickSetter(cursor, "y", "px");

    const onMouseMove = (e) => {
      // Small offset to center the dot
      xSet(e.clientX - 6);
      ySet(e.clientY - 6);
    };

    const onMouseDown = () => {
      gsap.to(cursor, { scale: 0.5, duration: 0.2 });
    };

    const onMouseUp = () => {
      gsap.to(cursor, { scale: 1, duration: 0.2 });
    };

    const addHoverState = () => {
      gsap.to(cursor, { scale: 2.5, backgroundColor: 'rgba(0, 255, 209, 0.2)', border: '1px solid #00FFD1', duration: 0.3 });
    };

    const removeHoverState = () => {
      gsap.to(cursor, { scale: 1, backgroundColor: '#00FFD1', border: 'none', duration: 0.3 });
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    // Add event listeners to all interactive elements
    const handleInteractiveElements = () => {
      const interactives = document.querySelectorAll('a, button, input, textarea, .cursor-hover');
      interactives.forEach((el) => {
        el.addEventListener('mouseenter', addHoverState);
        el.addEventListener('mouseleave', removeHoverState);
      });
    };

    // Initial attachment
    handleInteractiveElements();

    // Re-attach periodically for dynamically added elements or use a MutationObserver in a real robust setup
    const interval = setInterval(handleInteractiveElements, 1000);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      clearInterval(interval);
      
      const interactives = document.querySelectorAll('a, button, input, textarea, .cursor-hover');
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', addHoverState);
        el.removeEventListener('mouseleave', removeHoverState);
      });
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <div 
      ref={cursorRef} 
      className="fixed top-0 left-0 w-3 h-3 bg-mw-accent rounded-full pointer-events-none z-[9999] mix-blend-difference"
      style={{ willChange: 'transform' }}
    />
  );
};

export default CustomCursor;
