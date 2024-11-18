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
    let particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      life: number;
      maxLife: number;
    }> = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    const createParticle = () => {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const angle = Math.random() * Math.PI * 2;
      const distance = 150 + Math.random() * 100;
      
      particles.push({
        x: centerX + Math.cos(angle) * distance,
        y: centerY + Math.sin(angle) * distance,
        size: 1 + Math.random() * 2,
        speedX: (Math.random() - 0.5) * 8,
        speedY: (Math.random() - 0.5) * 8,
        life: 0,
        maxLife: 50 + Math.random() * 50
      });
    };

    const drawElectricity = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create new particles
      if (Math.random() < 0.3) createParticle();

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.life++;
        if (particle.life >= particle.maxLife) {
          particles.splice(index, 1);
          return;
        }

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const dx = centerX - particle.x;
        const dy = centerY - particle.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist > 300) {
          const angle = Math.atan2(dy, dx);
          particle.speedX += Math.cos(angle) * 0.2;
          particle.speedY += Math.sin(angle) * 0.2;
        }

        // Draw electricity
        ctx.beginPath();
        const alpha = 1 - particle.life / particle.maxLife;
        ctx.strokeStyle = `rgba(216, 246, 81, ${alpha})`;
        ctx.lineWidth = particle.size;
        
        // Draw lightning bolt
        const boltLength = 20;
        const startX = particle.x;
        const startY = particle.y;
        let currentX = startX;
        let currentY = startY;

        ctx.moveTo(currentX, currentY);
        
        for (let i = 0; i < 3; i++) {
          currentX += (Math.random() - 0.5) * boltLength;
          currentY += (Math.random() - 0.5) * boltLength;
          ctx.lineTo(currentX, currentY);
        }

        ctx.stroke();

        // Draw glow effect
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 2
        );
        gradient.addColorStop(0, `rgba(216, 246, 81, ${alpha * 0.5})`);
        gradient.addColorStop(1, 'rgba(216, 246, 81, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(drawElectricity);
    };

    window.addEventListener('resize', resize);
    resize();
    drawElectricity();

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
        {/* Canvas for electricity effect */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ zIndex: 1 }}
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
