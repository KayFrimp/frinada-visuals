import { BrandMark } from "@/components/brand/Logo";
import { EditorialImage } from "@/components/media/EditorialImage";
import { CallToActionSection } from "@/components/layout/CallToActionSection";
import { PageHero } from "@/components/layout/PageHero";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { ProcessStep } from "@/components/sections/ProcessStep";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { TestimonialCard } from "@/components/sections/TestimonialCard";
import { ServiceCard } from "@/components/services/ServiceCard";
import { StudioProductPreview } from "@/components/studio/StudioProductPreview";
import { FeatureCard } from "@/components/sections/FeatureCard";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { conceptProjects, homeProcess, scenarios, studioFeatures, whyPoints } from "@/data/content";
import { faqsFor } from "@/data/faqs";
import { serviceCategories } from "@/data/services";
import { siteConfig } from "@/data/site";
import { visuals } from "@/data/visuals";

export default function HomePage() {
  return (
    <>
      <PageHero
        tone="navy"
        eyebrow="Creative technology and digital solutions"
        title="Your Vision. Our Creativity. Smarter Digital Solutions."
        description="From compelling brand identities to custom software and cloud infrastructure, Frinada Visuals helps ambitious businesses create, launch, and grow with confidence."
        actions={
          <>
            <Button href="/#solutions" variant="inverse" size="lg">
              Explore Our Solutions
            </Button>
            <Button href={siteConfig.studioHref} variant="inverse-secondary" size="lg">
              Discover Frinada Studio
            </Button>
          </>
        }
        aside={
          <div className="rounded-panel bg-white text-navy shadow-float">
            <div className="overflow-hidden rounded-[inherit]">
              <EditorialImage asset={visuals.hero} priority sizes="(min-width: 1024px) 42vw, 100vw" />
              <div className="p-6 sm:p-8">
                <BrandMark className="size-16" />
                <p className="mt-6 text-xs font-semibold tracking-[0.18em] text-red">WE DESIGN. WE BUILD. WE GROW.</p>
                <ul className="mt-6 divide-y divide-line">
                  {serviceCategories.map((category, index) => (
                    <li key={category.id} className="flex items-baseline gap-4 py-3">
                      <span className="font-heading text-sm font-bold text-red">0{index + 1}</span>
                      <span className="font-semibold">{category.shortName}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs font-semibold tracking-[0.14em] text-muted uppercase">Ghana · Creative technology</p>
              </div>
            </div>
          </div>
        }
      />

      <Section id="why" labelledBy="why-title" tone="paper">
        <SectionHeading
          id="why-title"
          eyebrow="Why Frinada Visuals"
          title="Where Creativity Meets Practical Technology."
          description="Design, software, and the work of going live are treated as one practice. The aim is a digital presence a business can explain, use, and look after."
        />
        <ol className="mt-12 divide-y divide-line border-y border-line">
          {whyPoints.map((point, index) => (
            <li key={point.id} className="grid gap-3 py-6 sm:grid-cols-[6rem_minmax(0,1fr)] sm:gap-8">
              <p className="font-heading text-sm font-bold tracking-[0.16em] text-red">0{index + 1}</p>
              <div>
                <h3 className="font-heading text-2xl font-bold text-navy">{point.title}</h3>
                <p className="mt-2 max-w-2xl text-base leading-relaxed text-muted">{point.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="solutions" labelledBy="solutions-title" tone="white">
        <SectionHeading
          id="solutions-title"
          eyebrow="Our solutions"
          title="Four ways we help a business show up and operate."
          description="The same categories run through services, pricing, Frinada Studio, and the enquiry form, so the language does not change from page to page."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {serviceCategories.map((category) => (
            <ServiceCard key={category.id} category={category} />
          ))}
        </div>
      </Section>

      <Section id="studio" labelledBy="studio-title" tone="mist">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div>
            <SectionHeading
              id="studio-title"
              eyebrow="Frinada Studio"
              title="Plan Better. Create Smarter. Start with Frinada Studio."
              description="Frinada Studio is a guided workspace for the early part of a project: choosing services, describing the work, seeing illustrative sample rates, and leaving with a structured brief. The version on this site is an interactive product preview, not a live portal."
            />
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {studioFeatures.map((feature, index) => (
                <FeatureCard key={feature.id} feature={feature} index={index} />
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <figure className="overflow-hidden rounded-panel border border-line/80 bg-white shadow-rest">
              <EditorialImage asset={visuals.clientInterface} sizes="(min-width: 1024px) 46vw, 100vw" />
              <figcaption className="px-5 py-4 text-sm leading-relaxed text-muted">
                A product interface delivered for a client. The preview below is Frinada Studio on this site, and it stays a guided demonstration.
              </figcaption>
            </figure>
            <StudioProductPreview />
          </div>
        </div>
      </Section>

      <Section labelledBy="process-title" tone="navy">
        <SectionHeading
          id="process-title"
          tone="inverse"
          eyebrow="How we work"
          title="A short path from the first conversation to handover."
        />
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {homeProcess.map((step) => (
            <ProcessStep key={step.id} step={step} tone="navy" />
          ))}
        </ol>
      </Section>

      <Section labelledBy="work-title">
        <SectionHeading
          id="work-title"
          eyebrow="Selected work"
          title="Work delivered for clients."
          description="These pictures are from client projects, shown as they were produced. They illustrate branding, websites, and product interfaces. They do not report results."
        />
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {conceptProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Section>

      <Section labelledBy="scenarios-title" tone="mist">
        <SectionHeading
          id="scenarios-title"
          eyebrow="Illustrative scenarios"
          title="How a brief might begin."
          description="These are written examples of the thinking, not quotations from customers. Frinada Visuals does not present fictional endorsements as testimonials."
        />
        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {scenarios.map((scenario) => (
            <TestimonialCard key={scenario.id} scenario={scenario} />
          ))}
        </div>
      </Section>

      <Section labelledBy="faq-title">
        <SectionHeading
          id="faq-title"
          eyebrow="Questions"
          title="Before you start a brief."
          description="A longer set of questions about quotations, timelines, and hosting is on the pricing page."
        />
        <div className="mt-10">
          <FAQAccordion faqs={faqsFor("home")} />
        </div>
      </Section>

      <CallToActionSection
        title="Have an Idea? Let's Build Something Meaningful."
        description="Bring a rough idea or a half-finished brief. Frinada Studio can help you organise it, and the enquiry form can turn it into a summary you keep."
        primaryHref={siteConfig.enquiryHref}
        primaryLabel="Start Your Project"
        secondaryHref={siteConfig.studioHref}
        secondaryLabel="Open Frinada Studio"
      />
    </>
  );
}
