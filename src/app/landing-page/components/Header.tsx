'use client';

import { useState } from 'react';
import RotatingO from './RotatingO';
import MobileMenu from './MobileMenu';
import MGOOrbital from './MGOOrbital'; // ← ЭТО ОРБИТЫ С ПЛАНЕТАМИ

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="relative z-30 w-full">
        {/* ===== MGO ORBITAL — СВЕРХУ СЛЕВА ===== */}
        <div className="absolute top-4 left-4 z-10 pointer-events-none scale-[0.8]">
          <MGOOrbital />
        </div>

        {/* ===== ВЕРХНЯЯ ПОЛОСА ===== */}
        <div className="flex items-center justify-between px-6 py-4">
          <span className="text-xl md:text-2xl font-orbitron font-bold text-white">
            Elysium
          </span>

          {/* ПРАВОЕ МЕНЮ С НОРМАЛЬНОЙ ПОДЛОЖКОЙ */}
          <div
            className="
              hidden md:flex
              items-center gap-6
              px-5 py-3
              rounded-2xl
              backdrop-blur-md
              bg-black/45
              border border-white/15
            "
          >
            {/* пункты меню */}
          </div>

          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden p-2"
            aria-label="Open menu"
          >
            <span className="block w-6 h-[2px] bg-white mb-1" />
            <span className="block w-6 h-[2px] bg-white mb-1" />
            <span className="block w-6 h-[2px] bg-white" />
          </button>
        </div>

        {/* ===== ЦЕНТРАЛЬНЫЙ ЗАГОЛОВОК: Elysium + Rotating O ===== */}
        <div className="flex justify-center mt-10">
          <h1 className="flex items-center gap-3 font-orbitron font-bold text-white text-5xl md:text-6xl">
            Elysium
            <RotatingO />
          </h1>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
