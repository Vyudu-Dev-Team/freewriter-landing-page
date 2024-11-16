import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ScrollAnimationWrapper, GlitchText, CyberCard } from './ScrollAnimations';
import '../styles/fonts.css';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-start relative overflow-hidden py-20">
      {/* Main Title */}
      <div className="w-full text-center mb-16">
        <ScrollAnimationWrapper animation="fadeIn" delay={0.2}>
          <h1 className="font-pixelsplitter font-bold text-7xl md:text-8xl lg:text-9xl text-primary-lime mb-4 cyber-glitch relative">
            FreeWriter
            <div className="absolute -inset-1 bg-primary-purple/20 -z-10 blur-lg"></div>
          </h1>
        </ScrollAnimationWrapper>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
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
            <h2 className="text-xl md:text-2xl text-support-gray mb-8">
              Experience the future of writing with AI-powered assistance
            </h2>
          </ScrollAnimationWrapper>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
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
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-lime text-primary-purple rounded-lg hover:bg-primary-lime/90 transition-colors duration-300 retro-card floating-3d font-pixelsplitter text-xl"
            >
              Start Writing Now
            </a>
          </ScrollAnimationWrapper>
        </div>
      </div>

      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <ScrollAnimationWrapper animation="fadeIn" delay={0.2}>
          <div className="absolute inset-0 bg-gradient-to-b from-primary-purple/5 to-transparent" />
        </ScrollAnimationWrapper>
        
        <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => (
            <ScrollAnimationWrapper
              key={i}
              animation="fadeIn"
              delay={0.3 + i * 0.2}
              className="absolute"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: 'translate(-50%, -50%)'
              }}
            >
              <div
                className="w-32 h-32 bg-primary-lime/5 rounded-full"
                style={{
                  filter: 'blur(40px)',
                  animation: `pulse ${3 + i}s ease-in-out infinite alternate`
                }}
              />
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;