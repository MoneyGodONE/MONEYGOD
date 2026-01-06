'use client';

export default function PreFooterBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="absolute left-[-30%] w-[160%] h-[2px]
                     bg-gradient-to-r
                     from-transparent
                     via-purple-400/30
                     to-transparent
                     animate-band"
          style={{
            bottom: `${i * 8}%`,
            animationDelay: `${i * 0.8}s`,
          }}
        />
      ))}
    </div>
  );
}
