'use client';

import React, { useEffect, useRef } from 'react';

export default function WebGLBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl');
    if (!gl) return;

    // Тут вставьте ваш код WebGL для вращающихся планет
    // Простая демонстрация: очищаем канвас каждый кадр
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    // TODO: добавить планеты и орбиты, кружочек MGO

  }, []);

  return (
    <>
      {/* Desktop WebGL */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 -z-10 pointer-events-none md:block"
      />

      {/* Solana полосы */}
      <div className="fixed inset-x-0 top-0 z-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent" />
      <div className="fixed inset-x-0 bottom-0 z-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent" />

      {/* Mobile fallback */}
      <div className="fixed inset-x-0 top-0 z-0 h-[2px] md:hidden bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent" />
      <div className="fixed inset-x-0 bottom-0 z-0 h-[2px] md:hidden bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent" />
    </>
  );
}
