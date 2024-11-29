import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ScrollAnimationWrapper, GlitchText, CyberCard } from './ScrollAnimations';
import FloatingCharacter from './FloatingCharacter';
import '../styles/fonts.css';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-start relative overflow-hidden py-12 md:py-16">
      {/* Main Title */}
      <div className="w-full text-center mb-8 md:mb-12">
        <ScrollAnimationWrapper animation="fadeIn" delay={0.2}>
          <h1 className="font-bold text-4xl relative">
            <span className="font-pixelsplitter text-primary-lime text-4xl cyber-glitch">FREE</span>
            <span className="font-pixelsplitter text-secondary-blue text-4xl cyber-glitch">WRITER</span>
            <div className="absolute -inset-1 bg-secondary-blue/20 -z-10 blur-lg"></div>
          </h1>
        </ScrollAnimationWrapper>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Mobile FREEWRITER logo */}
          <h1 className="block lg:hidden mb-6">
            <span className="font-pixelsplitter text-4xl md:text-5xl text-secondary-blue cyber-glitch">FREE</span>
            <span className="font-pixelsplitter text-4xl md:text-5xl text-primary-lime cyber-glitch">WRITER</span>
          </h1>

          {/* Main Heading */}
          <ScrollAnimationWrapper animation="fadeUp">
            <GlitchText
              text="UNLEASH YOUR CREATIVITY"
              className="font-pixelsplitter text-4xl md:text-6xl lg:text-7xl text-primary-lime mb-6"
              delay={0.2}
            />
          </ScrollAnimationWrapper>

          {/* Subheading */}
          <ScrollAnimationWrapper animation="fadeUp" delay={0.4}>
            <h2 className="font-sans font-bold text-3xl text-secondary-blue mb-6">
              Experience the future of writing with AI-powered assistance
            </h2>
          </ScrollAnimationWrapper>

          {/* Body Text */}
          <ScrollAnimationWrapper animation="fadeUp" delay={0.6}>
            <p className="font-sans text-lg text-support-gray mb-8">
              Transform your writing process into an engaging and productive experience with our AI companion.
            </p>
          </ScrollAnimationWrapper>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <ScrollAnimationWrapper animation="slideIn" delay={0.6}>
              <CyberCard className="p-6 bg-support-black/50 rounded-lg">
                <h3 className="font-pixelsplitter text-xl text-primary-lime mb-3">
                  AI Companion
                </h3>
                <p className="text-support-gray">
                  Write alongside Virgil, your personal AI writing assistant
                </p>
              </CyberCard>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper animation="slideIn" delay={0.8}>
              <CyberCard className="p-6 bg-support-black/50 rounded-lg">
                <h3 className="font-pixelsplitter text-xl text-primary-lime mb-3">
                  Smart Framework
                </h3>
                <p className="text-support-gray">
                  Structured writing tools that adapt to your style
                </p>
              </CyberCard>
            </ScrollAnimationWrapper>
          </div>

          {/* CTA Button */}
          <ScrollAnimationWrapper animation="scale" delay={1}>
            <a
              href="#signup"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-lime text-secondary-blue rounded-lg 
                       hover:bg-primary-lime/90 transition-colors duration-300 
                       retro-card floating-3d font-pixelsplitter text-xl
                       font-black tracking-widest shadow-xl border-2 border-secondary-blue/20
                       mb-4 sm:mb-8"
            >
              Coming Soon
            </a>
          </ScrollAnimationWrapper>

          {/* Floating Character */}
          <ScrollAnimationWrapper animation="fadeIn" delay={1.2}>
            <div className="relative -mt-32 sm:-mt-8 md:mt-0">
              <FloatingCharacter />
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>

      {/* Section Divider with Flare */}
      <div className="section-divider">
        <div className="light-flare"></div>
      </div>

      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <ScrollAnimationWrapper animation="fadeIn" delay={0.2}>
          <div className="absolute inset-0 bg-gradient-to-b from-secondary-blue/5 to-transparent" />
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
};

export default Hero;