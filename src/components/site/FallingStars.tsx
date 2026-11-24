import type { CSSProperties } from "react";

import { cn } from "@/lib/utils";

type Star = { left: number; size: number; duration: number; delay: number; drift: number; distance: number; peak: number };

/** Deterministic pseudo-random so server and browser render identical stars (no hydration mismatch). */
function seeded(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

const rand = seeded(42);
const STARS: Star[] = Array.from({ length: 46 }, () => {
  const duration = 7 + rand() * 9;
  return {
    left: rand() * 100,
    size: rand() < 0.2 ? 2 : rand() < 0.6 ? 1.5 : 1,
    duration,
    delay: -rand() * duration,
    drift: (rand() - 0.5) * 60,
    distance: 360 + rand() * 280,
    peak: 0.35 + rand() * 0.6,
  };
});

/** White dots drifting down behind the hero planet, like stars passing in space. */
export function FallingStars({ className }: { className?: string }) {
  return (
    <div className={cn("falling-stars pointer-events-none overflow-hidden", className)} aria-hidden="true">
      {STARS.map((s, i) => (
        <span
          key={i}
          className="falling-star"
          style={
            {
              left: `${s.left}%`,
              width: `${s.size}px`,
              height: `${s.size}px`,
              "--duration": `${s.duration}s`,
              "--delay": `${s.delay}s`,
              "--drift": `${s.drift}px`,
              "--distance": `${s.distance}px`,
              "--peak": s.peak,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
