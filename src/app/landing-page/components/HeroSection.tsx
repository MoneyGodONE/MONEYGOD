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
    { id: '2', angle: Math.PI / 2, speed: 0.012, radius: 150, color: '#00D4AA' },
    { id: '3', angle: Math.PI, speed: 0.009, radius: 150, color: '#FF6B35' },
    { id: '4', angle: (3 * Math.PI) / 2, speed: 0.011, radius: 150, color: '#FFD700' },
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

      // ring
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

        {/* === BUTTONS (идеал, без деградации) === */}
        <div className="flex items-center gap-6 mt-10">
  {/* PRIMARY */}
  <button
    onClick={onExploreClick}
    className="
      flex items-center
      min-w-[260px]
      px-8 py-4
      bg-accent
      text-accent-foreground
      font-space-mono
      font-bold
      rounded-xl
      hover:brightness-110
      hover:scale-[1.02]
      transition-all
      duration-200
    "
  >
    <span>Explore Ecosystem</span>
    <span className="ml-auto text-2xl leading-none">→</span>
  </button>

  {/* SECONDARY */}
  <button
    onClick={onInvestmentClick}
    className="
      min-w-[260px]
      px-8 py-4
      rounded-xl
      font-space-mono
      font-bold
      text-text-primary
      bg-white/5
      backdrop-blur-md
      border border-white/10
      hover:bg-accent
      hover:text-accent-foreground
      hover:border-accent/50
      hover:scale-[1.02]
      transition-all
      duration-200
    "
  >
    Investment Opportunities
  </button>
</div>

        {/* === STATS (возвращены, 1:1 со скрином) === */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { value: '47', label: 'Total Projects' },
            { value: '$2.3B', label: 'Combined Market Cap' },
            { value: '156K', label: 'Active Users' },
          ].map((item) => (
            <div
              key={item.label}
              className="
                rounded-2xl
                border border-white/10
                bg-white/5
                backdrop-blur-md
                px-6 py-5
                text-center
              "
            >
              <div className="text-accent text-3xl font-orbitron mb-1">
                {item.value}
              </div>
              <div className="text-text-secondary text-sm font-space-mono">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
