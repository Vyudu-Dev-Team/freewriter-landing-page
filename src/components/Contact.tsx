import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    newsletter: 'Yes'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Replace this URL with your actual Zapier webhook URL
      const response = await fetch('YOUR_ZAPIER_WEBHOOK_URL', {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
            <h2 className="font-pixelsplitter text-3xl md:text-4xl text-primary-lime mb-6 cyber-glitch">
              Start Your FreeWriter Adventure Today
            </h2>
            
            <p className="text-xl text-support-gray mb-8">
              Embark on a transformative writing journey with FreeWriter. Experience a platform that combines the joy of storytelling with the thrill of gaming, all guided by your AI companion, Virgil. Unlock your creative potential and make writing an adventure worth pursuing.
            </p>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-2 rounded bg-gray-800 border border-primary-lime text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-lime"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-2 rounded bg-gray-800 border border-primary-lime text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-lime"
                  />
                </div>
                <div>
                  <select
                    name="newsletter"
                    value={formData.newsletter}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded bg-gray-800 border border-primary-lime text-white focus:outline-none focus:ring-2 focus:ring-primary-lime"
                  >
                    <option value="Yes">Yes, subscribe me to the newsletter</option>
                    <option value="No">No, thanks</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary-lime text-black font-bold rounded hover:bg-opacity-90 transition-colors duration-200"
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