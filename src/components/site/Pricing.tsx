import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PLANS, buildMailto, formatUSD, type Plan } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

function PlanCard({ plan, index }: { plan: Plan; index: number }) {
  const featured = plan.emphasis === "featured";
  const annual = plan.emphasis === "annual";

  return (
    <Reveal
      delay={index * 90}
      as="article"
      className={cn(
        "group relative flex flex-col rounded-3xl border p-7 transition-all duration-500 hover:-translate-y-1 sm:p-8",
        annual
          ? "border-transparent bg-navy [background:linear-gradient(var(--navy),var(--navy))_padding-box,var(--gradient-brand)_border-box] shadow-glow"
          : featured
            ? "border-primary/50 bg-navy"
            : "border-hairline bg-card/40 hover:border-foreground/20",
      )}
    >
      {plan.badge ? (
        <span
          className={cn(
            "absolute -top-3 left-7 rounded-md px-3 py-1 text-[0.65rem] font-bold tracking-[0.16em] uppercase",
            annual ? "bg-gradient-brand text-primary-foreground" : "bg-primary text-primary-foreground",
          )}
        >
          {plan.badge}
        </span>
      ) : null}

      <h3 className="font-display text-2xl">{plan.name}</h3>
      <p className="mt-3 text-sm md:min-h-[4.5rem] leading-relaxed text-muted-foreground">
        {plan.description}
      </p>

      <div className="mt-7 border-y border-hairline py-6">
        <div className="flex items-baseline gap-2">
          <span className="font-display text-5xl tracking-tight">{formatUSD(plan.oneTime)}</span>
          <span className="text-sm whitespace-nowrap text-muted-foreground">one-time</span>
        </div>
        {plan.monthly !== null ? (
          <div className="mt-3">
            <p className="flex items-baseline gap-1 whitespace-nowrap text-foreground">
              <span className="text-xl font-semibold">+ {formatUSD(plan.monthly)}</span>
              <span className="text-sm text-muted-foreground">/month</span>
            </p>
            <p className="mt-1 text-xs text-muted-foreground">Maintenance & support</p>
          </div>
        ) : (
          <div className="mt-3">
            <p className="text-xl font-semibold text-pink">No monthly fee</p>
            <p className="mt-1 text-xs text-muted-foreground">12 months of services included</p>
          </div>
        )}
      </div>

      <ul className="mt-7 flex-1 space-y-3.5">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm text-foreground/90">
            <Check className={cn("mt-0.5 size-4 shrink-0", annual ? "text-pink" : "text-primary")} />
            {f}
          </li>
        ))}
      </ul>

      {plan.note ? (
        <p className="mt-6 rounded-xl border border-hairline bg-navy-deep/50 p-4 text-xs leading-relaxed text-muted-foreground">
          {plan.note}
        </p>
      ) : null}

      <Button
        asChild
        variant={featured || annual ? "brand" : "outlineLight"}
        size="xl"
        className="mt-8 w-full whitespace-normal text-center"
      >
        <a href={buildMailto(plan.name)}>{plan.cta}</a>
      </Button>
    </Reveal>
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden py-24 sm:py-32">
      <div className="glow-blue absolute top-1/4 left-1/2 h-[600px] w-[900px] -translate-x-1/2 opacity-40" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Pricing"
          title="Straightforward Pricing. Real Value."
          text="Professional websites and ongoing digital content designed to fit your business goals and budget."
          align="center"
        />

        <Reveal className="mx-auto mt-10 flex max-w-3xl flex-col items-stretch gap-3 rounded-2xl border border-hairline bg-navy/60 p-4 text-sm sm:flex-row sm:items-center sm:justify-center sm:gap-8">
          <span className="flex items-center gap-2.5">
            <span className="size-2 rounded-full bg-primary" aria-hidden="true" />
            <strong className="font-semibold">One-time</strong>
            <span className="text-muted-foreground">website creation payment</span>
          </span>
          <span className="flex items-center gap-2.5">
            <span className="size-2 rounded-full bg-foreground/50" aria-hidden="true" />
            <strong className="font-semibold">Monthly</strong>
            <span className="text-muted-foreground">maintenance & support (plans 1–3)</span>
          </span>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {PLANS.map((p, i) => (
            <PlanCard key={p.id} plan={p} index={i} />
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          All prices in USD. Not sure which plan fits?{" "}
          <a href={buildMailto()} className="font-medium text-primary underline-offset-4 hover:underline">
            Email us
          </a>{" "}
          and we'll help you choose.
        </p>
      </div>
    </section>
  );
}
