import { motion } from 'framer-motion';

export function AmbientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 mix-blend-screen opacity-30">
      <motion.div 
        animate={{ 
          x: ['-20%', '20%', '-20%'],
          y: ['-20%', '20%', '-20%'],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-mw-purple rounded-full blur-[120px] opacity-20"
      />
      <motion.div 
        animate={{ 
          x: ['20%', '-20%', '20%'],
          y: ['20%', '-20%', '20%'],
          rotate: [0, -90, 0]
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-mw-pink rounded-full blur-[120px] opacity-20"
      />
      <motion.div 
        animate={{ 
          x: ['0%', '30%', '-30%', '0%'],
          y: ['30%', '0%', '30%', '30%'],
        }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="absolute top-[20%] right-[20%] w-[40vw] h-[40vw] bg-mw-cyan rounded-full blur-[100px] opacity-10"
      />
    </div>
  );
}
