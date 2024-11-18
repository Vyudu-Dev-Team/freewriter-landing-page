import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ScrollAnimationWrapper, GlitchText, CyberCard } from './ScrollAnimations';
import FloatingCharacter from './FloatingCharacter';
import '../styles/fonts.css';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden
                      pt-6 sm:pt-8 md:pt-12 lg:pt-16
                      pb-12 sm:pb-16 md:pb-20 lg:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Main heading */}
          <ScrollAnimationWrapper animation="fadeIn" delay={0.2}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl
                         font-bold text-primary-lime mb-4 sm:mb-6 md:mb-8
                         max-w-[18ch] mx-auto">
              Write Freely, Create Endlessly
            </h1>
          </ScrollAnimationWrapper>
          
          {/* Subheading */}
          <ScrollAnimationWrapper animation="fadeUp" delay={0.4}>
            <p className="text-lg sm:text-xl md:text-2xl text-support-gray
                       mb-6 sm:mb-8 md:mb-10 lg:mb-12
                       max-w-[35ch] mx-auto">
              Experience the joy of distraction-free writing with our innovative platform
            </p>
          </ScrollAnimationWrapper>
          
          {/* CTA Button */}
          <ScrollAnimationWrapper animation="scale" delay={0.6}>
            <a
              href="#signup"
              className="bg-primary-lime hover:bg-primary-lime/90 
                       text-primary-purple font-semibold
                       py-3 px-8 rounded-lg shadow-lg
                       transform transition duration-200 
                       hover:scale-105 active:scale-95
                       text-lg sm:text-xl
                       mb-8 sm:mb-12 md:mb-16 lg:mb-20"
            >
              Start Writing Now
            </a>
          </ScrollAnimationWrapper>
          
          {/* Character */}
          <ScrollAnimationWrapper animation="fadeIn" delay={0.8}>
            <div className="relative">
              <FloatingCharacter />
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
};

export default Hero;