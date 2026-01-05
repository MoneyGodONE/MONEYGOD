'use client';

import { useEffect, useRef, useState } from 'react';

export default function WebGLBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl');
    // Если WebGL не поддерживается — просто вернём canvas пустым
    if (!gl) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    resize();
    window.addEventListener('resize', resize);

    // Простейшая анимация планет — placeholder
    let angle = 0;
    const animate = () => {
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      angle += 0.01;
      animationRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <>
      {/* Canvas для всех устройств */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 -z-10 pointer-events-none"
      />

      {/* Solana линии сверху и снизу */}
      <div className="fixed inset-x-0 top-0 z-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent" />
      <div className="fixed inset-x-0 bottom-0 z-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent" />
    </>
  );
}
