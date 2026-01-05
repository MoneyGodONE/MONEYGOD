'use client';

import { useState } from 'react';
import RotatingO from './RotatingO';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="relative z-10 flex flex-col items-center justify-center min-h-[45vh] text-center -mt-12 hidden md:flex">
        {/* Logo */}
        <h1 className="text-3xl md:text-6xl font-extrabold tracking-tight text-white">
          Elysium
          <RotatingO />
        </h1>

        {/* Burger — ТОЛЬКО MOBILE */}
        <button className="md:hidden">
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden ml-4 text-yellow-400"
          aria-label="Open menu"
        >
          ☰
        </button>
      </header>

      {/* Mobile menu */}
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
