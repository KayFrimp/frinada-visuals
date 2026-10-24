import { catalogue } from "@/data/services";
import type { CatalogueItem, Estimate, PricedLine } from "@/types";

export function uniqueIds(ids: readonly string[]): string[] {
  const seen = new Set<string>();
  const unique: string[] = [];

  for (const id of ids) {
    if (seen.has(id)) {
      continue;
    }
    seen.add(id);
    unique.push(id);
  }

  return unique;
}

export function toggleId(ids: readonly string[], id: string): string[] {
  return ids.includes(id) ? ids.filter((item) => item !== id) : [...ids, id];
}

export function calculateEstimate(
  selectedIds: readonly string[],
  catalogue: readonly CatalogueItem[],
): Estimate {
  const byId = new Map(catalogue.map((item) => [item.id, item]));
  const pricedItems: PricedLine[] = [];
  const customQuoteItems: CatalogueItem[] = [];
  let subtotalPesewas = 0;

  for (const id of uniqueIds(selectedIds)) {
    const item = byId.get(id);
    if (!item) {
      continue;
    }

    const price = item.samplePricePesewas;
    if (price === null || price < 0 || !Number.isInteger(price)) {
      customQuoteItems.push(item);
      continue;
    }

    subtotalPesewas += price;
    pricedItems.push({
      id: item.id,
      name: item.name,
      samplePricePesewas: price,
    });
  }

  if (subtotalPesewas < 0) {
    subtotalPesewas = 0;
  }

  return {
    pricedItems,
    customQuoteItems,
    subtotalPesewas,
    hasCustomQuote: customQuoteItems.length > 0,
    hasPricedItems: pricedItems.length > 0,
    isEmpty: pricedItems.length === 0 && customQuoteItems.length === 0,
  };
}

export function estimateSelection(selectedIds: readonly string[]): Estimate {
  return calculateEstimate(selectedIds, catalogue);
}
