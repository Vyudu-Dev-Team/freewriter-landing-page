import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, GamepadIcon, MessageSquare, Zap, Brain, Users, Brush, Code, Wand2 } from 'lucide-react';

interface Feature {
  title: string;
  Icon: React.ElementType;
  description: string;
}

const features: Feature[] = [
  {
    title: 'Gamify Your Writing Experience',
    Icon: GamepadIcon,
    description: 'At FreeWriter, we believe in the power of play. Our platform incorporates game-like elements to stimulate creativity, improve focus, and develop storytelling techniques. Engage in timed writing sprints, tackle creative challenges, and celebrate your achievements as you progress.'
  },
  {
    title: 'Enhance Communication Through Storytelling',
    Icon: MessageSquare,
    description: 'Stories are at the heart of effective communication. FreeWriter helps you frame your ideas within compelling narratives, making your messages more engaging and memorable. Whether you\'re crafting a pitch, developing a product concept, or writing a novel, our tools assist you in connecting with your audience on a deeper level.'
  },
  {
    title: 'Overcome Creative Blocks with Ease',
    Icon: Zap,
    description: 'Facing writer\'s block? FreeWriter offers structured prompts and exercises designed to reignite your creativity. Our platform provides a supportive environment to explore new ideas and perspectives, helping you break through barriers and keep your writing flowing.'
  },
  {
    title: 'Tailored Support for Focus Challenges',
    Icon: Brain,
    description: 'We understand that maintaining focus can be challenging, especially for individuals with ADHD. FreeWriter\'s engaging, game-based approach offers immediate feedback and rewards, helping you stay attentive and motivated throughout your writing journey.'
  },
  {
    title: 'Join a Thriving Community of Writers',
    Icon: Users,
    description: 'Become part of a vibrant community where collaboration and peer learning thrive. Share your stories, receive constructive feedback, and grow alongside fellow writers. At FreeWriter, we believe that collective creativity leads to individual success.'
  }
];

const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0,
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

const VirgilCharacter = () => {
  return (
    <motion.div
      className="relative w-full h-full flex items-center justify-center"
      animate={{
        y: [0, -8, 0]
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
        repeatType: "reverse"
      }}
    >
      <img 
        src="/character.png" 
        alt="Virgil Character" 
        className="w-3/4 h-3/4 object-contain"
      />
    </motion.div>
  );
};

const Features: React.FC = () => {
  return (
    <section id="features" className="py-4 sm:py-8 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Virgil Section */}
        <div className="max-w-5xl mx-auto mb-8">
          <div className="retro-card p-12 relative overflow-hidden">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="pixel-border w-20 h-20 bg-primary-purple rounded-lg flex items-center justify-center mb-6">
                  <Bot className="w-12 h-12 text-primary-lime" />
                </div>
                
                <h2 className="font-pixelsplitter text-3xl md:text-4xl text-primary-lime mb-6 cyber-glitch">
                  Meet Virgil: Your AI Writing Companion
                </h2>
                
                <p className="text-xl text-support-gray mb-8">
                  Imagine having a personal guide through the labyrinth of storytelling. Virgil, our AI writing assistant, is here to help you navigate creative challenges, offering brainstorming techniques, structured frameworks, and analytical insights to enhance your narrative skills.
                </p>
              </div>
              
              <div className="relative w-full aspect-square">
                <div className="absolute inset-0 rounded-lg overflow-hidden pixel-border bg-primary-purple/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-purple/30 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <VirgilCharacter />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.Icon;
            return (
              <div
                key={feature.title}
                className="floating-3d"
              >
                <div className="retro-card p-8 h-full relative overflow-hidden group">
                  <div className="relative z-10">
                    <div className="pixel-border w-16 h-16 bg-primary-purple rounded-lg flex items-center justify-center mb-6">
                      <IconComponent className="w-8 h-8 text-primary-lime" />
                    </div>
                    
                    <h3 className="font-pixelsplitter text-xl md:text-2xl text-primary-lime mb-4 cyber-glitch">
                      {feature.title}
                    </h3>
                    
                    <p className="text-lg text-support-gray">
                      {feature.description}
                    </p>
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Animated Stars Background */}
      <div className="absolute inset-0 -z-10">
        <div className="stars-container">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="star"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`
              }}
            />
          ))}
        </div>
      </div>

      {/* Animated Light Flare */}
      <div className="relative h-16 overflow-hidden my-2">
        <div 
          className="absolute w-full h-1.5 top-1/2 transform -translate-y-1/2"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(73, 11, 244, 0.2) 20%, rgba(73, 11, 244, 0.6) 50%, rgba(73, 11, 244, 0.2) 80%, transparent 100%)',
            animation: 'flareAnimation 3s ease-in-out infinite'
          }}
        />
      </div>

      {/* Final CTA */}
      <div
        className="max-w-4xl mx-auto text-center mt-24 px-4"
      >
        <h2 className="font-pixelsplitter text-3xl md:text-4xl text-primary-lime mb-6 cyber-glitch">
          Start Your FreeWriter Adventure Today
        </h2>
        <p className="text-xl text-support-gray mb-8">
          Embark on a transformative writing journey with FreeWriter. Sign up now to experience a platform that combines the joy of storytelling with the thrill of gaming, all guided by your AI companion, Virgil. Unlock your creative potential and make writing an adventure worth pursuing.
        </p>
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