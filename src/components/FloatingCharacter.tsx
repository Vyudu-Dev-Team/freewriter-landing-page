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
    let time = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    const drawAura = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const centerX = canvas.width * 0.5;
      const centerY = canvas.height * 0.5;
      
      // Base radius for the aura
      const baseRadius = Math.min(canvas.width, canvas.height) * 0.4;
      
      // Create multiple layers of aura
      for (let layer = 0; layer < 3; layer++) {
        const layerOffset = layer * 0.1; // Offset each layer
        
        // Create dynamic radius with wave effect
        const waveSpeed = 0.001;
        const waveAmplitude = 20;
        const layerRadius = baseRadius + 
          Math.sin(time * waveSpeed + layerOffset * Math.PI * 2) * waveAmplitude;
        
        // Create multiple gradient circles for each layer
        const numCircles = 8;
        for (let i = 0; i < numCircles; i++) {
          const angle = (i / numCircles) * Math.PI * 2 + time * 0.001;
          const wobbleX = Math.cos(angle) * 15;
          const wobbleY = Math.sin(angle) * 15;
          
          // Create radial gradient
          const gradient = ctx.createRadialGradient(
            centerX + wobbleX, centerY + wobbleY, 0,
            centerX + wobbleX, centerY + wobbleY, layerRadius
          );
          
          // Alternate between blue and yellow colors
          if (i % 2 === 0) {
            gradient.addColorStop(0, 'rgba(0, 191, 255, 0.1)');
            gradient.addColorStop(0.5, 'rgba(0, 191, 255, 0.05)');
            gradient.addColorStop(1, 'rgba(0, 191, 255, 0)');
          } else {
            gradient.addColorStop(0, 'rgba(216, 246, 81, 0.1)');
            gradient.addColorStop(0.5, 'rgba(216, 246, 81, 0.05)');
            gradient.addColorStop(1, 'rgba(216, 246, 81, 0)');
          }
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(
            centerX + wobbleX,
            centerY + wobbleY,
            layerRadius,
            0,
            Math.PI * 2
          );
          ctx.fill();
        }
      }
      
      // Add outer glow effect
      const outerGlow = ctx.createRadialGradient(
        centerX, centerY, baseRadius * 0.8,
        centerX, centerY, baseRadius * 1.2
      );
      outerGlow.addColorStop(0, 'rgba(0, 191, 255, 0.1)');
      outerGlow.addColorStop(0.5, 'rgba(216, 246, 81, 0.05)');
      outerGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      
      ctx.fillStyle = outerGlow;
      ctx.beginPath();
      ctx.arc(centerX, centerY, baseRadius * 1.2, 0, Math.PI * 2);
      ctx.fill();
      
      time += 16; // Approximately 60fps
      animationFrameId = requestAnimationFrame(drawAura);
    };

    window.addEventListener('resize', resize);
    resize();
    drawAura();

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
        {/* Canvas for aura effect */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ zIndex: -1 }}
        />
        
        {/* Character image */}
        <img
          srcSet="/images/FREEWRITER_600.png 1x, /images/FREEWRITER_1200.png 2x"
          src="/images/FREEWRITER_600.png"
          alt="FreeWriter Character"
          className="relative w-full h-full object-contain"
          loading="eager"
        />
      </motion.div>
    </motion.div>
  );
};

export default FloatingCharacter;
