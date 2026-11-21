import { useI18n } from "@/lib/i18n";
import { CONTACT_EMAIL, SECTION_IDS } from "@/lib/site";
import { Logo, PeakLines } from "./Brand";

export function Footer() {
  const { t } = useI18n();
  const linkCls = "text-muted-foreground transition-colors hover:text-foreground";
  return (
    <footer className="relative overflow-hidden border-t border-hairline">
      <PeakLines className="absolute -right-24 -bottom-24 w-[560px] text-foreground/[0.06]" />
      <div className="relative mx-auto max-w-7xl px-5 pt-20 pb-10 sm:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo size="lg" />
            <p className="mt-6 max-w-xs leading-relaxed text-muted-foreground">{t.footer.description}</p>
          </div>
          <nav aria-label="Footer">
            <p className="text-sm font-semibold">{t.footer.navigate}</p>
            <ul className="mt-5 space-y-3">
              {SECTION_IDS.map((id) => (
                <li key={id}>
                  <a href={`#${id}`} className={linkCls}>
                    {t.nav[id]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="text-sm font-semibold">{t.footer.services}</p>
            <ul className="mt-5 space-y-3">
              {t.footer.serviceLinks.map((s) => (
                <li key={s}>
                  <a href="#services" className={linkCls}>
                    {s}
                  </a>
                </li>
              ))}
              <li>
                <a href="#pricing" className={linkCls}>
                  {t.footer.pricing}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold">{t.footer.contact}</p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="mt-5 block break-all text-foreground transition-colors hover:text-primary">
              {CONTACT_EMAIL}
            </a>
            <a href="#faq" className={`mt-3 block ${linkCls}`}>
              {t.footer.faq}
            </a>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-3 border-t border-hairline pt-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>{t.footer.rights}</p>
          <p>{t.footer.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
