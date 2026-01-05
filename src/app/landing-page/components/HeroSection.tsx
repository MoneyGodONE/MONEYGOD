'use client';

import React, { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface HeroSectionProps {
  onExploreClick: () => void;
  onInvestmentClick: () => void;
}

const HeroSection = ({ onExploreClick, onInvestmentClick }: HeroSectionProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isHydrated, setIsHydrated] = useState(false);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    const centerX = () => canvas.width / 2;
    const centerY = () => canvas.height / 2;

    let angle = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Orbital ring
      ctx.strokeStyle = 'rgba(255,215,0,0.15)';
      ctx.beginPath();
      ctx.arc(centerX(), centerY(), 150, 0, Math.PI * 2);
      ctx.stroke();

      // Center core
      const gradient = ctx.createRadialGradient(
        centerX(),
        centerY(),
        0,
        centerX(),
        centerY(),
        40
      );
      gradient.addColorStop(0, '#FFD700');
      gradient.addColorStop(1, '#FFA500');

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(centerX(), centerY(), 40, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#1A1B3A';
      ctx.font = 'bold 16px Orbitron';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('MGO', centerX(), centerY());

      angle += 0.01;
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [isHydrated]);

  if (!isHydrated) {
    return (
      <section className="min-h-[70vh] flex items-center justify-center bg-background">
        <p className="text-text-secondary">Loading ecosystem…</p>
      </section>
    );
  }

  return (
  <section
    className="
      relative
      min-h-[70vh]
      md:min-h-[85vh]
      flex items-center justify-center
      bg-background
      overflow-hidden
    "
  >
    {/* Desktop gradient */}
    <div className="absolute inset-0 hidden md:block bg-gradient-to-b from-primary/20 to-background" />

    {/* Mobile Solana gradient */}
    <div className="absolute inset-0 md:hidden bg-gradient-to-b from-primary/30 via-transparent to-background" />

    {/* Canvas MUST be here */}
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0"
      aria-label="Animated orbital visualization"
    />

    {/* CONTENT */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <h1 className="font-orbitron font-bold text-4xl sm:text-5xl md:text-7xl text-text-primary mb-6">
          Discover the Future of Crypto Ecosystems
        </h1>

        <p className="font-source-sans text-lg md:text-2xl text-text-secondary mb-10">
          First orbital visualization revealing interconnected blockchain projects
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button
            onClick={onExploreClick}
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-rajdhani font-bold text-lg py-4 px-8 rounded-lg shadow-cta flex items-center justify-center gap-2"
          >
            Explore Ecosystem
            <Icon name="ArrowRightIcon" size={20} />
          </button>

          <button
            onClick={onInvestmentClick}
            className="bg-secondary hover:bg-secondary/80 text-secondary-foreground font-rajdhani font-bold text-lg py-4 px-8 rounded-lg border border-border"
          >
            Investment Opportunities
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {[
            ['47', 'Total Projects'],
            ['$2.3B', 'Combined Market Cap'],
            ['156K', 'Active Users'],
          ].map(([value, label]) => (
            <div
              key={label}
              className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border"
            >
              <p className="font-orbitron font-bold text-4xl text-accent mb-2">
                {value}
              </p>
              <p className="font-space-mono text-sm text-text-secondary">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
