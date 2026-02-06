'use client';

import { useState } from 'react';
import RotatingO from './RotatingO';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* HEADER */}
      <header className="relative z-30 w-full">
        {/* верхняя строка */}
        <div className="flex items-center justify-between px-6 py-4">
          {/* Logo слева — КАК БЫЛО */}
          <div className="flex items-center gap-2">
            <span className="text-xl md:text-2xl font-orbitron font-bold text-white">
              Elysium
            </span>
          </div>

          {/* Правое меню с подложкой */}
          <div
            className="
              hidden md:flex
              items-center
              gap-6
              px-4 py-2
              rounded-xl
              backdrop-blur-md
              bg-black/45
              border border-white/10
            "
          >
            {/* сюда у тебя уже рендерится меню (Ecosystem и т.д.) */}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden relative z-50 p-2"
            aria-label="Open menu"
          >
            <span className="block w-6 h-[2px] bg-white mb-1" />
            <span className="block w-6 h-[2px] bg-white mb-1" />
            <span className="block w-6 h-[2px] bg-white" />
          </button>
        </div>

        {/* Rotating O — ПО ЦЕНТРУ, БОЛЬШОЙ, ПОВЕРХ HERO */}
        <div
          className="
            pointer-events-none
            absolute
            top-20
            left-1/2
            -translate-x-1/2
            z-20
            scale-[2]
            md:scale-[2.5]
          "
        >
          <RotatingO />
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
