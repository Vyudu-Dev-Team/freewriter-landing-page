import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const FloatingCharacter: React.FC = () => {
  const { scrollY } = useScroll();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Create smooth parallax effect based on scroll
  const y = useTransform(scrollY, [0, 1000], [0, -100]);
  
  // Floating animation
  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let offset = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    const drawPenElectricity = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Adjusted pen position based on the image
      const penStartX = canvas.width * 0.32; // Left side of pen
      const penStartY = canvas.height * 0.35; // Top of pen
      const penLength = canvas.height * 0.5; // Length of pen
      
      // Draw multiple electricity strands
      const numStrands = 3;
      
      for (let strand = 0; strand < numStrands; strand++) {
        const segments = 25;
        ctx.beginPath();
        
        // Each strand has a different phase
        const phaseOffset = (strand / numStrands) * Math.PI * 2;
        
        for (let i = 0; i <= segments; i++) {
          const progress = i / segments;
          // Larger wave effect
          const wave = Math.sin(progress * Math.PI * 6 + offset + phaseOffset) * 8;
          // Add some random jitter
          const jitter = Math.random() * 2 - 1;
          
          const x = penStartX + wave + jitter;
          const y = penStartY + (penLength * progress);
          
          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            // Add more jagged effect
            const zag = Math.random() * 4 - 2;
            ctx.lineTo(x + zag, y);
          }
        }
        
        // Create gradient for the electricity
        const gradient = ctx.createLinearGradient(
          penStartX, penStartY,
          penStartX, penStartY + penLength
        );
        
        // Brighter, more electric blue colors
        gradient.addColorStop(0, 'rgba(0, 191, 255, 0)');
        gradient.addColorStop(0.2, 'rgba(0, 191, 255, 0.8)');
        gradient.addColorStop(0.5, 'rgba(30, 255, 255, 0.9)');
        gradient.addColorStop(0.8, 'rgba(0, 191, 255, 0.8)');
        gradient.addColorStop(1, 'rgba(0, 191, 255, 0)');
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Add glow effect
        ctx.save();
        ctx.filter = 'blur(3px)';
        ctx.strokeStyle = 'rgba(0, 225, 255, 0.4)';
        ctx.lineWidth = 6;
        ctx.stroke();
        ctx.restore();
      }
      
      // Update animation
      offset += 0.15; // Slightly faster animation
      
      animationFrameId = requestAnimationFrame(drawPenElectricity);
    };

    window.addEventListener('resize', resize);
    resize();
    drawPenElectricity();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <motion.div
      className="relative w-[600px] h-[779px] mx-auto"
      style={{ y }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="relative w-full h-full"
        animate={floatingAnimation}
      >
        {/* Character image */}
        <img
          srcSet="/images/FREEWRITER_600.png 1x, /images/FREEWRITER_1200.png 2x"
          src="/images/FREEWRITER_600.png"
          alt="FreeWriter Character"
          className="relative w-full h-full object-contain"
          loading="eager"
        />
        
        {/* Canvas for pen electricity effect */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ zIndex: 1 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default FloatingCharacter;
