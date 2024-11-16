import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
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

const cardVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
      delay: i * 0.2
    }
  })
};

const Projects: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  return (
    <section id="projects" className="py-32 relative">
      <motion.div
        ref={containerRef}
        style={{ opacity, scale }}
        className="container mx-auto px-4"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="h1 text-primary-lime mb-16 text-center cyber-glitch"
        >
          FEATURED PROJECTS
        </motion.h1>
        <div className="grid gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="floating-3d"
            >
              <div className="retro-card overflow-hidden group">
                <div className="relative aspect-video overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
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
                        className="body-text px-3 py-1 bg-primary-purple/20 text-primary-lime rounded pixel-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <motion.a
                      href={project.links.live}
                      className="flex items-center gap-2 text-primary-lime hover:text-primary-purple transition-colors duration-300"
                      whileHover={{ x: 5, scale: 1.05 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span className="body-text">View Live</span>
                    </motion.a>
                    <motion.a
                      href={project.links.github}
                      className="flex items-center gap-2 text-primary-lime hover:text-primary-purple transition-colors duration-300"
                      whileHover={{ x: 5, scale: 1.05 }}
                    >
                      <Github className="w-5 h-5" />
                      <span className="body-text">Source Code</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
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

export default Projects;