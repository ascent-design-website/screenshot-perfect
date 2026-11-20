import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { WORK } from "./work";

export function Portfolio() {
  return (
    <section id="work" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Featured Work"
            title="Digital Experiences Designed to Make an Impact."
            text="Explore the kind of professional online presence we create for businesses looking to stand out and grow."
          />
          <Reveal className="max-w-xs text-sm leading-relaxed text-muted-foreground lg:text-right">
            The projects below are concept designs created by Ascent Design to show our style and
            quality. Business names are fictional.
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-6">
          {WORK.map((w, i) => (
            <Reveal
              key={w.id}
              delay={(i % 3) * 90}
              as="article"
              className={cn(
                "group",
                i < 2 ? "lg:col-span-3" : "lg:col-span-2",
              )}
            >
              <div className="relative overflow-hidden rounded-2xl border border-hairline bg-navy p-2.5 transition-all duration-500 group-hover:-translate-y-1.5 group-hover:border-primary/40 group-hover:shadow-glow sm:p-3">
                <div className="relative aspect-[3/2] overflow-hidden rounded-xl">
                  <img
                    src={w.src}
                    alt={`Concept website design for ${w.brand} (${w.category})`}
                    width={1536}
                    height={1024}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-top transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                  />
                  <span className="absolute top-3 left-3 rounded-md border border-hairline bg-navy-deep/80 px-2.5 py-1 text-[0.65rem] font-semibold tracking-[0.16em] text-foreground uppercase backdrop-blur-md">
                    Concept Project
                  </span>
                </div>
                <div className="flex items-start justify-between gap-4 px-2 pt-5 pb-2">
                  <div>
                    <p className="eyebrow text-[0.68rem]">{w.category}</p>
                    <h3 className="mt-2 font-display text-2xl">{w.brand}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{w.type}</p>
                  </div>
                  <span
                    className="mt-1 inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-hairline text-muted-foreground transition-all duration-500 group-hover:rotate-45 group-hover:border-primary group-hover:text-primary"
                    aria-hidden="true"
                  >
                    <ArrowUpRight className="size-4" />
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
