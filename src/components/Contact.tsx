import React, { useState, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FormData {
  name: string;
  email: string;
  newsletter: string;
}

interface FormStatus {
  isSubmitting: boolean;
  isSuccess: boolean;
  error: string | null;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    newsletter: 'Yes'
  });

  const [formStatus, setFormStatus] = useState<FormStatus>({
    isSubmitting: false,
    isSuccess: false,
    error: null
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus({ isSubmitting: true, isSuccess: false, error: null });
    
    const payload = {
      name: formData.name,
      email: formData.email,
      newsletter_subscription: formData.newsletter
    };

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbyHGDj3Zcr1gq6neFh5YxqihNmCyX6C1EaR9UX4bhwclAWMJddRE0K-3Ui0QffbFpi_Hw/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
        mode: 'no-cors'
      });

      // With no-cors, we won't get a detailed response, so we'll assume success if we get here
      setFormStatus({
        isSubmitting: false,
        isSuccess: true,
        error: null
      });
      setFormData({ name: '', email: '', newsletter: 'Yes' });

      setTimeout(() => {
        setFormStatus(prev => ({ ...prev, isSuccess: false }));
      }, 5000);

    } catch (error) {
      console.error('Submission error:', error);
      setFormStatus({
        isSubmitting: false,
        isSuccess: false,
        error: 'Unable to submit form. Please try again later or contact support.'
      });
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-pixelsplitter text-3xl md:text-4xl text-primary-lime mb-6">
                Join the FreeWriter Community
              </h2>
              
              <p className="text-xl text-white mb-8">
                Start your writing journey today with FreeWriter. Get early access, writing tips, and updates delivered straight to your inbox.
              </p>

              <form 
                onSubmit={handleSubmit} 
                className="max-w-md mx-auto relative z-20"
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
                      disabled={formStatus.isSubmitting}
                      className="w-full px-6 py-4 rounded-lg bg-gray-800 border-2 border-primary-lime text-white placeholder-gray-300 focus:outline-none focus:border-white text-lg disabled:opacity-50"
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
                      disabled={formStatus.isSubmitting}
                      className="w-full px-6 py-4 rounded-lg bg-gray-800 border-2 border-primary-lime text-white placeholder-gray-300 focus:outline-none focus:border-white text-lg disabled:opacity-50"
                    />
                  </div>
                  
                  <div>
                    <select
                      name="newsletter"
                      value={formData.newsletter}
                      onChange={handleInputChange}
                      disabled={formStatus.isSubmitting}
                      className="w-full px-6 py-4 rounded-lg bg-gray-800 border-2 border-primary-lime text-white focus:outline-none focus:border-white text-lg appearance-none disabled:opacity-50"
                    >
                      <option value="Yes">Yes, subscribe me to the newsletter</option>
                      <option value="No">No, thanks</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus.isSubmitting}
                    className="w-full px-8 py-4 bg-primary-lime text-black font-bold rounded-lg text-lg hover:opacity-90 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {formStatus.isSubmitting ? 'Submitting...' : 'Join the Adventure'}
                  </button>
                </div>
              </form>

              <AnimatePresence>
                {formStatus.error && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-4 p-4 bg-red-500/90 text-white rounded-lg"
                  >
                    {formStatus.error}
                  </motion.div>
                )}

                {formStatus.isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-4 p-4 bg-green-500/90 text-white rounded-lg"
                  >
                    Thank you for subscribing! We'll be in touch soon.
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;