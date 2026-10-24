export type ServiceCategoryId = "web" | "brand" | "marketing" | "cloud";

export type ServiceIcon = "code" | "pen" | "signal" | "cloud";

export type ServiceCategory = {
  id: ServiceCategoryId;
  name: string;
  shortName: string;
  anchor: string;
  icon: ServiceIcon;
  valueProposition: string;
  homepageSummary: string;
  description: string;
  highlights: string[];
  benefits: string[];
};

export type CatalogueItem = {
  id: string;
  categoryId: ServiceCategoryId;
  name: string;
  summary: string;
  /**
   * Illustrative sample rate in integer pesewas.
   * Null means the engagement is quoted individually.
   * Negative values are treated as invalid and quoted instead.
   */
  samplePricePesewas: number | null;
};

export type PackageId = "starter" | "growth" | "premium";

export type PricingPackage = {
  id: PackageId;
  name: string;
  audience: string;
  summary: string;
  inclusions: string[];
  featured?: boolean;
};

export type ComparisonRow = {
  id: string;
  label: string;
  values: Record<PackageId, string>;
};

export type FaqPlacement = "home" | "pricing" | "contact";

export type Faq = {
  id: string;
  question: string;
  answer: string;
  placements: FaqPlacement[];
};

export type ConceptProject = {
  id: string;
  title: string;
  service: string;
  summary: string;
  focus: string[];
};

export type IllustrativeScenario = {
  id: string;
  title: string;
  context: string;
  approach: string;
};

export type ProcessStep = {
  id: string;
  step: string;
  title: string;
  description: string;
};

export type Value = {
  id: string;
  title: string;
  description: string;
};

export type StudioFeature = {
  id: string;
  title: string;
  description: string;
};

export type SelectOption = {
  id: string;
  label: string;
};

export type ProjectBrief = {
  serviceIds: string[];
  contactName: string;
  email: string;
  organisation: string;
  projectName: string;
  description: string;
  budget: string;
  timeline: string;
};

export type PricedLine = {
  id: string;
  name: string;
  samplePricePesewas: number;
};

export type Estimate = {
  pricedItems: PricedLine[];
  customQuoteItems: CatalogueItem[];
  subtotalPesewas: number;
  hasCustomQuote: boolean;
  hasPricedItems: boolean;
  isEmpty: boolean;
};

export type NavItem = {
  href: "/" | "/services" | "/pricing" | "/about" | "/contact";
  label: string;
};
