import React from 'react';
import { motion } from 'framer-motion';
import Features from './Features';
import Projects from './Projects';

export default function Sections() {
  return (
    <>
      <section className="relative py-32">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-32"
          >
            <div className="angled-section bg-gradient-to-br from-primary-purple/20 to-transparent p-12 backdrop-blur-sm">
              <div className="max-w-4xl">
                <h2 className="font-pixel text-6xl text-primary-lime mb-6">
                  BECOME A HERO<br />
                  IN THE<br />
                  DIGITAL REALM
                </h2>
                <p className="text-xl text-support-gray font-sans">
                  Writers are recognized for their ambition and creativity. In the
                  digital realm, a symbol of excellence, they strive not only for recognition
                  but also to carve their place in history.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <Features />
      <Projects />
    </>
  );
}