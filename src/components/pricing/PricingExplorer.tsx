"use client";

import { useState } from "react";
import { PricingCard } from "@/components/pricing/PricingCard";
import { PricingComparisonTable } from "@/components/pricing/PricingComparisonTable";
import { Button } from "@/components/ui/Button";
import { pricingPackages } from "@/data/pricing";
import { siteConfig } from "@/data/site";
import { writePackageInterest } from "@/lib/brief";
import type { PackageId } from "@/types";

export function PricingExplorer() {
  const [active, setActive] = useState<PackageId>("growth");

  return (
    <div>
      <div className="grid gap-4 lg:grid-cols-3">
        {pricingPackages.map((pkg) => (
          <PricingCard
            key={pkg.id}
            pkg={pkg}
            active={active === pkg.id}
            onSelect={() => {
              setActive(pkg.id);
              writePackageInterest(pkg.name);
            }}
          />
        ))}
      </div>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-2xl text-sm leading-relaxed text-muted">
          Highlight a package to read its column. The comparison describes scope. It is not a price list, and a project can mix pieces from more than one column.
        </p>
        <Button
          href={siteConfig.enquiryHref}
          onClick={() => {
            const selected = pricingPackages.find((pkg) => pkg.id === active);
            if (selected) {
              writePackageInterest(selected.name);
            }
          }}
        >
          Request a quotation
        </Button>
      </div>
      <div className="mt-6">
        <PricingComparisonTable active={active} />
      </div>
    </div>
  );
}
