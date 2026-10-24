"use client";

import { serviceCategories, itemsForCategory } from "@/data/services";
import { formatSamplePrice } from "@/lib/currency";
import { toggleId } from "@/lib/estimate";
import { cn } from "@/lib/cn";

export function StudioServiceSelector({
  selectedIds,
  onChange,
  error,
}: {
  selectedIds: string[];
  onChange: (ids: string[]) => void;
  error?: string | null;
}) {
  return (
    <div>
      {error ? (
        <p id="studio-selection-error" tabIndex={-1} role="alert" className="mb-4 border border-red-deep/30 bg-[#fdecee] px-4 py-3 text-sm font-medium text-red-deep">
          {error}
        </p>
      ) : (
        <p className="mb-4 text-sm leading-relaxed text-muted">
          Select every service that belongs in this brief. You can choose more than one.
        </p>
      )}
      <div className="space-y-8">
        {serviceCategories.map((category) => (
          <fieldset key={category.id}>
            <legend className="font-heading text-lg font-bold text-navy">{category.name}</legend>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {itemsForCategory(category.id).map((item) => {
                const checked = selectedIds.includes(item.id);
                const quote = item.samplePricePesewas === null || item.samplePricePesewas < 0;
                return (
                  <label
                    key={item.id}
                    className={cn(
                      "flex h-full cursor-pointer flex-col border p-4 transition duration-200 ease-out motion-reduce:transition-none",
                      checked ? "border-navy bg-mist shadow-[0_8px_20px_rgba(2,0,81,0.06)]" : "border-line bg-white hover:border-navy",
                    )}
                  >
                    <span className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        className="mt-1 size-4 shrink-0 accent-navy"
                        checked={checked}
                        onChange={() => onChange(toggleId(selectedIds, item.id))}
                      />
                      <span className="font-semibold text-navy">{item.name}</span>
                    </span>
                    <span className="mt-2 pl-7 text-sm leading-relaxed text-muted">{item.summary}</span>
                    <span className="mt-3 pl-7 text-sm font-semibold text-ink">
                      {quote ? "Custom quote required" : `${formatSamplePrice(item.samplePricePesewas)} sample`}
                    </span>
                  </label>
                );
              })}
            </div>
          </fieldset>
        ))}
      </div>
    </div>
  );
}
