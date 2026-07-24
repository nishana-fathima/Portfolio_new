"use client";

export default function ParticleField() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: 40 }, (_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white"
          style={
            {
              left: `${(i * 2.5) % 100}%`,
              bottom: "-10px",
              width: `${(i % 3) + 1}px`,
              height: `${(i % 3) + 1}px`,
              opacity: 0.1 + (i % 5) * 0.1,
              animation: `particle-drift ${15 + (i % 10) * 2}s ${(i * 0.5) % 20}s linear infinite`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
