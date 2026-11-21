import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type Props = {
  title: ReactNode;
  text?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({ title, text, align = "center", className }: Props) {
  return (
    <Reveal className={cn("relative max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {align === "center" ? (
        <div
          className="glow-blue pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[260px] w-[520px] -translate-x-1/2 -translate-y-1/2"
          aria-hidden="true"
        />
      ) : null}
      <h2 className="font-display text-4xl leading-[1.06] text-balance sm:text-5xl lg:text-[3.6rem]">
        {title}
      </h2>
      {text ? (
        <p className="mt-6 text-lg leading-relaxed text-pretty text-muted-foreground">{text}</p>
      ) : null}
    </Reveal>
  );
}
