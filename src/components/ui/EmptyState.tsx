export function EmptyState({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-card border border-dashed border-line bg-paper px-5 py-8 text-center">
      <p className="font-heading text-base font-semibold text-navy">{title}</p>
      <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-muted">{description}</p>
    </div>
  );
}
