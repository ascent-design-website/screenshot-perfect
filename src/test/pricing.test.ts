import { describe, expect, it } from "vitest";

import { LOCALES } from "@/lib/i18n";
import { pt } from "@/lib/locales/pt";
import { CONTACT_EMAIL, PLANS, annualSavings, buildMailto } from "@/lib/site";

const plan = (id: string) => {
  const p = PLANS.find((x) => x.id === id);
  if (!p) throw new Error(`missing plan ${id}`);
  return p;
};

describe("Ascent Design pricing", () => {
  it("Monthly is $199 per month", () => {
    expect(plan("monthly")).toMatchObject({ price: 199, billing: "monthly" });
  });
  it("Annual is $1,799 per year", () => {
    expect(plan("annual")).toMatchObject({ price: 1799, billing: "yearly" });
  });
  it("Annual saves $589 a year, shown as 25% OFF", () => {
    expect(annualSavings()).toEqual({ amount: 589, percent: 25 });
  });
  it("offers exactly two prices", () => {
    expect(PLANS).toHaveLength(2);
  });
});

describe("Translations", () => {
  it("English, Portuguese and Spanish each describe every plan", () => {
    for (const dict of Object.values(LOCALES)) {
      for (const p of PLANS) expect(dict.pricing.plans[p.id].name).not.toBe("");
    }
    expect(Object.keys(LOCALES).sort()).toEqual(["en", "es", "pt"]);
  });
});

describe("Email CTA", () => {
  it("opens the contact address with the required English subject by default", () => {
    expect(buildMailto()).toMatch(
      new RegExp(`^mailto:${CONTACT_EMAIL}\\?subject=I%20Want%20My%20Professional%20Website&body=`),
    );
  });
  it("prefills the preferred package when given", () => {
    expect(decodeURIComponent(buildMailto(undefined, "Annual"))).toContain("Preferred package: Annual");
  });
  it("uses the visitor's language for the email", () => {
    expect(decodeURIComponent(buildMailto(pt.email))).toContain("subject=Quero Meu Site Profissional");
  });
});
