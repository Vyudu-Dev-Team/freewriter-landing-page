import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const FloatingCharacter: React.FC = () => {
  const { scrollY } = useScroll();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Create dynamic scroll-based transforms with adjusted trigger points
  const y = useTransform(scrollY, [0, 1000], [-50, 400]); // Start higher
  const scale = useTransform(scrollY, [0, 300], [1.1, 0.7]); // Start slightly larger
  const rotate = useTransform(scrollY, [0, 500], [0, -10]);
  const perspective = useTransform(scrollY, [0, 500], [0, 1000]);
  const translateZ = useTransform(scrollY, [0, 500], [0, -200]);
  
  // Responsive spring physics
  const springY = useSpring(y, {
    stiffness: 100,
    damping: 30,
    mass: 1
  });
  
  const springScale = useSpring(scale, {
    stiffness: 200,
    damping: 30
  });

  const springRotate = useSpring(rotate, {
    stiffness: 150,
    damping: 25
  });
  
  // Floating animation
  const floatingAnimation = {
    y: [0, -10, 0],
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
      
      // Responsive base radius
      const baseRadius = Math.min(canvas.width, canvas.height) * 
        (window.innerWidth < 768 ? 0.45 : 0.4); // Slightly larger on mobile
      
      // Create multiple layers of aura
      for (let layer = 0; layer < 3; layer++) {
        const layerOffset = layer * 0.1;
        
        const waveSpeed = 0.001;
        const waveAmplitude = window.innerWidth < 768 ? 15 : 20; // Adjusted for mobile
        const layerRadius = baseRadius + 
          Math.sin(time * waveSpeed + layerOffset * Math.PI * 2) * waveAmplitude;
        
        const numCircles = 8;
        for (let i = 0; i < numCircles; i++) {
          const angle = (i / numCircles) * Math.PI * 2 + time * 0.001;
          const wobbleX = Math.cos(angle) * (window.innerWidth < 768 ? 10 : 15);
          const wobbleY = Math.sin(angle) * (window.innerWidth < 768 ? 10 : 15);
          
          const gradient = ctx.createRadialGradient(
            centerX + wobbleX, centerY + wobbleY, 0,
            centerX + wobbleX, centerY + wobbleY, layerRadius
          );
          
          gradient.addColorStop(0, 'rgba(76, 42, 133, 0.15)');
          gradient.addColorStop(0.5, 'rgba(76, 42, 133, 0.08)');
          gradient.addColorStop(1, 'rgba(76, 42, 133, 0)');
          
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
      
      // Responsive outer glow
      const outerGlow = ctx.createRadialGradient(
        centerX, centerY, baseRadius * 0.8,
        centerX, centerY, baseRadius * 1.2
      );
      outerGlow.addColorStop(0, 'rgba(76, 42, 133, 0.12)');
      outerGlow.addColorStop(0.5, 'rgba(76, 42, 133, 0.06)');
      outerGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      
      ctx.fillStyle = outerGlow;
      ctx.beginPath();
      ctx.arc(centerX, centerY, baseRadius * 1.2, 0, Math.PI * 2);
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
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
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
              backfaceVisibility: "hidden"
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FloatingCharacter;
