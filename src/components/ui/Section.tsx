import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";
import type { ReactNode } from "react";

const tones = {
  white: "bg-white text-body",
  mist: "bg-mist text-body",
  navy: "bg-navy text-on-navy",
  paper: "bg-paper text-body",
} as const;

export function Section({
  id,
  tone = "white",
  className,
  labelledBy,
  children,
}: {
  id?: string;
  tone?: keyof typeof tones;
  className?: string;
  labelledBy?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={cn("scroll-mt-24 py-16 sm:py-20 lg:py-28", tones[tone], className)}>
      <Container>{children}</Container>
    </section>
  );
}
