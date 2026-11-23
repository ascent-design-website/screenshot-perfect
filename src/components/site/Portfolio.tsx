import { useI18n } from "@/lib/i18n";
import { WORK } from "./work";

/** Endless strip of concept-project mockups. Rendered at the bottom of the hero, like a live showcase. */
export function Showcase() {
  const { t } = useI18n();
  const loop = [...WORK, ...WORK];

  return (
    <div id="work" aria-label={t.portfolio.title} role="region">
      <div className="group relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
        <ul className="flex w-max animate-marquee gap-5 py-3 group-hover:[animation-play-state:paused] sm:gap-6">
          {loop.map((w, i) => {
            const meta = t.portfolio.items[w.id];
            return (
              <li key={`${w.id}-${i}`} aria-hidden={i >= WORK.length} className="w-[280px] shrink-0 sm:w-[440px]">
                <figure className="group/card">
                  <div className="relative overflow-hidden rounded-2xl border border-hairline bg-surface/70 p-1.5 shadow-mockup backdrop-blur transition-all duration-500 group-hover/card:-translate-y-1.5 group-hover/card:border-primary/50">
                    <div className="aspect-[3/2] overflow-hidden rounded-xl">
                      <img
                        src={w.src}
                        alt={`${t.portfolio.concept}: ${w.brand} (${meta.category})`}
                        width={1536}
                        height={1024}
                        loading={i < 3 ? "eager" : "lazy"}
                        decoding="async"
                        className="h-full w-full object-cover object-top transition-transform duration-[1200ms] ease-out group-hover/card:scale-[1.05]"
                      />
                    </div>
                    <span className="pill absolute top-3.5 left-3.5 bg-background/80 py-0.5 text-[0.7rem] backdrop-blur-md">
                      {t.portfolio.concept}
                    </span>
                  </div>
                  <figcaption className="mt-3.5 flex items-baseline gap-2 px-1 text-left font-mono text-xs text-muted-foreground">
                    {meta.category} · <span className="text-foreground">{w.brand}</span>
                  </figcaption>
                </figure>
              </li>
            );
          })}
        </ul>
      </div>
      <p className="mx-auto mt-8 max-w-xl px-5 text-center text-xs text-muted-foreground">{t.portfolio.note}</p>
    </div>
  );
}
