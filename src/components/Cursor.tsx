import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      // Use pageX/pageY instead of clientX/clientY to account for scroll position
      setPosition({ x: e.pageX, y: e.pageY });
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <motion.div
      className="fixed pointer-events-none mix-blend-difference"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 99999, // Ensure it's always on top
        opacity: isVisible ? 1 : 0,
        transform: `translate3d(${position.x - 16}px, ${position.y - 16}px, 0)`,
        width: '32px',
        height: '32px'
      }}
      transition={{ 
        type: "spring",
        damping: 30,
        stiffness: 200,
        mass: 0.5
      }}
    >
      {/* Outer circle */}
      <motion.div 
        className="absolute inset-0 border-2 border-primary-lime rounded-full"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ 
          duration: 1.5, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />
      
      {/* Inner dot */}
      <motion.div 
        className="absolute top-1/2 left-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 bg-primary-lime rounded-full"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 0.8, 1] }}
        transition={{ 
          duration: 1.5, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />
    </motion.div>
  );
}