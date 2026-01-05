'use client';

import React, { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface HeroSectionProps {
  onExploreClick: () => void;
  onInvestmentClick: () => void;
}

interface Satellite {
  angle: number;
  speed: number;
  radius: number;
  color: string;
}

const HeroSection = ({ onExploreClick, onInvestmentClick }: HeroSectionProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();
  const [isHydrated, setIsHydrated] = useState(false);

  const satellites: Satellite[] = [
    { angle: 0, speed: 0.008, radius: 150, color: '#FFD700' },
    { angle: 1, speed: 0.006, radius: 180, color: '#00D4AA' },
    { angle: 2, speed: 0.01, radius: 210, color: '#FF6B35' },
  ];

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let centerX = 0;
    let centerY = 0;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;

      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      centerX = canvas.offsetWidth / 2;
      centerY = canvas.offsetHeight / 2;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // ORBITS
      ctx.strokeStyle = 'rgba(255,215,0,0.15)';
      ctx.lineWidth = 1;
      [150, 180, 210].forEach((r) => {
        ctx.beginPath();
        ctx.arc(centerX, centerY, r, 0, Math.PI * 2);
        ctx.stroke();
      });

      // CENTER CORE
      const gradient = ctx.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        40
      );
      gradient.addColorStop(0, '#FFD700');
      gradient.addColorStop(1, '#FFA500');

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 40, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#1A1B3A';
      ctx.font = 'bold 16px Orbitron';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('MGO', centerX, centerY);

      // PLANETS
      satellites.forEach((sat) => {
        sat.angle += sat.speed;

        const x = centerX + Math.cos(sat.angle) * sat.radius;
        const y = centerY + Math.sin(sat.angle) * sat.radius;

        ctx.strokeStyle = 'rgba(255,215,0,0.25)';
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(x, y);
        ctx.stroke();

        ctx.fillStyle = sat.color;
        ctx.beginPath();
        ctx.arc(x, y, 8, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
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
    <section className="relative min-h-[85vh] flex items-center justify-center bg-background overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-background" />

      {/* CANVAS */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full hidden md:block"
        aria-label="Orbital visualization"
      />

      {/* CONTENT */}
      <div className="relative z-20 max-w-4xl mx-auto text-center px-4">
        <h1 className="font-orbitron font-bold text-4xl sm:text-5xl md:text-7xl text-text-primary mb-6">
          Discover the Future of Crypto Ecosystems
        </h1>

        <p className="font-source-sans text-lg md:text-2xl text-text-secondary mb-10">
          First orbital visualization revealing interconnected blockchain projects
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button
            onClick={onExploreClick}
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-rajdhani font-bold text-lg py-4 px-8 rounded-lg shadow-cta flex items-center gap-2"
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
      </div>
    </section>
  );
};

export default HeroSection;
