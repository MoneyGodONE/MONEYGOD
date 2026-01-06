'use client';

import Link from 'next/link';

export default function TopLeftOrgSwitch() {
  return (
    <div className="fixed top-6 left-6 z-50 flex items-center gap-4">
      {/* Logo */}
      <div className="flex items-center gap-1 font-orbitron text-lg font-bold select-none">
        <span className="text-white">Elysium</span>
        <span className="text-yellow-400 drop-shadow-[0_0_6px_rgba(250,204,21,0.6)]">
          O
        </span>
      </div>

      {/* Divider */}
      <span className="text-neutral-500">|</span>

      {/* Links */}
      <div className="flex items-center gap-3 text-sm font-medium">
        <Link
          href="https://MoneyGod.ORG"
          target="_blank"
          className="
            px-4 py-1.5 rounded-full
            bg-yellow-400/90 text-black
            shadow-md shadow-yellow-400/30
            hover:bg-yellow-400 hover:shadow-yellow-400/60
            transition-all
          "
        >
          Foundation
        </Link>

        <Link
          href="https://MoneyGod.ONE"
          target="_blank"
          className="
  px-4 py-2
  rounded-full
  font-space-mono
  font-bold
  text-text-primary
  bg-white/5
  hover:bg-accent
  hover:text-accent-foreground
  transition-all
  duration-200
"
        >
          Corporation
        </Link>
      </div>
    </div>
  );
}
