import { ServiceGlyph } from "@/components/services/ServiceGlyph";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";
import { itemsForCategory } from "@/data/services";
import { formatSamplePrice } from "@/lib/currency";
import type { ServiceCategory } from "@/types";

export function ServiceCategorySection({
  category,
  variant,
}: {
  category: ServiceCategory;
  variant: "split" | "band" | "notes" | "list";
}) {
  const items = itemsForCategory(category.id);

  if (variant === "band") {
    return (
      <section id={category.anchor} aria-labelledby={`${category.anchor}-title`} className="scroll-mt-24 bg-navy text-on-navy">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <CategoryIntro category={category} inverse />
          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {items.map((item) => (
              <li key={item.id} className="rounded-card border border-white/15 px-4 py-3">
                <p className="font-semibold text-white">{item.name}</p>
                <p className="mt-1 text-sm leading-relaxed text-on-navy">{item.summary}</p>
              </li>
            ))}
          </ul>
          <BenefitRow benefits={category.benefits} inverse />
        </div>
      </section>
    );
  }

  return (
    <section id={category.anchor} aria-labelledby={`${category.anchor}-title`} className="scroll-mt-24 border-b border-line bg-white">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:px-10 lg:py-24">
        <CategoryIntro category={category} />
        {variant === "notes" ? (
          <div>
            <ol className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {category.benefits.map((benefit, index) => (
                <li key={benefit} className="rounded-card border border-line/80 bg-mist p-4">
                  <p className="font-heading text-sm font-bold text-red">0{index + 1}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink">{benefit}</p>
                </li>
              ))}
            </ol>
            <ItemList items={items} className="mt-6" />
          </div>
        ) : (
          <div className={variant === "list" ? "border-l-2 border-navy pl-5" : "rounded-panel border border-line/80 bg-paper p-6 shadow-rest sm:p-8"}>
            <h3 className="font-heading text-lg font-bold text-navy">What this can include</h3>
            <ItemList items={items} className="mt-4" />
            <BenefitRow benefits={category.benefits} />
          </div>
        )}
      </div>
    </section>
  );
}

function CategoryIntro({ category, inverse = false }: { category: ServiceCategory; inverse?: boolean }) {
  return (
    <div>
      <span className={inverse ? "inline-flex size-12 items-center justify-center rounded-control border border-white/20 text-white" : "inline-flex size-12 items-center justify-center rounded-control bg-mist text-navy"}>
        <ServiceGlyph icon={category.icon} />
      </span>
      <h2 id={`${category.anchor}-title`} className={inverse ? "mt-6 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl" : "mt-6 font-heading text-3xl font-bold tracking-tight text-navy sm:text-4xl"}>
        {category.name}
      </h2>
      <p className={inverse ? "mt-4 text-lg font-medium leading-relaxed text-white" : "mt-4 text-lg font-medium leading-relaxed text-ink"}>
        {category.valueProposition}
      </p>
      <p className={inverse ? "mt-4 max-w-xl text-base leading-relaxed text-on-navy" : "mt-4 max-w-xl text-base leading-relaxed text-muted"}>
        {category.description}
      </p>
      <CategoryActions inverse={inverse} />
    </div>
  );
}

function ItemList({
  items,
  className,
}: {
  items: ReturnType<typeof itemsForCategory>;
  className?: string;
}) {
  return (
    <ul className={className}>
      {items.map((item) => {
        const quote = item.samplePricePesewas === null || item.samplePricePesewas < 0;
        return (
          <li key={item.id} className="border-b border-line py-3 last:border-b-0">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <p className="font-semibold text-navy">{item.name}</p>
              <p className="text-sm text-muted">{quote ? "Custom quote required" : `${formatSamplePrice(item.samplePricePesewas)} sample`}</p>
            </div>
            <p className="mt-1 text-sm leading-relaxed text-muted">{item.summary}</p>
          </li>
        );
      })}
    </ul>
  );
}

function BenefitRow({ benefits, inverse = false }: { benefits: string[]; inverse?: boolean }) {
  return (
    <ul className="mt-8 grid gap-3 sm:grid-cols-3">
      {benefits.map((benefit) => (
        <li key={benefit} className={inverse ? "text-sm leading-relaxed text-on-navy" : "text-sm leading-relaxed text-muted"}>
          <span aria-hidden="true" className={inverse ? "mr-2 inline-block size-1.5 bg-white align-middle" : "mr-2 inline-block size-1.5 bg-red align-middle"} />
          {benefit}
        </li>
      ))}
    </ul>
  );
}

function CategoryActions({ inverse = false }: { inverse?: boolean }) {
  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      <Button href={siteConfig.studioHref} variant={inverse ? "inverse" : "primary"} size="lg">
        Plan this in Frinada Studio
      </Button>
      <Button href={siteConfig.enquiryHref} variant={inverse ? "inverse-secondary" : "secondary"} size="lg">
        Request a consultation
      </Button>
    </div>
  );
}
