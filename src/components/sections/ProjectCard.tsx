import { EditorialImage } from "@/components/media/EditorialImage";
import { Badge } from "@/components/ui/Badge";
import { visuals } from "@/data/visuals";
import { surfaceClass } from "@/lib/styles";
import type { ConceptProject } from "@/types";

const projectVisuals = visuals.projects;

export function ProjectCard({ project }: { project: ConceptProject }) {
  const visual = projectVisuals[project.id as keyof typeof projectVisuals];

  return (
    <article className={`group h-full ${surfaceClass}`}>
      <div className="flex h-full flex-col overflow-hidden rounded-[inherit]">
        {visual ? (
          <EditorialImage asset={visual} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" framed="5/3" />
        ) : null}
        <div className="flex flex-1 flex-col p-6 sm:p-8">
          <Badge tone="mist">Client work</Badge>
          <h3 className="mt-4 font-heading text-2xl font-bold leading-tight text-navy lg:min-h-[2.5em]">{project.title}</h3>
          <p className="mt-1 text-sm font-semibold leading-snug text-ink lg:min-h-[2.5em]">{project.service}</p>
          <p className="mt-4 text-sm leading-relaxed text-muted lg:min-h-[4.875em]">{project.summary}</p>
          <ul className="mt-5 space-y-2 text-sm text-body">
            {project.focus.map((item) => (
              <li key={item} className="flex gap-2">
                <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 bg-navy" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-auto pt-5 text-xs leading-relaxed text-muted">
            Shown as delivered for the client. No results are claimed from this picture.
          </p>
        </div>
      </div>
    </article>
  );
}
