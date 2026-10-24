import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

export function Card({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <div className={cn("border border-line bg-white p-6 sm:p-8", className)}>{children}</div>;
}
