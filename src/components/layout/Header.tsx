"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { DesktopNavigation } from "@/components/layout/DesktopNavigation";
import { MobileNavigation } from "@/components/layout/MobileNavigation";
import { siteConfig } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white transition-[box-shadow,border-color] duration-200 ease-out-soft motion-reduce:transition-none ${scrolled ? "border-transparent shadow-rest" : "border-line"}`}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="shrink-0 rounded-control transition-opacity duration-150 ease-out-soft hover:opacity-80 motion-reduce:transition-none"
          aria-label="Frinada Visuals, home"
        >
          <Logo alt="" priority />
        </Link>
        <DesktopNavigation />
        <div className="flex items-center gap-2">
          <Link
            href={siteConfig.enquiryHref}
            className="hidden min-h-11 items-center rounded-control bg-navy px-4 text-sm font-semibold text-white shadow-rest transition-[background-color,box-shadow,transform] duration-200 ease-out-soft hover:bg-navy-soft hover:shadow-raise active:translate-y-px motion-reduce:transition-none motion-reduce:active:translate-y-0 lg:inline-flex"
          >
            Start a Project
          </Link>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-control text-navy transition-colors duration-150 ease-out-soft hover:bg-mist motion-reduce:transition-none lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((current) => !current)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? <X aria-hidden="true" className="size-6" /> : <Menu aria-hidden="true" className="size-6" />}
          </button>
        </div>
      </div>
      <MobileNavigation open={open} onClose={close} />
    </header>
  );
}
