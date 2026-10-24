import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { interactiveSurfaceClass } from "@/lib/styles";
import type { PricingPackage } from "@/types";

export function PricingCard({
  pkg,
  active,
  onSelect,
}: {
  pkg: PricingPackage;
  active: boolean;
  onSelect: () => void;
}) {
  return (
    <article
      className={cn(
        "flex h-full flex-col p-6 sm:p-8",
        interactiveSurfaceClass,
        active && "border-navy/40 shadow-raise",
        pkg.featured && "ring-1 ring-navy/15",
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-heading text-2xl font-bold text-navy">{pkg.name}</h3>
        {pkg.featured ? <Badge>Common starting point</Badge> : null}
      </div>
      <p className="mt-2 text-sm font-semibold text-ink">{pkg.audience}</p>
      <p className="mt-4 text-sm leading-relaxed text-muted">{pkg.summary}</p>
      <ul className="mt-5 space-y-2 text-sm text-body">
        {pkg.inclusions.map((inclusion) => (
          <li key={inclusion} className="flex gap-2">
            <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 bg-green" />
            <span>{inclusion}</span>
          </li>
        ))}
      </ul>
      <p className="mt-5 text-sm font-semibold text-navy">Quotation, not a fixed price</p>
      <Button type="button" variant={active ? "primary" : "secondary"} aria-pressed={active} onClick={onSelect} className="mt-6 w-full">
        {active ? "Comparing this package" : "Compare this package"}
      </Button>
    </article>
  );
}
