import React from 'react';
import { motion } from 'framer-motion';
import { ScrollAnimationWrapper } from './ScrollAnimations';
import FloatingCharacter from './FloatingCharacter';

const Hero: React.FC = () => {
  return (
    <section className="hero-section relative min-h-screen py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <ScrollAnimationWrapper animation="fadeUp">
              <h1 className="font-pixelsplitter text-4xl sm:text-5xl md:text-6xl mb-6">
                <span className="text-[#D8F651]">FREE</span>
                <span className="text-[#490BF4]">WRITER</span>
              </h1>
              
              <p className="text-xl text-support-gray mb-8">
                Unleash your creativity with our AI-powered writing companion. Experience a revolutionary platform that combines storytelling with gaming elements to make writing an engaging adventure.
              </p>
            </ScrollAnimationWrapper>

            {/* CTA Button */}
            <ScrollAnimationWrapper animation="scale" delay={1}>
              <a
                href="#signup"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#D8F651] text-[#490BF4] rounded-lg 
                         hover:bg-[#D8F651]/90 transition-colors duration-300 
                         retro-card floating-3d font-pixelsplitter text-xl
                         font-black tracking-widest shadow-xl border-2 border-[#490BF4]/20
                         mb-8 md:mb-0"
              >
                Coming Soon
              </a>
            </ScrollAnimationWrapper>
          </div>

          {/* Character */}
          <div className="character-container w-full md:w-1/2 -mt-8 md:mt-0">
            <FloatingCharacter />
          </div>
        </div>
      </div>

      {/* Section Divider with Flare */}
      <div className="section-divider">
        <div className="light-flare"></div>
      </div>
    </section>
  );
};

export default Hero;