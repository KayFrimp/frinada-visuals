import { BrandMark } from "@/components/brand/Logo";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { studioFeatures } from "@/data/content";
import { siteConfig } from "@/data/site";

const previewRows = [
  { name: "Logo design", value: "GHS 1,500.00 sample" },
  { name: "Landing page", value: "GHS 2,800.00 sample" },
  { name: "Business website", value: "Custom quote required" },
];

export function StudioProductPreview() {
  return (
    <div className="border border-line bg-white">
      <div className="flex items-center justify-between gap-3 border-b border-line px-5 py-4">
        <div className="flex items-center gap-3">
          <BrandMark className="size-10" />
          <p className="font-heading text-sm font-bold tracking-wide text-navy">FRINADA STUDIO</p>
        </div>
        <Badge tone="mist">Preview</Badge>
      </div>
      <div className="grid gap-0 lg:grid-cols-[minmax(0,1fr)_220px]">
        <div className="p-5">
          <p className="text-xs font-semibold tracking-[0.16em] text-red uppercase">Explore</p>
          <ul className="mt-4 divide-y divide-line">
            {previewRows.map((row) => (
              <li key={row.name} className="flex flex-col gap-1 py-3 sm:flex-row sm:items-center sm:justify-between">
                <span className="font-semibold text-navy">{row.name}</span>
                <span className="text-sm text-muted">{row.value}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            A picture of the workspace, not the working tool. Sample figures here match the preview catalogue and are not a quotation.
          </p>
        </div>
        <div className="border-t border-line bg-mist p-5 lg:border-t-0 lg:border-l">
          <p className="text-xs font-semibold tracking-[0.16em] text-muted uppercase">Sample subtotal</p>
          <p className="mt-2 font-heading text-3xl font-bold text-navy">GHS 4,300.00</p>
          <p className="mt-3 text-sm leading-relaxed text-muted">One selected service still needs a custom quotation.</p>
          <ul className="mt-4 space-y-2 text-sm text-body">
            {studioFeatures.slice(0, 3).map((feature) => (
              <li key={feature.id}>{feature.title}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-line px-5 py-4">
        <Button href={siteConfig.studioHref}>Try the interactive demonstration</Button>
      </div>
    </div>
  );
}
