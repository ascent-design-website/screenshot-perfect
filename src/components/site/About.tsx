import { useI18n } from "@/lib/i18n";
import { BrandSymbol, PeakLines } from "./Brand";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function About() {
  const { t } = useI18n();
  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-32">
      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2">
        <Reveal className="card-premium relative order-last mx-auto aspect-square w-full max-w-md overflow-hidden rounded-[2.5rem] lg:order-first">
          <div className="starfield absolute inset-0" aria-hidden="true" />
          <div
            className="horizon absolute top-[58%] left-1/2 aspect-square w-[180%] -translate-x-1/2"
            aria-hidden="true"
          />
          <PeakLines className="absolute inset-x-[10%] top-[8%] animate-float-slow text-foreground/15" />
          <BrandSymbol className="absolute top-[44%] left-1/2 w-[42%] -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_20px_40px_color-mix(in_oklab,var(--blue)_40%,transparent)]" />
        </Reveal>

        <div>
          <SectionHeading title={t.about.title} align="left" />
          <Reveal delay={120} className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p className="text-xl text-foreground/90">{t.about.lead}</p>
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
