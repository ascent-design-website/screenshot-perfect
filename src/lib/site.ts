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

export type PlanId = "monthly" | "annual";

export type Plan = {
  id: PlanId;
  price: number;
  billing: "monthly" | "yearly";
  emphasis?: "featured";
};

/** Prices are fixed by the business (USD) — text for each plan lives in the locale files. */
export const PLANS: Plan[] = [
  { id: "monthly", price: 199, billing: "monthly" },
  { id: "annual", price: 1799, billing: "yearly", emphasis: "featured" },
];

/** What a year of monthly billing costs compared with the annual price. */
export function annualSavings(plans: Plan[] = PLANS): { amount: number; percent: number } {
  const monthly = plans.find((p) => p.billing === "monthly");
  const yearly = plans.find((p) => p.billing === "yearly");
  if (!monthly || !yearly) return { amount: 0, percent: 0 };
  const fullYear = monthly.price * 12;
  const amount = fullYear - yearly.price;
  return { amount, percent: Math.round((amount / fullYear) * 100) };
}

export function formatUSD(value: number, decimals = 0): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
}

export type Testimonial = { quote: string; name: string; business: string; rating: number; image?: string };

/** Add real, approved client testimonials here — the section stays hidden while this list is empty. */
export const TESTIMONIALS: Testimonial[] = [];
