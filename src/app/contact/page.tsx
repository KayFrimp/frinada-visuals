import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHero } from "@/components/layout/PageHero";
import { ContactForm } from "@/components/forms/ContactForm";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqsFor } from "@/data/faqs";
import { serviceCategories } from "@/data/services";
import { siteConfig } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";
import { textLinkClass } from "@/lib/styles";
import Link from "next/link";

export const metadata = createPageMetadata({
  title: "Contact Frinada Visuals | Start Your Project",
  description:
    "Prepare a Frinada Visuals project brief in your browser. The form does not send information to a server.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Build Something Exceptional."
        description="Tell us what you're working on. Whether it's a brand, website, software solution, digital campaign, or cloud deployment, we'd love to understand your goals."
        breadcrumbs={<Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />}
      />
      <Section>
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          <ContactForm />
          <aside className="space-y-8 lg:sticky lg:top-24">
            <div>
              <h2 className="font-heading text-2xl font-bold text-navy">How an enquiry works here</h2>
              <ol className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
                <li>1. Describe the work, or bring a summary from Frinada Studio.</li>
                <li>2. Prepare the brief. It stays in your browser.</li>
                <li>3. Copy or download it, and share it when you have a confirmed channel.</li>
              </ol>
            </div>
            <div className="rounded-card border border-line/80 bg-mist p-5">
              <h2 className="font-heading text-lg font-bold text-navy">How to reach Frinada Visuals</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Use the project form. It prepares a summary in your browser for you to copy or download. This page does not publish a phone number, email address, or office, and the form does not send the brief to a server.
              </p>
            </div>
            <div>
              <h2 className="font-heading text-lg font-bold text-navy">What you can ask about</h2>
              <ul className="mt-3 space-y-2 text-sm">
                {serviceCategories.map((category) => (
                  <li key={category.id}>
                    <Link href={`/services#${category.anchor}`} className={textLinkClass}>
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                If you would rather shape the brief first,{" "}
                <Link href={siteConfig.studioHref} className={textLinkClass}>
                  open Frinada Studio
                </Link>
                . Selections made there can be brought into this form without putting them in the address bar.
              </p>
            </div>
          </aside>
        </div>
      </Section>
      <Section labelledBy="contact-faq-title" tone="mist">
        <SectionHeading id="contact-faq-title" eyebrow="Questions" title="Before you prepare a brief." />
        <div className="mt-8">
          <FAQAccordion faqs={faqsFor("contact")} />
        </div>
      </Section>
    </>
  );
}
