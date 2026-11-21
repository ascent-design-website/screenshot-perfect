import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { buildMailto } from "@/lib/site";
import { Reveal } from "./Reveal";

export function FinalCta() {
  const { t } = useI18n();
  return (
    <section className="relative px-3 pb-24 sm:px-6 sm:pb-32">
      <Reveal className="card-premium relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] px-6 pt-36 pb-20 text-center sm:px-12 sm:pt-44 sm:pb-28">
        <div className="starfield absolute inset-0" aria-hidden="true" />
        <div className="glow-blue absolute -top-24 left-1/2 h-[360px] w-[900px] -translate-x-1/2" aria-hidden="true" />
        <div className="horizon absolute top-[90px] left-1/2 aspect-square w-[1800px] -translate-x-1/2" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl">
          <h2 className="font-display text-4xl leading-[1.06] text-balance sm:text-6xl lg:text-7xl">{t.final.title}</h2>
          <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">{t.final.text}</p>
          <Button asChild variant="brand" size="xl" className="mt-10 h-14 px-9 text-base">
            <a href={buildMailto(t.email)}>
              {t.final.cta}
              <ArrowUpRight />
            </a>
          </Button>
          <p className="mt-6 text-sm text-muted-foreground">{t.final.sub}</p>
        </div>
      </Reveal>
    </section>
  );
}
