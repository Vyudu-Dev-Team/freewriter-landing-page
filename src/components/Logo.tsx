import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
  variant?: 'default' | 'large' | 'small';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ variant = 'default', className = '' }) => {
  const sizes = {
    small: 'text-2xl',
    default: 'text-4xl md:text-4xl',
    large: 'text-4xl md:text-5xl lg:text-6xl'
  };

  const textSize = sizes[variant];

  return (
    <motion.h1 
      className={`relative inline-flex ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <span className={`font-pixelsplitter ${textSize} text-primary-lime cyber-glitch`}>
        FREE
      </span>
      <span className={`font-pixelsplitter ${textSize} text-secondary-blue cyber-glitch`}>
        WRITER
      </span>
      <div className="absolute -inset-1 bg-secondary-blue/20 -z-10 blur-lg"></div>
    </motion.h1>
  );
};

export default Logo;
