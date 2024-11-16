import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function RetroGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 200]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Grid settings
      const spacing = 40;
      const horizonY = canvas.height * 0.6;
      const gridSize = 20;
      
      // Create gradient for lines
      const gradient = ctx.createLinearGradient(0, horizonY, 0, canvas.height);
      gradient.addColorStop(0, '#D8F651'); // Lime at horizon
      gradient.addColorStop(1, '#490BF4'); // Purple at bottom
      
      // Draw vertical lines with perspective
      for (let x = -spacing * 10; x < canvas.width + spacing * 10; x += spacing) {
        ctx.beginPath();
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        
        for (let z = 0; z < gridSize; z++) {
          const depth = z / gridSize;
          const perspectiveScale = Math.pow(2, depth * 2);
          
          // Add wave effect
          const wave = Math.sin(time * 0.002 + z * 0.2) * 20;
          const xPos = (x - canvas.width / 2) / perspectiveScale + canvas.width / 2 + wave;
          const yPos = horizonY + (z * spacing * 1.5);
          
          if (z === 0) {
            ctx.moveTo(xPos, yPos);
          } else {
            ctx.lineTo(xPos, yPos);
          }
        }
        ctx.stroke();
      }
      
      // Draw horizontal lines with glow effect
      for (let z = 0; z < gridSize; z++) {
        const y = horizonY + z * spacing * 1.5;
        const depth = z / gridSize;
        
        ctx.beginPath();
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2 + (1 - depth) * 2;
        
        // Add pulse effect
        const pulse = Math.sin(time * 0.003) * 0.5 + 0.5;
        ctx.globalAlpha = (1 - depth) * pulse;
        
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
      
      // Reset alpha
      ctx.globalAlpha = 1;
      
      // Add sun/horizon glow
      const glowGradient = ctx.createRadialGradient(
        canvas.width / 2, horizonY, 0,
        canvas.width / 2, horizonY, canvas.width * 0.4
      );
      glowGradient.addColorStop(0, 'rgba(216, 246, 81, 0.3)');
      glowGradient.addColorStop(1, 'rgba(216, 246, 81, 0)');
      
      ctx.fillStyle = glowGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Animate
      time += 16;
      animationFrameId = requestAnimationFrame(drawGrid);
    };

    window.addEventListener('resize', resize);
    resize();
    drawGrid();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <motion.div 
      className="fixed inset-0 z-0"
      style={{ y }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-60 mix-blend-screen"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-support-black via-transparent to-transparent" />
    </motion.div>
  );
}