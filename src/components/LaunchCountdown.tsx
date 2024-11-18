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
    days: 8,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set launch date to 8 days from now
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 8);
    launchDate.setHours(launchDate.getHours());
    launchDate.setMinutes(launchDate.getMinutes());
    launchDate.setSeconds(launchDate.getSeconds());

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = launchDate.getTime() - now;

      if (difference > 0) {
        // Calculate exact time units
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        // Reset to zeros when countdown finishes
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Calculate immediately
    calculateTimeLeft();
    
    // Update every second
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

        {/* Reflection effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-lime/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 bg-primary-lime/5 rounded-lg filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );

  return (
    <section className="py-4 sm:py-12 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollAnimationWrapper animation="fadeUp" delay={0.2}>
            <h2 className="font-pixelsplitter text-3xl md:text-4xl text-primary-lime mb-8">
              Launching Soon
            </h2>
          </ScrollAnimationWrapper>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Minutes', value: timeLeft.minutes },
              { label: 'Seconds', value: timeLeft.seconds }
            ].map(({ label, value }) => (
              <ScrollAnimationWrapper
                key={label}
                animation="scale"
                delay={0.4}
                className="bg-support-black/30 p-4 sm:p-6 rounded-lg backdrop-blur-sm"
              >
                <div className="font-pixel text-3xl sm:text-4xl md:text-5xl text-primary-lime mb-2">
                  {value.toString().padStart(2, '0')}
                </div>
                <div className="text-support-gray font-medium">{label}</div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </div>

      {/* Section Divider with Flare */}
      <div className="section-divider mt-8">
        <div className="light-flare"></div>
      </div>
    </section>
  );
};

export default LaunchCountdown;
