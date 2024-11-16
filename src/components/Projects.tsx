import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'CYBER NEXUS',
    description: 'A futuristic writing platform with AI integration',
    image: 'https://images.unsplash.com/photo-1635322966219-b75ed372eb01?q=80&w=1000&auto=format&fit=crop',
    tags: ['React', 'TypeScript', 'AI', 'WebGL'],
    links: {
      live: '#',
      github: '#'
    }
  },
  {
    title: 'NEURAL FORGE',
    description: 'Advanced text analysis and generation tool',
    image: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?q=80&w=1000&auto=format&fit=crop',
    tags: ['Node.js', 'Python', 'Machine Learning'],
    links: {
      live: '#',
      github: '#'
    }
  },
  {
    title: 'QUANTUM SCRIBE',
    description: 'Next-generation collaborative writing environment',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop',
    tags: ['WebAssembly', 'Rust', 'WebRTC'],
    links: {
      live: '#',
      github: '#'
    }
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="font-pixel text-5xl text-primary-lime mb-16 text-center"
        >
          FEATURED PROJECTS
        </motion.h2>
        <div className="grid gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-purple/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative overflow-hidden angled-section bg-support-black/80">
                <div className="grid md:grid-cols-2 gap-8 p-8">
                  <div className="space-y-6">
                    <h3 className="font-pixel text-4xl text-primary-lime">{project.title}</h3>
                    <p className="text-lg text-support-gray">{project.description}</p>
                    <div className="flex flex-wrap gap-3">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-primary-purple/30 text-primary-lime text-sm rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <motion.a
                        href={project.links.live}
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-2 text-primary-lime hover:text-primary-purple transition-colors"
                      >
                        <ExternalLink size={20} />
                        <span>Live Demo</span>
                      </motion.a>
                      <motion.a
                        href={project.links.github}
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-2 text-primary-lime hover:text-primary-purple transition-colors"
                      >
                        <Github size={20} />
                        <span>Source Code</span>
                      </motion.a>
                    </div>
                  </div>
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-support-black/80 to-transparent" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}