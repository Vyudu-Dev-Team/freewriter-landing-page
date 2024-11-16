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
  return null;
};

export default Navigation;