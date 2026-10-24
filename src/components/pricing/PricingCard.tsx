import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/cn";
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
        "flex h-full flex-col border bg-white p-6 transition duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(2,0,81,0.08)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-8",
        active ? "border-navy shadow-[0_10px_28px_rgba(2,0,81,0.12)]" : "border-line hover:border-navy",
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
      <button
        type="button"
        aria-pressed={active}
        onClick={onSelect}
        className={cn(
          "mt-6 min-h-11 border px-4 text-sm font-semibold transition duration-200 motion-reduce:transition-none",
          active ? "border-navy bg-navy text-white" : "border-navy text-navy hover:bg-mist active:bg-line",
        )}
      >
        {active ? "Comparing this package" : "Compare this package"}
      </button>
    </article>
  );
}
