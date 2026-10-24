import { comparisonRows, pricingPackages } from "@/data/pricing";
import { cn } from "@/lib/cn";
import type { PackageId } from "@/types";

export function PricingComparisonTable({ active }: { active: PackageId | null }) {
  return (
    <div
      tabIndex={0}
      role="region"
      aria-label="Package comparison. Scroll sideways if the table is wider than the screen."
      className="overflow-x-auto border border-line"
    >
      <table className="w-full min-w-[760px] border-collapse text-left text-sm">
        <caption className="sr-only">
          Illustrative comparison of Starter, Growth, and Premium scopes. These are not fixed prices.
        </caption>
        <thead>
          <tr className="bg-navy text-white">
            <th scope="col" className="sticky left-0 bg-navy px-4 py-3 font-semibold">
              Area
            </th>
            {pricingPackages.map((pkg) => (
              <th key={pkg.id} scope="col" className={cn("px-4 py-3 font-semibold", active === pkg.id && "bg-navy-soft")}>
                {pkg.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {comparisonRows.map((row, index) => (
            <tr key={row.id} className={index % 2 === 0 ? "bg-white" : "bg-mist"}>
              <th scope="row" className={cn("sticky left-0 px-4 py-3 font-semibold text-navy", index % 2 === 0 ? "bg-white" : "bg-mist")}>
                {row.label}
              </th>
              {pricingPackages.map((pkg) => (
                <td key={pkg.id} className={cn("px-4 py-3 align-top text-body transition-colors duration-200 motion-reduce:transition-none", active === pkg.id && "bg-[#eef0fa]")}>
                  {row.values[pkg.id]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
