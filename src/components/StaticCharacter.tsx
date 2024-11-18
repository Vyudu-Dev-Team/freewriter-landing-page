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
      
      // Responsive base radius
      const baseRadius = Math.min(canvas.width, canvas.height) * 0.4;
      
      // Create multiple layers of aura
      for (let layer = 0; layer < 3; layer++) {
        const layerOffset = layer * 0.1;
        
        const waveSpeed = 0.001;
        const waveAmplitude = 15;
        const layerRadius = baseRadius + 
          Math.sin(time * waveSpeed + layerOffset * Math.PI * 2) * waveAmplitude;
        
        const numCircles = 8;
        for (let i = 0; i < numCircles; i++) {
          const angle = (i / numCircles) * Math.PI * 2 + time * 0.001;
          const wobbleX = Math.cos(angle) * 10;
          const wobbleY = Math.sin(angle) * 10;
          
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
    <div className="w-full h-full relative">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ mixBlendMode: 'screen' }}
      />
      <div 
        className="absolute inset-0"
        style={{
          background: `url('/character.png') no-repeat center center`,
          backgroundSize: 'contain'
        }}
      />
    </div>
  );
};

export default StaticCharacter;
