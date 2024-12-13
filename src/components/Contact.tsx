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
    
    // Create the payload in the format Zapier expects
    const zapierPayload = {
      name: formData.name,
      email: formData.email,
      newsletter_subscription: formData.newsletter
    };

    try {
      console.log('Attempting to send data:', zapierPayload);
      
      const response = await fetch('https://hooks.zapier.com/hooks/catch/18141255/2sz6t2x/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(zapierPayload)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      console.log('Form submitted successfully');
      setFormData({ name: '', email: '', newsletter: 'Yes' });
      
      // Show success message to user
      const successMessage = document.createElement('div');
      successMessage.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg';
      successMessage.textContent = 'Thank you for subscribing!';
      document.body.appendChild(successMessage);
      
      // Remove the message after 3 seconds
      setTimeout(() => {
        successMessage.remove();
      }, 3000);

    } catch (error) {
      console.error('Submission error:', error);
      
      // Show error message to user
      const errorMessage = document.createElement('div');
      errorMessage.className = 'fixed top-4 right-4 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg';
      errorMessage.textContent = 'Something went wrong. Please try again later.';
      document.body.appendChild(errorMessage);
      
      // Remove the message after 3 seconds
      setTimeout(() => {
        errorMessage.remove();
      }, 3000);
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
          <div className="bg-gray-900/90 p-12 rounded-lg shadow-2xl backdrop-blur-sm relative z-10">
            <h2 className="font-pixelsplitter text-3xl md:text-4xl text-primary-lime mb-6">
              Start Your FreeWriter Adventure Today
            </h2>
            
            <p className="text-xl text-white mb-8">
              Embark on a transformative writing journey with FreeWriter. Experience a platform that combines the joy of storytelling with the thrill of gaming, all guided by your AI companion, Virgil.
            </p>

            <form 
              onSubmit={handleSubmit} 
              className="max-w-md mx-auto relative z-20"
              style={{ cursor: 'auto' }}
            >
              <div className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    required
                    className="w-full px-6 py-4 rounded-lg bg-gray-800 border-2 border-primary-lime text-white placeholder-gray-300 focus:outline-none focus:border-white text-lg"
                    style={{ cursor: 'text' }}
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
                    className="w-full px-6 py-4 rounded-lg bg-gray-800 border-2 border-primary-lime text-white placeholder-gray-300 focus:outline-none focus:border-white text-lg"
                    style={{ cursor: 'text' }}
                  />
                </div>
                
                <div>
                  <select
                    name="newsletter"
                    value={formData.newsletter}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 rounded-lg bg-gray-800 border-2 border-primary-lime text-white focus:outline-none focus:border-white text-lg appearance-none"
                    style={{ cursor: 'pointer' }}
                  >
                    <option value="Yes">Yes, subscribe me to the newsletter</option>
                    <option value="No">No, thanks</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-primary-lime text-black font-bold rounded-lg text-lg hover:opacity-90 transition-opacity"
                  style={{ cursor: 'pointer' }}
                >
                  Join the Adventure
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;