'use client';

import React from 'react';

interface HeroProps {
  onExploreClick: () => void;
  onInvestmentClick: () => void;
}

export default function HeroSection({ onExploreClick, onInvestmentClick }: HeroProps) {
  return (
    <section className="relative flex flex-col items-center justify-center py-24 md:py-48">
      {/* Заголовок + вращение планет через Canvas */}
      <div className="relative flex flex-col items-center">
        {/* Canvas с планетами */}
        <div className="w-[240px] h-[240px] md:w-[360px] md:h-[360px] relative mb-6">
          {/* WebGLBackground рендерит canvas с планетами и MGO */}
        </div>

        {/* Основной заголовок */}
        <h1 className="font-orbitron text-4xl md:text-[64px] text-text-primary leading-tight text-center">
          Discover the Future of Crypto Ecosystems
        </h1>

        {/* Подзаголовок */}
        <p className="mt-4 text-lg md:text-2xl text-text-secondary text-center max-w-2xl">
          First Orbital Visualisation revealing interconnected blockchain projects
        </p>
      </div>

      {/* Кнопки */}
      <div className="mt-12 flex gap-4 flex-wrap justify-center">
        <button
          onClick={onExploreClick}
          className="px-6 py-3 font-bold rounded-lg bg-accent text-background hover:bg-yellow-500 transition"
        >
          Explore Ecosystem
        </button>
        <button
          onClick={onInvestmentClick}
          className="px-6 py-3 font-bold rounded-lg border-2 border-accent text-accent hover:bg-accent hover:text-background transition"
        >
          Investment Opportunities
        </button>
      </div>

      {/* Мобильное меню под логотипом */}
      <div className="mt-6 flex md:hidden gap-4 justify-start w-full max-w-xs">
        {/* Ecosystem, Investment, Roadmap, Security, Community */}
      </div>
    </section>
  );
}
