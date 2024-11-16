import React from 'react';
import { motion } from 'framer-motion';
import { Users, Cpu, Sword, Cog } from 'lucide-react';

const features = [
  {
    title: 'TEAM-BASED DOMINATION',
    icon: Users,
    description: 'Join forces with other writers to dominate the creative landscape.'
  },
  {
    title: 'CAT & MECH MOBILITY',
    icon: Cpu,
    description: 'Unleash your creativity with advanced AI assistance.'
  },
  {
    title: 'HEROIC VERSATILITY',
    icon: Sword,
    description: 'Adapt to any writing challenge with our versatile toolset.'
  },
  {
    title: 'LOADOUT CUSTOMIZATION',
    icon: Cog,
    description: 'Customize your writing environment with powerful tools.'
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
    <section className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid gap-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="floating-3d"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              variants={cardVariants}
            >
              <div className="retro-card p-8 relative overflow-hidden">
                <div className="relative z-10 flex items-start gap-8">
                  <div className="pixel-border w-16 h-16 bg-primary-purple rounded-lg flex items-center justify-center shrink-0">
                    <feature.icon className="w-8 h-8 text-primary-lime" />
                  </div>
                  <div>
                    <h2 className="h2 text-primary-lime mb-4 cyber-glitch">
                      {feature.title}
                    </h2>
                    <p className="body-text text-support-gray">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
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