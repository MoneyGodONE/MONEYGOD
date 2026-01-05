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
      min-h-[85vh]
      flex items-center justify-center
      bg-background
      overflow-hidden
    "
  >
    {/* Solana-style gradients */}
    <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-background" />
    <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-background md:hidden" />

    {/* Canvas MUST be inside section */}
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      aria-label="Animated orbital visualization of MGO ecosystem projects"
    />

    {/* Content */}
    <div className="relative z-20 max-w-4xl mx-auto text-center px-4">
      {/* ...твой контент БЕЗ изменений */}
    </div>
  </section>
);
  );
};

export default HeroSection;
