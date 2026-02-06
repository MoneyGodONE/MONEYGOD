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
  const animationFrameRef = useRef<number>();
  const [isHydrated, setIsHydrated] = useState(false);

  const satellites: Satellite[] = [
    { id: 'sat1', name: 'Infrastructure', angle: 0, speed: 0.01, radius: 150, color: '#FFD700' },
    { id: 'sat2', name: 'Research', angle: 45, speed: 0.012, radius: 150, color: '#00D4AA' },
    { id: 'sat3', name: 'Innovation', angle: 90, speed: 0.009, radius: 150, color: '#FF6B35' },
    { id: 'sat4', name: 'Coordination', angle: 135, speed: 0.011, radius: 150, color: '#FFD700' },
  ];

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      const rect = canvas.getBoundingClientRect();

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2 / window.devicePixelRatio;
      const centerY = canvas.height / 2 / window.devicePixelRatio;

      // Orbit ring
      ctx.strokeStyle = 'rgba(255,255,255,0.08)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 150, 0, Math.PI * 2);
      ctx.stroke();

      // Center node
      const grad = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 40);
      grad.addColorStop(0, '#FFD700');
      grad.addColorStop(1, '#FF9900');

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 40, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#0F1020';
      ctx.font = 'bold 16px Orbitron';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('MGO', centerX, centerY);

      satellites.forEach((sat) => {
        sat.angle += sat.speed;
        const x = centerX + Math.cos(sat.angle) * sat.radius;
        const y = centerY + Math.sin(sat.angle) * sat.radius;

        ctx.strokeStyle = 'rgba(255,255,255,0.12)';
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(x, y);
        ctx.stroke();

        ctx.fillStyle = sat.color;
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [isHydrated]);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [isHydrated]);

  return (
    <section
      className="
        relative
        min-h-[85vh]
        flex
        items-center
        justify-center
        overflow-hidden
        -mt-32
      "
    >
      {/* мягкий градиент, НЕ перекрывает WebGL */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-transparent to-background/80" />

      {/* локальный 2D canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-[2] pointer-events-none"
      />

      {/* контент */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <h1 className="font-orbitron font-bold text-5xl md:text-7xl text-text-primary mb-6">
          A Coordination Layer for Digital Networks
        </h1>

        <p className="font-source-sans text-xl md:text-2xl text-text-secondary mb-12">
          Infrastructure, research and ecosystem growth — aligned.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onExploreClick}
            className="bg-accent text-accent-foreground font-rajdhani font-bold py-4 px-8 rounded-lg flex items-center gap-2"
          >
            Explore Ecosystem
            <Icon name="ArrowRightIcon" size={20} />
          </button>

          <button
  onClick={onInvestmentClick}
  className="
    bg-black/80
    hover:bg-black
    text-white
    font-rajdhani
    font-bold
    text-lg
    py-4 px-8
    rounded-lg
    backdrop-blur-sm
    border border-white/20
    transition-all
  "
>
  View Initiatives
</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
