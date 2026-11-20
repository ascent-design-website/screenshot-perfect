import { CONTACT_EMAIL, NAV_LINKS } from "@/lib/site";
import { Logo, PeakLines } from "./Brand";

const SERVICE_LINKS = [
  "Website Design & Development",
  "Website Maintenance",
  "SEO & Blog Content",
  "Social Media Content",
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-hairline bg-navy-deep">
      <PeakLines className="absolute -right-24 -bottom-24 w-[560px] text-foreground/[0.06]" />
      <div className="relative mx-auto max-w-7xl px-5 pt-20 pb-10 sm:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo size="lg" />
            <p className="mt-6 max-w-xs leading-relaxed text-muted-foreground">
              Professional websites and strategic digital content for businesses ready to grow.
            </p>
          </div>
          <nav aria-label="Footer">
            <p className="text-xs font-semibold tracking-[0.2em] text-foreground uppercase">Navigate</p>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-muted-foreground transition-colors hover:text-foreground">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-foreground uppercase">Services</p>
            <ul className="mt-5 space-y-3">
              {SERVICE_LINKS.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-muted-foreground transition-colors hover:text-foreground">
                    {s}
                  </a>
                </li>
              ))}
              <li>
                <a href="#pricing" className="text-muted-foreground transition-colors hover:text-foreground">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-foreground uppercase">Contact</p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-5 block break-all text-foreground transition-colors hover:text-primary"
            >
              {CONTACT_EMAIL}
            </a>
            <a href="#faq" className="mt-3 block text-muted-foreground transition-colors hover:text-foreground">
              FAQ
            </a>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-3 border-t border-hairline pt-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Ascent Design. All rights reserved.</p>
          <p>Website design for local businesses across the United States.</p>
        </div>
      </div>
    </footer>
  );
}
