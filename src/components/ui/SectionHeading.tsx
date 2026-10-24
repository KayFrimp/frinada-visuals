import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  tone = "default",
  as: Heading = "h2",
  className,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  tone?: "default" | "inverse";
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  const inverse = tone === "inverse";

  return (
    <div className={cn("max-w-3xl border-l-2 pl-4 sm:pl-5", inverse ? "border-white" : "border-red", className)}>
      {eyebrow ? (
        <p className={cn("text-xs font-semibold tracking-[0.18em] uppercase", inverse ? "text-on-navy" : "text-red")}>
          {eyebrow}
        </p>
      ) : null}
      <Heading
        id={id}
        className={cn(
          "font-heading text-3xl font-bold tracking-tight sm:text-4xl",
          eyebrow ? "mt-3" : "",
          inverse ? "text-white" : "text-navy",
        )}
      >
        {title}
      </Heading>
      {description ? (
        <p className={cn("mt-4 text-base leading-relaxed sm:text-lg", inverse ? "text-on-navy" : "text-muted")}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
