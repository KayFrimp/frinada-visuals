import { cn } from "@/lib/cn";

export function PeakMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 48" className={className} aria-hidden="true" fill="none">
      <path
        d="M4 40 L18 16 L28 30 L42 8 L60 40"
        stroke="currentColor"
        strokeWidth="4.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <circle cx="42" cy="10" r="4.2" stroke="#DB0220" strokeWidth="2.2" />
    </svg>
  );
}

export function Logo({
  tone = "navy",
  showTagline = false,
  className,
}: {
  tone?: "navy" | "light";
  showTagline?: boolean;
  className?: string;
}) {
  const color = tone === "light" ? "text-white" : "text-navy";
  const tagline = tone === "light" ? "text-on-navy" : "text-red";

  return (
    <span className={cn("inline-flex flex-col leading-none", color, className)}>
      <span className="sr-only">Frinada Visuals</span>
      <span aria-hidden="true" className="font-heading text-[1.15rem] font-extrabold tracking-[-0.045em] sm:text-[1.3rem]">
        FRINADA
      </span>
      <span
        aria-hidden="true"
        className="mt-0.5 inline-flex items-end font-heading text-[1.15rem] font-extrabold tracking-[-0.045em] sm:text-[1.3rem]"
      >
        VISU
        <PeakMark className="mx-[0.06em] h-[0.92em] w-[1.15em]" />
        LS
      </span>
      {showTagline ? (
        <span aria-hidden="true" className={cn("mt-2 text-[0.62rem] font-semibold tracking-[0.18em]", tagline)}>
          EXCELLENCE IN SIMPLICITY
        </span>
      ) : null}
    </span>
  );
}
