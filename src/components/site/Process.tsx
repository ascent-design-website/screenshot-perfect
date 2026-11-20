import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const STEPS = [
  {
    title: "Discovery",
    text: "We learn about your business, goals, services, audience, and visual preferences.",
  },
  {
    title: "Strategy & Direction",
    text: "We define the website structure, visual direction, content, and overall experience.",
  },
  {
    title: "Design & Development",
    text: "We transform the strategy into a professional, responsive website tailored to your business.",
  },
  {
    title: "Review & Refinement",
    text: "You review the website and share feedback so we can refine the final experience.",
  },
  {
    title: "Launch",
    text: "After approval, we prepare your website for launch and complete the final quality checks.",
  },
  {
    title: "Ongoing Support",
    text: "We continue supporting your digital presence through the maintenance and content services included in your selected plan.",
  },
];

export function Process() {
  return (
    <section id="process" className="relative overflow-hidden border-y border-hairline bg-navy py-24 sm:py-32">
      <div className="glow-pink absolute top-1/3 right-[-10%] h-[420px] w-[420px] opacity-70" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            eyebrow="Our Process"
            title="A Simple Process. A Better Website."
            text="We make building your professional online presence straightforward and collaborative."
          />
        </div>

        <ol className="relative">
          <span
            className="absolute top-2 bottom-2 left-[1.45rem] w-px origin-top bg-gradient-to-b from-primary via-primary/40 to-pink/60"
            aria-hidden="true"
          />
          {STEPS.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 60} className="group relative flex gap-7 pb-12 last:pb-0">
              <span className="relative z-10 inline-flex size-12 shrink-0 items-center justify-center rounded-full border border-hairline bg-navy-deep font-display text-base text-primary transition-all duration-500 group-hover:border-primary group-hover:shadow-glow">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="pt-1.5">
                <h3 className="font-display text-2xl sm:text-3xl">{s.title}</h3>
                <p className="mt-3 max-w-lg leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
