import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { StudioCostEstimator } from "@/components/studio/StudioCostEstimator";
import type { Faq } from "@/types";

const faqs: Faq[] = [
  {
    id: "one",
    question: "How do quotations work?",
    answer: "A quotation follows a conversation about scope.",
    placements: ["pricing"],
  },
];

describe("FAQAccordion", () => {
  it("expands an answer", async () => {
    const user = userEvent.setup();
    render(<FAQAccordion faqs={faqs} />);
    const button = screen.getByRole("button", { name: "How do quotations work?" });
    expect(button.getAttribute("aria-expanded")).toBe("false");
    await user.click(button);
    expect(button.getAttribute("aria-expanded")).toBe("true");
    expect(screen.getByText("A quotation follows a conversation about scope.")).toBeTruthy();
  });
});

describe("StudioCostEstimator", () => {
  it("updates the sample subtotal when a priced service is selected", async () => {
    const user = userEvent.setup();
    const selected: string[] = [];
    const { rerender } = render(
      <StudioCostEstimator selectedIds={selected} onChange={(ids) => selected.splice(0, selected.length, ...ids)} />,
    );

    await user.click(screen.getByRole("checkbox", { name: /Logo design/ }));
    rerender(<StudioCostEstimator selectedIds={selected} onChange={(ids) => selected.splice(0, selected.length, ...ids)} />);

    expect(selected).toEqual(["logo-design"]);
    expect(screen.getAllByText("GHS 1,500.00").length).toBeGreaterThan(0);
  });
});
