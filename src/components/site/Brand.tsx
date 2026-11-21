import symbol from "@/assets/ascent-symbol.png.asset.json";
import wordmarkDark from "@/assets/ascent-wordmark-dark.png.asset.json";
import wordmarkLight from "@/assets/ascent-wordmark-light.png.asset.json";
import { cn } from "@/lib/utils";

export function Logo({ className, size = "md" }: { className?: string; size?: "md" | "lg" }) {
  const h = size === "lg" ? "h-10" : "h-7";
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <img src={symbol.url} alt="" aria-hidden="true" width={1134} height={980} className={cn(h, "w-auto")} />
      <img
        src={wordmarkLight.url}
        alt="Ascent Design"
        width={1697}
        height={428}
        className={cn(h, "hidden w-auto dark:block")}
      />
      <img
        src={wordmarkDark.url}
        alt="Ascent Design"
        width={1697}
        height={428}
        className={cn(h, "w-auto dark:hidden")}
      />
    </span>
  );
}

export function BrandSymbol({ className }: { className?: string }) {
  return (
    <img
      src={symbol.url}
      alt="Ascent Design symbol"
      width={1134}
      height={980}
      loading="lazy"
      className={className}
    />
  );
}

/** Outline chevrons echoing the Ascent peak — a decorative graphic, not the logo itself. */
export function PeakLines({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 300" fill="none" aria-hidden="true" className={cn("pointer-events-none", className)}>
      <path d="M20 280 L200 30 L380 280" stroke="currentColor" strokeWidth="1" />
      <path d="M70 280 L200 100 L330 280" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      <path d="M120 280 L200 170 L280 280" stroke="currentColor" strokeWidth="1" opacity="0.35" />
      <path d="M60 290 L200 215 L340 290" stroke="var(--pink)" strokeWidth="1.25" opacity="0.7" />
    </svg>
  );
}
