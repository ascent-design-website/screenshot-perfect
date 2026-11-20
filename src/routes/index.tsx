import { createFileRoute } from "@tanstack/react-router";

import { About } from "@/components/site/About";
import { Comparison } from "@/components/site/Comparison";
import { Faq } from "@/components/site/Faq";
import { FinalCta } from "@/components/site/FinalCta";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";
import { Navbar } from "@/components/site/Navbar";
import { Portfolio } from "@/components/site/Portfolio";
import { Pricing } from "@/components/site/Pricing";
import { Process } from "@/components/site/Process";
import { Services } from "@/components/site/Services";
import { Statement } from "@/components/site/Statement";
import { Testimonials } from "@/components/site/Testimonials";
import { Value } from "@/components/site/Value";
import { WhyChoose } from "@/components/site/WhyChoose";

const TITLE = "Ascent Design | Professional Websites & Digital Content for Local Businesses";
const DESCRIPTION =
  "Ascent Design creates professional websites, SEO-focused blog content, and social media content for local businesses across the United States.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Portfolio />
        <Statement />
        <WhyChoose />
        <Process />
        <Services />
        <Comparison />
        <Pricing />
        <About />
        <Value />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
