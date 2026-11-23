import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { buildMailto } from "@/lib/site";
import { FallingStars } from "./FallingStars";
import { Showcase } from "./Portfolio";

export function Hero() {
  const { t } = useI18n();

  return (
    <section id="home" className="relative isolate overflow-hidden pt-52 pb-20 sm:pt-64 sm:pb-28">
      {/* Night sky, corner glows and the glowing planet horizon */}
      <div className="starfield absolute inset-0 -z-30" aria-hidden="true" />
      <FallingStars className="absolute inset-x-0 top-0 -z-20 h-[640px]" />
      <div className="glow-blue absolute -top-24 -left-40 -z-20 size-[520px]" aria-hidden="true" />
      <div className="glow-blue absolute -top-24 -right-40 -z-20 size-[520px]" aria-hidden="true" />
      <div className="horizon-halo absolute top-0 left-1/2 -z-20 h-[360px] w-[1200px] -translate-x-1/2" aria-hidden="true" />
      <div
        className="horizon absolute top-[96px] left-1/2 -z-10 aspect-square w-[1400px] -translate-x-1/2 sm:top-[118px] sm:w-[2400px]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
        <h1 className="mx-auto max-w-5xl animate-in font-display text-[2.5rem] leading-[1.06] text-balance delay-100 duration-1000 fill-mode-both fade-in slide-in-from-bottom-6 sm:text-6xl lg:text-[4.25rem]">
          {t.hero.titleBefore} <span className="text-primary">{t.hero.titleHighlight}</span>
          {t.hero.titleAfter ? ` ${t.hero.titleAfter}` : ""}
        </h1>
        <p className="mx-auto mt-7 max-w-xl animate-in text-base leading-relaxed text-pretty text-muted-foreground delay-200 duration-1000 fill-mode-both fade-in slide-in-from-bottom-6 sm:text-lg">
          {t.hero.text}
        </p>

        <div className="mt-10 flex animate-in flex-col items-center justify-center gap-3 delay-300 duration-1000 fill-mode-both fade-in slide-in-from-bottom-6 sm:flex-row">
          <Button asChild variant="brand" size="xl" className="h-13 w-full px-7 text-base sm:w-auto">
            <a href={buildMailto(t.email)}>
              {t.hero.cta}
              <ArrowUpRight />
            </a>
          </Button>
          <Button asChild variant="outlineLight" size="xl" className="h-13 w-full px-7 text-base sm:w-auto">
            <a href="#services">{t.hero.secondary}</a>
          </Button>
        </div>
      </div>

      <div className="mt-16 animate-in delay-500 duration-1000 fill-mode-both fade-in slide-in-from-bottom-10 sm:mt-20">
        <Showcase />
      </div>
    </section>
  );
}
