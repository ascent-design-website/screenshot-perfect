import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PRIMARY_CTA, buildMailto } from "@/lib/site";
import { PeakLines } from "./Brand";
import { BrowserFrame } from "./BrowserFrame";
import { workById } from "./work";

export function Hero() {
  const main = workById("landscaping");
  const back = workById("cleaning");
  const front = workById("beauty");

  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 lg:pb-32">
      <div className="grid-lines absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="glow-blue absolute -top-40 right-[-10%] h-[620px] w-[620px]" aria-hidden="true" />
      <div className="glow-pink absolute bottom-[-20%] left-[-12%] h-[480px] w-[480px]" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.02fr_1fr] lg:gap-10">
        <div className="animate-in fade-in slide-in-from-bottom-6 duration-1000">
          <p className="eyebrow flex items-center gap-3">
            <span className="h-px w-8 bg-pink" aria-hidden="true" />
            Website Design for Local Businesses
          </p>
          <h1 className="mt-6 font-display text-[2.85rem] leading-[1.02] text-balance sm:text-6xl lg:text-[4.6rem]">
            Your Business Deserves a{" "}
            <span className="relative whitespace-nowrap">
              <span className="text-primary">Better</span>
            </span>{" "}
            Digital Presence.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            We create professional websites and powerful digital content that help local businesses
            build credibility, attract customers, and grow online.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="brand" size="xl">
              <a href={buildMailto()}>
                {PRIMARY_CTA}
                <ArrowUpRight />
              </a>
            </Button>
            <Button asChild variant="outlineLight" size="xl">
              <a href="#services">
                Explore Our Services
                <ArrowRight />
              </a>
            </Button>
          </div>

          <p className="mt-8 flex items-center gap-3 text-sm text-muted-foreground">
            <span className="size-1.5 shrink-0 rounded-full bg-pink" aria-hidden="true" />
            Custom Websites. Strategic Content. Built for Business Growth.
          </p>
        </div>

        {/* Mockup composition */}
        <div className="relative mx-auto w-full max-w-[640px] animate-in fade-in zoom-in-95 duration-1000 lg:max-w-none">
          <PeakLines className="absolute -top-16 left-1/2 w-[115%] -translate-x-1/2 text-primary/25" />
          <div className="relative aspect-[5/4]">
            <BrowserFrame
              src={back.src}
              alt={`Concept website design for ${back.brand}, a ${back.category.toLowerCase()}`}
              url={back.url}
              eager
              className="absolute top-0 right-0 w-[64%] opacity-80"
            />
            <BrowserFrame
              src={main.src}
              alt={`Concept website design for ${main.brand}, a ${main.category.toLowerCase()} business`}
              url={main.url}
              eager
              className="absolute top-[18%] left-0 w-[78%] animate-float-slow"
            />
            <BrowserFrame
              src={front.src}
              alt={`Concept website design for ${front.brand}, a ${front.category.toLowerCase()} studio`}
              url={front.url}
              eager
              className="absolute right-[2%] bottom-0 w-[52%]"
            />
            <div className="absolute bottom-[6%] left-[4%] hidden items-center gap-3 rounded-xl border border-hairline bg-navy-deep/85 px-4 py-3 backdrop-blur-md sm:flex">
              <span className="size-2 rounded-full bg-primary shadow-glow" aria-hidden="true" />
              <span className="text-xs font-medium tracking-wide text-foreground">
                Designed for mobile, tablet & desktop
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
