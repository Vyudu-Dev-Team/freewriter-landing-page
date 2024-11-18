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
    let angle = 0;
    const numArcs = 3;
    const arcSpacing = Math.PI * 2 / numArcs;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    const drawVoltex = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      // Draw multiple electric arcs
      for (let i = 0; i < numArcs; i++) {
        const arcAngle = angle + (i * arcSpacing);
        
        // Create spiral effect
        ctx.beginPath();
        const spiralRadius = 100 + Math.sin(angle * 2) * 20;
        
        for (let j = 0; j < 30; j++) {
          const segmentAngle = arcAngle + (j * 0.1);
          const radius = spiralRadius + j * 3;
          const wobble = Math.sin(angle * 3 + j * 0.5) * 10;
          
          const x = centerX + Math.cos(segmentAngle) * (radius + wobble);
          const y = centerY + Math.sin(segmentAngle) * (radius + wobble);
          
          if (j === 0) {
            ctx.moveTo(x, y);
          } else {
            // Add jagged lightning effect
            const jitter = Math.random() * 5;
            ctx.lineTo(x + Math.random() * jitter - jitter/2, 
                      y + Math.random() * jitter - jitter/2);
          }
        }
        
        // Create electric gradient
        const gradient = ctx.createLinearGradient(
          centerX - spiralRadius, centerY - spiralRadius,
          centerX + spiralRadius, centerY + spiralRadius
        );
        gradient.addColorStop(0, 'rgba(216, 246, 81, 0)');
        gradient.addColorStop(0.5, 'rgba(216, 246, 81, 0.8)');
        gradient.addColorStop(1, 'rgba(216, 246, 81, 0)');
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Add glow effect
        ctx.save();
        ctx.filter = 'blur(8px)';
        ctx.strokeStyle = 'rgba(216, 246, 81, 0.3)';
        ctx.lineWidth = 4;
        ctx.stroke();
        ctx.restore();
      }
      
      // Update rotation
      angle += 0.02;
      
      animationFrameId = requestAnimationFrame(drawVoltex);
    };

    window.addEventListener('resize', resize);
    resize();
    drawVoltex();

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
        {/* Canvas for voltex effect */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ zIndex: 1 }}
        />
        
        {/* Character image */}
        <div className="relative w-full h-full">
          <img
            srcSet="/images/FREEWRITER_600.png 1x, /images/FREEWRITER_1200.png 2x"
            src="/images/FREEWRITER_600.png"
            alt="FreeWriter Character"
            className="w-full h-full object-contain mix-blend-normal"
            style={{
              imageRendering: 'auto',
              WebkitMaskImage: '-webkit-radial-gradient(white, black)', // Helps with Safari transparency
            }}
            loading="eager"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FloatingCharacter;
