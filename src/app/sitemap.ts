import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

const routes = [
  { path: "", priority: 1 },
  { path: "/services", priority: 0.8 },
  { path: "/pricing", priority: 0.8 },
  { path: "/about", priority: 0.7 },
  { path: "/contact", priority: 0.7 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    changeFrequency: "monthly",
    priority: route.priority,
  }));
}
