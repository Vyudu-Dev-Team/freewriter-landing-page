import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const benefits = [
  "14-day free trial, no credit card required",
  "Cancel anytime, no questions asked",
  "Full access to all features during trial",
  "Free forever plan available"
];

const testimonial = {
  quote: "FreeWriter transformed my writing process. The AI companion feels like having a writing coach available 24/7.",
  author: "Sarah Chen",
  role: "Professional Writer",
  rating: 5
};

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="retro-card p-12 relative overflow-hidden"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Column - CTA */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-8"
                >
                  <div className="inline-block px-4 py-2 rounded-full bg-primary-lime/20 text-primary-lime mb-6">
                    <span className="text-sm font-bold">🚀 LIMITED TIME OFFER</span>
                  </div>
                  
                  <h2 className="h1 text-primary-lime mb-6 cyber-glitch">
                    START YOUR CREATIVE JOURNEY TODAY
                  </h2>
                  
                  <p className="body-text text-support-gray mb-8">
                    Join thousands of writers who have already transformed their writing process with FreeWriter's AI-powered platform.
                  </p>
                </motion.div>
                
                {/* Benefits List */}
                <motion.ul 
                  className="space-y-4 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  {benefits.map((benefit, index) => (
                    <li key={benefit} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary-lime shrink-0" />
                      <span className="text-support-gray">{benefit}</span>
                    </li>
                  ))}
                </motion.ul>
                
                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <a 
                    href="#signup" 
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-lime text-primary-purple rounded-lg hover:bg-primary-lime/90 transition-colors duration-300 retro-card floating-3d"
                  >
                    <span className="h3">Start Free Trial</span>
                    <ArrowRight className="w-6 h-6" />
                  </a>
                </motion.div>
              </div>
              
              {/* Right Column - Testimonial */}
              <div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="pixel-border p-8 bg-primary-purple/10 rounded-lg relative"
                >
                  {/* Quote mark */}
                  <div className="text-6xl text-primary-lime/20 font-serif absolute top-4 left-4">"</div>
                  
                  <div className="relative z-10">
                    <p className="text-xl text-support-gray mb-6 italic">
                      {testimonial.quote}
                    </p>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary-purple/20 pixel-border" />
                      <div>
                        <div className="text-primary-lime font-bold">{testimonial.author}</div>
                        <div className="text-support-gray text-sm">{testimonial.role}</div>
                      </div>
                    </div>
                    
                    <div className="absolute top-4 right-4 flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-primary-lime" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
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