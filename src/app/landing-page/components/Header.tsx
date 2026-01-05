'use client';

import { useState } from 'react';
import RotatingO from './RotatingO';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col md:flex-row items-center md:items-center gap-1 md:gap-2">
        {/* Logo */}
         <div className="flex items-center gap-2">
           <span className="text-xl md:text-2xl font-orbitron font-bold">
  Elysium
  </span>
           </div>
  {/* RotatingO */}
  <div
    className="
      mt-1 md:mt-0
      scale-75 md:scale-100
      origin-top
    "
  >
    <RotatingO />
  </div>
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

      {/* Mobile menu */}
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
