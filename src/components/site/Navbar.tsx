import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { NAV_LINKS, PRIMARY_CTA, buildMailto } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Logo } from "./Brand";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <nav
        aria-label="Main"
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-2xl border px-4 py-3 backdrop-blur-xl transition-all duration-500 sm:px-5",
          scrolled || open
            ? "border-hairline bg-navy-deep/80 shadow-mockup"
            : "border-transparent bg-navy-deep/30",
        )}
      >
        <a href="#home" className="shrink-0" aria-label="Ascent Design — back to top">
          <Logo />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-lg px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button asChild variant="brand" className="hidden h-10 rounded-xl px-5 md:inline-flex">
            <a href={buildMailto()}>{PRIMARY_CTA}</a>
          </Button>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-xl border border-hairline text-foreground lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={cn(
          "mx-auto mt-2 max-w-7xl overflow-hidden rounded-2xl border border-hairline bg-navy-deep/95 backdrop-blur-xl transition-all duration-500 lg:hidden",
          open ? "max-h-[80vh] opacity-100" : "pointer-events-none max-h-0 border-transparent opacity-0",
        )}
      >
        <ul className="flex flex-col p-3">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                tabIndex={open ? 0 : -1}
                className="flex items-center justify-between rounded-xl px-4 py-3.5 font-display text-2xl text-foreground transition-colors hover:bg-foreground/5"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="border-t border-hairline p-4">
          <Button asChild variant="brand" size="xl" className="w-full">
            <a href={buildMailto()} tabIndex={open ? 0 : -1}>
              {PRIMARY_CTA}
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
