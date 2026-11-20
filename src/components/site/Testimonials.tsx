import { Star } from "lucide-react";

import { TESTIMONIALS } from "@/lib/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

/** Hidden until real, approved testimonials are added to TESTIMONIALS in src/lib/site.ts. */
export function Testimonials() {
  if (TESTIMONIALS.length === 0) return null;

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="Testimonials" title="What Our Clients Say." align="center" />
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 90} as="figure" className="surface-card flex flex-col p-8">
              <div className="flex gap-1 text-primary" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star key={s} className="size-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-6 flex-1 text-lg leading-relaxed">“{t.quote}”</blockquote>
              <figcaption className="mt-8 flex items-center gap-4">
                {t.image ? (
                  <img src={t.image} alt={t.name} className="size-11 rounded-full object-cover" loading="lazy" />
                ) : null}
                <span>
                  <span className="block font-semibold">{t.name}</span>
                  <span className="block text-sm text-muted-foreground">{t.business}</span>
                </span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
