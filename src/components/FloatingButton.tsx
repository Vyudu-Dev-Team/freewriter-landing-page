import React from 'react';

const FloatingButton: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={scrollToContact}
      className="fixed bottom-8 right-8 z-50 bg-primary-lime text-black px-6 py-3 rounded-full shadow-lg hover:opacity-90 transition-all transform hover:scale-105 font-bold"
      aria-label="Subscribe to newsletter"
    >
      ✉️ Subscribe Now
    </button>
  );
};

export default FloatingButton;
