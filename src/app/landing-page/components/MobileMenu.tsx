'use client';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <>
      {/* Dark overlay */}
      <div
        onClick={onClose}
        className={`
          fixed inset-0 z-40 bg-black/60
          transition-opacity
          ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
          md:hidden
        `}
      />

      {/* Slide panel */}
      <aside
        className={`
          fixed top-0 right-0 z-50 h-full
          w-[85%] max-w-sm
          bg-[#14162b]
          transform transition-transform duration-300
          ${open ? 'translate-x-0' : 'translate-x-full'}
          md:hidden
        `}
      >
        <div className="p-6 space-y-6 text-center">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-yellow-400 text-xl"
          >
            ✕
          </button>

          <nav className="mt-12 space-y-6 text-lg text-white">
            <a href="#ecosystem" onClick={onClose}>Ecosystem</a>
            <a href="#investment" onClick={onClose}>Investment</a>
            <a href="#roadmap" onClick={onClose}>Roadmap</a>
            <a href="#security" onClick={onClose}>Security</a>
            <a href="#community" onClick={onClose}>Community</a>
          </nav>
        </div>
      </aside>
    </>
  );
}
