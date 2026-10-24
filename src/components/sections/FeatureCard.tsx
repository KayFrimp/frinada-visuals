import type { StudioFeature } from "@/types";

export function FeatureCard({ feature, index }: { feature: StudioFeature; index: number }) {
  return (
    <article className="border-t border-line pt-4">
      <p className="font-heading text-sm font-bold text-red">0{index + 1}</p>
      <h3 className="mt-2 font-heading text-xl font-bold text-navy">{feature.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{feature.description}</p>
    </article>
  );
}
