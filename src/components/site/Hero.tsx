import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { buildMailto } from "@/lib/site";

export function Hero() {
  const { t } = useI18n();

  return (
    <section id="home" className="relative isolate overflow-hidden pt-40 pb-16 sm:pt-52 sm:pb-24">
      {/* Night sky + glowing horizon */}
      <div className="starfield absolute inset-0 -z-20" aria-hidden="true" />
      <div className="glow-blue absolute top-0 left-1/2 -z-20 h-[420px] w-[1100px] -translate-x-1/2" aria-hidden="true" />
      <div
        className="horizon absolute top-[150px] left-1/2 -z-10 aspect-square w-[1500px] -translate-x-1/2 sm:top-[160px] sm:w-[2200px]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
        <h1 className="animate-in fade-in slide-in-from-bottom-6 font-display text-[2.6rem] leading-[1.04] text-balance duration-1000 sm:text-6xl lg:text-[5.2rem]">
          {t.hero.titleBefore} <span className="text-gradient-brand">{t.hero.titleHighlight}</span>
          {t.hero.titleAfter ? ` ${t.hero.titleAfter}` : ""}
        </h1>
        <p className="mx-auto mt-8 max-w-2xl animate-in fade-in slide-in-from-bottom-6 text-lg leading-relaxed text-muted-foreground delay-150 duration-1000 fill-mode-both sm:text-xl">
          {t.hero.text}
        </p>

        <div className="mt-11 flex animate-in flex-col justify-center gap-3 fade-in slide-in-from-bottom-6 delay-300 duration-1000 fill-mode-both sm:flex-row">
          <Button asChild variant="brand" size="xl" className="h-14 px-8 text-base">
            <a href={buildMailto(t.email)}>
              {t.hero.cta}
              <ArrowUpRight />
            </a>
          </Button>
          <Button asChild variant="outlineLight" size="xl" className="h-14 px-8 text-base">
            <a href="#services">
              {t.hero.secondary}
              <ArrowRight />
            </a>
          </Button>
        </div>

        <p className="mt-8 flex items-center justify-center gap-3 text-sm text-muted-foreground">
          <span className="size-2 shrink-0 animate-pulse-ring rounded-full bg-pink" aria-hidden="true" />
          {t.hero.statement}
        </p>
      </div>
    </section>
  );
}
