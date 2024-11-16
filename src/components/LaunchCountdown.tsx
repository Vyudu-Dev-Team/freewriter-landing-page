import React, { useState, useEffect } from 'react';
import { ScrollAnimationWrapper } from './ScrollAnimations';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const LaunchCountdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 10,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const launchDate = new Date();
      launchDate.setDate(launchDate.getDate() + 10); // 10 days from now
      const difference = +launchDate - +new Date();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const TimeUnit: React.FC<{ value: number; label: string }> = ({ value, label }) => (
    <div className="relative group">
      {/* 3D Container */}
      <div className="relative transform-gpu transition-transform duration-300 group-hover:translate-y-[-4px]">
        {/* Front face */}
        <div className="bg-primary-purple/30 backdrop-blur-sm border border-primary-lime/30 rounded-lg p-4 relative z-10 transform-gpu transition-transform duration-300">
          <div className="font-pixel text-5xl text-primary-lime mb-2 cyber-glitch">
            {value.toString().padStart(2, '0')}
          </div>
          <div className="font-sans text-sm uppercase tracking-wider text-support-gray">
            {label}
          </div>
        </div>
        
        {/* Bottom face (3D effect) */}
        <div className="absolute -bottom-2 left-0 right-0 h-4 bg-primary-purple/50 rounded-lg transform-gpu skew-x-12 -z-10" />
        
        {/* Right face (3D effect) */}
        <div className="absolute -right-2 top-0 bottom-0 w-4 bg-primary-purple/40 rounded-lg transform-gpu skew-y-12 -z-10" />
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 bg-primary-lime/5 rounded-lg filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollAnimationWrapper animation="fadeUp">
          <h2 className="font-pixel text-4xl text-center text-primary-lime mb-12">
            LAUNCHING IN
          </h2>
        </ScrollAnimationWrapper>

        {/* Countdown Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <ScrollAnimationWrapper animation="fadeUp" delay={0.1}>
            <TimeUnit value={timeLeft.days} label="Days" />
          </ScrollAnimationWrapper>
          
          <ScrollAnimationWrapper animation="fadeUp" delay={0.2}>
            <TimeUnit value={timeLeft.hours} label="Hours" />
          </ScrollAnimationWrapper>
          
          <ScrollAnimationWrapper animation="fadeUp" delay={0.3}>
            <TimeUnit value={timeLeft.minutes} label="Minutes" />
          </ScrollAnimationWrapper>
          
          <ScrollAnimationWrapper animation="fadeUp" delay={0.4}>
            <TimeUnit value={timeLeft.seconds} label="Seconds" />
          </ScrollAnimationWrapper>
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 -z-10">
          {/* Grid lines */}
          <div className="absolute inset-0" 
               style={{
                 backgroundImage: `
                   linear-gradient(to right, ${['#490BF4', '#D8F651']
                     .map(color => `${color}05`).join(', ')})
                 `,
                 backgroundSize: '100px 100px',
                 opacity: 0.1
               }} 
          />
          
          {/* Glowing orbs */}
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute w-32 h-32 rounded-full"
              style={{
                background: `radial-gradient(circle, ${['#490BF4', '#D8F651'][i % 2]}20, transparent 70%)`,
                filter: 'blur(40px)',
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: 'translate(-50%, -50%)',
                animation: `pulse ${3 + i}s ease-in-out infinite alternate`
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LaunchCountdown;
