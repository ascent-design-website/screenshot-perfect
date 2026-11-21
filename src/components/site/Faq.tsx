import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";

import { useI18n } from "@/lib/i18n";
import { buildMailto } from "@/lib/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Faq() {
  const { t } = useI18n();
  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading
          title={t.faq.title}
          text={
            <>
              {t.faq.stillQuestion}{" "}
              <a href={buildMailto(t.email)} className="text-primary underline-offset-4 hover:underline">
                {t.faq.emailUs}
              </a>
              .
            </>
          }
        />
        <Reveal className="mt-14">
          <AccordionPrimitive.Root type="single" collapsible className="space-y-3">
            {t.faq.items.map((f, i) => (
              <AccordionPrimitive.Item
                key={i}
                value={`q-${i}`}
                className="card-premium overflow-hidden rounded-2xl transition-colors data-[state=open]:border-primary/40"
              >
                <AccordionPrimitive.Header>
                  <AccordionPrimitive.Trigger className="group flex w-full cursor-pointer items-center justify-between gap-6 px-6 py-5 text-left">
                    <span className="text-lg font-semibold tracking-tight transition-colors group-hover:text-primary">
                      {f.q}
                    </span>
                    <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-hairline text-muted-foreground transition-all duration-300 group-data-[state=open]:rotate-45 group-data-[state=open]:border-transparent group-data-[state=open]:bg-primary group-data-[state=open]:text-primary-foreground">
                      <Plus className="size-4" />
                    </span>
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionPrimitive.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <p className="px-6 pr-16 pb-6 leading-relaxed text-muted-foreground">{f.a}</p>
                </AccordionPrimitive.Content>
              </AccordionPrimitive.Item>
            ))}
          </AccordionPrimitive.Root>
        </Reveal>
      </div>
    </section>
  );
}
