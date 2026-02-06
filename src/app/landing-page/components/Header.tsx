'use client';

import { useState } from 'react';
import RotatingO from './RotatingO';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="relative z-30 w-full">
        {/* TOP BAR */}
        <div className="flex items-center justify-between px-6 py-4">
          {/* пусто слева — якорь оставляем Hero */}
          <div />
        </div>

        {/* ЦЕНТРАЛЬНЫЙ БРЕНД-БЛОК */}
        <div
          className="
            absolute
            top-24
            left-1/2
            -translate-x-1/2
            z-40
            flex
            items-center
            gap-6
            pointer-events-none
          "
        >
          {/* Elysium */}
          <span className="text-5xl md:text-6xl font-orbitron font-bold text-white">
            Elysium
          </span>

          {/* Rotating O / ONE — СПРАВА */}
          <div className="scale-[2.8] md:scale-[3.2]">
            <RotatingO />
          </div>
        </div>

        {/* RIGHT MENU — ПОЛНАЯ ПОДЛОЖКА */}
        <div
          className="
            fixed
            top-6
            right-6
            z-40
            hidden md:flex
            flex-col
            gap-3
            px-5 py-4
            rounded-2xl
            bg-black/60
            backdrop-blur-xl
            border border-white/20
            text-white
          "
        >
          {/* меню у тебя уже внутри */}
        </div>

        {/* MOBILE */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden fixed top-6 right-6 z-50 p-2"
          aria-label="Open menu"
        >
          <span className="block w-6 h-[2px] bg-white mb-1" />
          <span className="block w-6 h-[2px] bg-white mb-1" />
          <span className="block w-6 h-[2px] bg-white" />
        </button>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
