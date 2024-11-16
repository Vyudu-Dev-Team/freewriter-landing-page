import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Star, Users, Zap } from 'lucide-react';

const stats = [
  { icon: Star, value: '4.9/5', label: 'User Rating' },
  { icon: Users, value: '50,000+', label: 'Active Writers' },
  { icon: Zap, value: '2M+', label: 'Stories Created' }
];

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <motion.section
      ref={containerRef}
      className="min-h-screen relative flex items-center justify-center py-32 overflow-hidden"
      style={{ opacity, scale }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Pre-headline */}
          <motion.div
            className="inline-block mb-6 px-4 py-2 rounded-full bg-primary-purple/20 text-primary-lime border border-primary-lime/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <span className="text-sm font-bold tracking-wider">🚀 AI-POWERED WRITING ASSISTANT</span>
          </motion.div>
          
          {/* Main headline */}
          <motion.h1 
            className="h1 text-primary-lime mb-6 cyber-glitch"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Transform Your Writing Journey with AI-Powered Creativity
          </motion.h1>
          
          {/* Subheadline */}
          <motion.p 
            className="h3 text-support-gray mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Break through writer's block, enhance your focus, and craft compelling stories with your personal AI writing companion.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <a 
              href="#signup" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-lime text-primary-purple rounded-lg hover:bg-primary-lime/90 transition-colors duration-300 retro-card"
            >
              <span className="body-text font-bold">Start Free Trial</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            
            <a 
              href="#demo" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-primary-lime text-primary-lime rounded-lg hover:bg-primary-lime/10 transition-colors duration-300"
            >
              <span className="body-text font-bold">Watch Demo</span>
            </a>
          </motion.div>
          
          {/* Social Proof */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="pixel-border p-4 bg-primary-purple/10 rounded-lg"
              >
                <stat.icon className="w-6 h-6 text-primary-lime mb-2 mx-auto" />
                <div className="text-2xl font-bold text-primary-lime mb-1">{stat.value}</div>
                <div className="text-sm text-support-gray">{stat.label}</div>
              </div>
            ))}
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
    </motion.section>
  );
};

export default Hero;