'use client';

import React from 'react';

interface HeroProps {
  onExploreClick: () => void;
  onInvestmentClick: () => void;
}

export default function HeroSection({ onExploreClick, onInvestmentClick }: HeroProps) {
  return (
    <section className="relative flex flex-col items-center justify-center py-24 md:py-48">
      {/* Rotating O и планеты */}
      <div className="relative flex flex-col items-center">
        <h1 className="font-orbitron text-6xl md:text-[96px] text-text-primary leading-[1] md:leading-[1]">
          Rotating O
        </h1>

        {/* Мобильная версия: поднимаем Discover ниже */}
        <h2 className="mt-4 text-3xl md:text-5xl font-bold text-center text-text-primary md:mt-8">
          Discover the Future of Crypto Ecosystems
        </h2>
      </div>

      {/* Кнопки */}
      <div className="mt-12 flex gap-4">
        <button
          onClick={onExploreClick}
          className="px-6 py-3 font-bold rounded-lg bg-accent text-background hover:bg-yellow-500 transition"
        >
          Explore
        </button>
        <button
          onClick={onInvestmentClick}
          className="px-6 py-3 font-bold rounded-lg border-2 border-accent text-accent hover:bg-accent hover:text-background transition"
        >
          Investment
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
