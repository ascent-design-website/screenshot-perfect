import { PeakLines } from "./Brand";
import { Reveal } from "./Reveal";

export function Statement() {
  return (
    <section className="relative overflow-hidden border-y border-hairline bg-navy py-28 sm:py-36">
      <PeakLines className="absolute top-1/2 right-[-8%] w-[720px] -translate-y-1/2 text-foreground/10" />
      <div className="glow-blue absolute top-0 left-1/3 h-[400px] w-[400px] opacity-60" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow flex items-center gap-3">
            <span className="h-px w-8 bg-pink" aria-hidden="true" />
            Our Philosophy
          </p>
          <h2 className="mt-6 font-display text-5xl leading-[1] text-balance sm:text-7xl lg:text-[6.5rem]">
            Good Design Is More Than{" "}
            <span className="text-gradient-brand">Appearance.</span>
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-16">
          <Reveal delay={100}>
            <p className="text-xl leading-relaxed text-foreground/90 sm:text-2xl">
              Your website is often the first interaction customers have with your business. We
              believe that first impression should communicate trust, quality, and professionalism.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-lg leading-relaxed text-muted-foreground">
              At Ascent Design, we combine thoughtful design, modern development, and strategic
              content to help local businesses build a stronger digital presence.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
