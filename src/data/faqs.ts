import type { Faq } from "@/types";

export const faqs: Faq[] = [
  {
    id: "what-we-do",
    question: "What does Frinada Visuals do?",
    answer:
      "Frinada Visuals helps businesses with branding, websites and software, digital presence, and the practical work of putting those things online. The four service categories on this site are the full offer.",
    placements: ["home"],
  },
  {
    id: "what-is-studio",
    question: "What is Frinada Studio?",
    answer:
      "Frinada Studio is a product concept: a guided workspace for choosing services, describing a project, seeing illustrative sample rates, and preparing a structured brief. The version on this website is an interactive frontend preview. It does not create an account or store a project on a server.",
    placements: ["home"],
  },
  {
    id: "quotations",
    question: "How do quotations work?",
    answer:
      "You share what you want to do. Frinada Visuals reviews the scope and replies with a quotation. Package names on the pricing page are scope guides, and sample rates in Frinada Studio are not quotations. This website cannot issue or approve a price.",
    placements: ["home", "pricing"],
  },
  {
    id: "customise",
    question: "Can a package be customised?",
    answer:
      "Yes. Starter, Growth, and Premium describe typical combinations. A project can use part of a package, combine categories, or leave out anything that is not needed. The quotation is where that mix is confirmed.",
    placements: ["pricing"],
  },
  {
    id: "cost-factors",
    question: "What influences project cost?",
    answer:
      "Scope does. The number of pages or features, how ready the content is, whether payments or accounts are involved, how many design applications are needed, and how the work will be hosted all change the effort. Exact figures are confirmed in a quotation, not on this page.",
    placements: ["pricing"],
  },
  {
    id: "timelines",
    question: "How long does a project take?",
    answer:
      "It depends on the scope and on how quickly content and feedback are available. A proposed schedule is part of the quotation conversation. This site does not publish fixed turnaround times.",
    placements: ["pricing"],
  },
  {
    id: "revisions",
    question: "What is the revision policy?",
    answer:
      "Revision rounds are agreed in the project quotation so both sides know what a round includes. This website does not publish a universal revision policy, because the right number depends on the work.",
    placements: ["pricing"],
  },
  {
    id: "hosting",
    question: "How do hosting and maintenance work?",
    answer:
      "Hosting, domain setup, business email, and maintenance can be part of a deployment plan. Any ongoing fee is quoted separately. Frinada Visuals does not publish an uptime guarantee and does not claim to own the underlying infrastructure.",
    placements: ["pricing"],
  },
  {
    id: "enquiries",
    question: "How do project enquiries work on this site?",
    answer:
      "The contact form and Frinada Studio prepare a project summary in your browser. Submitting the form does not send information to a server, open an account, or reserve a start date. Use the summary to organise the brief, then share it through a channel Frinada Visuals confirms with you.",
    placements: ["pricing", "contact"],
  },
  {
    id: "form-send",
    question: "Does the contact form send my message?",
    answer:
      "No. This is a frontend demonstration for a static website. When the details are valid, the page prepares a summary you can copy or download. Nothing is transmitted, stored remotely, or turned into a live enquiry.",
    placements: ["home", "contact"],
  },
  {
    id: "what-to-include",
    question: "What should I include in a project description?",
    answer:
      "Say who the work is for, what they need to do, what already exists, and what a good result looks like. If you have examples, mention them. You do not need final copy or a technical specification to start.",
    placements: ["contact"],
  },
];

export function faqsFor(placement: Faq["placements"][number]): Faq[] {
  return faqs.filter((faq) => faq.placements.includes(placement));
}
