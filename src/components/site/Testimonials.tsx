import { Star } from "lucide-react";

import { useI18n } from "@/lib/i18n";
import { TESTIMONIALS } from "@/lib/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

/** Hidden until real, approved testimonials are added to TESTIMONIALS in src/lib/site.ts. */
export function Testimonials() {
  const { t } = useI18n();
  if (TESTIMONIALS.length === 0) return null;

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading title={t.testimonials.title} />
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((item, i) => (
            <Reveal key={item.name} delay={i * 90} as="figure" className="card-premium flex flex-col p-8">
              <div className="flex gap-1 text-primary" aria-label={`${item.rating} ${t.testimonials.outOf}`}>
                {Array.from({ length: item.rating }).map((_, s) => (
                  <Star key={s} className="size-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-6 flex-1 text-lg leading-relaxed">“{item.quote}”</blockquote>
              <figcaption className="mt-8 flex items-center gap-4">
                {item.image ? (
                  <img src={item.image} alt={item.name} className="size-11 rounded-full object-cover" loading="lazy" />
                ) : null}
                <span>
                  <span className="block font-semibold">{item.name}</span>
                  <span className="block text-sm text-muted-foreground">{item.business}</span>
                </span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
