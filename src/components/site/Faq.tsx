import { Plus } from "lucide-react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

import { FAQS, buildMailto } from "@/lib/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Faq() {
  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions."
            text={
              <>
                Still have a question?{" "}
                <a href={buildMailto()} className="text-primary underline-offset-4 hover:underline">
                  Send us an email
                </a>
                .
              </>
            }
          />
        </div>
        <Reveal>
          <AccordionPrimitive.Root type="single" collapsible className="border-t border-hairline">
            {FAQS.map((f, i) => (
              <AccordionPrimitive.Item key={f.q} value={`q-${i}`} className="border-b border-hairline">
                <AccordionPrimitive.Header>
                  <AccordionPrimitive.Trigger className="group flex w-full cursor-pointer items-center justify-between gap-6 py-6 text-left">
                    <span className="font-display text-xl transition-colors group-hover:text-primary sm:text-2xl">
                      {f.q}
                    </span>
                    <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-hairline text-muted-foreground transition-all duration-300 group-hover:border-primary group-data-[state=open]:rotate-45 group-data-[state=open]:border-primary group-data-[state=open]:bg-primary group-data-[state=open]:text-primary-foreground">
                      <Plus className="size-4" />
                    </span>
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionPrimitive.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <p className="max-w-2xl pr-12 pb-7 leading-relaxed text-muted-foreground">{f.a}</p>
                </AccordionPrimitive.Content>
              </AccordionPrimitive.Item>
            ))}
          </AccordionPrimitive.Root>
        </Reveal>
      </div>
    </section>
  );
}
