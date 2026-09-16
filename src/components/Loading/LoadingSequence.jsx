import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { clsx } from 'clsx';

const LoadingSequence = ({ onComplete }) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const tl = gsap.timeline({
        onComplete: onComplete
      });

      tl.to(textRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.5,
        ease: "power2.inOut"
      })
      .to(containerRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.inOut"
      }, "+=0.2");
    }
  }, [progress, onComplete]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[100] bg-mw-black flex flex-col justify-center items-center pointer-events-none"
    >
      <div className="absolute top-8 left-8 text-xs font-bold tracking-widest text-mw-muted">
        MW ZAWION
      </div>
      
      <div ref={textRef} className="flex flex-col items-center gap-4">
        <div className="text-mw-white font-mono text-sm tracking-[0.2em] uppercase">
          INITIALIZING EXPERIENCE
        </div>
        
        {/* Minimal Progress Bar */}
        <div className="w-48 h-[1px] bg-mw-dark relative overflow-hidden">
          <div 
            className="absolute top-0 left-0 h-full bg-mw-accent transition-all duration-300 ease-out"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingSequence;
