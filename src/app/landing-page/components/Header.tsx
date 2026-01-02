'use client';

import RotatingO from './RotatingO';

export default function Header() {
  return (
    <header className="relative z-10 flex flex-col items-center justify-center min-h-[45vh] text-center">
  <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight text-white">
    Elysium
    <RotatingO />
  </h1>
</header>
  );
}
