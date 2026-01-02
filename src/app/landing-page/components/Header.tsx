'use client';

import RotatingO from './RotatingO';

export default function Header() {
  return (
    <header className="relative z-[9999] bg-red-500">
  <h1 className="text-6xl text-white">
    HEADER TEST
  </h1>
</header>
    <header className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight text-white">
        Elysium
        <RotatingO />
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-neutral-300">
        An open ecosystem for foundation-driven innovation,
        grants, and decentralized opportunity.
      </p>
    </header>
  );
}
