import { LifeBuoy, Gauge, Megaphone, PenTool, Search, Smartphone } from "lucide-react";

import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const FEATURES = [
  {
    icon: PenTool,
    title: "Custom Design",
    text: "Every website is thoughtfully designed around your business, brand, and customers.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Experience",
    text: "Beautiful, responsive websites that work seamlessly across smartphones, tablets, and desktops.",
  },
  {
    icon: Gauge,
    title: "Built for Performance",
    text: "Clean development, optimized assets, and a structure designed for a smooth user experience.",
  },
  {
    icon: Search,
    title: "SEO-Focused Content",
    text: "Strategic blog content designed to strengthen your online presence and support organic search visibility.",
  },
  {
    icon: LifeBuoy,
    title: "Ongoing Support",
    text: "Reliable website maintenance and support to help keep your digital presence running smoothly.",
  },
  {
    icon: Megaphone,
    title: "Social Media Content",
    text: "Consistent, professional social content that helps your brand maintain an engaging online presence.",
  },
];

export function WhyChoose() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Why Ascent"
          title="Why Businesses Choose Ascent Design."
          text="More than a website. A professional digital foundation for your business."
        />
        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal
              key={f.title}
              delay={(i % 3) * 80}
              className="group relative bg-background p-8 transition-colors duration-500 hover:bg-navy sm:p-10"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex size-12 items-center justify-center rounded-xl border border-hairline bg-navy-raised/60 text-primary transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-glow">
                  <f.icon className="size-5" strokeWidth={1.6} />
                </span>
                <span className="font-display text-sm text-muted-foreground/60">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-8 font-display text-2xl">{f.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{f.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
