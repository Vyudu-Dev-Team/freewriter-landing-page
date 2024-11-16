import React from 'react';
import { motion } from 'framer-motion';
import { Bot, GamepadIcon, MessageSquare, Zap, Brain, Users, CheckCircle2 } from 'lucide-react';

const mainFeature = {
  title: "MEET VIRGIL: YOUR AI WRITING COMPANION",
  description: "Imagine having a personal guide through the labyrinth of storytelling. Virgil, our AI writing assistant, is here to help you navigate creative challenges, offering brainstorming techniques, structured frameworks, and analytical insights to enhance your narrative skills.",
  benefits: [
    "Structured brainstorming techniques",
    "Narrative frameworks",
    "Analytical insights",
    "Creative guidance"
  ]
};

interface Feature {
  title: string;
  Icon: React.ElementType;
  description: string;
  highlight: string;
}

const features: Feature[] = [
  {
    title: 'GAMIFY YOUR WRITING',
    Icon: GamepadIcon,
    description: 'At FreeWriter, we believe in the power of play. Our platform incorporates game-like elements to stimulate creativity, improve focus, and develop storytelling techniques.',
    highlight: 'Writing Sprints'
  },
  {
    title: 'ENHANCE COMMUNICATION',
    Icon: MessageSquare,
    description: 'Stories are at the heart of effective communication. FreeWriter helps you frame your ideas within compelling narratives, making your messages more engaging and memorable.',
    highlight: 'Better Engagement'
  },
  {
    title: 'OVERCOME CREATIVE BLOCKS',
    Icon: Zap,
    description: 'Facing writer\'s block? FreeWriter offers structured prompts and exercises designed to reignite your creativity, helping you break through barriers and keep your writing flowing.',
    highlight: 'Structured Prompts'
  },
  {
    title: 'FOCUS SUPPORT',
    Icon: Brain,
    description: 'We understand that maintaining focus can be challenging, especially for individuals with ADHD. FreeWriter\'s engaging, game-based approach offers immediate feedback and rewards.',
    highlight: 'Instant Feedback'
  },
  {
    title: 'WRITING COMMUNITY',
    Icon: Users,
    description: 'Become part of a vibrant community where collaboration and peer learning thrive. Share your stories, receive constructive feedback, and grow alongside fellow writers.',
    highlight: 'Peer Learning'
  }
];

const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0,
    rotateX: -10,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const Features: React.FC = () => {
  return (
    <section id="features" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Main Feature - Virgil */}
        <motion.div
          className="max-w-5xl mx-auto mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="retro-card p-12 relative overflow-hidden">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="pixel-border w-20 h-20 bg-primary-purple rounded-lg flex items-center justify-center mb-6">
                  <Bot className="w-12 h-12 text-primary-lime" />
                </div>
                
                <h2 className="font-pixelsplitter text-3xl md:text-4xl text-primary-lime mb-6 cyber-glitch">
                  {mainFeature.title}
                </h2>
                
                <p className="body-text text-support-gray mb-8">
                  {mainFeature.description}
                </p>
                
                <ul className="space-y-4">
                  {mainFeature.benefits.map((benefit, index) => (
                    <motion.li
                      key={benefit}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <CheckCircle2 className="w-6 h-6 text-primary-lime shrink-0 mt-1" />
                      <span className="body-text text-support-gray">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <div className="relative">
                <div className="aspect-square rounded-lg overflow-hidden pixel-border bg-primary-purple/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-purple/30 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Secondary Features */}
        <motion.h2 
          className="font-pixelsplitter text-3xl md:text-4xl text-primary-lime text-center mb-16 cyber-glitch"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          UNLEASH YOUR CREATIVE POTENTIAL
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.Icon;
            return (
              <motion.div
                key={feature.title}
                className="floating-3d"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariants}
                custom={index}
              >
                <div className="retro-card p-8 h-full relative overflow-hidden group">
                  <div className="relative z-10">
                    <div className="pixel-border w-16 h-16 bg-primary-purple rounded-lg flex items-center justify-center mb-6">
                      <IconComponent className="w-8 h-8 text-primary-lime" />
                    </div>
                    
                    <div className="absolute top-4 right-4 px-3 py-1 bg-primary-lime/10 rounded-full">
                      <span className="text-sm text-primary-lime font-bold">{feature.highlight}</span>
                    </div>
                    
                    <h3 className="font-pixelsplitter text-xl md:text-2xl text-primary-lime mb-4 cyber-glitch">
                      {feature.title}
                    </h3>
                    
                    <p className="body-text text-support-gray">
                      {feature.description}
                    </p>
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      
      {/* Background Grid Animation */}
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

export default Features;