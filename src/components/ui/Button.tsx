import Link from "next/link";
import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

const variants = {
  primary: "bg-navy text-white shadow-rest hover:bg-navy-soft hover:shadow-raise active:bg-navy active:shadow-rest",
  secondary: "border border-line bg-white text-navy shadow-rest hover:border-navy/30 hover:bg-mist hover:shadow-raise active:bg-line",
  inverse: "bg-white text-navy shadow-rest hover:bg-on-navy hover:shadow-raise active:bg-white",
  "inverse-secondary": "border border-white/45 bg-transparent text-white hover:bg-white/10 active:bg-white/15",
  ghost: "bg-transparent text-navy hover:bg-mist active:bg-line",
} as const;

const sizes = {
  sm: "min-h-10 px-3 text-sm",
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
    "inline-flex items-center justify-center gap-2 rounded-control text-center font-semibold transition-[background-color,border-color,box-shadow,transform,color] duration-200 ease-out-soft active:translate-y-px disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none disabled:active:translate-y-0 motion-reduce:transition-none motion-reduce:active:translate-y-0",
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
