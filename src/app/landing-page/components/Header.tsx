'use client';

import { useState } from 'react';
import RotatingO from './RotatingO';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="relative z-30 w-full pointer-events-none">
        {/* верхняя линия */}
        <div className="flex items-center justify-between px-6 py-4 pointer-events-auto">
          {/* левый логотип (маленький, как якорь бренда) */}
          <div className="flex items-center gap-2">
            <span className="text-lg font-orbitron font-bold text-white">
              Elysium
            </span>
          </div>

          {/* ПРАВОЕ МЕНЮ — ПОЛНАЯ ПОДЛОЖКА */}
          <div
            className="
              hidden md:flex
              items-center
              gap-6
              px-5 py-3
              rounded-2xl
              bg-black/55
              backdrop-blur-lg
              border border-white/15
              text-white
            "
          >
            {/* меню у тебя уже тут рендерится */}
          </div>

          {/* Mobile */}
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

        {/* ЦЕНТРАЛЬНЫЙ БЛОК: Elysium + Rotating O */}
        <div
          className="
            absolute
            top-24
            left-1/2
            -translate-x-1/2
            z-20
            flex
            items-center
            gap-4
            pointer-events-none
          "
        >
          <span className="text-4xl md:text-5xl font-orbitron font-bold text-white">
            Elysium
          </span>

          <div className="scale-[2.2] md:scale-[2.6]">
            <RotatingO />
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
