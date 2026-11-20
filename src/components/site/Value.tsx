import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const VALUES = [
  { title: "Build Trust", text: "Create a stronger first impression with a professional website." },
  {
    title: "Improve Visibility",
    text: "Support your online presence with structured website content and SEO-focused articles.",
  },
  {
    title: "Stay Consistent",
    text: "Maintain a recognizable brand across your website and social media.",
  },
  {
    title: "Grow With Confidence",
    text: "Give potential customers a clear and professional way to discover and contact your business.",
  },
];

export function Value() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="What It Means for You"
          title="What a Professional Digital Presence Can Do."
        />
        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v, i) => (
            <Reveal
              key={v.title}
              delay={i * 90}
              className="group relative bg-background p-8 transition-colors duration-500 hover:bg-navy sm:p-10"
            >
              <span className="font-display text-6xl text-foreground/10 transition-colors duration-500 group-hover:text-primary/70">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className="mt-6 block h-px w-10 bg-pink transition-all duration-700 group-hover:w-20"
                aria-hidden="true"
              />
              <h3 className="mt-6 font-display text-2xl">{v.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{v.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
