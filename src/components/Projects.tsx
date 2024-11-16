import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: {
    live: string;
    github: string;
  };
}

const projects: Project[] = [
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

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="h1 text-primary-lime mb-16 text-center"
        >
          FEATURED PROJECTS
        </motion.h1>
        <div className="grid gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="angled-section bg-support-black/80 overflow-hidden group"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-support-black to-transparent" />
              </div>
              <div className="p-8 relative">
                <h2 className="h2 text-primary-lime mb-4">
                  {project.title}
                </h2>
                <p className="body-text text-support-gray mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="body-text px-3 py-1 bg-primary-purple/20 text-primary-lime rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <motion.a
                    href={project.links.live}
                    className="flex items-center gap-2 text-primary-lime hover:text-primary-purple transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span className="body-text">View Live</span>
                  </motion.a>
                  <motion.a
                    href={project.links.github}
                    className="flex items-center gap-2 text-primary-lime hover:text-primary-purple transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <Github className="w-5 h-5" />
                    <span className="body-text">Source Code</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;