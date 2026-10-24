import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  actions,
  aside,
  breadcrumbs,
  tone = "light",
}: {
  eyebrow?: string;
  title: string;
  description: string;
  actions?: ReactNode;
  aside?: ReactNode;
  breadcrumbs?: ReactNode;
  tone?: "light" | "navy";
}) {
  const navy = tone === "navy";

  return (
    <section className={cn("scroll-mt-24 border-b", navy ? "border-white/10 bg-navy text-on-navy" : "border-line bg-white")}>
      <Container className="py-12 sm:py-16 lg:py-20">
        {breadcrumbs}
        <div className={cn("grid items-center gap-10", aside ? "lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16" : "")}>
          <div>
            {eyebrow ? (
              <p className={cn("text-xs font-semibold tracking-[0.18em] uppercase", navy ? "text-on-navy" : "text-red")}>
                {eyebrow}
              </p>
            ) : null}
            <h1
              className={cn(
                "max-w-4xl font-heading text-[2.05rem] font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]",
                eyebrow ? "mt-4" : "",
                navy ? "text-white" : "text-navy",
              )}
            >
              {title}
            </h1>
            <p className={cn("mt-5 max-w-2xl text-base leading-relaxed sm:text-lg", navy ? "text-on-navy" : "text-muted")}>
              {description}
            </p>
            {actions ? <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">{actions}</div> : null}
          </div>
          {aside ? <div className="min-w-0">{aside}</div> : null}
        </div>
      </Container>
    </section>
  );
}
