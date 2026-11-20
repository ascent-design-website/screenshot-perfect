import { Check, X } from "lucide-react";

import { BrandSymbol } from "./Brand";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const BASIC = [
  "Generic templates",
  "Inconsistent branding",
  "Limited mobile optimization",
  "Little content strategy",
  "Outdated presentation",
  "No consistent support",
];
const ASCENT = [
  "Custom-designed experience",
  "Consistent brand identity",
  "Responsive design",
  "SEO-focused content strategy",
  "Professional visual presentation",
  "Ongoing maintenance and support",
];

export function Comparison() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="The Difference"
          title="Your Website Should Work as Hard as You Do."
          align="center"
        />
        <div className="mt-16 grid gap-5 md:grid-cols-2">
          <Reveal className="rounded-3xl border border-hairline p-8 sm:p-10">
            <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
              Basic Online Presence
            </p>
            <ul className="mt-8 space-y-5">
              {BASIC.map((b) => (
                <li key={b} className="flex items-center gap-4 text-muted-foreground">
                  <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-full border border-hairline">
                    <X className="size-3.5" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal
            delay={120}
            className="relative overflow-hidden rounded-3xl border border-primary/40 bg-navy p-8 shadow-glow sm:p-10"
          >
            <BrandSymbol className="absolute -right-8 -bottom-10 w-48 opacity-[0.07]" />
            <p className="eyebrow">The Ascent Approach</p>
            <ul className="relative mt-8 space-y-5">
              {ASCENT.map((a) => (
                <li key={a} className="flex items-center gap-4 text-foreground">
                  <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="size-3.5" strokeWidth={3} />
                  </span>
                  {a}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
