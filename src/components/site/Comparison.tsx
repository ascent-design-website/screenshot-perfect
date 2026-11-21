import { Check, X } from "lucide-react";

import { useI18n } from "@/lib/i18n";
import { Logo } from "./Brand";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Comparison() {
  const { t } = useI18n();
  return (
    <section className="relative px-3 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title={t.comparison.title} />
        <Reveal className="card-premium mt-16 overflow-hidden rounded-[2.5rem] p-4 sm:p-10">
          <div className="glow-blue absolute bottom-0 left-1/2 h-[300px] w-[700px] -translate-x-1/2" aria-hidden="true" />
          <div className="relative mb-6 grid grid-cols-[1fr_auto_1fr] items-center gap-3 px-2 sm:mb-8">
            <p className="text-center text-sm font-semibold text-muted-foreground sm:text-lg">{t.comparison.basicLabel}</p>
            <span className="inline-flex size-11 items-center justify-center rounded-full border border-primary/40 bg-background text-xs font-bold text-primary shadow-glow">
              {t.comparison.vs}
            </span>
            <div className="flex flex-col items-center gap-1">
              <Logo className="scale-90 sm:scale-110" />
              <span className="sr-only">{t.comparison.ascentLabel}</span>
            </div>
          </div>
          <ul className="relative space-y-3">
            {t.comparison.rows.map((r) => (
              <li key={r.basic} className="grid overflow-hidden rounded-2xl border border-hairline sm:grid-cols-2">
                <span className="stripes flex items-center gap-3 px-5 py-4 text-sm text-muted-foreground sm:text-base">
                  <X className="size-4 shrink-0 opacity-70" />
                  {r.basic}
                </span>
                <span className="flex items-center gap-3 border-t border-hairline bg-primary/8 px-5 py-4 text-sm font-medium sm:border-t-0 sm:border-l sm:border-l-primary/50 sm:text-base">
                  <span className="inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="size-3" strokeWidth={3} />
                  </span>
                  {r.ascent}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
