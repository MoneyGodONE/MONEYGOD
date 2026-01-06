'use client';

import React, { useEffect, useRef } from 'react';

export default function WebGLBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const planets = [
      { radius: 6, distance: 50, angle: 0, speed: 0.02, color: '#facc15' },
      { radius: 4, distance: 80, angle: 1.5, speed: 0.015, color: '#34d399' },
      { radius: 5, distance: 110, angle: 3, speed: 0.01, color: '#60a5fa' },
    ];

    let animationFrameId: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Орбиты
      planets.forEach(p => {
        ctx.beginPath();
        ctx.arc(centerX, centerY, p.distance, 0, 2 * Math.PI);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.stroke();
      });

      // Планеты
      planets.forEach(p => {
        p.angle += p.speed;
        const x = centerX + p.distance * Math.cos(p.angle);
        const y = centerY + p.distance * Math.sin(p.angle);
        ctx.beginPath();
        ctx.arc(x, y, p.radius, 0, 2 * Math.PI);
        ctx.fillStyle = p.color;
        ctx.fill();
      });

      // Центр MGO
      ctx.beginPath();
      ctx.arc(centerX, centerY, 20, 0, 2 * Math.PI);
      ctx.fillStyle = '#facc15';
      ctx.fill();

      ctx.font = 'bold 14px Arial';
      ctx.fillStyle = '#000';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('MGO', centerX, centerY);

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 -z-10 pointer-events-none"
      />

      {/* Solana-полосы сверху и снизу */}
      <div className="fixed inset-x-0 top-0 z-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent" />
      <div className="fixed inset-x-0 bottom-0 z-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent" />
    </>
  );
}
