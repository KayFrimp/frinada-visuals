import { Badge } from "@/components/ui/Badge";
import { surfaceClass } from "@/lib/styles";
import type { ConceptProject } from "@/types";

export function ProjectCard({ project }: { project: ConceptProject }) {
  return (
    <article className={`flex h-full flex-col p-6 sm:p-8 ${surfaceClass}`}>
      <Badge tone="mist">Concept project</Badge>
      <h3 className="mt-4 font-heading text-2xl font-bold text-navy">{project.title}</h3>
      <p className="mt-1 text-sm font-semibold text-ink">{project.service}</p>
      <p className="mt-4 text-sm leading-relaxed text-muted">{project.summary}</p>
      <ul className="mt-5 space-y-2 text-sm text-body">
        {project.focus.map((item) => (
          <li key={item} className="flex gap-2">
            <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 bg-navy" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <p className="mt-auto pt-5 text-xs leading-relaxed text-muted">
        Fictional example for this website. Not a client relationship and not a reported result.
      </p>
    </article>
  );
}
