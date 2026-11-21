import { useI18n } from "@/lib/i18n";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { WORK } from "./work";

export function Portfolio() {
  const { t } = useI18n();
  const loop = [...WORK, ...WORK];

  return (
    <section id="work" className="relative py-20 sm:py-28">
      <div className="px-5 sm:px-8">
        <SectionHeading title={t.portfolio.title} text={t.portfolio.text} />
      </div>

      <Reveal className="group relative mt-16 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
        <ul className="flex w-max animate-marquee gap-6 group-hover:[animation-play-state:paused]">
          {loop.map((w, i) => {
            const meta = t.portfolio.items[w.id];
            return (
              <li key={`${w.id}-${i}`} aria-hidden={i >= WORK.length} className="w-[300px] shrink-0 sm:w-[460px]">
                <figure className="group/card">
                  <div className="relative overflow-hidden rounded-2xl border border-hairline bg-surface p-2 shadow-mockup transition-all duration-500 group-hover/card:-translate-y-1.5 group-hover/card:border-primary/40">
                    <div className="aspect-[3/2] overflow-hidden rounded-xl">
                      <img
                        src={w.src}
                        alt={`${t.portfolio.concept}: ${w.brand} (${meta.category})`}
                        width={1536}
                        height={1024}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover object-top transition-transform duration-[1200ms] ease-out group-hover/card:scale-[1.05]"
                      />
                    </div>
                    <span className="pill absolute top-4 left-4 bg-background/80 py-0.5 text-[0.7rem] backdrop-blur-md">
                      {t.portfolio.concept}
                    </span>
                  </div>
                  <figcaption className="mt-4 flex items-baseline justify-between gap-3 px-1 font-mono text-xs text-muted-foreground">
                    <span>
                      {meta.category} · <span className="text-foreground">{w.brand}</span>
                    </span>
                    <span className="hidden truncate sm:inline">{meta.type}</span>
                  </figcaption>
                </figure>
              </li>
            );
          })}
        </ul>
      </Reveal>

      <p className="mx-auto mt-10 max-w-xl px-5 text-center text-sm text-muted-foreground">{t.portfolio.note}</p>
    </section>
  );
}
