import { forwardRef, type SelectHTMLAttributes } from "react";
import { describedBy } from "@/components/ui/Input";
import { cn } from "@/lib/cn";
import { controlClass } from "@/lib/styles";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  error?: boolean;
  hint?: boolean;
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { id, error, hint, className, children, ...props },
  ref,
) {
  return (
    <select
      ref={ref}
      {...props}
      id={id}
      aria-invalid={error || undefined}
      aria-describedby={describedBy(id, error, hint)}
      className={cn(controlClass, "bg-white", className)}
    >
      {children}
    </select>
  );
});
