import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const [cursorText, setCursorText] = useState('');
  
  useEffect(() => {
    // Check if it's a touch device
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', mouseMove);
    
    // Custom interaction listeners
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Find closest interactive element
      const interactiveEl = target.closest('a, button, [data-cursor]');
      
      if (interactiveEl) {
        const cursorType = interactiveEl.getAttribute('data-cursor') || 'hover';
        const text = interactiveEl.getAttribute('data-cursor-text') || '';
        
        setCursorVariant(cursorType);
        setCursorText(text);
      } else {
        setCursorVariant('default');
        setCursorText('');
      }
    };

    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (window.matchMedia('(pointer: coarse)').matches) return null;

  const variants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
      height: 20,
      width: 20,
      backgroundColor: 'rgba(244, 244, 245, 1)',
      mixBlendMode: 'difference' as any,
    },
    hover: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      height: 48,
      width: 48,
      backgroundColor: 'rgba(244, 244, 245, 0.2)',
      border: '1px solid rgba(244, 244, 245, 0.5)',
      mixBlendMode: 'normal' as any,
    },
    project: {
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      height: 80,
      width: 80,
      backgroundColor: 'var(--color-mw-purple)',
      mixBlendMode: 'normal' as any,
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 z-50 pointer-events-none rounded-full flex items-center justify-center font-display font-bold text-xs tracking-wider"
      variants={variants}
      animate={cursorVariant}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 28,
        mass: 0.5
      }}
    >
      {cursorText && (
        <motion.span 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-mw-offwhite"
        >
          {cursorText}
        </motion.span>
      )}
    </motion.div>
  );
};
