import Image from "next/image";
import { cn } from "@/lib/cn";

export const brandAssets = {
  wordmark: { src: "/brand/logo-wordmark.png", width: 884, height: 292 },
  lockup: { src: "/brand/logo-on-light.png", width: 884, height: 338 },
  mark: { src: "/brand/logo-mark.png", width: 224, height: 224 },
} as const;

export function Logo({
  variant = "wordmark",
  alt = "Frinada Visuals",
  priority = false,
  className,
}: {
  variant?: "wordmark" | "lockup";
  alt?: string;
  priority?: boolean;
  className?: string;
}) {
  const asset = brandAssets[variant];

  return (
    <Image
      src={asset.src}
      alt={alt}
      width={asset.width}
      height={asset.height}
      priority={priority}
      className={cn("w-auto max-w-full", variant === "lockup" ? "h-24" : "h-11", className)}
      style={{ width: "auto" }}
    />
  );
}

export function BrandMark({ className }: { className?: string }) {
  return (
    <Image
      src={brandAssets.mark.src}
      alt=""
      width={brandAssets.mark.width}
      height={brandAssets.mark.height}
      className={cn("size-12", className)}
    />
  );
}
