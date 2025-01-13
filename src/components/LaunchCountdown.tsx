import React, { useState, useEffect } from 'react';
import { ScrollAnimationWrapper } from './ScrollAnimations';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = () => {
  const now = new Date().getTime();
  
  // Set fixed launch date to January 20th, 2025
  const launchDate = new Date('2025-01-20T00:00:00-05:00').getTime();
  const difference = launchDate - now;

  if (difference > 0) {
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000)
    };
  }
  return { days: 0, hours: 0, minutes: 0, seconds: 0 };
};

interface CountdownUnitProps {
  value: number;
  label: string;
}

const CountdownUnit: React.FC<CountdownUnitProps> = ({ value, label }) => {
  return (
    <div className="group relative">
      <div className="retro-card p-4 sm:p-6 bg-support-black/50 backdrop-blur-sm border border-primary-lime/20 rounded-lg shadow-xl">
        <div className="text-3xl sm:text-4xl md:text-5xl font-pixelsplitter text-primary-lime mb-2">
          {value.toString().padStart(2, '0')}
        </div>
        <div className="text-sm sm:text-base font-pixelsplitter text-support-gray uppercase tracking-wider">
          {label}
        </div>
        <div className="absolute inset-0 bg-primary-lime/5 rounded-lg filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </div>
  );
};

const LaunchCountdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-4 sm:py-12 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollAnimationWrapper animation="fadeUp" delay={0.2}>
            <h2 className="font-pixelsplitter text-3xl md:text-4xl text-primary-lime mb-8">
              Launching Soon
            </h2>
          </ScrollAnimationWrapper>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto mb-8">
            <ScrollAnimationWrapper animation="scale" delay={0.3}>
              <CountdownUnit value={timeLeft.days} label="Days" />
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper animation="scale" delay={0.4}>
              <CountdownUnit value={timeLeft.hours} label="Hours" />
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper animation="scale" delay={0.5}>
              <CountdownUnit value={timeLeft.minutes} label="Minutes" />
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper animation="scale" delay={0.6}>
              <CountdownUnit value={timeLeft.seconds} label="Seconds" />
            </ScrollAnimationWrapper>
          </div>
        </div>
      </div>
      
      {/* Section Divider with Flare */}
      <div className="section-divider">
        <div className="light-flare"></div>
      </div>
    </section>
  );
};

export default LaunchCountdown;
