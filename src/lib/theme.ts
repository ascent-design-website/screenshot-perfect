import { useEffect, useState } from "react";

export type Theme = "dark" | "light";
export const THEME_STORAGE_KEY = "ascent-theme";

/** Runs before paint (inline in <head>) so the saved theme never flashes. Dark is the default. */
export const THEME_INIT_SCRIPT = `(function(){try{var t=localStorage.getItem('${THEME_STORAGE_KEY}');document.documentElement.classList.toggle('dark',t!=='light')}catch(e){}})();`;

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", next === "dark");
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
    setTheme(next);
  };

  return { theme, toggle };
}
