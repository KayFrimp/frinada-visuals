import { CallToActionSection } from "@/components/layout/CallToActionSection";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHero } from "@/components/layout/PageHero";
import { PricingEstimator } from "@/components/pricing/PricingEstimator";
import { PricingExplorer } from "@/components/pricing/PricingExplorer";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqsFor } from "@/data/faqs";
import { SAMPLE_RATE_NOTE, siteConfig } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Services & Pricing | Frinada Visuals",
  description:
    "Compare illustrative Frinada Visuals service scopes and use the Frinada Studio estimator. Final pricing is confirmed by quotation.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Clear Pricing. Confident Decisions."
        description="Explore our solutions, compare service packages, and plan your next project with greater clarity."
        breadcrumbs={<Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Pricing" }]} />}
      />
      <Section labelledBy="packages-title">
        <SectionHeading
          id="packages-title"
          eyebrow="Scope guides"
          title="Three ways to start. One way to confirm a price."
          description="Starter, Growth, and Premium describe the kind of work that usually sits together. They are indicative scopes, not commercial offers and not fixed fees. A quotation follows a conversation about the actual project."
        />
        <div className="mt-12">
          <PricingExplorer />
        </div>
      </Section>
      <Section id="estimator" labelledBy="estimator-title" tone="mist">
        <SectionHeading
          id="estimator-title"
          eyebrow="Frinada Studio estimator"
          title="See a sample subtotal change as you choose."
          description={SAMPLE_RATE_NOTE}
        />
        <div className="mt-10">
          <PricingEstimator />
        </div>
      </Section>
      <Section id="faq" labelledBy="pricing-faq-title">
        <SectionHeading
          id="pricing-faq-title"
          eyebrow="Questions"
          title="How pricing conversations actually work."
        />
        <div className="mt-8">
          <FAQAccordion faqs={faqsFor("pricing")} />
        </div>
      </Section>
      <CallToActionSection
        title="Need a scope that does not fit a column?"
        description="Tell us what the business needs to do. The quotation can combine branding, software, marketing, and deployment without forcing a package."
        primaryHref={siteConfig.enquiryHref}
        primaryLabel="Request a quotation"
        secondaryHref={siteConfig.studioHref}
        secondaryLabel="Build a brief in Studio"
      />
    </>
  );
}
