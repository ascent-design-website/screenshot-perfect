import { Gauge, LifeBuoy, Megaphone, PenTool, Search, Smartphone } from "lucide-react";

import { useI18n } from "@/lib/i18n";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const ICONS = [PenTool, Smartphone, Gauge, Search, LifeBuoy, Megaphone];

export function WhyChoose() {
  const { t } = useI18n();
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading title={t.why.title} text={t.why.text} />
        <div className="mt-20 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {t.why.items.map((f, i) => {
            const Icon = ICONS[i] ?? PenTool;
            return (
              <Reveal key={f.title} delay={(i % 3) * 80} className="group card-premium p-8 pt-12 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40">
                <span className="absolute -top-6 left-7 inline-flex size-12 items-center justify-center rounded-2xl border border-hairline bg-background text-primary shadow-glow transition-transform duration-500 group-hover:-translate-y-1">
                  <Icon className="size-5" strokeWidth={1.8} />
                </span>
                <h3 className="text-xl font-semibold tracking-tight">{f.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{f.text}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
