import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { buildMailto } from "@/lib/site";
import { Showcase } from "./Portfolio";

export function Hero() {
  const { t } = useI18n();
  const [activePhrase, setActivePhrase] = useState(0);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timer: ReturnType<typeof setInterval> | undefined;
    const start = () => {
      if (timer !== undefined) clearInterval(timer);
      setActivePhrase(0);
      if (!motion.matches) {
        timer = setInterval(() => {
          setActivePhrase((current) => (current + 1) % t.hero.rotatingPhrases.length);
        }, 3000);
      }
    };
    start();
    motion.addEventListener("change", start);
    return () => {
      if (timer !== undefined) clearInterval(timer);
      motion.removeEventListener("change", start);
    };
  }, [t.hero.rotatingPhrases]);

  return (
    <section id="home" className="relative isolate overflow-hidden pt-44 pb-20 sm:pt-56 sm:pb-28">
      {/* Clean editorial backdrop: fine grid fading out, one soft brand wash */}
      <div
        className="grid-lines absolute inset-x-0 top-0 -z-20 h-[760px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]"
        aria-hidden="true"
      />
      <div className="glow-blue absolute -top-40 left-1/2 -z-20 h-[420px] w-[900px] -translate-x-1/2" aria-hidden="true" />

      <div className="mx-auto max-w-[1400px] px-5 text-center sm:px-8">
        <h1 className="mx-auto min-w-0 animate-in font-display text-[2rem] leading-[1.08] tracking-normal text-balance delay-100 duration-1000 fill-mode-both fade-in slide-in-from-bottom-6 min-[480px]:text-[2.5rem] sm:text-[3.25rem] md:text-[4rem] lg:text-[4.75rem] xl:text-[5rem]">
          <span className="sr-only">{t.hero.titleBefore}: {t.hero.rotatingPhrases.join(", ")}.</span>
          <span aria-hidden="true" className="block">{t.hero.titleBefore}</span>
          <span aria-hidden="true" className="grid overflow-hidden py-[0.08em] text-primary">
            {t.hero.rotatingPhrases.map((phrase, index) => (
              <span
                key={phrase}
                data-active={index === activePhrase}
                data-previous={index === (activePhrase - 1 + t.hero.rotatingPhrases.length) % t.hero.rotatingPhrases.length}
                className="col-start-1 row-start-1 min-w-0 translate-y-[0.22em] opacity-0 transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] data-[previous=true]:-translate-y-[0.22em] data-[active=true]:translate-y-0 data-[active=true]:opacity-100 motion-reduce:transform-none motion-reduce:transition-none"
              >
                {phrase}
              </span>
            ))}
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-4xl animate-in text-base leading-relaxed text-balance text-muted-foreground delay-200 duration-1000 fill-mode-both fade-in slide-in-from-bottom-6 sm:text-lg">
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
