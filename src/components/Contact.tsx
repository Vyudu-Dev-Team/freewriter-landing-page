import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-12 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="retro-card p-12 relative overflow-hidden"
          >
            <h2 className="font-pixelsplitter text-3xl md:text-4xl text-primary-lime mb-6 cyber-glitch">
              Start Your FreeWriter Adventure Today
            </h2>
            
            <p className="text-xl text-support-gray">
              Embark on a transformative writing journey with FreeWriter. Experience a platform that combines the joy of storytelling with the thrill of gaming, all guided by your AI companion, Virgil. Unlock your creative potential and make writing an adventure worth pursuing.
            </p>
          </motion.div>
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
    </section>
  );
};

export default Contact;