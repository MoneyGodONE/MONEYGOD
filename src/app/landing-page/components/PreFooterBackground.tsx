'use client';

export default function PreFooterBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="absolute left-[-40%] w-[180%] h-[2px]
                     bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent
                     animate-band"
          style={{
            top: `${i * 10}%`,
            animationDelay: `${i * 0.6}s`,
          }}
        />
      ))}
    </div>
  );
}
