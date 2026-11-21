import { en, type Dict } from "./locales/en";

export const CONTACT_EMAIL = "contact@ascentdesign.website";

/** Builds the prefilled email link used by every conversion button. */
export function buildMailto(email: Dict["email"] = en.email, preferredPackage = ""): string {
  const body = [
    email.greeting,
    "",
    email.intro,
    "",
    email.businessName,
    email.businessType,
    email.needs,
    `${email.preferred} ${preferredPackage}`.trimEnd(),
    "",
    email.closing,
  ].join("\n");
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(email.subject)}&body=${encodeURIComponent(body)}`;
}

export const SECTION_IDS = ["home", "services", "process", "pricing", "about", "faq"] as const;
export type SectionId = (typeof SECTION_IDS)[number];

export type PlanId = "essential" | "growth" | "growth-plus" | "complete";

export type Plan = {
  id: PlanId;
  oneTime: number;
  monthly: number | null;
  emphasis?: "featured" | "annual";
};

/** Prices are fixed by the business (USD) — text for each plan lives in the locale files. */
export const PLANS: Plan[] = [
  { id: "essential", oneTime: 299, monthly: 50 },
  { id: "growth", oneTime: 399, monthly: 50 },
  { id: "growth-plus", oneTime: 499, monthly: 50, emphasis: "featured" },
  { id: "complete", oneTime: 1000, monthly: null, emphasis: "annual" },
];

export function formatUSD(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

export type Testimonial = { quote: string; name: string; business: string; rating: number; image?: string };

/** Add real, approved client testimonials here — the section stays hidden while this list is empty. */
export const TESTIMONIALS: Testimonial[] = [];
