import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Twitter, Github, Instagram, Youtube, MessageSquare } from 'lucide-react';

interface SocialLink {
  icon: React.FC<{ size: number }>;
  href: string;
  label: string;
}

const socialLinks: SocialLink[] = [
  { icon: Twitter, href: '#', label: 'X' },
  { icon: Github, href: '#', label: 'GITHUB' },
  { icon: Instagram, href: '#', label: 'INSTAGRAM' },
  { icon: Youtube, href: '#', label: 'YOUTUBE' },
  { icon: MessageSquare, href: '#', label: 'DISCORD' }
];

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    // Handle form submission
    console.log('Form submitted with email:', email);
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
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
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="angled-section bg-support-white/5 p-12"
          >
            <h2 className="font-pixel text-4xl text-primary-lime mb-8">BE THE FIRST TO KNOW</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full bg-support-black/50 border border-primary-purple/30 p-4 text-support-white focus:border-primary-lime outline-none transition-colors duration-300"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary-lime text-primary-purple font-pixel py-4 px-8 hover:bg-primary-lime/90 transition-colors duration-300"
              >
                SUBSCRIBE
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default memo(Contact);