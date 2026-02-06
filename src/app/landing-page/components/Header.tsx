'use client';

import { useState } from 'react';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="relative z-30 w-full">
        <div className="flex items-center justify-between px-6 py-4">
          {/* Logo слева — КАК БЫЛО */}
          <span className="text-xl md:text-2xl font-orbitron font-bold text-white">
            Elysium
          </span>

          {/* Правое меню с подложкой */}
          <div
            className="
              hidden md:flex
              items-center gap-6
              px-4 py-2
              rounded-xl
              backdrop-blur-md
              bg-black/45
              border border-white/10
            "
          >
            {/* твои пункты меню */}
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
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
