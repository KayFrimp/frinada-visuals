import { SAMPLE_RATE_NOTE } from "@/data/site";
import { formatGhsFromPesewas } from "@/lib/currency";
import type { Estimate } from "@/types";
import { EmptyState } from "@/components/ui/EmptyState";

export function EstimateReadout({ estimate }: { estimate: Estimate }) {
  const total = formatGhsFromPesewas(estimate.subtotalPesewas);
  const live = estimate.isEmpty
    ? "No services selected. Sample subtotal GHS 0.00."
    : `Sample subtotal ${total}. ${estimate.customQuoteItems.length} ${estimate.customQuoteItems.length === 1 ? "service needs" : "services need"} a custom quote.`;

  return (
    <div className="rounded-card border border-line/80 bg-white p-5 shadow-rest">
      <p className="text-xs font-semibold tracking-[0.16em] text-red uppercase">Illustrative estimate</p>
      <p className="mt-3 font-heading text-3xl font-bold tracking-tight text-navy">{estimate.isEmpty ? "—" : total}</p>
      <p className="mt-1 text-sm text-muted">Sample subtotal</p>
      <p className="sr-only" aria-live="polite">
        {live}
      </p>
      {estimate.isEmpty ? (
        <div className="mt-4">
          <EmptyState title="Nothing selected yet" description="Choose one or more services. The sample subtotal updates immediately." />
        </div>
      ) : (
        <div className="mt-4 space-y-4">
          {estimate.hasPricedItems ? (
            <ul className="space-y-2 text-sm">
              {estimate.pricedItems.map((item) => (
                <li key={item.id} className="flex items-start justify-between gap-3">
                  <span className="text-body">{item.name}</span>
                  <span className="shrink-0 font-semibold text-navy">{formatGhsFromPesewas(item.samplePricePesewas)}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm leading-relaxed text-muted">
              The sample subtotal is GHS 0.00 because every selected service is quoted individually.
            </p>
          )}
          {estimate.hasCustomQuote ? (
            <div>
              <p className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">Custom quote required</p>
              <ul className="mt-2 space-y-1 text-sm text-body">
                {estimate.customQuoteItems.map((item) => (
                  <li key={item.id}>{item.name}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      )}
      <p className="mt-4 text-xs leading-relaxed text-muted">{SAMPLE_RATE_NOTE}</p>
    </div>
  );
}
