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
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
  <span className="text-2xl md:text-3xl font-orbitron font-bold text-white">
    Elysium
  </span>

  <div className="ml-[90px]">
    <div className="scale-[1.6] md:scale-[2]">
      <RotatingO />
    </div>
  </div>
</div>

          {/* ПРАВО: меню с подложкой */}
<div className="hidden md:flex items-center gap-5 px-5 py-3 rounded-xl backdrop-blur-md bg-black/90 border border-white/20 text-white">
  <button className="hover:text-yellow-400 transition">
    Ecosystem
  </button>
  <button className="hover:text-yellow-400 transition">
    Investment
  </button>
  <button className="hover:text-yellow-400 transition">
    Roadmap
  </button>
  <button className="hover:text-yellow-400 transition">
    Security
  </button>
  <button className="hover:text-yellow-400 transition">
    Community
  </button>
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
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
