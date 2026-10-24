import { Cloud, Code2, PenTool, Signal } from "lucide-react";
import type { ServiceIcon } from "@/types";

const icons = {
  code: Code2,
  pen: PenTool,
  signal: Signal,
  cloud: Cloud,
} as const;

export function ServiceGlyph({ icon, className = "size-6" }: { icon: ServiceIcon; className?: string }) {
  const Icon = icons[icon];
  return <Icon aria-hidden="true" className={className} strokeWidth={1.75} />;
}
