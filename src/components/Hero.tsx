import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-pixelsplitter text-4xl md:text-5xl lg:text-6xl text-primary-lime mb-6 cyber-glitch">
              Unleash Your Creative Potential with FreeWriter
            </h1>
            
            <p className="text-xl md:text-2xl text-support-gray mb-12 max-w-3xl mx-auto">
              Welcome to FreeWriter, where storytelling meets innovation. Our AI-powered platform transforms your creative journey into an engaging adventure, making writing not just a task, but a delightful experience.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a 
                  href="#signup" 
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary-lime text-primary-purple rounded-lg hover:bg-primary-lime/90 transition-colors duration-300 retro-card floating-3d"
                >
                  <span className="font-pixelsplitter text-xl">Start Your FreeWriter Adventure</span>
                  <ArrowRight className="w-6 h-6" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-purple/5 to-transparent" />
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, ${['#490BF4', '#D8F651']
            .map(color => `${color}10`).join(', ')})`,
          filter: 'blur(100px)',
          animation: 'pulse 10s ease infinite'
        }} />
      </div>
    </section>
  );
};

export default Hero;