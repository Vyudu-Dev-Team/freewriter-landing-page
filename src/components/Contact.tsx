import React, { useState, ChangeEvent, FormEvent } from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    newsletter: 'Yes'
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('https://hooks.zapier.com/hooks/catch/18141255/2sz6t2x/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        alert('Thank you for subscribing!');
        setFormData({ name: '', email: '', newsletter: 'Yes' });
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="py-12 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="retro-card p-12 relative overflow-hidden"
          >
            <h2 className="font-pixelsplitter text-3xl md:text-4xl text-primary-lime mb-6">
              Start Your FreeWriter Adventure Today
            </h2>
            
            <p className="text-xl text-support-gray mb-8">
              Embark on a transformative writing journey with FreeWriter. Experience a platform that combines the joy of storytelling with the thrill of gaming, all guided by your AI companion, Virgil. Unlock your creative potential and make writing an adventure worth pursuing.
            </p>

            <form 
              onSubmit={handleSubmit} 
              className="max-w-md mx-auto"
            >
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 rounded bg-gray-800 border border-primary-lime text-white placeholder-gray-400 focus:outline-none focus:border-white"
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-3 rounded bg-gray-800 border border-primary-lime text-white placeholder-gray-400 focus:outline-none focus:border-white"
                  />
                </div>
                
                <div>
                  <select
                    name="newsletter"
                    value={formData.newsletter}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded bg-gray-800 border border-primary-lime text-white focus:outline-none focus:border-white appearance-none cursor-pointer"
                  >
                    <option value="Yes">Yes, subscribe me to the newsletter</option>
                    <option value="No">No, thanks</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary-lime text-black font-bold rounded hover:opacity-90 transition-opacity"
                >
                  Join the Adventure
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
      
      {/* Animated Stars Background */}
      <div className="absolute inset-0 -z-10">
        <div className="stars-container">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="star"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`
              }}
            />
          ))}
        </div>
      </div>

      {/* Animated Light Flare */}
      <div className="relative h-16 overflow-hidden my-2">
        <div 
          className="absolute w-full h-1.5 top-1/2 transform -translate-y-1/2"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(73, 11, 244, 0.2) 20%, rgba(73, 11, 244, 0.6) 50%, rgba(73, 11, 244, 0.2) 80%, transparent 100%)',
            animation: 'flareAnimation 3s ease-in-out infinite'
          }}
        />
      </div>
    </section>
  );
};

export default Contact;