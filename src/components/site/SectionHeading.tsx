import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow: string;
  title: ReactNode;
  text?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({ eyebrow, title, text, align = "left", className }: Props) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <p className={cn("eyebrow flex items-center gap-3", align === "center" && "justify-center")}>
        <span className="h-px w-8 bg-pink" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 className="mt-5 font-display text-4xl leading-[1.05] text-balance sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {text ? (
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">{text}</p>
      ) : null}
    </Reveal>
  );
}
