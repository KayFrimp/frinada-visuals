import { CallToActionSection } from "@/components/layout/CallToActionSection";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHero } from "@/components/layout/PageHero";
import { FeatureCard } from "@/components/sections/FeatureCard";
import { ProcessStep } from "@/components/sections/ProcessStep";
import { ServiceCategorySection } from "@/components/services/ServiceCategorySection";
import { StudioProjectBrief } from "@/components/studio/StudioProjectBrief";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { studioFeatures, studioProductSteps } from "@/data/content";
import { serviceCategories } from "@/data/services";
import { siteConfig, SAMPLE_RATE_NOTE } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

const variants = ["split", "band", "notes", "list"] as const;

export const metadata = createPageMetadata({
  title: "Digital Solutions & Creative Services | Frinada Visuals",
  description:
    "Web and software development, branding, digital marketing, and cloud infrastructure from Frinada Visuals, including the Frinada Studio project preview.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Digital Solutions Built Around Your Ambition."
        description="From defining your brand to building and deploying digital experiences, we bring creativity and technology together to solve meaningful business problems."
        breadcrumbs={<Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services" }]} />}
        actions={null}
      />
      <div className="border-b border-line bg-mist">
        <p className="mx-auto w-full max-w-6xl px-5 py-4 text-sm leading-relaxed text-muted sm:px-8 lg:px-10">{SAMPLE_RATE_NOTE}</p>
      </div>
      {serviceCategories.map((category, index) => (
        <ServiceCategorySection key={category.id} category={category} variant={variants[index] ?? "split"} />
      ))}
      <Section id="frinada-studio" labelledBy="studio-page-title" tone="mist">
        <SectionHeading
          id="studio-page-title"
          eyebrow="Flagship product concept"
          title="Your next big idea starts with a simpler process."
          description="Frinada Studio helps a business explore services, describe a project, compare what can be shown as a sample rate with what needs a quotation, and leave with a structured brief. It exists to make the first conversation clearer. This page is the frontend demonstration."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {studioFeatures.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>
        <h3 className="mt-12 font-heading text-2xl font-bold text-navy">How it works</h3>
        <ol className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {studioProductSteps.map((step) => (
            <ProcessStep key={step.id} step={step} tone="light" />
          ))}
        </ol>
        <div className="mt-12">
          <StudioProjectBrief />
        </div>
      </Section>
      <CallToActionSection
        title="Not Sure Where to Begin?"
        description="Open the product preview and choose the services that sound closest, or request a consultation and describe the outcome you want."
        primaryHref={siteConfig.studioHref}
        primaryLabel="Explore Frinada Studio"
        secondaryHref={siteConfig.enquiryHref}
        secondaryLabel="Request a consultation"
      />
    </>
  );
}
