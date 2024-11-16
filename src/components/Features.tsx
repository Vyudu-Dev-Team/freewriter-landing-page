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

const Features: React.FC = () => {
  return (
    <section className="py-32">
      <div className="container mx-auto px-4">
        <div className="grid gap-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="angled-section bg-support-black/80 p-8 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-purple/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex items-start gap-8">
                <div className="w-16 h-16 bg-primary-purple rounded-lg flex items-center justify-center shrink-0">
                  <feature.icon className="w-8 h-8 text-primary-lime" />
                </div>
                <div>
                  <h2 className="h2 text-primary-lime mb-4">
                    {feature.title}
                  </h2>
                  <p className="body-text text-support-gray">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;