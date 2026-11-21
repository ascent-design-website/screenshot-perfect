import { useI18n } from "@/lib/i18n";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Process() {
  const { t } = useI18n();
  return (
    <section id="process" className="relative overflow-hidden py-24 sm:py-32">
      <div className="starfield absolute inset-x-0 top-0 h-[420px] [mask-image:linear-gradient(black,transparent)]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading title={t.process.title} text={t.process.text} />
        <ol className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.process.steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={(i % 3) * 90} className="group card-premium overflow-hidden p-8 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40">
              <div
                className="grid-lines pointer-events-none absolute top-0 right-0 h-40 w-56 [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]"
                aria-hidden="true"
              />
              <div className="relative flex items-start justify-between gap-4">
                <span className="font-display text-5xl text-primary/80 transition-colors duration-500 group-hover:text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="pill">
                  {t.process.step} {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="relative mt-10 text-xl font-semibold tracking-tight">{s.title}</h3>
              <p className="relative mt-3 leading-relaxed text-muted-foreground">{s.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
