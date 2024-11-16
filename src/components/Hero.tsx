import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Code2, Send } from 'lucide-react';

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section id="home" className="h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ y }}
        className="text-center relative z-20"
      >
        <h1 className="font-pixel text-[64px] font-normal mb-6 text-primary-lime crt-flicker tracking-[0.2em] uppercase leading-none">
          FREE<br />WRITER
        </h1>
        <p className="font-sans text-xl font-bold text-primary-purple mb-8">
          Crafting Digital Experiences with a Retro Touch
        </p>
        <div className="flex gap-6 justify-center">
          <motion.a
            href="#projects"
            className="pixel-corners bg-primary-purple text-primary-lime px-6 py-3 text-lg font-pixel hover:bg-primary-lime hover:text-primary-purple transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Code2 className="inline-block mr-2" />
            VIEW PROJECTS
          </motion.a>
          <motion.a
            href="#contact"
            className="pixel-corners bg-primary-lime text-primary-purple px-6 py-3 text-lg font-pixel hover:bg-primary-purple hover:text-primary-lime transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Send className="inline-block mr-2" />
            CONTACT ME
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}