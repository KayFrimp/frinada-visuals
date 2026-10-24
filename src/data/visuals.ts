import type { ServiceCategoryId } from "@/types";

export type VisualAsset = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

/** Client work, used as supplied. The files are not recoloured or recomposed. */
export const visuals = {
  hero: {
    src: "/images/hero-creative-technology.jpg",
    width: 1024,
    height: 576,
    alt: "Laptop, tablet, and phone presenting a dark product interface on a reflective desk.",
  },
  services: {
    web: {
      src: "/images/service-web-software.jpg",
      width: 1024,
      height: 681,
      alt: "A laptop showing a dark operations dashboard with project progress and a task list.",
    },
    brand: {
      src: "/images/service-branding.png",
      width: 1024,
      height: 764,
      alt: "A Verdi brand identity presentation with letterhead, business cards, and an open guidelines book.",
    },
    marketing: {
      src: "/images/service-digital-marketing.jpg",
      width: 1024,
      height: 682,
      alt: "A working session with a laptop and phones showing campaign layouts, charts, and social graphics.",
    },
    cloud: {
      src: "/images/service-cloud-infrastructure.png",
      width: 980,
      height: 551,
      alt: "A diagram of connected servers and cloud nodes.",
    },
  } satisfies Record<ServiceCategoryId, VisualAsset>,
  projects: {
    pantry: {
      src: "/images/project-shepherds-provisions.jpg",
      width: 1024,
      height: 688,
      alt: "Jars, tins, and labels for the Shepherd's Provisions food range.",
    },
    harbour: {
      src: "/images/project-rcm-consulting.jpg",
      width: 1024,
      height: 598,
      alt: "A laptop showing the RCM Consulting site, with the headline Business Growth and Strategic Advisory.",
    },
    fieldnote: {
      src: "/images/project-projects-force.png",
      width: 1024,
      height: 603,
      alt: "Phone, laptop, and tablet showing the Projects Force operations product.",
    },
  },
  clientInterface: {
    src: "/images/client-product-interface.jpg",
    width: 1024,
    height: 767,
    alt: "A client product screen for inviting teammates and assigning roles during project setup.",
  },
} as const;
