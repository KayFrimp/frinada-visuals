import Image from "next/image";
import { CallToActionSection } from "@/components/layout/CallToActionSection";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHero } from "@/components/layout/PageHero";
import { ProcessStep } from "@/components/sections/ProcessStep";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EditorialImage } from "@/components/media/EditorialImage";
import { brandAssets } from "@/components/brand/Logo";
import { visuals } from "@/data/visuals";
import { approachSteps, values, whyFrinada } from "@/data/content";
import { siteConfig } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "About Frinada Visuals | Excellence in Simplicity",
  description:
    "Frinada Visuals is a Ghana-based creative technology company. Read the mission, vision, values, and the way the work is approached.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Creativity Meets Technology. Simplicity Makes the Difference."
        description="Frinada Visuals brings brand, software, digital presence, and deployment into one practice, so a business does not have to translate itself between four different suppliers."
        breadcrumbs={<Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />}
      />
      <Section labelledBy="story-title">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div>
            <SectionHeading id="story-title" eyebrow="The practice" title="From creative design toward a wider digital practice." />
            <div className="mt-6 max-w-2xl space-y-4 text-base leading-relaxed text-muted">
              <p>
                Frinada Visuals began in creative design: identities, print, and visual communication for businesses that wanted to look clear and considered. The slogan still names that instinct. Excellence in simplicity.
              </p>
              <p>
                The work kept meeting the same next question. A brand can be ready while the website, the tools, and the infrastructure are not. The company is growing into a creative technology practice so those steps can be planned together. Design stays at the centre. Software, digital presence, and cloud deployment are how that design becomes useful in the day-to-day of a business.
              </p>
              <p>
                This website is part of that direction. Frinada Studio, shown as an interactive preview, is the product idea for making the first steps of a project easier to organise. It is not a claim that a customer portal already exists.
              </p>
              <p>
                Frinada Visuals is based in Ghana. Projects can stay local or reach further, with the same attention to a clear brand and software a business can actually use.
              </p>
            </div>
          </div>
          <figure className="space-y-4">
            <div className="rounded-panel border border-line/80 bg-white p-6 shadow-rest sm:p-8">
              <Image
                src={brandAssets.lockup.src}
                alt="Frinada Visuals logo. Excellence in Simplicity."
                width={brandAssets.lockup.width}
                height={brandAssets.lockup.height}
                className="h-auto w-full"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-panel border border-line/80 bg-mist shadow-rest">
              <Image
                src="/brand/lockup-print.jpg"
                alt="The same Frinada Visuals lockup, photographed in print on textured paper."
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 480px, 100vw"
              />
            </div>
            <div className="overflow-hidden rounded-panel border border-line/80 bg-mist shadow-rest">
              <EditorialImage asset={visuals.hero} sizes="(min-width: 1024px) 480px, 100vw" />
            </div>
            <figcaption className="text-sm leading-relaxed text-muted">
              The Frinada Visuals lockup, and a product presentation from client work, shown as it was produced.
            </figcaption>
          </figure>
        </div>
      </Section>
      <Section tone="navy" labelledBy="mission-title">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 id="mission-title" className="font-heading text-sm font-bold tracking-[0.16em] text-on-navy uppercase">
              Mission
            </h2>
            <p className="mt-4 font-heading text-3xl font-bold leading-tight tracking-tight text-white">
              To simplify technology and creativity by delivering accessible, reliable, and thoughtfully designed digital solutions that help businesses succeed.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-sm font-bold tracking-[0.16em] text-on-navy uppercase">Vision</h2>
            <p className="mt-4 font-heading text-3xl font-bold leading-tight tracking-tight text-white">
              To become a trusted creative technology company empowering businesses across Africa and beyond.
            </p>
          </div>
        </div>
      </Section>
      <Section labelledBy="values-title">
        <SectionHeading id="values-title" eyebrow="Values" title="What the work is held to." />
        <ol className="mt-10 divide-y divide-line border-y border-line">
          {values.map((value) => (
            <li key={value.id} className="grid gap-2 py-6 sm:grid-cols-[14rem_minmax(0,1fr)] sm:gap-8">
              <h3 className="font-heading text-xl font-bold text-navy">{value.title}</h3>
              <p className="text-base leading-relaxed text-muted">{value.description}</p>
            </li>
          ))}
        </ol>
      </Section>
      <Section labelledBy="approach-title" tone="mist">
        <SectionHeading id="approach-title" eyebrow="Approach" title="Understand, plan, create, refine, deliver." />
        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {approachSteps.map((step) => (
            <ProcessStep key={step.id} step={step} tone="light" />
          ))}
        </ol>
      </Section>
      <Section labelledBy="why-about-title">
        <SectionHeading id="why-about-title" eyebrow="Why Frinada Visuals" title="A practical reason to start here." />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {whyFrinada.map((point) => (
            <article key={point.id} className="border-t-2 border-navy pt-4">
              <h3 className="font-heading text-xl font-bold text-navy">{point.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{point.description}</p>
            </article>
          ))}
        </div>
      </Section>
      <CallToActionSection
        title="Tell us what you are trying to make possible."
        description="A brand, a site, a piece of software, or the plan to put them online. Start with the work, not with a package name."
        primaryHref={siteConfig.enquiryHref}
        primaryLabel="Start a project"
        secondaryHref="/services"
        secondaryLabel="Review the services"
      />
    </>
  );
}
