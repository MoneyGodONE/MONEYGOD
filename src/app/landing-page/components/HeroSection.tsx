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
  const [isHydrated, setIsHydrated] = useState(false);
  const animationFrameRef = useRef<number>();

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

  useEffect(() => {
    setIsHydrated(true);
  }, []);

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

      // Draw orbital rings
      ctx.strokeStyle = 'rgba(255, 215, 0, 0.1)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 150, 0, Math.PI * 2);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(centerX, centerY, 200, 0, Math.PI * 2);
      ctx.stroke();

      // Draw center MGO logo circle
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 40);
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

      // Draw and animate satellites
      satellites.forEach((sat) => {
        sat.angle += sat.speed;
        const x = centerX + Math.cos(sat.angle) * sat.radius;
        const y = centerY + Math.sin(sat.angle) * sat.radius;

        // Draw connection line
        ctx.strokeStyle = 'rgba(255, 215, 0, 0.2)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(x, y);
        ctx.stroke();

        // Draw satellite
        ctx.fillStyle = sat.color;
        ctx.beginPath();
        ctx.arc(x, y, 12, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.lineWidth = 2;
        ctx.stroke();
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
      <section className="relative min-h-[70vh] flex items-start justify-center bg-background overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-background" />
        <div className="relative z-10 text-center px-4">
          <div className="w-16 h-16 mx-auto mb-8 rounded-full bg-accent/90 animate-planetFloat shadow-lg shadow-accent/40" />
          <h1 className="font-orbitron font-bold text-5xl md:text-7xl text-text-primary mb-6">
            Loading Ecosystem...
          </h1>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-background" />
      
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        aria-label="Animated orbital visualization of MGO ecosystem projects"
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <h1 className="font-orbitron font-bold text-5xl md:text-7xl text-text-primary mb-6 animate-fade-in">
          Discover the Future of Crypto Ecosystems
        </h1>
        <p className="font-source-sans text-xl md:text-2xl text-text-secondary mb-12 max-w-3xl mx-auto">
          First orbital visualization revealing interconnected blockchain projects with unprecedented transparency
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button
            onClick={onExploreClick}
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-rajdhani font-bold text-lg py-4 px-8 rounded-lg shadow-cta transition-all duration-250 flex items-center justify-center gap-2"
          >
            Explore Ecosystem
            <Icon name="ArrowRightIcon" size={20} />
          </button>
          <button
            onClick={onInvestmentClick}
            className="bg-secondary hover:bg-secondary/80 text-secondary-foreground font-rajdhani font-bold text-lg py-4 px-8 rounded-lg border border-border transition-all duration-250"
          >
            Investment Opportunities
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border">
            <p className="font-orbitron font-bold text-4xl text-accent mb-2">47</p>
            <p className="font-space-mono text-sm text-text-secondary">Total Projects</p>
          </div>
          <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border">
            <p className="font-orbitron font-bold text-4xl text-accent mb-2">$2.3B</p>
            <p className="font-space-mono text-sm text-text-secondary">Combined Market Cap</p>
          </div>
          <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border">
            <p className="font-orbitron font-bold text-4xl text-accent mb-2">156K</p>
            <p className="font-space-mono text-sm text-text-secondary">Active Users</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;