import Link from "next/link";
import { ServiceGlyph } from "@/components/services/ServiceGlyph";
import type { ServiceCategory } from "@/types";

export function ServiceCard({ category }: { category: ServiceCategory }) {
  return (
    <article className="flex h-full flex-col border border-line bg-white p-6 transition-colors hover:border-navy sm:p-8">
      <span className="inline-flex size-11 items-center justify-center border border-line text-navy">
        <ServiceGlyph icon={category.icon} />
      </span>
      <h3 className="mt-6 font-heading text-2xl font-bold tracking-tight text-navy">{category.name}</h3>
      <p className="mt-3 text-base font-medium leading-relaxed text-ink">{category.valueProposition}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted">{category.homepageSummary}</p>
      <ul className="mt-5 space-y-2 text-sm text-body">
        {category.highlights.map((highlight) => (
          <li key={highlight} className="flex gap-2">
            <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 bg-red" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
      <Link
        href={`/services#${category.anchor}`}
        className="mt-auto pt-6 text-sm font-semibold text-navy underline decoration-red decoration-2 underline-offset-4"
      >
        Explore {category.shortName}
      </Link>
    </article>
  );
}
