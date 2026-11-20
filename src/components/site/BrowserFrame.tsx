import { cn } from "@/lib/utils";

type BrowserFrameProps = {
  src: string;
  alt: string;
  url: string;
  className?: string;
  imgClassName?: string;
  eager?: boolean;
};

export function BrowserFrame({ src, alt, url, className, imgClassName, eager }: BrowserFrameProps) {
  return (
    <figure className={cn("overflow-hidden rounded-xl bg-navy shadow-mockup", className)}>
      <div className="flex items-center gap-3 border-b border-hairline bg-navy-raised/80 px-3.5 py-2.5">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-foreground/20" />
          <span className="size-2.5 rounded-full bg-foreground/20" />
          <span className="size-2.5 rounded-full bg-foreground/20" />
        </span>
        <span className="mx-auto max-w-[70%] truncate rounded-md bg-navy-deep/70 px-3 py-1 text-[0.65rem] tracking-wide text-muted-foreground">
          {url}
        </span>
        <span className="w-[42px]" aria-hidden="true" />
      </div>
      <div className="aspect-[3/2] overflow-hidden">
        <img
          src={src}
          alt={alt}
          width={1536}
          height={1024}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          className={cn("h-full w-full object-cover object-top", imgClassName)}
        />
      </div>
    </figure>
  );
}
