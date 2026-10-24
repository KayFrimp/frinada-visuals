import Image from "next/image";
import { cn } from "@/lib/cn";
import type { VisualAsset } from "@/data/visuals";

export function EditorialImage({
  asset,
  priority = false,
  sizes,
  className,
  framed = false,
}: {
  asset: VisualAsset;
  priority?: boolean;
  sizes: string;
  className?: string;
  /** Shared window so the text below a row of cards starts on one line. */
  framed?: "3/2" | "5/3" | false;
}) {
  if (framed) {
    return (
      <div className={cn("relative w-full shrink-0 overflow-hidden bg-mist", framed === "5/3" ? "aspect-[5/3]" : "aspect-[3/2]")}>
        <Image
          src={asset.src}
          alt={asset.alt}
          fill
          priority={priority}
          sizes={sizes}
          className={cn("object-cover object-center", className)}
        />
      </div>
    );
  }

  return (
    <Image
      src={asset.src}
      alt={asset.alt}
      width={asset.width}
      height={asset.height}
      priority={priority}
      sizes={sizes}
      className={cn("h-auto w-full", className)}
    />
  );
}
