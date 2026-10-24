"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { StatusMessage } from "@/components/ui/StatusMessage";
import { budgetOptions, labelForOption, timelineOptions } from "@/data/pricing";
import { siteConfig } from "@/data/site";
import { formatGhsFromPesewas } from "@/lib/currency";
import { formatProjectSummary } from "@/lib/summary";
import { copyText, downloadText } from "@/lib/transfer";
import type { Estimate, ProjectBrief } from "@/types";

export function StudioProjectSummary({
  brief,
  estimate,
  onReset,
}: {
  brief: ProjectBrief;
  estimate: Estimate;
  onReset: () => void;
}) {
  const summary = formatProjectSummary(brief, estimate);
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">("idle");

  async function onCopy() {
    const copied = await copyText(summary);
    setCopyState(copied ? "copied" : "failed");
  }

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        <Badge tone="mist">Frontend demonstration</Badge>
        <Badge>Not sent</Badge>
      </div>
      <h3 className="mt-4 font-heading text-2xl font-bold text-navy">{brief.projectName.trim() || "Untitled project"}</h3>
      <dl className="mt-5 grid gap-4 text-sm sm:grid-cols-2">
        <div>
          <dt className="font-semibold text-navy">Selected services</dt>
          <dd className="mt-1 text-muted">
            {estimate.isEmpty
              ? "None"
              : [...estimate.pricedItems.map((item) => item.name), ...estimate.customQuoteItems.map((item) => item.name)].join(", ")}
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-navy">Sample subtotal</dt>
          <dd className="mt-1 text-muted">{formatGhsFromPesewas(estimate.subtotalPesewas)}</dd>
        </div>
        <div>
          <dt className="font-semibold text-navy">Custom quotation</dt>
          <dd className="mt-1 text-muted">
            {estimate.hasCustomQuote ? estimate.customQuoteItems.map((item) => item.name).join(", ") : "None"}
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-navy">Budget preference</dt>
          <dd className="mt-1 break-words text-muted">{labelForOption(budgetOptions, brief.budget)}</dd>
        </div>
        <div>
          <dt className="font-semibold text-navy">Timeline preference</dt>
          <dd className="mt-1 break-words text-muted">{labelForOption(timelineOptions, brief.timeline)}</dd>
        </div>
      </dl>
      <p className="mt-4 break-words text-sm leading-relaxed text-body">{brief.description}</p>
      <label htmlFor="project-summary" className="mt-6 block text-sm font-semibold text-ink">
        Summary text
      </label>
      <textarea
        id="project-summary"
        readOnly
        value={summary}
        className="mt-2 min-h-56 w-full border border-line bg-paper p-3 text-sm leading-relaxed text-ink"
      />
      {copyState === "copied" ? (
        <StatusMessage tone="success" className="mt-3">
          Summary copied. It is still only on this device.
        </StatusMessage>
      ) : null}
      {copyState === "failed" ? (
        <StatusMessage tone="error" role="alert" className="mt-3">
          Copy was not available. Select the summary text above and copy it manually.
        </StatusMessage>
      ) : null}
      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Button type="button" onClick={onCopy}>
          Copy summary
        </Button>
        <Button type="button" variant="secondary" onClick={() => downloadText("frinada-project-summary.txt", summary)}>
          Download summary
        </Button>
        <Button href={siteConfig.enquiryHref} variant="secondary">
          Continue to enquiry
        </Button>
        <Button type="button" variant="ghost" onClick={onReset}>
          Start again
        </Button>
      </div>
    </div>
  );
}
