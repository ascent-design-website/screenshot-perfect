import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { SECTION_IDS, buildMailto, type SectionId } from "@/lib/site";
import { useTheme } from "@/lib/theme";
import { cn } from "@/lib/utils";
import { Logo } from "./Brand";
import { LanguageSwitcher, ThemeToggle } from "./Controls";

export function Navbar() {
  const { t } = useI18n();
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<SectionId>("home");

  const links = SECTION_IDS.map((id) => ({ id, label: t.nav[id] }));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const els = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        const top = visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (top) setActive(top.target.id as SectionId);
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-5">
      <nav
        aria-label="Main"
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-full px-2 py-2 pl-5 transition-all duration-500",
          scrolled || open ? "border border-hairline bg-background/75 shadow-mockup backdrop-blur-xl" : "border border-transparent",
        )}
      >
        <a href="#home" className="shrink-0" aria-label={t.nav.backToTop}>
          <Logo />
        </a>

        <ul className="hidden items-center gap-1 rounded-full border border-hairline bg-surface/50 p-1.5 backdrop-blur-xl xl:flex">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                aria-current={active === l.id ? "true" : undefined}
                className={cn(
                  "block rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
                  active === l.id
                    ? "bg-surface-raised text-foreground shadow-[inset_0_1px_0_0_var(--card-highlight)]"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 sm:flex">
            <LanguageSwitcher />
            <ThemeToggle theme={theme} onToggle={toggle} />
          </div>
          <Button asChild variant="brand" className="hidden h-11 px-6 lg:inline-flex">
            <a href={buildMailto(t.email)}>{t.nav.cta}</a>
          </Button>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full border border-hairline bg-surface/60 text-foreground backdrop-blur xl:hidden"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
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
          "mx-auto mt-2 max-w-7xl overflow-hidden rounded-3xl border border-hairline bg-background/95 backdrop-blur-xl transition-all duration-500 xl:hidden",
          open ? "max-h-[85vh] opacity-100" : "pointer-events-none max-h-0 border-transparent opacity-0",
        )}
      >
        <ul className="flex flex-col p-3">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                tabIndex={open ? 0 : -1}
                className="flex items-center rounded-2xl px-4 py-3 font-display text-2xl text-foreground transition-colors hover:bg-surface"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-3 border-t border-hairline p-4">
          <div className="flex items-center gap-2 sm:hidden">
            <LanguageSwitcher />
            <ThemeToggle theme={theme} onToggle={toggle} />
          </div>
          <Button asChild variant="brand" size="xl" className="w-full">
            <a href={buildMailto(t.email)} tabIndex={open ? 0 : -1}>
              {t.nav.cta}
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
