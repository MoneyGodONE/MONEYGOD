'use client';

import React, { useEffect, useRef } from 'react';

interface Planet {
  radius: number;
  distance: number;
  speed: number;
  color: string;
  angle: number;
}

export default function WebGLBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const planets: Planet[] = [
    { radius: 10, distance: 80, speed: 0.02, color: 'yellow', angle: 0 },
    { radius: 8, distance: 140, speed: 0.015, color: 'blue', angle: 0 },
    { radius: 6, distance: 200, speed: 0.01, color: 'red', angle: 0 },
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Рисуем кружочек MGO в центре
      ctx.beginPath();
      ctx.arc(centerX, centerY, 40, 0, Math.PI * 2);
      ctx.fillStyle = 'yellow';
      ctx.fill();
      ctx.font = 'bold 24px Orbitron';
      ctx.fillStyle = 'black';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('MGO', centerX, centerY);

      // Рисуем планеты с орбитами
      planets.forEach((planet) => {
        planet.angle += planet.speed;

        const x = centerX + planet.distance * Math.cos(planet.angle);
        const y = centerY + planet.distance * Math.sin(planet.angle);

        // Орбита
        ctx.beginPath();
        ctx.arc(centerX, centerY, planet.distance, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(255,255,255,0.1)';
        ctx.stroke();

        // Планета
        ctx.beginPath();
        ctx.arc(x, y, planet.radius, 0, Math.PI * 2);
        ctx.fillStyle = planet.color;
        ctx.fill();
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
      <canvas
        ref={canvasRef}
        className="fixed inset-0 -z-10 pointer-events-none"
      />
      {/* Solana полосы */}
      <div className="fixed inset-x-0 top-0 z-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent" />
      <div className="fixed inset-x-0 bottom-0 z-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent" />
    </>
  );
}
