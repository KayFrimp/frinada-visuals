"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { mainNavigation, siteConfig } from "@/data/site";
import { cn } from "@/lib/cn";

export function MobileNavigation({ open, onClose }: { open: boolean; onClose: () => void }) {
  const pathname = usePathname();
  const panelId = "mobile-navigation";
  const firstLink = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previous = document.activeElement;
    firstLink.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const panel = document.getElementById(panelId);
      if (!panel) {
        return;
      }

      const focusable = [...panel.querySelectorAll<HTMLElement>("a[href], button")];
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first || !last) {
        return;
      }

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      if (previous instanceof HTMLElement) {
        previous.focus();
      }
    };
  }, [open, onClose]);

  const previousPath = useRef(pathname);

  useEffect(() => {
    if (previousPath.current === pathname) {
      return;
    }
    previousPath.current = pathname;
    onClose();
  }, [pathname, onClose]);

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-40 lg:hidden">
      <button type="button" tabIndex={-1} aria-hidden="true" className="absolute inset-0 bg-navy/40" onClick={onClose} />
      <div
        id={panelId}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className="absolute top-16 right-0 left-0 max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-line bg-white px-5 py-4"
      >
      <nav aria-label="Mobile">
        <ul className="flex flex-col">
          {mainNavigation.map((item, index) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  ref={index === 0 ? firstLink : undefined}
                  href={item.href}
                  onClick={onClose}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "flex min-h-12 items-center border-b border-line text-base font-semibold",
                    active ? "text-navy" : "text-muted",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <Link
          href={siteConfig.enquiryHref}
          onClick={onClose}
          className="mt-4 flex min-h-12 items-center justify-center bg-navy px-4 text-sm font-semibold text-white"
        >
          Start a Project
        </Link>
        <button type="button" onClick={onClose} className="mt-3 flex min-h-11 w-full items-center justify-center border border-navy px-4 text-sm font-semibold text-navy">
          Close menu
        </button>
      </nav>
      </div>
    </div>
  );
}
