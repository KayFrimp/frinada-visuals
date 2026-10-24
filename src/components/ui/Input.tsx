import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import { controlClass } from "@/lib/styles";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: boolean;
  hint?: boolean;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { id, error, hint, className, ...props },
  ref,
) {
  return (
    <input
      ref={ref}
      id={id}
      aria-invalid={error || undefined}
      aria-describedby={describedBy(id, error, hint)}
      className={cn(controlClass, className)}
      {...props}
    />
  );
});

export function describedBy(id: string | undefined, error?: boolean, hint?: boolean): string | undefined {
  if (!id) {
    return undefined;
  }

  const ids = [error ? `${id}-error` : null, hint ? `${id}-hint` : null].filter(Boolean);
  return ids.length ? ids.join(" ") : undefined;
}
