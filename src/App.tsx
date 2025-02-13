import React from 'react';
import Background from './components/Background';
import Character from './components/Character';
import Cursor from './components/Cursor';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import LaunchCountdown from './components/LaunchCountdown';
import Sections from './components/Sections';
import Contact from './components/Contact';
import FloatingButton from './components/FloatingButton';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <div className="min-h-screen overflow-hidden relative font-sans">
      <Background />
      <Character />
      <Cursor />
      <Navigation />
      <FloatingButton />
      <ScrollToTop />
      
      <main className="relative z-10">
        <Hero />
        <Contact />
        <LaunchCountdown />
        <Sections />
      </main>
    </div>
  );
}

export default App;