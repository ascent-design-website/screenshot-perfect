import { Check, Globe, Moon, Sun } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LOCALE_LABELS, useI18n, type Locale } from "@/lib/i18n";
import type { Theme } from "@/lib/theme";
import { cn } from "@/lib/utils";

const iconBtn =
  "inline-flex h-10 items-center justify-center gap-1.5 rounded-full border border-hairline bg-surface/60 px-3 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-surface-raised";

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale, t } = useI18n();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={cn(iconBtn, className)} aria-label={t.nav.language}>
        <Globe className="size-4" />
        {LOCALE_LABELS[locale].short}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-40 rounded-2xl border-hairline p-1.5">
        {(Object.keys(LOCALE_LABELS) as Locale[]).map((l) => (
          <DropdownMenuItem
            key={l}
            onSelect={() => setLocale(l)}
            className="flex cursor-pointer items-center justify-between rounded-xl px-3 py-2"
          >
            <span>
              <span className="mr-2 text-xs font-bold text-muted-foreground">{LOCALE_LABELS[l].short}</span>
              {LOCALE_LABELS[l].name}
            </span>
            {l === locale ? <Check className="size-4 text-primary" /> : null}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function ThemeToggle({ theme, onToggle }: { theme: Theme; onToggle: () => void }) {
  const { t } = useI18n();
  return (
    <button
      type="button"
      onClick={onToggle}
      className={cn(iconBtn, "w-10 px-0")}
      aria-label={theme === "dark" ? t.nav.toLight : t.nav.toDark}
      title={theme === "dark" ? t.nav.toLight : t.nav.toDark}
    >
      {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </button>
  );
}
