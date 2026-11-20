import { BrandSymbol, PeakLines } from "./Brand";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden border-y border-hairline bg-navy py-24 sm:py-32">
      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2">
        <Reveal className="relative order-last mx-auto aspect-square w-full max-w-md lg:order-first">
          <div className="absolute inset-0 rounded-[2rem] border border-hairline bg-navy-deep" />
          <div className="grid-lines absolute inset-0 rounded-[2rem] opacity-70" aria-hidden="true" />
          <div className="glow-blue absolute inset-[15%]" aria-hidden="true" />
          <div className="glow-pink absolute right-[10%] bottom-[10%] h-1/2 w-1/2" aria-hidden="true" />
          <PeakLines className="absolute inset-[8%] animate-float-slow text-foreground/15" />
          <BrandSymbol className="absolute top-1/2 left-1/2 w-[48%] -translate-x-1/2 -translate-y-1/2" />
          <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[0.65rem] font-semibold tracking-[0.3em] text-muted-foreground uppercase">
            Ascent Design
          </span>
        </Reveal>

        <div>
          <SectionHeading eyebrow="About Ascent Design" title="Creative Thinking. Professional Execution." />
          <Reveal delay={120} className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p className="text-xl text-foreground/90">
              Ascent Design was created with a simple belief: every local business deserves a
              professional digital presence.
            </p>
            <p>
              We help businesses communicate their value through thoughtful website design,
              strategic content, and consistent visual experiences.
            </p>
            <p>
              Our goal is to make professional digital solutions more accessible while maintaining
              the attention to detail and quality your business deserves.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
