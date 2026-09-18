import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface MarqueeProps {
  children: ReactNode;
  direction?: 'left' | 'right';
  speed?: number;
  className?: string;
}

export const Marquee = ({ children, direction = 'left', speed = 20, className = '' }: MarqueeProps) => {
  return (
    <div className={`flex w-full overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div
        className="flex min-w-full items-center"
        animate={{
          x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'],
        }}
        transition={{
          duration: speed,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        {/* Double the children to ensure seamless loop */}
        <div className="flex items-center shrink-0">{children}</div>
        <div className="flex items-center shrink-0">{children}</div>
        <div className="flex items-center shrink-0">{children}</div>
        <div className="flex items-center shrink-0">{children}</div>
      </motion.div>
    </div>
  );
};
