"use client";

import { serviceCategories, itemsForCategory } from "@/data/services";
import { formatSamplePrice } from "@/lib/currency";
import { toggleId } from "@/lib/estimate";
import { cn } from "@/lib/cn";
import { EstimateReadout } from "@/components/studio/EstimateReadout";
import { estimateSelection } from "@/lib/estimate";

export function StudioCostEstimator({
  selectedIds,
  onChange,
}: {
  selectedIds: string[];
  onChange: (ids: string[]) => void;
}) {
  const estimate = estimateSelection(selectedIds);

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_300px]">
      <div className="space-y-8">
        {serviceCategories.map((category) => (
          <fieldset key={category.id} className="min-w-0">
            <legend className="font-heading text-lg font-bold text-navy">{category.name}</legend>
            <div className="mt-3 grid gap-2">
              {itemsForCategory(category.id).map((item) => {
                const checked = selectedIds.includes(item.id);
                const quote = item.samplePricePesewas === null || item.samplePricePesewas < 0;
                return (
                  <label
                    key={item.id}
                    className={cn(
                      "flex cursor-pointer gap-3 rounded-card border px-3 py-3 text-sm shadow-rest transition-[border-color,background-color,box-shadow] duration-200 ease-out-soft motion-reduce:transition-none",
                      checked ? "border-navy/40 bg-mist shadow-raise" : "border-line/80 bg-white hover:border-navy/25",
                    )}
                  >
                    <input
                      type="checkbox"
                      className="mt-1 size-4 accent-navy"
                      checked={checked}
                      onChange={() => onChange(toggleId(selectedIds, item.id))}
                    />
                    <span className="min-w-0 flex-1">
                      <span className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                        <span className="font-semibold text-navy">{item.name}</span>
                        <span className="text-muted">{quote ? "Custom quote required" : `${formatSamplePrice(item.samplePricePesewas)} sample`}</span>
                      </span>
                      <span className="mt-1 block leading-relaxed text-muted">{item.summary}</span>
                    </span>
                  </label>
                );
              })}
            </div>
          </fieldset>
        ))}
      </div>
      <div className="lg:sticky lg:top-24 lg:self-start">
        <EstimateReadout estimate={estimate} />
      </div>
    </div>
  );
}
