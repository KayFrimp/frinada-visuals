import { describe, expect, it } from "vitest";
import { catalogue } from "@/data/services";
import { calculateEstimate, toggleId } from "@/lib/estimate";
import type { CatalogueItem } from "@/types";

const fixture: CatalogueItem[] = [
  { id: "logo", categoryId: "brand", name: "Logo design", summary: "Mark", samplePricePesewas: 150000 },
  { id: "cards", categoryId: "brand", name: "Business cards", summary: "Cards", samplePricePesewas: 40000 },
  { id: "site", categoryId: "web", name: "Business website", summary: "Site", samplePricePesewas: null },
  { id: "free", categoryId: "cloud", name: "Notes", summary: "Zero", samplePricePesewas: 0 },
  { id: "bad", categoryId: "cloud", name: "Invalid", summary: "Bad", samplePricePesewas: -50 },
];

describe("calculateEstimate", () => {
  it("sums integer pesewas and ignores duplicates and unknown ids", () => {
    const estimate = calculateEstimate(["logo", "logo", "cards", "missing"], fixture);
    expect(estimate.subtotalPesewas).toBe(190000);
    expect(estimate.pricedItems.map((item) => item.id)).toEqual(["logo", "cards"]);
    expect(estimate.hasCustomQuote).toBe(false);
  });

  it("keeps a zero-priced selection in the subtotal without changing it", () => {
    const estimate = calculateEstimate(["free", "logo"], fixture);
    expect(estimate.subtotalPesewas).toBe(150000);
    expect(estimate.pricedItems.map((item) => item.name)).toContain("Notes");
  });

  it("treats null and negative prices as custom quotes and never returns a negative total", () => {
    const estimate = calculateEstimate(["site", "bad"], fixture);
    expect(estimate.subtotalPesewas).toBe(0);
    expect(estimate.hasPricedItems).toBe(false);
    expect(estimate.customQuoteItems.map((item) => item.id)).toEqual(["site", "bad"]);
    expect(estimate.hasCustomQuote).toBe(true);
  });

  it("reports an empty selection", () => {
    const estimate = calculateEstimate([], fixture);
    expect(estimate.isEmpty).toBe(true);
    expect(estimate.subtotalPesewas).toBe(0);
  });
});

describe("toggleId", () => {
  it("adds and removes without duplicating", () => {
    expect(toggleId(["logo"], "cards")).toEqual(["logo", "cards"]);
    expect(toggleId(["logo", "cards"], "logo")).toEqual(["cards"]);
    expect(toggleId(["logo"], "logo")).toEqual([]);
  });
});

describe("catalogue", () => {
  it("has unique ids and only known categories", () => {
    const ids = catalogue.map((item) => item.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const item of catalogue) {
      expect(["web", "brand", "marketing", "cloud"]).toContain(item.categoryId);
      if (item.samplePricePesewas !== null) {
        expect(Number.isInteger(item.samplePricePesewas)).toBe(true);
        expect(item.samplePricePesewas).toBeGreaterThan(0);
      }
    }
  });
});
