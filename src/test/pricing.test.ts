import { describe, expect, it } from "vitest";

import { LOCALES } from "@/lib/i18n";
import { pt } from "@/lib/locales/pt";
import { CONTACT_EMAIL, PLANS, buildMailto } from "@/lib/site";

const plan = (id: string) => {
  const p = PLANS.find((x) => x.id === id);
  if (!p) throw new Error(`missing plan ${id}`);
  return p;
};

describe("Ascent Design pricing", () => {
  it("Essential is $297 per month", () => {
    expect(plan("essential")).toMatchObject({ price: 297, billing: "monthly" });
  });
  it("Growth is $397 per month", () => {
    expect(plan("growth")).toMatchObject({ price: 397, billing: "monthly" });
  });
  it("Premium is $497 per month", () => {
    expect(plan("premium")).toMatchObject({ price: 497, billing: "monthly" });
  });
  it("Complete is $1,997 one-time with 12 months of services included", () => {
    expect(plan("complete")).toMatchObject({ price: 1997, billing: "one-time", includedMonths: 12 });
  });
  it("offers exactly four plans", () => {
    expect(PLANS).toHaveLength(4);
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
    expect(decodeURIComponent(buildMailto(undefined, "Premium"))).toContain("Preferred package: Premium");
  });
  it("uses the visitor's language for the email", () => {
    expect(decodeURIComponent(buildMailto(pt.email))).toContain("subject=Quero Meu Site Profissional");
  });
});
