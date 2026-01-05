'use client';

import { useState } from 'react';
import RotatingO from './RotatingO';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="relative z-20 flex items-center justify-between px-6 pt-6">
        {/* Logo */}
        <h1 className="font-orbitron text-xl font-bold">
  Elysium
  <span className="hidden md:inline">
    <RotatingO />
  </span>
</h1>

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

      {/* Mobile menu */}
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
