'use client';

import { useEffect } from 'react';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  // Close on ESC
  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  return (
    <>
      {/* Overlay */}
      <div
  onClick={onClose}
  className={`
    fixed inset-0 z-40
    bg-black/20
    backdrop-blur-md
    transition-opacity
    ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}
    md:hidden
  `}
/>

      {/* Slide panel */}
      <aside
        className={`
          fixed top-0 right-0 z-50
          h-full w-[85%] max-w-sm
          bg-gradient-to-b from-[#161836] to-[#0d0f24]
          border-l border-white/10
          transform transition-transform duration-300 ease-out
          ${open ? 'translate-x-0' : 'translate-x-full'}
          md:hidden
        `}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="
            absolute top-5 right-5
            text-yellow-400 text-2xl
            hover:opacity-80
          "
        >
          ✕
        </button>

        {/* Content */}
        <div className="h-full flex flex-col justify-center px-8 text-center">
          <nav className="space-y-8 text-xl font-rajdhani text-white">
            <a href="#ecosystem" onClick={onClose} className="block hover:text-yellow-400">
              Ecosystem
            </a>
            <a href="#investment" onClick={onClose} className="block hover:text-yellow-400">
              Investment
            </a>
            <a href="#roadmap" onClick={onClose} className="block hover:text-yellow-400">
              Roadmap
            </a>
            <a href="#security" onClick={onClose} className="block hover:text-yellow-400">
              Security
            </a>
            <a href="#community" onClick={onClose} className="block hover:text-yellow-400">
              Community
            </a>
          </nav>
        </div>
      </aside>
    </>
  );
}
