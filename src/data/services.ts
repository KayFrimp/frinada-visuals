import type { CatalogueItem, ServiceCategory } from "@/types";

export const serviceCategories: ServiceCategory[] = [
  {
    id: "web",
    name: "Web & Software Development",
    shortName: "Web & software",
    anchor: "web-software",
    icon: "code",
    valueProposition: "Digital experiences engineered for real business needs.",
    homepageSummary:
      "Websites, web applications, and business systems planned around the work your team and customers actually do.",
    description:
      "A website or system should make a specific job easier: explaining an offer, taking an order, collecting an enquiry, or keeping the work of a business in one place. Frinada Visuals designs and builds those experiences with attention to usability, reliability, and the way the work may need to grow later.",
    highlights: [
      "Business and corporate websites",
      "Web applications and business systems",
      "Maintenance and practical improvements",
    ],
    benefits: [
      "A structure visitors can follow without a tour",
      "Engineering decisions explained in plain language",
      "Room to extend the work after launch",
    ],
  },
  {
    id: "brand",
    name: "Branding & Creative Design",
    shortName: "Branding",
    anchor: "branding",
    icon: "pen",
    valueProposition: "Distinctive brands built with purpose and simplicity.",
    homepageSummary:
      "Identities, stationery, and campaign materials that give a business a clear and consistent face.",
    description:
      "Branding is an established part of Frinada Visuals, not a side note to the technology work. An identity should be recognisable, usable across print and screen, and simple enough for a team to apply without a designer in the room every time.",
    highlights: [
      "Logo and identity systems",
      "Stationery and print",
      "Social and promotional graphics",
    ],
    benefits: [
      "A mark and a system, not a single isolated file",
      "Materials a business can use immediately",
      "Visual decisions that stay consistent as the offer grows",
    ],
  },
  {
    id: "marketing",
    name: "Digital Marketing & Online Presence",
    shortName: "Digital marketing",
    anchor: "digital-marketing",
    icon: "signal",
    valueProposition: "Helping ambitious brands become more visible and effective online.",
    homepageSummary:
      "Search foundations, content direction, and campaign pages that make a business easier to find and understand.",
    description:
      "Visibility comes from clear pages, useful content, and a presence that matches the brand. Frinada Visuals helps with that groundwork. This is not a promise of rankings, conversion rates, or revenue. Those outcomes depend on the market, the offer, and the work that follows.",
    highlights: [
      "Search and content foundations",
      "Social branding",
      "Campaign landing pages",
    ],
    benefits: [
      "Pages that explain the offer before they ask for anything",
      "A content direction a small team can sustain",
      "Campaign material that belongs to the same brand",
    ],
  },
  {
    id: "cloud",
    name: "Cloud & Digital Infrastructure",
    shortName: "Cloud",
    anchor: "cloud-infrastructure",
    icon: "cloud",
    valueProposition: "Reliable digital foundations for growing businesses.",
    homepageSummary:
      "Hosting, domains, business email, and deployment planning so a finished project can go live with fewer surprises.",
    description:
      "A brand and a website still need a place to live. Frinada Visuals helps businesses set up hosting, connect a domain, configure business email, and plan how an application is deployed. The company does not claim to own cloud infrastructure, hold unnamed certifications, or guarantee uptime.",
    highlights: [
      "Hosting and deployment",
      "Domains and business email",
      "Performance and infrastructure advice",
    ],
    benefits: [
      "A launch path written down before the launch week",
      "Domain and email choices that match the brand",
      "Advice that stays proportional to the size of the business",
    ],
  },
];

export const catalogue: CatalogueItem[] = [
  {
    id: "business-website",
    categoryId: "web",
    name: "Business website",
    summary: "A multi-page site for presenting a company, its services, and a way to enquire.",
    samplePricePesewas: null,
  },
  {
    id: "ecommerce-website",
    categoryId: "web",
    name: "E-commerce website",
    summary: "An online shop scoped around catalogue size, payments, and who will maintain it.",
    samplePricePesewas: null,
  },
  {
    id: "custom-web-app",
    categoryId: "web",
    name: "Custom web application",
    summary: "Software shaped around a workflow that a template cannot carry.",
    samplePricePesewas: null,
  },
  {
    id: "business-system",
    categoryId: "web",
    name: "Business management system",
    summary: "An internal tool for tracking the work, records, or operations of a business.",
    samplePricePesewas: null,
  },
  {
    id: "landing-page",
    categoryId: "web",
    name: "Landing page",
    summary: "A single focused page for an offer, event, or announcement.",
    samplePricePesewas: 280000,
  },
  {
    id: "customer-portal",
    categoryId: "web",
    name: "Customer portal",
    summary: "A signed-in area for customers to view information that belongs to them.",
    samplePricePesewas: null,
  },
  {
    id: "website-maintenance",
    categoryId: "web",
    name: "Website maintenance and optimisation",
    summary: "Ongoing care, small improvements, and performance housekeeping after launch.",
    samplePricePesewas: null,
  },
  {
    id: "logo-design",
    categoryId: "brand",
    name: "Logo design",
    summary: "A primary mark and the basic files needed to start using it.",
    samplePricePesewas: 150000,
  },
  {
    id: "brand-identity",
    categoryId: "brand",
    name: "Brand identity system",
    summary: "Colour, type, and usage rules so the mark can be applied consistently.",
    samplePricePesewas: null,
  },
  {
    id: "stationery",
    categoryId: "brand",
    name: "Corporate stationery",
    summary: "Letterhead, a compliment slip, and a small set of related print pieces.",
    samplePricePesewas: 80000,
  },
  {
    id: "business-cards",
    categoryId: "brand",
    name: "Business cards",
    summary: "A card layout prepared for print, using the existing or new identity.",
    samplePricePesewas: 40000,
  },
  {
    id: "flyers-posters",
    categoryId: "brand",
    name: "Flyers and posters",
    summary: "A short run of promotional print designed for a specific message.",
    samplePricePesewas: 60000,
  },
  {
    id: "social-graphics",
    categoryId: "brand",
    name: "Social media graphics",
    summary: "A starter set of templates for posts and profile imagery.",
    samplePricePesewas: 95000,
  },
  {
    id: "promotional-materials",
    categoryId: "brand",
    name: "Promotional materials",
    summary: "Broader campaign pieces whose scope depends on format and quantity.",
    samplePricePesewas: null,
  },
  {
    id: "branding-package",
    categoryId: "brand",
    name: "Branding package",
    summary: "A combined identity and application scope, confirmed after a consultation.",
    samplePricePesewas: null,
  },
  {
    id: "seo",
    categoryId: "marketing",
    name: "Search engine optimisation",
    summary: "Technical and on-page foundations. This does not include a ranking guarantee.",
    samplePricePesewas: null,
  },
  {
    id: "content-strategy",
    categoryId: "marketing",
    name: "Digital content strategy",
    summary: "A practical plan for what to publish, and why, over a defined period.",
    samplePricePesewas: null,
  },
  {
    id: "social-branding",
    categoryId: "marketing",
    name: "Social media branding",
    summary: "Profile direction and a visual system for social channels.",
    samplePricePesewas: 120000,
  },
  {
    id: "campaign-landing",
    categoryId: "marketing",
    name: "Campaign landing page",
    summary: "A page built for one campaign, with a single next step for the visitor.",
    samplePricePesewas: 240000,
  },
  {
    id: "presence-consultation",
    categoryId: "marketing",
    name: "Online presence consultation",
    summary: "A structured review of the current site, profiles, and obvious gaps.",
    samplePricePesewas: 75000,
  },
  {
    id: "marketing-creatives",
    categoryId: "marketing",
    name: "Digital marketing creatives",
    summary: "Campaign visuals whose volume and formats are agreed in a quotation.",
    samplePricePesewas: null,
  },
  {
    id: "hosting-deployment",
    categoryId: "cloud",
    name: "Website hosting and deployment",
    summary: "Setting a site live on hosting the business chooses or already owns.",
    samplePricePesewas: null,
  },
  {
    id: "cloud-deployment",
    categoryId: "cloud",
    name: "Cloud application deployment",
    summary: "A deployment plan and setup for a web application.",
    samplePricePesewas: null,
  },
  {
    id: "domain-configuration",
    categoryId: "cloud",
    name: "Domain configuration",
    summary: "Connecting a domain and the basic records a site needs.",
    samplePricePesewas: 20000,
  },
  {
    id: "business-email",
    categoryId: "cloud",
    name: "Business email configuration",
    summary: "Mailboxes on the business domain, set up with the chosen provider.",
    samplePricePesewas: 35000,
  },
  {
    id: "performance",
    categoryId: "cloud",
    name: "Performance optimisation",
    summary: "A review and a set of improvements for a site that already exists.",
    samplePricePesewas: null,
  },
  {
    id: "cloud-consultation",
    categoryId: "cloud",
    name: "Cloud infrastructure consultation",
    summary: "Advice on a sensible hosting and deployment setup for the current stage.",
    samplePricePesewas: 120000,
  },
];

const categoryIds = new Set(serviceCategories.map((category) => category.id));
const itemIds = new Set<string>();

for (const item of catalogue) {
  if (itemIds.has(item.id)) {
    throw new Error(`Duplicate catalogue id: ${item.id}`);
  }
  if (!categoryIds.has(item.categoryId)) {
    throw new Error(`Unknown category for ${item.id}`);
  }
  itemIds.add(item.id);
}

export function getCategory(id: string): ServiceCategory | undefined {
  return serviceCategories.find((category) => category.id === id);
}

export function getCatalogueItem(id: string): CatalogueItem | undefined {
  return catalogue.find((item) => item.id === id);
}

export function itemsForCategory(id: ServiceCategory["id"]): CatalogueItem[] {
  return catalogue.filter((item) => item.categoryId === id);
}

export const enquiryCategories = [
  ...serviceCategories.map((category) => ({
    id: category.id,
    label: category.name,
  })),
  { id: "multi", label: "A project across more than one service" },
  { id: "studio", label: "Help shaping a brief in Frinada Studio" },
  { id: "unsure", label: "Not sure yet" },
] as const;

export function inferEnquiryCategory(serviceIds: readonly string[]): string {
  const categories = new Set(
    serviceIds
      .map((id) => getCatalogueItem(id)?.categoryId)
      .filter((id): id is ServiceCategory["id"] => Boolean(id)),
  );

  if (categories.size === 1) {
    return [...categories][0] ?? "";
  }

  if (categories.size > 1) {
    return "multi";
  }

  return "";
}
