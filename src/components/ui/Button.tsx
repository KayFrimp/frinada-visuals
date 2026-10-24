import Link from "next/link";
import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

const variants = {
  primary: "bg-navy text-white hover:bg-navy-soft",
  secondary: "border border-navy bg-white text-navy hover:bg-mist",
  inverse: "bg-white text-navy hover:bg-on-navy",
  "inverse-secondary": "border border-white/50 bg-transparent text-white hover:bg-white/10",
  ghost: "bg-transparent text-navy hover:bg-mist",
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
    "inline-flex items-center justify-center gap-2 text-center font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-50",
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
