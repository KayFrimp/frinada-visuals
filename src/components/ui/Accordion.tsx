"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";

export type AccordionItem = {
  id: string;
  title: string;
  content: string;
};

export function Accordion({ items }: { items: AccordionItem[] }) {
  const baseId = useId();
  const [openIds, setOpenIds] = useState<string[]>([]);

  function toggle(id: string) {
    setOpenIds((current) => (current.includes(id) ? current.filter((item) => item !== id) : [...current, id]));
  }

  return (
    <div className="border-y border-line">
      {items.map((item) => {
        const open = openIds.includes(item.id);
        const panelId = `${baseId}-${item.id}-panel`;
        const buttonId = `${baseId}-${item.id}-button`;

        return (
          <div key={item.id} className="border-b border-line last:border-b-0">
            <h3 className="text-base">
              <button
                id={buttonId}
                type="button"
                className="flex w-full items-center justify-between gap-4 py-4 text-left font-heading text-lg font-semibold text-navy"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => toggle(item.id)}
              >
                <span>{item.title}</span>
                <ChevronDown aria-hidden="true" className={cn("size-5 shrink-0 transition-transform", open && "rotate-180")} />
              </button>
            </h3>
            <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!open}>
              <p className="max-w-3xl pb-5 text-base leading-relaxed text-muted">{item.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
