import React from 'react';
import RetroGrid from './RetroGrid';

export default function Background() {
  return (
    <>
      <RetroGrid />
      <div className="fixed inset-0 bg-support-black/60">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(73,11,244,0.15)_1px,transparent_1px)] bg-[length:24px_24px]" />
        <div className="absolute inset-0 scanlines opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary-purple/20 to-support-black" />
      </div>
      <div className="fixed inset-0 pointer-events-none z-[1] mix-blend-overlay opacity-20">
        <div className="absolute inset-0 bg-noise" />
      </div>
    </>
  );
}