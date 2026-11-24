import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { PLANS, annualSavings, buildMailto, formatUSD, type Plan } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

function PlanCard({ plan, index }: { plan: Plan; index: number }) {
  const { t } = useI18n();
  const copy = t.pricing.plans[plan.id];
  const featured = plan.emphasis === "featured";
  const yearly = plan.billing === "yearly";
  const savings = annualSavings();

  return (
    <Reveal
      delay={index * 90}
      as="article"
      className={cn(
        "group card-premium flex flex-col p-7 transition-all duration-500 hover:-translate-y-1 sm:p-9",
        featured ? "border-pink/60 shadow-glow-pink" : "hover:border-foreground/20",
      )}
    >
      {yearly ? (
        <span className="absolute -top-3.5 left-7 rounded-full bg-pink px-3.5 py-1 text-[0.7rem] font-bold tracking-[0.08em] text-primary-foreground uppercase sm:left-9">
          {t.pricing.savings
            .replace("{amount}", formatUSD(savings.amount))
            .replace("{percent}", String(savings.percent))}
        </span>
      ) : null}

      <h3 className="text-2xl font-semibold tracking-tight">{copy.name}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{copy.description}</p>

      <div className="mt-6 rounded-2xl border border-hairline bg-background/50 p-5">
        <div className="flex flex-wrap items-baseline gap-x-2">
          <span className="font-display text-5xl leading-none tracking-tight">{formatUSD(plan.price)}</span>
          <span className="text-sm text-muted-foreground">{yearly ? t.pricing.perYear : t.pricing.perMonth}</span>
        </div>
        <p className={cn("mt-3 text-sm font-medium", yearly ? "text-pink" : "text-muted-foreground")}>
          {yearly
            ? t.pricing.yearlyNote.replace("{monthly}", formatUSD(plan.price / 12, 2))
            : t.pricing.monthlyNote}
        </p>
      </div>

      <p className="mt-7 text-sm font-semibold">{t.pricing.featuresTitle}</p>
      <ul className="mt-4 flex-1 space-y-3.5">
        {t.pricing.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm text-foreground/90">
            <span
              className={cn(
                "mt-0.5 inline-flex size-4.5 shrink-0 items-center justify-center rounded-full text-primary-foreground",
                yearly ? "bg-pink" : "bg-primary",
              )}
            >
              <Check className="size-2.5" strokeWidth={3.5} />
            </span>
            {f}
          </li>
        ))}
      </ul>

      <Button
        asChild
        variant={featured ? "brand" : "outlineLight"}
        size="xl"
        className="mt-8 h-auto min-h-13 w-full py-3 text-center whitespace-normal"
      >
        <a href={buildMailto(t.email, copy.name)}>{copy.cta}</a>
      </Button>
    </Reveal>
  );
}

export function Pricing() {
  const { t } = useI18n();
  return (
    <section id="pricing" className="relative overflow-hidden py-24 sm:py-32">
      <div className="glow-blue absolute top-1/4 left-1/2 h-[600px] w-[1000px] -translate-x-1/2 opacity-60" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading title={t.pricing.title} text={t.pricing.text} />

        <div className="mx-auto mt-16 grid max-w-4xl gap-6 md:grid-cols-2">
          {PLANS.map((p, i) => (
            <PlanCard key={p.id} plan={p} index={i} />
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          {t.pricing.footerBefore}{" "}
          <a href={buildMailto(t.email)} className="font-medium text-primary underline-offset-4 hover:underline">
            {t.pricing.footerLink}
          </a>{" "}
          {t.pricing.footerAfter}
        </p>
      </div>
    </section>
  );
}
