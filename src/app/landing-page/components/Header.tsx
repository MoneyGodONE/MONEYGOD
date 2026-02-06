'use client';

import { useState } from 'react';
import RotatingO from './RotatingO';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="relative z-30 w-full">
        {/* верхняя строка */}
        <div className="relative flex items-center justify-between px-6 py-4">
          {/* ЛЕВО: пусто (чтобы центр был реально центром) */}
          <div className="w-1/3" />

          {/* ЦЕНТР: Elysium + Rotating O */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-3">
            <span className="text-2xl md:text-3xl font-orbitron font-bold text-white">
              Elysium
            </span>

            <div className="scale-[1.6] md:scale-[2] translate-x-[13px]">
              <RotatingO />
            </div>
          </div>

          {/* ПРАВО: меню с подложкой */}
          <div className="w-1/3 flex justify-end">
            <div
              className="
                hidden md:flex
                items-center gap-6
                px-4 py-2
                rounded-xl
                backdrop-blur-md
                bg-black/50
                border border-white/15
                text-white
              "
            >
              {/* здесь твои пункты меню */}
            </div>

            {/* Mobile */}
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
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
