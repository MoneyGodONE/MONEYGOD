'use client';

import React, { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Satellite {
  id: string;
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
    { id: '1', angle: 0, speed: 0.01, radius: 150, color: '#FFD700' },
    { id: '2', angle: 90, speed: 0.012, radius: 150, color: '#00D4AA' },
    { id: '3', angle: 180, speed: 0.009, radius: 150, color: '#FF6B35' },
    { id: '4', angle: 270, speed: 0.011, radius: 150, color: '#FFD700' },
  ];

  useEffect(() => setIsHydrated(true), []);

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

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      // rings
      ctx.strokeStyle = 'rgba(255,215,0,0.15)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(cx, cy, 150, 0, Math.PI * 2);
      ctx.stroke();

      // center MGO
      const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, 40);
      gradient.addColorStop(0, '#FFD700');
      gradient.addColorStop(1, '#FFA500');

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(cx, cy, 40, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#1A1B3A';
      ctx.font = 'bold 16px Orbitron';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('MGO', cx, cy);

      satellites.forEach((s) => {
        s.angle += s.speed;
        const x = cx + Math.cos(s.angle) * s.radius;
        const y = cy + Math.sin(s.angle) * s.radius;

        ctx.strokeStyle = 'rgba(255,215,0,0.2)';
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(x, y);
        ctx.stroke();

        ctx.fillStyle = s.color;
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI * 2);
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isHydrated]);

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden -mt-40">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <div className="relative z-10 text-center max-w-4xl px-4">
        <h1 className="font-orbitron font-bold text-5xl md:text-7xl mb-6">
          Discover the Future of Crypto Ecosystems
        </h1>
        <p className="text-xl text-text-secondary mb-12">
          First orbital visualization revealing interconnected blockchain projects
        </p>

        <div className="flex gap-4 justify-center">
          <button
            onClick={onExploreClick}
            className="bg-accent text-accent-foreground px-8 py-4 rounded-lg font-bold"
          >
            Explore Ecosystem
            <Icon name="ArrowRightIcon" size={20} />
          </button>
          <button
            onClick={onInvestmentClick}
            className="border border-border px-8 py-4 rounded-lg"
          >
            Investment Opportunities
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
