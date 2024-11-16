import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Code2, Send } from 'lucide-react';

const Hero: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = container.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;

      container.style.transform = `
        perspective(1000px)
        rotateY(${x * 10}deg)
        rotateX(${-y * 10}deg)
        translateZ(20px)
      `;
    };

    const handleMouseLeave = () => {
      container.style.transform = `
        perspective(1000px)
        rotateY(0deg)
        rotateX(0deg)
        translateZ(0px)
      `;
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section id="home" className="h-screen flex items-center justify-center px-4">
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ y }}
        className="text-center relative z-20 transition-transform duration-300 ease-out"
      >
        <div className="retro-card p-12 mb-8">
          <h1 className="h1 cyber-glitch text-primary-lime tracking-[0.2em] uppercase leading-none mb-6">
            FREE<br />WRITER
          </h1>
          <p className="h2 text-primary-purple mb-8 relative">
            Crafting Digital Experiences with a Retro Touch
          </p>
          <div className="flex gap-6 justify-center">
            <motion.a
              href="#projects"
              className="pixel-border bg-primary-purple text-primary-lime px-6 py-3 font-pixel hover:bg-primary-lime hover:text-primary-purple transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Code2 className="inline-block mr-2" />
              VIEW PROJECTS
            </motion.a>
            <motion.a
              href="#contact"
              className="pixel-border bg-primary-lime text-primary-purple px-6 py-3 font-pixel hover:bg-primary-purple hover:text-primary-lime transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Send className="inline-block mr-2" />
              CONTACT ME
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;