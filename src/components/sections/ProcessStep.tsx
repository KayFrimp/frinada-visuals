import { cn } from "@/lib/cn";
import type { ProcessStep as ProcessStepModel } from "@/types";

export function ProcessStep({
  step,
  tone = "navy",
}: {
  step: ProcessStepModel;
  tone?: "navy" | "light";
}) {
  const navy = tone === "navy";

  return (
    <li className={cn("border-t pt-5", navy ? "border-white/20" : "border-line")}>
      <p className={cn("font-heading text-sm font-bold tracking-[0.16em]", navy ? "text-on-navy" : "text-red")}>{step.step}</p>
      <h3 className={cn("mt-2 font-heading text-2xl font-bold", navy ? "text-white" : "text-navy")}>{step.title}</h3>
      <p className={cn("mt-3 text-sm leading-relaxed", navy ? "text-on-navy" : "text-muted")}>{step.description}</p>
    </li>
  );
}
