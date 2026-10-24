import { describe, expect, it } from "vitest";
import { contactSchema, planningSchema, projectDetailsSchema, validateServiceSelection } from "@/lib/validation";

const validContact = {
  fullName: "Ama Mensah",
  email: "ama@example.com",
  phone: "",
  organisation: "",
  categoryId: "web",
  description: "A five-page site for a consultancy that needs a clear enquiry path.",
  budget: "",
  timeline: "",
};

describe("contactSchema", () => {
  it("accepts a complete enquiry", () => {
    expect(contactSchema.safeParse(validContact).success).toBe(true);
  });

  it("rejects a short description, a bad email, and an unknown category", () => {
    const result = contactSchema.safeParse({
      ...validContact,
      email: "not-an-email",
      description: "Too short",
      categoryId: "nope",
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      const fields = result.error.issues.map((issue) => String(issue.path[0]));
      expect(fields).toContain("email");
      expect(fields).toContain("description");
      expect(fields).toContain("categoryId");
    }
  });

  it("rejects a phone number that is present but not usable", () => {
    const result = contactSchema.safeParse({ ...validContact, phone: "12" });
    expect(result.success).toBe(false);
  });
});

describe("studio step validation", () => {
  it("requires at least one service", () => {
    expect(validateServiceSelection([])).toMatch(/at least one/i);
    expect(validateServiceSelection(["logo"])).toBeNull();
  });

  it("requires project details and a valid email", () => {
    const result = projectDetailsSchema.safeParse({
      contactName: "A",
      email: "bad",
      organisation: "",
      projectName: "X",
      description: "short",
    });
    expect(result.success).toBe(false);
  });

  it("requires a known budget and timeline", () => {
    expect(planningSchema.safeParse({ budget: "", timeline: "soon" }).success).toBe(false);
    expect(planningSchema.safeParse({ budget: "unsure", timeline: "flexible" }).success).toBe(true);
  });
});
