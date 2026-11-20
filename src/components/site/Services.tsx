import { Check, Globe, Instagram, Newspaper } from "lucide-react";

import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const SERVICES = [
  {
    icon: Globe,
    title: "Website Design & Development",
    text: "Professional websites built to communicate credibility, showcase your services, and turn visitors into potential customers.",
    features: [
      "Custom website design",
      "Responsive development",
      "Brand-aligned visual identity",
      "User-friendly navigation",
      "Performance optimization",
      "Basic on-page SEO setup",
    ],
  },
  {
    icon: Newspaper,
    title: "SEO & Blog Content",
    text: "Consistent, strategic blog content that helps your business build topical relevance and strengthen its organic search presence.",
    features: [
      "SEO-focused blog articles",
      "Relevant keyword targeting",
      "Search-friendly structure",
      "Strategic content planning",
      "Consistent publishing",
    ],
  },
  {
    icon: Instagram,
    title: "Social Media Content",
    text: "Professional social media content that keeps your brand visually consistent and engaging.",
    features: [
      "Instagram content creation",
      "TikTok content creation where included in the selected plan",
      "Professional visual design",
      "Carousel content",
      "Consistent brand presentation",
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Services"
          title="Everything Your Business Needs to Grow Online."
          align="center"
        />
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal
              key={s.title}
              delay={i * 100}
              as="article"
              className={cn(
                "group surface-card relative flex flex-col overflow-hidden p-8 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 sm:p-10",
              )}
            >
              <span
                className="absolute inset-x-0 top-0 h-px bg-gradient-brand opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden="true"
              />
              <span className="font-display text-sm text-muted-foreground/60">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="mt-6 inline-flex size-14 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                <s.icon className="size-6" strokeWidth={1.6} />
              </span>
              <h3 className="mt-8 font-display text-3xl leading-tight">{s.title}</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">{s.text}</p>
              <ul className="mt-8 space-y-3 border-t border-hairline pt-8">
                {s.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-foreground/90">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
        <Reveal className="mx-auto mt-10 max-w-2xl text-center text-sm text-muted-foreground">
          SEO content is designed to support your organic visibility. We never promise guaranteed
          rankings or specific traffic results.
        </Reveal>
      </div>
    </section>
  );
}
