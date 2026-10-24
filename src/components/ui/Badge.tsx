import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

const tones = {
  navy: "bg-navy text-white",
  mist: "bg-mist text-muted",
  green: "bg-[#e8f5e9] text-green-deep",
  red: "bg-[#fdecee] text-red-deep",
} as const;

export function Badge({
  tone = "navy",
  children,
  className,
}: {
  tone?: keyof typeof tones;
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={cn("inline-flex items-center rounded-full px-2.5 py-1 text-[0.68rem] font-semibold tracking-[0.14em] uppercase", tones[tone], className)}>
      {children}
    </span>
  );
}
