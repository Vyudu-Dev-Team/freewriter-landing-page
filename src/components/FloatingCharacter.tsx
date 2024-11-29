import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const FloatingCharacter: React.FC = () => {
  const { scrollY } = useScroll();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Refined scroll-based transforms
  const y = useTransform(scrollY, [0, 800], [-20, 300]); // Gentler initial position
  const scale = useTransform(scrollY, [0, 400], [1.05, 0.85]); // More subtle scale change
  const rotate = useTransform(scrollY, [0, 600], [0, -5]); // Reduced rotation
  const perspective = useTransform(scrollY, [0, 500], [0, 800]);
  const translateZ = useTransform(scrollY, [0, 500], [0, -100]); // Reduced Z translation
  
  // Optimized spring physics for smoother motion
  const springY = useSpring(y, {
    stiffness: 80, // Reduced stiffness for smoother movement
    damping: 25,
    mass: 1.2 // Increased mass for more weight
  });
  
  const springScale = useSpring(scale, {
    stiffness: 150,
    damping: 35
  });

  const springRotate = useSpring(rotate, {
    stiffness: 120,
    damping: 30
  });
  
  // Enhanced floating animation
  const floatingAnimation = {
    y: [0, -8, 0], // Reduced float height
    rotate: [-0.5, 0.5, -0.5], // Subtle rotation
    transition: {
      duration: 5, // Slower, more graceful movement
      repeat: Infinity,
      ease: [0.45, 0, 0.55, 1], // Custom easing for natural movement
      times: [0, 0.5, 1]
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
      
      // Adjusted base radius for better proportion
      const baseRadius = Math.min(canvas.width, canvas.height) * 
        (window.innerWidth < 768 ? 0.42 : 0.38);
      
      // Enhanced aura layers
      for (let layer = 0; layer < 4; layer++) { // Added an extra layer
        const layerOffset = layer * 0.15; // Increased offset
        
        const waveSpeed = 0.0008; // Slowed down wave movement
        const waveAmplitude = window.innerWidth < 768 ? 12 : 15; // Reduced amplitude
        const layerRadius = baseRadius + 
          Math.sin(time * waveSpeed + layerOffset * Math.PI * 2) * waveAmplitude;
        
        const numCircles = 10; // Increased number of circles
        for (let i = 0; i < numCircles; i++) {
          const angle = (i / numCircles) * Math.PI * 2 + time * 0.0008;
          const wobbleX = Math.cos(angle) * (window.innerWidth < 768 ? 8 : 12);
          const wobbleY = Math.sin(angle) * (window.innerWidth < 768 ? 8 : 12);
          
          const gradient = ctx.createRadialGradient(
            centerX + wobbleX, centerY + wobbleY, 0,
            centerX + wobbleX, centerY + wobbleY, layerRadius
          );
          
          // Updated colors to match new scheme
          gradient.addColorStop(0, 'rgba(30, 144, 255, 0.12)'); // Dodger Blue
          gradient.addColorStop(0.4, 'rgba(216, 246, 81, 0.08)'); // Lime
          gradient.addColorStop(1, 'rgba(73, 11, 244, 0.02)'); // Deep Purple
          
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
      
      // Enhanced outer glow
      const outerGlow = ctx.createRadialGradient(
        centerX, centerY, baseRadius * 0.9,
        centerX, centerY, baseRadius * 1.3
      );
      outerGlow.addColorStop(0, 'rgba(30, 144, 255, 0.1)');
      outerGlow.addColorStop(0.5, 'rgba(216, 246, 81, 0.05)');
      outerGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      
      ctx.fillStyle = outerGlow;
      ctx.beginPath();
      ctx.arc(centerX, centerY, baseRadius * 1.3, 0, Math.PI * 2);
      ctx.fill();
      
      time += 16;
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
    <div className="relative w-full h-full flex items-center justify-center">
      <motion.div
        className="relative w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] mx-auto"
        style={{ 
          y: springY,
          scale: springScale,
          rotateX: springRotate,
          perspective,
          transformStyle: "preserve-3d",
          translateZ
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1.2,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      >
        <motion.div
          className="relative w-full h-full"
          animate={floatingAnimation}
          style={{
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden"
          }}
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
            className="relative w-full h-full object-contain mx-auto"
            loading="eager"
            style={{
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
              filter: "drop-shadow(0 0 20px rgba(30, 144, 255, 0.2))" // Added subtle glow
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FloatingCharacter;
