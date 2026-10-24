import Link from "next/link";
import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

const variants = {
  primary: "bg-navy text-white hover:bg-navy-soft active:bg-navy",
  secondary: "border border-navy bg-white text-navy hover:bg-mist active:bg-line",
  inverse: "bg-white text-navy hover:bg-on-navy active:bg-white",
  "inverse-secondary": "border border-white/50 bg-transparent text-white hover:bg-white/10 active:bg-white/15",
  ghost: "bg-transparent text-navy hover:bg-mist active:bg-line",
} as const;

const sizes = {
  md: "min-h-11 px-4 text-sm",
  lg: "min-h-12 px-5 text-base",
} as const;

type Variant = keyof typeof variants;
type Size = keyof typeof sizes;

type Common = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type ButtonProps = Common &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type LinkProps = Common &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    href: string;
  };

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps | LinkProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 text-center font-semibold transition duration-200 ease-out active:translate-y-px disabled:cursor-not-allowed disabled:opacity-50 disabled:active:translate-y-0 motion-reduce:transition-none motion-reduce:active:translate-y-0",
    variants[variant],
    sizes[size],
    className,
  );

  if ("href" in props && props.href) {
    const { href, ...linkProps } = props;
    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonProps;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
