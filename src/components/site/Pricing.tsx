import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { PLANS, buildMailto, formatUSD, type Plan } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

function PlanCard({ plan, index }: { plan: Plan; index: number }) {
  const { t } = useI18n();
  const copy = t.pricing.plans[plan.id];
  const featured = plan.emphasis === "featured";
  const annual = plan.emphasis === "annual";

  return (
    <Reveal
      delay={index * 90}
      as="article"
      className={cn(
        "group card-premium flex flex-col p-7 transition-all duration-500 hover:-translate-y-1 sm:p-8",
        annual && "border-pink/60 shadow-glow-pink",
        featured && "border-primary/50 shadow-glow",
        !annual && !featured && "hover:border-foreground/20",
      )}
    >
      {copy.badge ? (
        <span
          className={cn(
            "absolute -top-3.5 left-7 rounded-full px-3.5 py-1 text-[0.68rem] font-bold tracking-[0.12em] text-primary-foreground uppercase",
            annual ? "bg-pink" : "bg-brand-button",
          )}
        >
          {copy.badge}
        </span>
      ) : null}

      <h3 className="text-2xl font-semibold tracking-tight">{copy.name}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:min-h-[4.5rem]">{copy.description}</p>

      <div className="mt-6 rounded-2xl border border-hairline bg-background/50 p-5">
        <div className="flex flex-wrap items-baseline gap-x-2">
          <span className="font-display text-[2.75rem] leading-none tracking-tight">{formatUSD(plan.price)}</span>
          <span className="text-sm text-muted-foreground">
            {plan.billing === "monthly" ? t.pricing.perMonth : t.pricing.oneTime}
          </span>
        </div>
        <p className={cn("mt-3 text-sm font-medium", annual ? "text-pink" : "text-muted-foreground")}>
          {plan.billing === "monthly" ? t.pricing.monthlyNote : t.pricing.oneTimeNote}
        </p>
      </div>

      <ul className="mt-7 flex-1 space-y-3.5">
        {copy.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm text-foreground/90">
            <span
              className={cn(
                "mt-0.5 inline-flex size-4.5 shrink-0 items-center justify-center rounded-full text-primary-foreground",
                annual ? "bg-pink" : "bg-primary",
              )}
            >
              <Check className="size-2.5" strokeWidth={3.5} />
            </span>
            {f}
          </li>
        ))}
      </ul>

      {copy.note ? (
        <p className="mt-6 rounded-2xl border border-hairline bg-background/50 p-4 text-xs leading-relaxed text-muted-foreground">
          {copy.note}
        </p>
      ) : null}

      <Button
        asChild
        variant={featured || annual ? "brand" : "outlineLight"}
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

        <Reveal className="mx-auto mt-10 flex w-fit max-w-full flex-col gap-3 rounded-3xl border border-hairline bg-surface/60 px-5 py-3 text-sm backdrop-blur sm:flex-row sm:gap-8 sm:rounded-full">
          <span className="flex items-center gap-2.5">
            <span className="size-2 rounded-full bg-primary" aria-hidden="true" />
            <strong className="font-semibold">{t.pricing.legendMonthly}</strong>
            <span className="text-muted-foreground">{t.pricing.legendMonthlyText}</span>
          </span>
          <span className="flex items-center gap-2.5">
            <span className="size-2 rounded-full bg-pink" aria-hidden="true" />
            <strong className="font-semibold">{t.pricing.legendOneTime}</strong>
            <span className="text-muted-foreground">{t.pricing.legendOneTimeText}</span>
          </span>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
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
