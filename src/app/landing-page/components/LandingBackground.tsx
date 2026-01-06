'use client';

export default function LandingBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {[...Array(14)].map((_, i) => (
        <div
          key={i}
          className="absolute left-[-40%] w-[180%] h-[2px]
                     bg-gradient-to-r
                     from-transparent
                     via-emerald-400/40
                     to-transparent
                     animate-band"
          style={{
            top: `${i * 7}%`,
            animationDelay: `${i * 0.6}s`,
          }}
        />
      ))}
    </div>
  );
}
