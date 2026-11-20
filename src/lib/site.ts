export const CONTACT_EMAIL = "contact@ascentdesign.website";
export const PRIMARY_CTA = "I Want My Professional Website";
const DEFAULT_SUBJECT = "I Want My Professional Website";

/** Builds the prefilled email link used by every conversion button. */
export function buildMailto(preferredPackage = ""): string {
  const body = [
    "Hello Ascent Design,",
    "",
    "I'm interested in getting a professional website for my business.",
    "",
    "Business name:",
    "Business type:",
    "Website needs:",
    `Preferred package: ${preferredPackage}`.trimEnd(),
    "",
    "Looking forward to hearing from you.",
  ].join("\n");
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(DEFAULT_SUBJECT)}&body=${encodeURIComponent(body)}`;
}

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
] as const;

export type Plan = {
  id: string;
  name: string;
  oneTime: number;
  monthly: number | null;
  description: string;
  features: string[];
  cta: string;
  emphasis?: "featured" | "annual";
  badge?: string;
  note?: string;
};

export const PLANS: Plan[] = [
  {
    id: "essential",
    name: "Essential Website",
    oneTime: 299,
    monthly: 50,
    description: "Everything you need to establish a professional online presence.",
    features: [
      "Professional website creation",
      "Custom website design",
      "Responsive development",
      "Website maintenance",
      "Ongoing support",
    ],
    cta: "I Want My Professional Website",
  },
  {
    id: "growth",
    name: "Growth",
    oneTime: 399,
    monthly: 50,
    description: "Build your online presence with consistent content and professional support.",
    features: [
      "Everything in Essential Website",
      "Website maintenance and support",
      "1 SEO-focused blog article per week",
      "1 Instagram post per week",
    ],
    cta: "I Want to Grow My Business",
  },
  {
    id: "growth-plus",
    name: "Growth Plus",
    oneTime: 499,
    monthly: 50,
    description: "More content. More consistency. A stronger digital presence.",
    features: [
      "Everything in Growth",
      "Website maintenance and support",
      "2 SEO-focused blog articles per week",
      "3 Instagram posts per week",
      "1 carousel included in the 3 weekly posts",
    ],
    cta: "Choose Growth Plus",
    emphasis: "featured",
    badge: "Most Popular Monthly",
  },
  {
    id: "complete",
    name: "Ascent Complete",
    oneTime: 1000,
    monthly: null,
    description: "A complete year of website and content services with one single payment.",
    features: [
      "Everything in Growth Plus",
      "Website creation",
      "Website maintenance and support",
      "4 SEO-focused blog articles per week",
      "5 social media posts per week for Instagram/TikTok",
      "Content creation for 1 full year",
      "No recurring monthly fee",
    ],
    cta: "Choose Ascent Complete",
    emphasis: "annual",
    badge: "One-Time Payment",
    note: "Content services included for 12 months. Services beyond the first year are discussed separately.",
  },
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

export const FAQS = [
  {
    q: "What services does Ascent Design offer?",
    a: "We specialize in professional website design and development, website maintenance, SEO-focused blog content, and social media content creation.",
  },
  {
    q: "How much does a website cost?",
    a: "Our website packages start at $299, with different options depending on your business needs. Monthly plans include an additional $50 monthly maintenance and support fee.",
  },
  {
    q: "What is included in the monthly fee?",
    a: "The $50 monthly fee covers website maintenance and ongoing support for the applicable packages.",
  },
  {
    q: "How long does it take to build my website?",
    a: "Project timelines depend on the website's structure, content requirements, and feedback process. We establish a clear timeline before starting your project.",
  },
  {
    q: "Will my website work on mobile devices?",
    a: "Yes. Our websites are designed to provide a responsive experience across desktop, tablet, and mobile devices.",
  },
  {
    q: "Do you offer SEO services?",
    a: "Our packages include different levels of SEO-focused content creation. We create blog articles structured to support your website's organic search visibility.",
  },
  {
    q: "Do you create social media posts?",
    a: "Yes. Depending on your selected package, we create professional Instagram content and, in our annual package, Instagram/TikTok content.",
  },
  {
    q: "Do I need to pay monthly?",
    a: "Our first three packages require a $50 monthly fee for website maintenance and support. Our Ascent Complete package is a one-time $1,000 payment with no recurring monthly fee and includes the specified services for one year.",
  },
  {
    q: "Can I request changes to my website?",
    a: "Yes. We work collaboratively throughout the project to review feedback and refine the website. Specific revision arrangements are confirmed during onboarding.",
  },
  {
    q: "How do I get started?",
    a: 'Simply click "I Want My Professional Website" and contact our team by email. We will discuss your business, goals, and the best package for your needs.',
  },
];
