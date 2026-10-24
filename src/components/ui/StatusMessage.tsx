import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

const tones = {
  success: "border-green-deep/30 bg-[#eef6ef] text-green-deep",
  error: "border-red-deep/30 bg-[#fdecee] text-red-deep",
  info: "border-line bg-mist text-body",
} as const;

export function StatusMessage({
  tone,
  children,
  role = "status",
  className,
}: {
  tone: keyof typeof tones;
  children: ReactNode;
  role?: "status" | "alert";
  className?: string;
}) {
  return (
    <div role={role} className={cn("rounded-control border px-4 py-3 text-sm leading-relaxed", tones[tone], className)}>
      {children}
    </div>
  );
}
