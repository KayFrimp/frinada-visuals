import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function CallToActionSection({
  id,
  eyebrow = "Next step",
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section id={id} className="bg-navy text-on-navy">
      <Container className="py-16 sm:py-20">
        <div className="max-w-3xl border-l-2 border-white pl-4 sm:pl-5">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-on-navy">{eyebrow}</p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
          <p className="mt-4 text-base leading-relaxed text-on-navy sm:text-lg">{description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={primaryHref} variant="inverse" size="lg">
              {primaryLabel}
            </Button>
            {secondaryHref && secondaryLabel ? (
              <Button href={secondaryHref} variant="inverse-secondary" size="lg">
                {secondaryLabel}
              </Button>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
