import { forwardRef, type TextareaHTMLAttributes } from "react";
import { describedBy } from "@/components/ui/Input";
import { cn } from "@/lib/cn";
import { controlClass } from "@/lib/styles";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  error?: boolean;
  hint?: boolean;
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { id, error, hint, className, ...props },
  ref,
) {
  return (
    <textarea
      ref={ref}
      {...props}
      id={id}
      aria-invalid={error || undefined}
      aria-describedby={describedBy(id, error, hint)}
      className={cn(controlClass, "min-h-36 resize-y leading-relaxed", className)}
    />
  );
});
