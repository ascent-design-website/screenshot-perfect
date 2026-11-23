import { useI18n } from "@/lib/i18n";
import { PeakLines } from "./Brand";
import { Reveal } from "./Reveal";

export function Statement() {
  const { t } = useI18n();
  return (
    <section className="px-3 py-10 sm:px-6 sm:py-16">
      <Reveal className="card-premium relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] px-6 py-24 text-center sm:px-16 sm:py-32">
        <div className="starfield absolute inset-0" aria-hidden="true" />
        <div className="glow-blue absolute top-1/2 left-1/2 h-[520px] w-[900px] -translate-x-1/2 -translate-y-1/2" aria-hidden="true" />
        <PeakLines className="absolute bottom-0 left-1/2 w-[760px] max-w-none -translate-x-1/2 translate-y-1/3 text-primary/20" />
        <div className="relative mx-auto max-w-4xl">
          <h2 className="font-display text-4xl leading-[1.06] text-balance sm:text-6xl lg:text-7xl">
            {t.statement.titleBefore} <span className="text-primary">{t.statement.titleHighlight}</span>
          </h2>
          <p className="mx-auto mt-9 max-w-3xl text-xl leading-relaxed text-foreground/85 sm:text-2xl">
            {t.statement.p1}
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{t.statement.p2}</p>
        </div>
      </Reveal>
    </section>
  );
}
