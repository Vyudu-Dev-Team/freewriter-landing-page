import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Brain, Target, Zap } from 'lucide-react';

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
          <motion.h2 
            className="font-pixelsplitter text-3xl md:text-4xl text-primary-lime mb-6 cyber-glitch"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            ELEVATE YOUR WRITING WITH AI
          </motion.h2>
          <motion.p 
            className="text-xl text-support-gray max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Discover how FreeWriter's AI-powered features transform your writing process into an 
            engaging and productive experience.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.Icon;
            return (
              <motion.div
                key={feature.title}
                className="group"
                variants={cardVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.2 }}
                custom={index}
              >
                <div className="retro-card overflow-hidden relative">
                  {/* Feature Preview Area */}
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
                      <h3 className="font-pixelsplitter text-xl text-primary-lime cyber-glitch">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-lg text-support-gray">
                      {feature.description}
                    </p>
                  </div>

                  {/* Interactive Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <a 
            href="#signup" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-lime text-primary-purple rounded-lg hover:bg-primary-lime/90 transition-colors duration-300 retro-card floating-3d"
          >
            <span className="font-pixelsplitter text-xl">Try FreeWriter Now</span>
          </a>
        </motion.div>
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