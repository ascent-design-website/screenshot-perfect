import { useI18n } from "@/lib/i18n";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Value() {
  const { t } = useI18n();
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading title={t.value.title} />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.value.items.map((v, i) => (
            <Reveal key={v.title} delay={i * 90} className="group card-premium p-8 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40">
              <span className="font-display text-6xl text-foreground/15 transition-colors duration-500 group-hover:text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="mt-6 block h-px w-10 bg-pink transition-all duration-700 group-hover:w-20" aria-hidden="true" />
              <h3 className="mt-6 text-xl font-semibold tracking-tight">{v.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{v.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
