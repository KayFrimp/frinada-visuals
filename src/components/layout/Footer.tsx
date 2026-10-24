import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/ui/Container";
import { mainNavigation, siteConfig } from "@/data/site";
import { serviceCategories } from "@/data/services";
import { inverseLinkClass } from "@/lib/styles";

export function Footer() {
  return (
    <footer className="bg-navy text-on-navy">
      <Container className="grid gap-10 py-14 sm:py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="max-w-sm">
          <Link href="/" aria-label="Frinada Visuals, home" className="inline-flex bg-white p-3">
            <Logo variant="lockup" alt="" />
          </Link>
          <p className="mt-5 text-sm leading-relaxed text-on-navy">
            A creative technology company in Ghana. We help businesses establish a brand, build practical software, and put reliable digital work online.
          </p>
        </div>
        <nav aria-label="Quick links">
          <p className="text-sm font-semibold tracking-[0.14em] text-white uppercase">Explore</p>
          <ul className="mt-4 space-y-2">
            {mainNavigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={inverseLinkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Services">
          <p className="text-sm font-semibold tracking-[0.14em] text-white uppercase">Services</p>
          <ul className="mt-4 space-y-2">
            {serviceCategories.map((category) => (
              <li key={category.id}>
                <Link href={`/services#${category.anchor}`} className={inverseLinkClass}>
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="text-sm font-semibold tracking-[0.14em] text-white uppercase">Frinada Studio</p>
          <p className="mt-4 text-sm leading-relaxed">
            An interactive preview for shaping a project brief. It runs in your browser and does not create an account.
          </p>
          <Link href={siteConfig.studioHref} className={`${inverseLinkClass} mt-3 inline-flex`}>
            Open the product preview
          </Link>
          <p className="mt-6 text-sm leading-relaxed">
            Start with the project form. It prepares a summary in your browser and does not send that summary on its own.
          </p>
          <Link href={siteConfig.enquiryHref} className={`${inverseLinkClass} mt-3 inline-flex`}>
            Start a project
          </Link>
        </div>
      </Container>
      <div className="border-t border-white/15">
        <Container className="flex flex-col gap-2 py-5 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>© {siteConfig.copyrightYear} Frinada Visuals. All rights reserved.</p>
          <p>{siteConfig.slogan}</p>
        </Container>
      </div>
    </footer>
  );
}
