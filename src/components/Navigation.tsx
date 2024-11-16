import React from 'react';
import { motion } from 'framer-motion';
import { Home, User, Code2, Send } from 'lucide-react';

const links = [
  { href: '#home', label: 'HOME', icon: Home },
  { href: '#about', label: 'ABOUT', icon: User },
  { href: '#projects', label: 'PROJECTS', icon: Code2 },
  { href: '#contact', label: 'CONTACT', icon: Send }
];

export default function Navigation() {
  return (
    <motion.nav 
      className="fixed top-8 right-8 z-40"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <ul className="flex flex-col gap-4">
        {links.map((link) => (
          <li key={link.href}>
            <motion.a 
              href={link.href}
              className="flex items-center gap-2 text-primary-lime hover:text-primary-purple transition-colors duration-300 font-pixel text-body tracking-[0.2em]"
              whileHover={{ x: -5 }}
            >
              <link.icon className="w-5 h-5" />
              <span>{link.label}</span>
            </motion.a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}