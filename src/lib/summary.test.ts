import { describe, expect, it } from "vitest";
import { formatEnquirySummary, formatProjectSummary } from "@/lib/summary";
import { calculateEstimate } from "@/lib/estimate";
import type { CatalogueItem, ProjectBrief } from "@/types";

const catalogue: CatalogueItem[] = [
  { id: "logo", categoryId: "brand", name: "Logo design", summary: "Mark", samplePricePesewas: 150000 },
  { id: "site", categoryId: "web", name: "Business website", summary: "Site", samplePricePesewas: null },
];

const brief: ProjectBrief = {
  serviceIds: ["logo", "site"],
  contactName: "Ama Mensah",
  email: "ama@example.com",
  organisation: "Harbour Studio",
  projectName: "Harbour refresh",
  description: "A clearer identity and a small website for a new practice.",
  budget: "2k-8k",
  timeline: "one-month",
};

describe("formatProjectSummary", () => {
  it("includes the brief, sample subtotal, custom quote, and demo limits", () => {
    const summary = formatProjectSummary(brief, calculateEstimate(brief.serviceIds, catalogue));

    expect(summary).toContain("Harbour refresh");
    expect(summary).toContain("Logo design: GHS 1,500.00 sample");
    expect(summary).toContain("Business website: Custom quote required");
    expect(summary).toContain("Sample subtotal: GHS 1,500.00");
    expect(summary).toContain("GHS 2,000 to 8,000");
    expect(summary).toContain("About 1 month");
    expect(summary).toContain("has not been sent");
    expect(summary).toContain("not a commercial offer");
  });
});

describe("formatEnquirySummary", () => {
  it("names the service category and does not claim the message was sent", () => {
    const summary = formatEnquirySummary(
      {
        fullName: "Ama Mensah",
        email: "ama@example.com",
        phone: "",
        organisation: "",
        categoryId: "brand",
        description: "Need a mark that can live on a website.",
        budget: "",
        timeline: "",
      },
      ["logo"],
    );

    expect(summary).toContain("Service category: Branding & Creative Design");
    expect(summary).toContain("Phone: Not provided");
    expect(summary).toContain("has not been sent");
  });
});
