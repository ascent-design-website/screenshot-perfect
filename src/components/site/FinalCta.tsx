import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PRIMARY_CTA, buildMailto } from "@/lib/site";
import { PeakLines } from "./Brand";
import { Reveal } from "./Reveal";

export function FinalCta() {
  return (
    <section className="relative px-3 pb-24 sm:px-5 sm:pb-32">
      <Reveal className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-hairline bg-navy px-6 py-20 text-center sm:px-12 sm:py-28">
        <div className="glow-blue absolute -top-1/3 -left-[10%] h-[560px] w-[560px]" aria-hidden="true" />
        <div className="glow-pink absolute -right-[10%] -bottom-1/3 h-[520px] w-[520px]" aria-hidden="true" />
        <div className="grid-lines absolute inset-0 opacity-60" aria-hidden="true" />
        <PeakLines className="absolute bottom-0 left-1/2 w-[900px] max-w-none -translate-x-1/2 translate-y-1/3 text-foreground/10" />
        <div className="relative mx-auto max-w-3xl">
          <p className="eyebrow">Let's Talk</p>
          <h2 className="mt-6 font-display text-5xl leading-[1.02] text-balance sm:text-6xl lg:text-7xl">
            Ready to Elevate Your Business Online?
          </h2>
          <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Let's build a professional digital presence that reflects the quality of your business
            and helps you stand out.
          </p>
          <Button asChild variant="brand" size="xl" className="mt-10 h-14 px-9 text-base">
            <a href={buildMailto()}>
              {PRIMARY_CTA}
              <ArrowUpRight />
            </a>
          </Button>
          <p className="mt-6 text-sm text-muted-foreground">Let's start building something great.</p>
        </div>
      </Reveal>
    </section>
  );
}
