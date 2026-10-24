"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { DesktopNavigation } from "@/components/layout/DesktopNavigation";
import { MobileNavigation } from "@/components/layout/MobileNavigation";
import { siteConfig } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
        <Link href="/" className="shrink-0" aria-label="Frinada Visuals, home">
          <Logo />
        </Link>
        <DesktopNavigation />
        <div className="flex items-center gap-2">
          <Link
            href={siteConfig.enquiryHref}
            className="hidden min-h-11 items-center bg-navy px-4 text-sm font-semibold text-white hover:bg-navy-soft lg:inline-flex"
          >
            Start a Project
          </Link>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center text-navy lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((current) => !current)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? <X aria-hidden="true" className="size-6" /> : <Menu aria-hidden="true" className="size-6" />}
          </button>
        </div>
      </div>
      <div id="mobile-navigation">
        <MobileNavigation open={open} onClose={close} />
      </div>
    </header>
  );
}
