'use client';

import { useState } from 'react';
import RotatingO from './RotatingO';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-10 flex flex-col items-center justify-center min-h-[45vh] text-center -mt-12">
  <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight text-white">
    Elysium
    <RotatingO />
  </h1>
</header>
  );
}
