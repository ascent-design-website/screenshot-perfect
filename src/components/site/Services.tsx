import { ArrowUpRight, Check, Globe, Instagram, Newspaper } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { buildMailto } from "@/lib/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const ICONS = [Globe, Newspaper, Instagram];

export function Services() {
  const { t } = useI18n();
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading title={t.services.title} />
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {t.services.items.map((s, i) => {
            const Icon = ICONS[i] ?? Globe;
            return (
              <Reveal key={s.title} delay={i * 100} as="article" className="group card-premium flex flex-col p-8 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 sm:p-10">
                <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                  <Icon className="size-5" strokeWidth={1.8} />
                </span>
                <h3 className="mt-7 text-2xl font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{s.text}</p>
                <ul className="mt-8 flex-1 space-y-3.5 border-t border-hairline pt-8">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-[0.95rem] text-foreground/90">
                      <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <Check className="size-3" strokeWidth={3} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Button asChild variant="brand" className="mt-9 h-11 self-start px-6">
                  <a href={buildMailto(t.email)}>
                    {t.services.cta}
                    <ArrowUpRight />
                  </a>
                </Button>
              </Reveal>
            );
          })}
        </div>
        <Reveal className="mx-auto mt-10 max-w-2xl text-center text-sm text-muted-foreground">
          {t.services.disclaimer}
        </Reveal>
      </div>
    </section>
  );
}
