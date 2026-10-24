"use client";

import { StudioCostEstimator } from "@/components/studio/StudioCostEstimator";
import { useProjectBrief } from "@/hooks/use-project-brief";

export function PricingEstimator() {
  const { brief, update } = useProjectBrief();

  return (
    <StudioCostEstimator
      selectedIds={brief.serviceIds}
      onChange={(serviceIds) => update({ serviceIds })}
    />
  );
}
