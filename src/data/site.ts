import type { NavItem } from "@/types";

const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://frinada-visuals.vercel.app";

export const siteConfig = {
  name: "Frinada Visuals",
  slogan: "Excellence in Simplicity",
  marketingHeadline: "We Design. We Build. We Grow.",
  description:
    "Frinada Visuals is a Ghana-based creative technology company helping businesses establish brands, build practical software, strengthen their digital presence, and deploy reliable digital solutions.",
  url: rawSiteUrl.replace(/\/$/, ""),
  locale: "en_GH",
  region: "Ghana",
  copyrightYear: 2026,
  enquiryHref: "/contact#project-form",
  studioHref: "/services#frinada-studio",
} as const;

export const mainNavigation: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const SAMPLE_RATE_NOTE =
  "Illustrative sample rates exist so this preview can demonstrate a calculation. They are not a quotation, invoice, or commercial offer. Anything marked Custom quote required is priced only after the scope is understood.";
