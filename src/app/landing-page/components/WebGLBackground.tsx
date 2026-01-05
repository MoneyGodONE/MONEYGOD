'use client';

import React, { useRef, useEffect } from 'react';

export default function WebGLBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl');
    if (!gl) return;

    // Здесь можно инициализировать планеты и орбиты
    // Простая имитация вращения орбит с кружочком MGO
    const planets = [
      { radius: 60, speed: 0.01, angle: 0 },
      { radius: 100, speed: 0.007, angle: Math.PI / 2 },
      { radius: 140, speed: 0.004, angle: Math.PI }
    ];

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Орбиты
      planets.forEach(p => {
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
        ctx.lineWidth = 1;
        ctx.arc(centerX, centerY, p.radius, 0, Math.PI * 2);
        ctx.stroke();
      });

      // Планеты + кружочек MGO
      planets.forEach((p, i) => {
        p.angle += p.speed;
        const x = centerX + p.radius * Math.cos(p.angle);
        const y = centerY + p.radius * Math.sin(p.angle);

        // Планета
        ctx.beginPath();
        ctx.fillStyle = ['#facc15', '#60a5fa', '#f472b6'][i];
        ctx.arc(x, y, 12, 0, Math.PI * 2);
        ctx.fill();

        // Кружочек MGO только для первой планеты
        if (i === 0) {
          ctx.beginPath();
          ctx.fillStyle = '#fbbf24';
          ctx.arc(x, y, 20, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = '#000';
          ctx.font = 'bold 14px Arial';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText('MGO', x, y);
        }
      });

      requestAnimationFrame(draw);
    }

    draw();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Desktop WebGL */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 -z-10 pointer-events-none hidden md:block"
      />

      {/* Mobile fallback: простые линии */}
      <div className="fixed inset-x-0 top-0 z-0 md:hidden h-[2px] bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent" />
      <div className="fixed inset-x-0 bottom-0 z-0 md:hidden h-[2px] bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent" />
    </>
  );
}
