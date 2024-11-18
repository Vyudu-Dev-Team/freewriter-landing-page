import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 relative overflow-hidden">
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
            
            <p className="text-xl text-support-gray mb-8">
              Embark on a transformative writing journey with FreeWriter. Sign up now to experience a platform that combines the joy of storytelling with the thrill of gaming, all guided by your AI companion, Virgil. Unlock your creative potential and make writing an adventure worth pursuing.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <a 
                href="#signup" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#D8F651] text-[#490BF4] rounded-lg 
                         hover:bg-[#D8F651]/90 transition-colors duration-300 
                         retro-card floating-3d font-pixelsplitter text-xl
                         font-black tracking-widest shadow-xl border-2 border-[#490BF4]/20"
              >
                Coming Soon
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Blue light streak */}
      <div className="relative h-24 overflow-hidden my-4">
        <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-[#490BF4]/40 to-transparent top-1/2 transform -translate-y-1/2">
          <div className="absolute inset-0 animate-pulse-slow opacity-70"></div>
        </div>
      </div>
      
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-purple/5 to-transparent" />
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, ${['#490BF4', '#D8F651']
            .map(color => `${color}10`).join(', ')})`,
          filter: 'blur(100px)',
          animation: 'pulse 10s ease infinite'
        }} />
      </div>
    </section>
  );
};

export default Contact;