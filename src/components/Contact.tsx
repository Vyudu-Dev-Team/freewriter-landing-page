import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Github, Instagram, Youtube, MessageSquare } from 'lucide-react';

const socialLinks = [
  { icon: Twitter, href: '#', label: 'X' },
  { icon: Github, href: '#', label: 'GITHUB' },
  { icon: Instagram, href: '#', label: 'INSTAGRAM' },
  { icon: Youtube, href: '#', label: 'YOUTUBE' },
  { icon: MessageSquare, href: '#', label: 'DISCORD' }
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="angled-section bg-primary-lime/10 p-12"
          >
            <h2 className="font-pixel text-4xl text-primary-lime mb-8">JOIN OUR COMMUNITY</h2>
            <p className="text-xl text-support-gray mb-8">OVER 1M WRITER MEMBERS AND COUNTING</p>
            <div className="flex gap-6 flex-wrap">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 bg-primary-purple rounded-lg flex items-center justify-center text-primary-lime hover:bg-primary-lime hover:text-primary-purple transition-colors duration-300"
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="angled-section bg-support-white/5 p-12"
          >
            <h2 className="font-pixel text-4xl text-primary-lime mb-8">BE THE FIRST TO KNOW</h2>
            <form className="space-y-6">
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-support-black/50 border border-primary-purple/30 p-4 text-support-white focus:border-primary-lime outline-none transition-colors duration-300"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full bg-support-black/50 border border-primary-purple/30 p-4 text-support-white focus:border-primary-lime outline-none transition-colors duration-300"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full bg-support-black/50 border border-primary-purple/30 p-4 text-support-white focus:border-primary-lime outline-none transition-colors duration-300"
                />
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="terms" className="accent-primary-lime" />
                <label htmlFor="terms" className="text-support-gray">
                  I agree with the <a href="#" className="text-primary-lime hover:text-primary-purple">Terms</a> and{' '}
                  <a href="#" className="text-primary-lime hover:text-primary-purple">Privacy Policy</a>
                </label>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full pixel-corners bg-primary-lime text-primary-purple px-8 py-4 font-pixel hover:bg-primary-purple hover:text-primary-lime transition-colors duration-300"
              >
                SIGN ME UP
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}