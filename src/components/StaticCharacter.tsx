import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const StaticCharacter: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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
      
      // Smaller base radius for the Meet Virgil section
      const baseRadius = Math.min(canvas.width, canvas.height) * 0.35;
      
      // Create multiple layers of aura
      for (let layer = 0; layer < 3; layer++) {
        const layerOffset = layer * 0.1;
        
        const waveSpeed = 0.001;
        const waveAmplitude = 12; // Reduced amplitude
        const layerRadius = baseRadius + 
          Math.sin(time * waveSpeed + layerOffset * Math.PI * 2) * waveAmplitude;
        
        const numCircles = 8;
        for (let i = 0; i < numCircles; i++) {
          const angle = (i / numCircles) * Math.PI * 2 + time * 0.001;
          const wobbleX = Math.cos(angle) * 8; // Reduced wobble
          const wobbleY = Math.sin(angle) * 8; // Reduced wobble
          
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
      
      time += 1;
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
    <div className="w-full h-full relative flex items-center justify-center p-4">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ mixBlendMode: 'screen' }}
      />
      <div className="relative w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] mx-auto">
        <img
          srcSet="/images/FREEWRITER_600.png 1x, /images/FREEWRITER_1200.png 2x"
          src="/images/FREEWRITER_600.png"
          alt="FreeWriter Character"
          className="w-full h-full object-contain mx-auto"
          loading="eager"
        />
      </div>
    </div>
  );
};

export default StaticCharacter;
