'use client';

import { useState } from 'react';
import RotatingO from './RotatingO';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* HEADER */}
      <header className="relative z-30 flex items-center justify-between px-6 py-4">
        {/* Logo + RotatingO */}
        <div className="flex items-center gap-2">
          <span className="text-xl md:text-2xl font-orbitron font-bold">
            Elysium
          </span>

          {/* Rotating O — и на мобилке тоже */}
          <RotatingO />
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
      </header>

      {/* ⬇️ ВОТ ЗДЕСЬ. ПОСЛЕ HEADER, ПЕРЕД </> */}
      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
}
