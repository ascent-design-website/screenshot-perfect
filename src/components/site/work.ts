import beauty from "@/assets/work/concept-beauty.webp.asset.json";
import cleaning from "@/assets/work/concept-cleaning.webp.asset.json";
import construction from "@/assets/work/concept-construction.webp.asset.json";
import consulting from "@/assets/work/concept-consulting.webp.asset.json";
import homeServices from "@/assets/work/concept-home-services.webp.asset.json";
import landscaping from "@/assets/work/concept-landscaping.webp.asset.json";

export const WORK = [
  {
    id: "home-services",
    src: homeServices.url,
    category: "Home Services",
    type: "Lead-generation website",
    brand: "Keystone Home Pros",
    url: "keystonehomepros.com",
  },
  {
    id: "cleaning",
    src: cleaning.url,
    category: "Cleaning Company",
    type: "Service & booking website",
    brand: "Brightway Cleaning Co.",
    url: "brightwaycleaning.com",
  },
  {
    id: "landscaping",
    src: landscaping.url,
    category: "Landscaping",
    type: "Portfolio & estimate website",
    brand: "Evergreen Grounds",
    url: "evergreengrounds.com",
  },
  {
    id: "beauty",
    src: beauty.url,
    category: "Beauty & Wellness",
    type: "Brand & appointment website",
    brand: "Luma Skin Studio",
    url: "lumaskinstudio.com",
  },
  {
    id: "consulting",
    src: consulting.url,
    category: "Consulting",
    type: "Professional services website",
    brand: "Northbridge Advisory",
    url: "northbridgeadvisory.com",
  },
  {
    id: "construction",
    src: construction.url,
    category: "Construction",
    type: "Contractor website",
    brand: "Ironline Construction",
    url: "ironlineconstruction.com",
  },
] as const;

export const workById = (id: (typeof WORK)[number]["id"]) => WORK.find((w) => w.id === id)!;
