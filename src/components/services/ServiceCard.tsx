import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ServiceGlyph } from "@/components/services/ServiceGlyph";
import type { ServiceCategory } from "@/types";

export function ServiceCard({ category }: { category: ServiceCategory }) {
  return (
    <article className="group relative flex h-full flex-col border border-line bg-white p-6 transition duration-200 ease-out hover:-translate-y-0.5 hover:border-navy hover:shadow-[0_10px_28px_rgba(2,0,81,0.08)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-8">
      <span className="inline-flex size-11 items-center justify-center border border-line bg-mist text-navy transition duration-200 group-hover:border-navy group-hover:bg-white motion-reduce:transition-none">
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
        className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-navy after:absolute after:inset-0"
      >
        Explore {category.shortName}
        <ArrowRight
          aria-hidden="true"
          className="size-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
        />
      </Link>
    </article>
  );
}
