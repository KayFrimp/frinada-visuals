import { cn } from "@/lib/cn";
import { surfaceClass } from "@/lib/styles";
import type { ReactNode } from "react";

export function Card({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <div className={cn(surfaceClass, "p-6 sm:p-8", className)}>{children}</div>;
}
