import { describe, expect, it } from "vitest";
import { formatGhsFromPesewas, formatSamplePrice } from "@/lib/currency";

describe("formatGhsFromPesewas", () => {
  it("formats whole cedis", () => {
    expect(formatGhsFromPesewas(150000)).toBe("GHS 1,500.00");
  });

  it("formats pesewas without floating-point drift", () => {
    expect(formatGhsFromPesewas(10)).toBe("GHS 0.10");
    expect(formatGhsFromPesewas(1)).toBe("GHS 0.01");
  });

  it("formats zero", () => {
    expect(formatGhsFromPesewas(0)).toBe("GHS 0.00");
  });

  it("formats a negative amount for safety", () => {
    expect(formatGhsFromPesewas(-250)).toBe("-GHS 2.50");
  });

  it("rejects non-integers", () => {
    expect(() => formatGhsFromPesewas(10.5)).toThrow(/integer pesewas/);
  });
});

describe("formatSamplePrice", () => {
  it("labels missing and invalid prices as custom quotes", () => {
    expect(formatSamplePrice(null)).toBe("Custom quote required");
    expect(formatSamplePrice(-1)).toBe("Custom quote required");
  });
});
