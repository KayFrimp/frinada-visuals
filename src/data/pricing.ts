import type { ComparisonRow, PricingPackage, SelectOption } from "@/types";

export const pricingPackages: PricingPackage[] = [
  {
    id: "starter",
    name: "Starter",
    audience: "Individuals and early-stage businesses",
    summary:
      "A focused starting point when the first need is a clearer identity and practical guidance on what to publish.",
    inclusions: [
      "Initial brand consultation",
      "Basic visual identity scope",
      "Digital presence guidance",
      "A written note on sensible next steps",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    audience: "Businesses expanding their digital presence",
    summary:
      "A combined look at brand and a business website, with basic search considerations included in the scoping.",
    inclusions: [
      "Brand identity package scope",
      "Business website scope",
      "Basic SEO considerations",
      "One quotation covering the combined work",
    ],
    featured: true,
  },
  {
    id: "premium",
    name: "Premium",
    audience: "Organisations needing integrated digital solutions",
    summary:
      "A wider engagement for teams that need brand, software, and deployment considered as one plan.",
    inclusions: [
      "Custom software consultation",
      "Brand and digital strategy",
      "Cloud deployment planning",
      "A scope that can draw on every service category",
    ],
  },
];

export const comparisonRows: ComparisonRow[] = [
  {
    id: "branding",
    label: "Branding scope",
    values: {
      starter: "Consultation and a basic identity scope",
      growth: "Identity package scope",
      premium: "Identity considered inside a wider strategy",
    },
  },
  {
    id: "website",
    label: "Website development",
    values: {
      starter: "Guidance on what to build first",
      growth: "Business website scope",
      premium: "Website or custom software, planned together",
    },
  },
  {
    id: "marketing",
    label: "Digital marketing support",
    values: {
      starter: "Presence guidance",
      growth: "Basic on-page SEO considerations",
      premium: "Marketing approach included in the strategy",
    },
  },
  {
    id: "cloud",
    label: "Cloud consultation",
    values: {
      starter: "Not included in this scope",
      growth: "Can be added during scoping",
      premium: "Deployment planning included",
    },
  },
  {
    id: "customisation",
    label: "Customisation",
    values: {
      starter: "A narrow starting scope",
      growth: "Brand and website combined",
      premium: "Scope shaped around the organisation",
    },
  },
  {
    id: "support",
    label: "Support scope",
    values: {
      starter: "Handover notes",
      growth: "Launch support agreed in the quotation",
      premium: "Launch and early-life support agreed in the quotation",
    },
  },
  {
    id: "consultation",
    label: "Consultation availability",
    values: {
      starter: "Initial consultation",
      growth: "Scoping conversations for the combined work",
      premium: "Working sessions across brand, product, and deployment",
    },
  },
];

export const budgetOptions: SelectOption[] = [
  { id: "unsure", label: "Not sure yet" },
  { id: "under-2k", label: "Under GHS 2,000" },
  { id: "2k-8k", label: "GHS 2,000 to 8,000" },
  { id: "8k-20k", label: "GHS 8,000 to 20,000" },
  { id: "over-20k", label: "Above GHS 20,000" },
  { id: "discuss", label: "I would rather discuss this" },
];

export const timelineOptions: SelectOption[] = [
  { id: "unsure", label: "Not sure yet" },
  { id: "two-weeks", label: "Within 2 weeks" },
  { id: "one-month", label: "About 1 month" },
  { id: "one-to-three", label: "1 to 3 months" },
  { id: "flexible", label: "Flexible" },
];

export function labelForOption(options: readonly SelectOption[], id: string): string {
  return options.find((option) => option.id === id)?.label ?? "Not specified";
}
