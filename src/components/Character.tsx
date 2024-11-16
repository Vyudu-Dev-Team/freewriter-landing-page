import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Character() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 0]);
  const z = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <motion.div 
      className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] z-0"
      style={{ scale, opacity }}
      animate={{
        z: [-20, 0, -20],
        rotateY: [-5, 5, -5],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <div className="w-full h-full bg-gradient-to-b from-primary-purple/30 to-transparent rounded-full blur-3xl absolute" />
      <motion.div
        className="w-full h-full relative"
        animate={{
          y: [-20, 20, -20],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <img 
          src="https://images.unsplash.com/photo-1635322966219-b75ed372eb01?q=80&w=1000&auto=format&fit=crop"
          alt="Retro Robot Character"
          className="w-full h-full object-contain mix-blend-screen"
        />
      </motion.div>
    </motion.div>
  );
}