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
  it("Essential Website is $299 one-time + $50/month", () => {
    expect(plan("essential")).toMatchObject({ oneTime: 299, monthly: 50 });
  });
  it("Growth is $399 one-time + $50/month", () => {
    expect(plan("growth")).toMatchObject({ oneTime: 399, monthly: 50 });
  });
  it("Growth Plus is $499 one-time + $50/month", () => {
    expect(plan("growth-plus")).toMatchObject({ oneTime: 499, monthly: 50 });
  });
  it("Ascent Complete is $1,000 one-time with no monthly fee", () => {
    expect(plan("complete")).toMatchObject({ oneTime: 1000, monthly: null });
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
    expect(decodeURIComponent(buildMailto(undefined, "Growth Plus"))).toContain("Preferred package: Growth Plus");
  });
  it("uses the visitor's language for the email", () => {
    expect(decodeURIComponent(buildMailto(pt.email))).toContain("subject=Quero Meu Site Profissional");
  });
});
