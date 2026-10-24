import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { EditorialImage } from "@/components/media/EditorialImage";
import { ServiceGlyph } from "@/components/services/ServiceGlyph";
import { visuals } from "@/data/visuals";
import { interactiveSurfaceClass } from "@/lib/styles";
import type { ServiceCategory } from "@/types";

export function ServiceCard({ category }: { category: ServiceCategory }) {
  return (
    <article className={`group relative h-full ${interactiveSurfaceClass}`}>
      <div className="flex h-full flex-col overflow-hidden rounded-[inherit]">
        <EditorialImage asset={visuals.services[category.id]} sizes="(min-width: 768px) 50vw, 100vw" framed="3/2" />
        <div className="flex flex-1 flex-col p-6 sm:p-8">
          <span className="inline-flex size-12 items-center justify-center rounded-control bg-mist text-navy transition-[background-color,color] duration-200 ease-out-soft group-hover:bg-navy group-hover:text-white motion-reduce:transition-none">
            <ServiceGlyph icon={category.icon} />
          </span>
          <h3 className="mt-6 font-heading text-2xl font-bold leading-tight tracking-tight text-navy md:min-h-[2.5em]">{category.name}</h3>
          <p className="mt-3 text-base font-medium leading-relaxed text-ink md:min-h-[3.25em]">{category.valueProposition}</p>
          <p className="mt-3 text-sm leading-relaxed text-muted md:min-h-[4.875em]">{category.homepageSummary}</p>
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
              className="size-4 transition-transform duration-200 ease-out-soft group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}
