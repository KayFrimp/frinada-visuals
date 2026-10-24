"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNavigation } from "@/data/site";
import { cn } from "@/lib/cn";

export function DesktopNavigation() {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary" className="hidden lg:block">
      <ul className="flex items-center gap-1">
        {mainNavigation.map((item) => {
          const active = pathname === item.href;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "group relative inline-flex min-h-11 items-center px-3 text-sm font-semibold transition-colors duration-200 motion-reduce:transition-none",
                  active ? "text-navy" : "text-muted hover:text-navy",
                )}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute right-3 bottom-2 left-3 h-0.5 bg-red transition-opacity duration-200 motion-reduce:transition-none",
                    active ? "opacity-100" : "opacity-0 group-hover:opacity-100",
                  )}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
