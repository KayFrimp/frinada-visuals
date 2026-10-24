import { catalogue } from "@/data/services";
import { budgetOptions, timelineOptions } from "@/data/pricing";
import type { ProjectBrief } from "@/types";

const catalogueIds = new Set(catalogue.map((item) => item.id));
const budgetIds = new Set(budgetOptions.map((option) => option.id));
const timelineIds = new Set(timelineOptions.map((option) => option.id));

export const emptyBrief = (): ProjectBrief => ({
  serviceIds: [],
  contactName: "",
  email: "",
  organisation: "",
  projectName: "",
  description: "",
  budget: "",
  timeline: "",
});

export function sanitizeBrief(value: unknown): ProjectBrief {
  const source = isRecord(value) ? value : {};

  return {
    serviceIds: uniqueKnownIds(source.serviceIds),
    contactName: clip(source.contactName, 80),
    email: clip(source.email, 120),
    organisation: clip(source.organisation, 120),
    projectName: clip(source.projectName, 100),
    description: clip(source.description, 2000),
    budget: knownOption(source.budget, budgetIds),
    timeline: knownOption(source.timeline, timelineIds),
  };
}

export const BRIEF_STORAGE_KEY = "frinada-studio-brief";
export const PACKAGE_STORAGE_KEY = "frinada-package-interest";

export function readStoredBrief(): ProjectBrief | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const raw = window.sessionStorage.getItem(BRIEF_STORAGE_KEY);
    if (!raw) {
      return null;
    }
    return sanitizeBrief(JSON.parse(raw));
  } catch {
    return null;
  }
}

export function writeStoredBrief(brief: ProjectBrief): void {
  if (typeof window === "undefined") {
    return;
  }

  try {
    window.sessionStorage.setItem(BRIEF_STORAGE_KEY, JSON.stringify(sanitizeBrief(brief)));
    notifyBriefChange();
  } catch {
    // Storage can be unavailable in private browsing. The brief still works in memory.
  }
}

export function clearStoredBrief(): void {
  if (typeof window === "undefined") {
    return;
  }

  try {
    window.sessionStorage.removeItem(BRIEF_STORAGE_KEY);
    notifyBriefChange();
  } catch {
    // Ignore storage failures.
  }
}

export function subscribeToPackage(onStoreChange: () => void): () => void {
  window.addEventListener("frinada-package", onStoreChange);
  return () => window.removeEventListener("frinada-package", onStoreChange);
}

export function getPackageSnapshot(): string | null {
  return readPackageInterest();
}

export function getPackageServerSnapshot(): string | null {
  return null;
}

export function readPackageInterest(): string | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const value = window.sessionStorage.getItem(PACKAGE_STORAGE_KEY);
    return value && value.length <= 40 ? value : null;
  } catch {
    return null;
  }
}

export function writePackageInterest(name: string): void {
  if (typeof window === "undefined") {
    return;
  }

  try {
    window.sessionStorage.setItem(PACKAGE_STORAGE_KEY, name.slice(0, 40));
    window.dispatchEvent(new Event("frinada-package"));
  } catch {
    // Ignore storage failures.
  }
}

function uniqueKnownIds(value: unknown): string[] {
  if (!Array.isArray(value)) {
    return [];
  }

  const ids: string[] = [];
  const seen = new Set<string>();

  for (const entry of value) {
    if (typeof entry !== "string" || seen.has(entry) || !catalogueIds.has(entry)) {
      continue;
    }
    seen.add(entry);
    ids.push(entry);
  }

  return ids;
}

function clip(value: unknown, max: number): string {
  if (typeof value !== "string") {
    return "";
  }
  return value.trim().slice(0, max);
}

function knownOption(value: unknown, allowed: Set<string>): string {
  return typeof value === "string" && allowed.has(value) ? value : "";
}

function notifyBriefChange(): void {
  window.dispatchEvent(new Event("frinada-brief"));
}

const emptySnapshot = emptyBrief();
let cachedRaw: string | null | undefined;
let cachedBrief: ProjectBrief = emptySnapshot;

export function subscribeToBrief(onStoreChange: () => void): () => void {
  window.addEventListener("frinada-brief", onStoreChange);
  return () => window.removeEventListener("frinada-brief", onStoreChange);
}

export function getBriefSnapshot(): ProjectBrief {
  let raw: string | null = null;

  try {
    raw = window.sessionStorage.getItem(BRIEF_STORAGE_KEY);
  } catch {
    raw = null;
  }

  if (raw === cachedRaw) {
    return cachedBrief;
  }

  cachedRaw = raw;

  if (!raw) {
    cachedBrief = emptySnapshot;
    return cachedBrief;
  }

  try {
    cachedBrief = sanitizeBrief(JSON.parse(raw));
  } catch {
    cachedBrief = emptySnapshot;
  }

  return cachedBrief;
}

export function getBriefServerSnapshot(): ProjectBrief {
  return emptySnapshot;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
