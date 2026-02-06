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
  { id: 'sat1', name: 'Infrastructure Layer', angle: 0, speed: 0.01, radius: 150, color: '#FFD700' },
  { id: 'sat2', name: 'Protocol Research', angle: 45, speed: 0.012, radius: 150, color: '#00D4AA' },
  { id: 'sat3', name: 'Innovation Labs', angle: 90, speed: 0.009, radius: 150, color: '#FF6B35' },
  { id: 'sat4', name: 'Network Coordination', angle: 135, speed: 0.011, radius: 150, color: '#FFD700' },
  { id: 'sat5', name: 'Ecosystem Growth', angle: 180, speed: 0.01, radius: 150, color: '#00D4AA' },
  { id: 'sat6', name: 'Community Programs', angle: 225, speed: 0.013, radius: 150, color: '#FF6B35' },
  { id: 'sat7', name: 'Interoperability', angle: 270, speed: 0.008, radius: 150, color: '#FFD700' },
  { id: 'sat8', name: 'Strategic Initiatives', angle: 315, speed: 0.014, radius: 150, color: '#00D4AA' },
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
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />
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
    <section className="
  relative
  min-h-[85vh]
  flex
  items-center
  justify-center
  bg-background
  overflow-hidden
  -mt-40
">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-background" />
      
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        aria-label="Animated orbital visualization of MGO ecosystem projects"
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <h1 className="font-orbitron font-bold text-5xl md:text-7xl text-text-primary mb-6 animate-fade-in">
          A Coordination Layer for Next-Generation Digital Networks
        </h1>
        <p className="font-source-sans text-xl md:text-2xl text-text-secondary mb-12 max-w-3xl mx-auto">
          An evolving foundation supporting infrastructure, research, and community-driven innovation across the decentralized landscape.
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
            View Foundation Initiatives
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border">
            <p className="font-orbitron font-bold text-4xl text-accent mb-2">47</p>
            <p className="font-space-mono text-sm text-text-secondary">Active Initiatives</p>
          </div>
          <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border">
            <p className="font-orbitron font-bold text-4xl text-accent mb-2">$2.3B</p>
            <p className="font-space-mono text-sm text-text-secondary">Research & Infrastructure Scope</p>
          </div>
          <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border">
            <p className="font-orbitron font-bold text-4xl text-accent mb-2">156K</p>
            <p className="font-space-mono text-sm text-text-secondary">Global Participants</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;