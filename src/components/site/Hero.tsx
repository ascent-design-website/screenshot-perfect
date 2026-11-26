import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { buildMailto } from "@/lib/site";
import { Showcase } from "./Portfolio";

export function Hero() {
  const { t } = useI18n();

  return (
    <section id="home" className="relative isolate overflow-hidden pt-44 pb-20 sm:pt-56 sm:pb-28">
      {/* Clean editorial backdrop: fine grid fading out, one soft brand wash */}
      <div
        className="grid-lines absolute inset-x-0 top-0 -z-20 h-[760px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]"
        aria-hidden="true"
      />
      <div className="glow-blue absolute -top-40 left-1/2 -z-20 h-[420px] w-[900px] -translate-x-1/2" aria-hidden="true" />

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
