'use client';

import RotatingO from './RotatingO';

export default function Header() {
  return (
    <header className="
      relative z-20
      flex flex-col items-center justify-center
      pt-24 pb-12
      text-center
      md:min-h-[45vh]
      md:pt-0
    ">
      <h1 className="
        text-4xl
        sm:text-5xl
        md:text-7xl
        font-extrabold
        tracking-tight
        text-white
      ">
        Elysium <RotatingO />
      </h1>
    </header>
  );
}
