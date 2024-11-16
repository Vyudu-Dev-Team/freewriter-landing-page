import React from 'react';
import { motion } from 'framer-motion';
import { Home, User, Code2, Send } from 'lucide-react';

interface NavLink {
  href: string;
  label: string;
  icon: React.FC<{ className?: string }>;
}

const links: NavLink[] = [
  { href: '#home', label: 'HOME', icon: Home },
  { href: '#about', label: 'ABOUT', icon: User },
  { href: '#projects', label: 'PROJECTS', icon: Code2 },
  { href: '#contact', label: 'CONTACT', icon: Send }
];

const Navigation: React.FC = () => {
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
              className="flex items-center gap-2 text-primary-lime hover:text-primary-purple transition-colors duration-300 body-text tracking-[0.2em]"
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
};

export default Navigation;