import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Brain, Target, Zap } from 'lucide-react';
import { ScrollAnimationWrapper, GlitchText, CyberCard } from './ScrollAnimations';

interface Feature {
  title: string;
  description: string;
  Icon: React.ElementType;
  demo?: string; // URL for feature demo/preview image
}

const features: Feature[] = [
  {
    title: 'AI-Powered Writing Assistant',
    description: 'Experience writing with Virgil, your AI companion that provides real-time suggestions, helps develop ideas, and keeps you in creative flow.',
    Icon: Brain,
    demo: '/ai-assistant-preview.jpg'
  },
  {
    title: 'Gamified Writing Experience',
    description: 'Transform your writing sessions into engaging challenges. Earn rewards, track progress, and maintain motivation through game-like elements.',
    Icon: Target,
    demo: '/gamified-preview.jpg'
  },
  {
    title: 'Smart Writing Frameworks',
    description: 'Access intelligent frameworks that adapt to your writing style and goals, whether you\'re crafting a story, article, or business document.',
    Icon: Sparkles,
    demo: '/frameworks-preview.jpg'
  },
  {
    title: 'Real-time Enhancement',
    description: 'Get instant feedback and suggestions to improve your writing while maintaining your unique voice and creative vision.',
    Icon: Zap,
    demo: '/enhancement-preview.jpg'
  }
];

const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const FeaturePreview: React.FC = () => {
  return (
    <section className="py-32 relative overflow-hidden" id="features-preview">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <ScrollAnimationWrapper animation="fadeUp">
            <h2 className="font-pixel font-bold text-4xl text-primary-lime mb-6">
              ELEVATE YOUR WRITING WITH AI
            </h2>
          </ScrollAnimationWrapper>
          
          <ScrollAnimationWrapper animation="fadeUp" delay={0.3}>
            <p className="font-sans text-lg text-support-gray max-w-3xl mx-auto">
              Discover how FreeWriter's AI-powered features transform your writing process into an 
              engaging and productive experience.
            </p>
          </ScrollAnimationWrapper>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.Icon;
            return (
              <ScrollAnimationWrapper
                key={feature.title}
                animation="slideIn"
                delay={0.4 + index * 0.2}
              >
                <CyberCard className="h-full">
                  <div className="relative aspect-video overflow-hidden pixel-border bg-primary-purple/20">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-purple/30 to-transparent" />
                    {/* Interactive Preview Area */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-purple to-primary-purple/50">
                      <IconComponent className="w-16 h-16 text-primary-lime opacity-80" />
                    </div>
                    
                    {/* Animated Glitch Effect */}
                    <div className="absolute inset-0 opacity-20 bg-primary-lime mix-blend-overlay" 
                         style={{ animation: 'glitch 8s ease-in-out infinite' }} />
                  </div>

                  {/* Feature Info */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary-purple/20 flex items-center justify-center pixel-border">
                        <IconComponent className="w-6 h-6 text-primary-lime" />
                      </div>
                      <h3 className="font-sans font-bold text-3xl text-primary-lime cyber-glitch">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="font-sans text-lg text-support-gray">
                      {feature.description}
                    </p>
                  </div>
                </CyberCard>
              </ScrollAnimationWrapper>
            );
          })}
        </div>

        {/* Call to Action */}
        <ScrollAnimationWrapper animation="scale" delay={1.2}>
          <div className="text-center mt-16">
            <a 
              href="#signup" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#D8F651] text-[#490BF4] rounded-lg 
                       hover:bg-[#D8F651]/90 transition-colors duration-300 
                       retro-card floating-3d font-pixelsplitter text-xl
                       font-black tracking-widest shadow-xl border-2 border-[#490BF4]/20"
            >
              Coming Soon
            </a>
          </div>
        </ScrollAnimationWrapper>
      </div>

      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, ${['#490BF4', '#D8F651', '#2191FB']
            .map(color => `${color}20`).join(', ')})`,
          filter: 'blur(100px)',
          transform: 'translate3d(0, 0, 0)',
          animation: 'moveGradient 15s ease infinite'
        }} />
      </div>
    </section>
  );
};

export default FeaturePreview;