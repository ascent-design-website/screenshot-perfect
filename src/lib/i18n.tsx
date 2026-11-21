import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

import { en, type Dict } from "./locales/en";
import { es } from "./locales/es";
import { pt } from "./locales/pt";

export const LOCALES = { en, pt, es } satisfies Record<string, Dict>;
export type Locale = keyof typeof LOCALES;

export const LOCALE_LABELS: Record<Locale, { short: string; name: string; htmlLang: string }> = {
  en: { short: "EN", name: "English", htmlLang: "en" },
  pt: { short: "PT", name: "Português", htmlLang: "pt-BR" },
  es: { short: "ES", name: "Español", htmlLang: "es" },
};

const STORAGE_KEY = "ascent-locale";

type I18nValue = { locale: Locale; setLocale: (l: Locale) => void; t: Dict };

const I18nContext = createContext<I18nValue>({ locale: "en", setLocale: () => {}, t: en });

const isLocale = (v: unknown): v is Locale => typeof v === "string" && v in LOCALES;

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    let initial: Locale = "en";
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (isLocale(saved)) initial = saved;
      else {
        const nav = window.navigator.language.slice(0, 2).toLowerCase();
        if (isLocale(nav)) initial = nav;
      }
    } catch {
      /* storage unavailable */
    }
    setLocaleState(initial);
  }, []);

  useEffect(() => {
    document.documentElement.lang = LOCALE_LABELS[locale].htmlLang;
  }, [locale]);

  const value = useMemo<I18nValue>(
    () => ({
      locale,
      t: LOCALES[locale],
      setLocale: (l) => {
        setLocaleState(l);
        try {
          window.localStorage.setItem(STORAGE_KEY, l);
        } catch {
          /* ignore */
        }
      },
    }),
    [locale],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export const useI18n = () => useContext(I18nContext);
