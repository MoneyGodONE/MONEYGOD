'use client';

import React, { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Satellite {
  id: string;
  name: string;
  angle: number;
  speed: number;
  radius: number;
  color: string;
}

interface HeroSectionProps {
  onExploreClick: () => void;
  onInvestmentClick: () => void;
}

const HeroSection = ({ onExploreClick, onInvestmentClick }: HeroSectionProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const [isHydrated, setIsHydrated] = useState(false);

  const satellites: Satellite[] = [
    { id: 'sat1', name: 'DeFi Protocol', angle: 0, speed: 0.01, radius: 150, color: '#FFD700' },
    { id: 'sat2', name: 'NFT Marketplace', angle: 45, speed: 0.012, radius: 150, color: '#00D4AA' },
    { id: 'sat3', name: 'Gaming Platform', angle: 90, speed: 0.009, radius: 150, color: '#FF6B35' },
    { id: 'sat4', name: 'Lending Protocol', angle: 135, speed: 0.011, radius: 150, color: '#FFD700' },
    { id: 'sat5', name: 'DEX Aggregator', angle: 180, speed: 0.01, radius: 150, color: '#00D4AA' },
    { id: 'sat6', name: 'Staking Platform', angle: 225, speed: 0.013, radius: 150, color: '#FF6B35' },
    { id: 'sat7', name: 'Bridge Protocol', angle: 270, speed: 0.008, radius: 150, color: '#FFD700' },
    { id: 'sat8', name: 'Launchpad', angle: 315, speed: 0.014, radius: 150, color: '#00D4AA' },
  ];

  useEffect(() => setIsHydrated(true), []);

  useEffect(() => {
    if (!isHydrated) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Нарисуем кольца и планеты
      satellites.forEach((sat) => {
        sat.angle += sat.speed;
        const x = centerX + Math.cos(sat.angle) * sat.radius;
        const y = centerY + Math.sin(sat.angle) * sat.radius;

        ctx.strokeStyle = 'rgba(255,215,0,0.2)';
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(x, y);
        ctx.stroke();

        ctx.fillStyle = sat.color;
        ctx.beginPath();
        ctx.arc(x, y, 12, 0, Math.PI * 2);
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isHydrated]);

  if (!isHydrated) return null;

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center bg-background overflow-hidden -mt-40">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" aria-label="Orbiting MGO projects" />

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <h1 className="font-orbitron font-bold text-5xl md:text-7xl text-text-primary mb-6 animate-fade-in">
          Discover the Future of Crypto Ecosystems
        </h1>
        <p className="font-source-sans text-xl md:text-2xl text-text-secondary mb-12 max-w-3xl mx-auto">
          First orbital visualization revealing interconnected blockchain projects with unprecedented transparency
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button onClick={onExploreClick} className="bg-accent hover:bg-accent/90 text-accent-foreground font-rajdhani font-bold text-lg py-4 px-8 rounded-lg shadow-cta">
            Explore Ecosystem
            <Icon name="ArrowRightIcon" size={20} />
          </button>
          <button onClick={onInvestmentClick} className="bg-secondary hover:bg-secondary/80 text-secondary-foreground font-rajdhani font-bold text-lg py-4 px-8 rounded-lg border border-border">
            Investment Opportunities
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
