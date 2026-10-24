import { enquiryCategories } from "@/data/services";
import { budgetOptions, timelineOptions } from "@/data/pricing";
import { z } from "zod";

const categoryIds = new Set<string>(enquiryCategories.map((category) => category.id));
const budgetIds = new Set(budgetOptions.map((option) => option.id));
const timelineIds = new Set(timelineOptions.map((option) => option.id));

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const contactSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Enter your full name.")
    .max(80, "Name must be 80 characters or fewer."),
  email: z
    .string()
    .trim()
    .min(1, "Enter an email address.")
    .max(120, "Email must be 120 characters or fewer.")
    .refine((value) => emailPattern.test(value), "Enter a valid email address."),
  phone: z
    .string()
    .trim()
    .max(20, "Phone number must be 20 characters or fewer.")
    .refine((value) => isOptionalPhone(value), "Enter a valid phone number or leave this blank."),
  organisation: z
    .string()
    .trim()
    .max(120, "Organisation must be 120 characters or fewer."),
  categoryId: z
    .string()
    .refine((value) => categoryIds.has(value), "Choose a service category."),
  description: z
    .string()
    .trim()
    .min(20, "Describe the project in at least 20 characters.")
    .max(2000, "Description must be 2,000 characters or fewer."),
  budget: z.string().refine((value) => value === "" || budgetIds.has(value), "Choose a valid budget preference."),
  timeline: z
    .string()
    .refine((value) => value === "" || timelineIds.has(value), "Choose a valid timeline preference."),
});

export const projectDetailsSchema = z.object({
  contactName: z
    .string()
    .trim()
    .min(2, "Enter your name.")
    .max(80, "Name must be 80 characters or fewer."),
  email: z
    .string()
    .trim()
    .min(1, "Enter an email address.")
    .max(120, "Email must be 120 characters or fewer.")
    .refine((value) => emailPattern.test(value), "Enter a valid email address."),
  organisation: z
    .string()
    .trim()
    .max(120, "Organisation must be 120 characters or fewer."),
  projectName: z
    .string()
    .trim()
    .min(2, "Give the project a name.")
    .max(100, "Project name must be 100 characters or fewer."),
  description: z
    .string()
    .trim()
    .min(20, "Describe the project in at least 20 characters.")
    .max(2000, "Description must be 2,000 characters or fewer."),
});

export const planningSchema = z.object({
  budget: z.string().refine((value) => budgetIds.has(value), "Choose a budget preference."),
  timeline: z.string().refine((value) => timelineIds.has(value), "Choose a timeline preference."),
});

export type ContactValues = z.infer<typeof contactSchema>;
export type ProjectDetailsValues = z.infer<typeof projectDetailsSchema>;

export function fieldErrors(error: z.ZodError): Record<string, string> {
  const errors: Record<string, string> = {};

  for (const issue of error.issues) {
    const key = String(issue.path[0] ?? "");
    if (key && !errors[key]) {
      errors[key] = issue.message;
    }
  }

  return errors;
}

export function validateServiceSelection(ids: readonly string[]): string | null {
  return ids.length === 0 ? "Select at least one service to continue." : null;
}

export function isOptionalPhone(value: string): boolean {
  const trimmed = value.trim();
  if (trimmed === "") {
    return true;
  }

  if (!/^[+]?[\d\s()-]+$/.test(trimmed)) {
    return false;
  }

  const digits = trimmed.replace(/\D/g, "").length;
  return digits >= 7 && digits <= 15;
}
