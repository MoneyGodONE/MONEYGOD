'use client';

import { useState } from 'react';
import RotatingO from './RotatingO';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header
        className="
          absolute
          top-6
          left-1/2
          -translate-x-1/2
          z-30
          flex
          items-center
          justify-center
          px-6
          py-4
        "
      >
        {/* подложка для читаемости */}
        <div
          className="
            absolute
            inset-0
            -z-10
            rounded-2xl
            backdrop-blur-md
            bg-black/45
            border
            border-white/10
          "
        />

        {/* бренд по центру */}
        <div className="flex items-center gap-3">
          <span className="text-4xl md:text-6xl font-orbitron font-bold text-white">
            Elysium
          </span>

          <div className="scale-150 md:scale-175">
            <RotatingO />
          </div>
        </div>

        {/* mobile menu */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden absolute right-4 p-2"
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
