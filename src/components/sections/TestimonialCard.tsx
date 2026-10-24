import { Badge } from "@/components/ui/Badge";
import { surfaceClass } from "@/lib/styles";
import type { IllustrativeScenario } from "@/types";

export function TestimonialCard({ scenario }: { scenario: IllustrativeScenario }) {
  return (
    <article className={`flex h-full flex-col p-6 sm:p-8 ${surfaceClass}`}>
      <Badge tone="red">Illustrative scenario</Badge>
      <h3 className="mt-4 font-heading text-2xl font-bold text-navy">{scenario.title}</h3>
      <p className="mt-4 text-sm leading-relaxed text-body">{scenario.context}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted">{scenario.approach}</p>
      <p className="mt-auto pt-5 text-xs leading-relaxed text-muted">
        Not a customer endorsement, quotation, or case result.
      </p>
    </article>
  );
}
