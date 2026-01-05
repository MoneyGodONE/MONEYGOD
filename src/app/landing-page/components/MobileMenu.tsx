'use client';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <>
      {/* Blur overlay (NO black wall) */}
      <div
        onClick={onClose}
        className={`
          fixed inset-0 z-40
          backdrop-blur-xl
          bg-black/10
          transition-opacity duration-300
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

        {/* Navigation */}
        <nav className="mt-24 flex flex-col gap-6 text-center text-white text-lg">
          <a href="#ecosystem" onClick={onClose}>Ecosystem</a>
          <a href="#investment" onClick={onClose}>Investment</a>
          <a href="#roadmap" onClick={onClose}>Roadmap</a>
          <a href="#security" onClick={onClose}>Security</a>
          <a href="#community" onClick={onClose}>Community</a>
        </nav>
      </aside>
    </>
  );
}
