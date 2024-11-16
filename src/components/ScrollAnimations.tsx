import { motion } from 'framer-motion';
import React from 'react';

interface ScrollAnimationWrapperProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fadeUp' | 'fadeIn' | 'glitch' | 'slideIn' | 'scale';
  delay?: number;
}

// Animation variants
const animations = {
  fadeUp: {
    hidden: { 
      opacity: 0, 
      y: 50,
      filter: 'blur(10px)'
    },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      }
    }
  },
  fadeIn: {
    hidden: { 
      opacity: 0,
      scale: 0.95
    },
    visible: { 
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  },
  glitch: {
    hidden: {
      opacity: 0,
      x: -20,
      filter: 'blur(10px)'
    },
    visible: {
      opacity: 1,
      x: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.4,
        type: 'spring',
        stiffness: 200,
        damping: 10
      }
    }
  },
  slideIn: {
    hidden: { 
      x: -100,
      opacity: 0,
      filter: 'brightness(2) saturate(0)'
    },
    visible: { 
      x: 0,
      opacity: 1,
      filter: 'brightness(1) saturate(1)',
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      }
    }
  },
  scale: {
    hidden: { 
      scale: 0.8,
      opacity: 0
    },
    visible: { 
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      }
    }
  }
};

export const ScrollAnimationWrapper: React.FC<ScrollAnimationWrapperProps> = ({
  children,
  className = '',
  animation = 'fadeUp',
  delay = 0
}) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={animations[animation]}
      transition={{
        delay,
        duration: 0.5,
        ease: 'easeOut'
      }}
    >
      {children}
    </motion.div>
  );
};

// Glitch text animation component
interface GlitchTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export const GlitchText: React.FC<GlitchTextProps> = ({ text, className = '', delay = 0 }) => {
  return (
    <motion.div
      className={`relative ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Main text */}
      <motion.span
        className="relative z-10 inline-block"
        variants={{
          hidden: { opacity: 0, x: -20 },
          visible: { 
            opacity: 1, 
            x: 0,
            transition: {
              delay,
              duration: 0.4,
              ease: 'easeOut'
            }
          }
        }}
      >
        {text}
      </motion.span>
      
      {/* Glitch layers */}
      <motion.span
        className="absolute inset-0 text-primary-lime opacity-50 z-0"
        variants={{
          hidden: { opacity: 0, x: 10 },
          visible: {
            opacity: [0, 0.5, 0],
            x: [5, -5, 5],
            transition: {
              delay: delay + 0.2,
              duration: 0.3,
              repeat: Infinity,
              repeatType: 'reverse'
            }
          }
        }}
      >
        {text}
      </motion.span>
      
      <motion.span
        className="absolute inset-0 text-primary-purple opacity-50 z-0"
        variants={{
          hidden: { opacity: 0, x: -10 },
          visible: {
            opacity: [0, 0.5, 0],
            x: [-5, 5, -5],
            transition: {
              delay: delay + 0.3,
              duration: 0.4,
              repeat: Infinity,
              repeatType: 'reverse'
            }
          }
        }}
      >
        {text}
      </motion.span>
    </motion.div>
  );
};

// Cyber card animation wrapper
interface CyberCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const CyberCard: React.FC<CyberCardProps> = ({ children, className = '', delay = 0 }) => {
  return (
    <motion.div
      className={`relative ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={{
        hidden: {
          opacity: 0,
          y: 20,
          scale: 0.95,
          filter: 'brightness(0.5) saturate(0)'
        },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: 'brightness(1) saturate(1)',
          transition: {
            delay,
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1],
          }
        }
      }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
    >
      {children}
      
      {/* Animated border effect */}
      <motion.div
        className="absolute inset-0 border border-primary-lime/30 pointer-events-none"
        variants={{
          hidden: { opacity: 0, scale: 0.95 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              delay: delay + 0.2,
              duration: 0.4
            }
          }
        }}
      />
      
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary-purple/10 to-primary-lime/10 pointer-events-none"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: [0.1, 0.2, 0.1],
            transition: {
              delay: delay + 0.3,
              duration: 2,
              repeat: Infinity,
              repeatType: 'reverse'
            }
          }
        }}
      />
    </motion.div>
  );
};
