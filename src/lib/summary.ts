import { enquiryCategories, getCatalogueItem } from "@/data/services";
import { labelForOption, budgetOptions, timelineOptions } from "@/data/pricing";
import { estimateSelection } from "@/lib/estimate";
import { formatGhsFromPesewas } from "@/lib/currency";
import type { Estimate, ProjectBrief } from "@/types";

export function formatProjectSummary(brief: ProjectBrief, estimate: Estimate): string {
  const serviceLines = brief.serviceIds.length
    ? uniqueNames(brief.serviceIds)
    : ["None selected"];

  const pricedLines = estimate.pricedItems.length
    ? estimate.pricedItems.map(
        (item) => `- ${item.name}: ${formatGhsFromPesewas(item.samplePricePesewas)} sample`,
      )
    : ["- None"];

  const quoteLines = estimate.customQuoteItems.length
    ? estimate.customQuoteItems.map((item) => `- ${item.name}: Custom quote required`)
    : ["- None"];

  return [
    "FRINADA VISUALS — PROJECT SUMMARY",
    "Interactive product preview. This summary was prepared in your browser.",
    "It has not been sent, saved to an account, approved as a quotation, or paid.",
    "",
    `Project name: ${textOrFallback(brief.projectName, "Untitled project")}`,
    `Contact name: ${textOrFallback(brief.contactName, "Not provided")}`,
    `Email: ${textOrFallback(brief.email, "Not provided")}`,
    `Organisation: ${textOrFallback(brief.organisation, "Not provided")}`,
    "",
    "Description:",
    textOrFallback(brief.description, "Not provided"),
    "",
    "Selected services:",
    ...serviceLines.map((name) => `- ${name}`),
    "",
    "Sample-priced items:",
    ...pricedLines,
    `Sample subtotal: ${formatGhsFromPesewas(estimate.subtotalPesewas)}`,
    "",
    "Custom quotation:",
    ...quoteLines,
    "",
    `Budget preference: ${labelForOption(budgetOptions, brief.budget)}`,
    `Timeline preference: ${labelForOption(timelineOptions, brief.timeline)}`,
    "",
    "Sample rates are illustrative figures for this preview. They are not a commercial offer.",
    "Services marked Custom quote required are priced only after the scope is understood.",
  ].join("\n");
}

export function formatEnquirySummary(
  values: {
    fullName: string;
    email: string;
    phone: string;
    organisation: string;
    categoryId: string;
    description: string;
    budget: string;
    timeline: string;
  },
  serviceIds: readonly string[],
): string {
  const category = enquiryCategories.find((item) => item.id === values.categoryId)?.label ?? "Not specified";
  const estimate = estimateSelection(serviceIds);
  const summary = formatProjectSummary(
    {
      serviceIds: [...serviceIds],
      contactName: values.fullName,
      email: values.email,
      organisation: values.organisation,
      projectName: "Project enquiry",
      description: values.description,
      budget: values.budget,
      timeline: values.timeline,
    },
    estimate,
  );

  return summary.replace(
    "Project name: Project enquiry",
    `Service category: ${category}\nPhone: ${values.phone.trim() || "Not provided"}`,
  );
}

function uniqueNames(ids: readonly string[]): string[] {
  const names: string[] = [];
  const seen = new Set<string>();

  for (const id of ids) {
    if (seen.has(id)) {
      continue;
    }
    seen.add(id);
    const item = getCatalogueItem(id);
    if (item) {
      names.push(item.name);
    }
  }

  return names.length ? names : ["None selected"];
}

function textOrFallback(value: string, fallback: string): string {
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : fallback;
}
