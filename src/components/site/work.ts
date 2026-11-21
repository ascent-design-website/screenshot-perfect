import beauty from "@/assets/work/concept-beauty.webp.asset.json";
import cleaning from "@/assets/work/concept-cleaning.webp.asset.json";
import construction from "@/assets/work/concept-construction.webp.asset.json";
import consulting from "@/assets/work/concept-consulting.webp.asset.json";
import homeServices from "@/assets/work/concept-home-services.webp.asset.json";
import landscaping from "@/assets/work/concept-landscaping.webp.asset.json";

/** Concept projects (fictional businesses). Category/type labels come from the locale files. */
export const WORK = [
  { id: "landscaping", src: landscaping.url, brand: "Evergreen Grounds" },
  { id: "home-services", src: homeServices.url, brand: "Keystone Home Pros" },
  { id: "beauty", src: beauty.url, brand: "Luma Skin Studio" },
  { id: "cleaning", src: cleaning.url, brand: "Brightway Cleaning Co." },
  { id: "construction", src: construction.url, brand: "Ironline Construction" },
  { id: "consulting", src: consulting.url, brand: "Northbridge Advisory" },
] as const;
