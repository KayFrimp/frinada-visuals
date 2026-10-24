import type {
  ConceptProject,
  IllustrativeScenario,
  ProcessStep,
  StudioFeature,
  Value,
} from "@/types";

export const homeProcess: ProcessStep[] = [
  {
    id: "discover",
    step: "01",
    title: "Discover",
    description:
      "We start with the goal, the audience, and the constraints, before proposing a shape of work.",
  },
  {
    id: "design",
    step: "02",
    title: "Design",
    description:
      "We define the brand or product direction and the structure of the experience people will use.",
  },
  {
    id: "develop",
    step: "03",
    title: "Develop",
    description:
      "We build the website, software, or materials with care for quality and for what happens after launch.",
  },
  {
    id: "deliver",
    step: "04",
    title: "Deliver",
    description:
      "We launch, hand the work over, and agree what support or improvement comes next.",
  },
];

export const approachSteps: ProcessStep[] = [
  {
    id: "understand",
    step: "01",
    title: "Understand",
    description: "Learn the business, the audience, and what has to be true when the work is finished.",
  },
  {
    id: "plan",
    step: "02",
    title: "Plan",
    description: "Turn that understanding into a scope, a sequence, and an honest view of what is still unknown.",
  },
  {
    id: "create",
    step: "03",
    title: "Create",
    description: "Design and build the identity, the product, the pages, or the infrastructure the plan calls for.",
  },
  {
    id: "refine",
    step: "04",
    title: "Refine",
    description: "Review the work against the brief and adjust it while the agreed revision room still exists.",
  },
  {
    id: "deliver",
    step: "05",
    title: "Deliver",
    description: "Hand over files, access, and the context someone needs in order to use the work.",
  },
];

export const whyPoints = [
  {
    id: "design",
    title: "Thoughtful design",
    description:
      "Brand, interface, and content are shaped around how people decide, not around decoration.",
  },
  {
    id: "engineering",
    title: "Business-focused engineering",
    description:
      "Websites and software are scoped to a job the business needs done: publishing, selling, managing, or supporting customers.",
  },
  {
    id: "integrated",
    title: "Integrated digital solutions",
    description:
      "Identity, website, marketing, and deployment can be planned as one journey, so the pieces fit when they go live.",
  },
  {
    id: "simplicity",
    title: "Simplicity without compromising quality",
    description:
      "The process stays understandable. The care in the design and the engineering is not simplified away.",
  },
];

export const whyFrinada = [
  {
    id: "integrated",
    title: "Integrated creative and technical thinking",
    description:
      "The same practice can hold a brand system and the website or software that has to carry it.",
  },
  {
    id: "business",
    title: "Business-focused solutions",
    description:
      "Recommendations start from the operation of the business, then choose the lightest tool that does the job.",
  },
  {
    id: "practical",
    title: "Practical technology choices",
    description:
      "Familiar, maintainable technology is preferred when it is the better fit. Novelty has to earn its place.",
  },
  {
    id: "communication",
    title: "Clear communication",
    description:
      "Scope, limits, and next steps are written in language a founder or a manager can use with their team.",
  },
  {
    id: "quality",
    title: "Attention to quality",
    description:
      "Details that customers feel — spacing, words, forms, speed, handover — are treated as part of the work.",
  },
];

export const values: Value[] = [
  {
    id: "excellence",
    title: "Excellence",
    description:
      "The work should be careful in the places people notice and in the places they do not, from a margin to a form that fails clearly.",
  },
  {
    id: "simplicity",
    title: "Simplicity",
    description:
      "Make the next step obvious. Remove process, language, and interface that do not help the business.",
  },
  {
    id: "innovation",
    title: "Innovation",
    description:
      "Use a new tool when it solves a real problem, and a familiar one when it is the better choice.",
  },
  {
    id: "integrity",
    title: "Integrity",
    description:
      "Say what is included, what is not, and what is still a demonstration. Do not promise results the work cannot guarantee.",
  },
  {
    id: "customer-success",
    title: "Customer Success",
    description:
      "The useful outcome is a business that can use what was made, not a presentation that only looks finished.",
  },
];

export const conceptProjects: ConceptProject[] = [
  {
    id: "pantry",
    title: "North Market Pantry",
    service: "Branding and a launch page",
    summary:
      "A concept identity for a fictional speciality food range: a mark, a small label system, and a single page that introduces the range.",
    focus: ["Logo direction", "Label system", "Launch landing page"],
  },
  {
    id: "harbour",
    title: "Harbour & Co.",
    service: "Business website",
    summary:
      "A concept structure for a fictional advisory firm: services, a short perspective section, and an enquiry path that does not hide the offer.",
    focus: ["Page structure", "Service narrative", "Enquiry path"],
  },
  {
    id: "fieldnote",
    title: "Fieldnote",
    service: "Software and deployment planning",
    summary:
      "A concept plan for a fictional operations tool: which parts are product decisions, which hosting choices sit with the client, and what remains a consultation.",
    focus: ["Workflow outline", "Deployment questions", "Handover notes"],
  },
];

export const scenarios: IllustrativeScenario[] = [
  {
    id: "new-studio",
    title: "A new practice needs to look established",
    context:
      "An independent studio is starting to take bookings. It needs a name treatment, a small set of materials, and a simple site. It does not need to look like a large firm.",
    approach:
      "Begin with a short identity scope and a small website. Decide afterwards whether search foundations or hosting support should follow. Frinada Studio can list those services and keep sample-priced items separate from work that needs a quotation.",
  },
  {
    id: "shop-online",
    title: "A shop wants to take orders online",
    context:
      "A retailer already sells in person and wants a careful move online. Nobody can honestly promise that sales will rise by a set amount.",
    approach:
      "Clarify catalogue size, payment needs, and who will update products before anyone talks about features. E-commerce and deployment stay on custom quotation, because the effort changes with those answers.",
  },
];

export const studioFeatures: StudioFeature[] = [
  {
    id: "discovery",
    title: "Guided service discovery",
    description:
      "Browse the same four service categories used across the site and select only the work that belongs in the brief.",
  },
  {
    id: "configuration",
    title: "Project configuration",
    description:
      "Name the project, describe it, and record who it is for, without leaving the page.",
  },
  {
    id: "estimation",
    title: "Cost estimation",
    description:
      "See an illustrative sample subtotal update immediately, and see which selections still need a custom quotation.",
  },
  {
    id: "briefs",
    title: "Structured project briefs",
    description:
      "Move through the brief in steps. Earlier answers stay in place when you go back.",
  },
  {
    id: "summary",
    title: "Project summary generation",
    description:
      "Review a structured summary, then copy it or download it as a text file on your own device.",
  },
];

export const studioProductSteps: ProcessStep[] = [
  {
    id: "explore",
    step: "01",
    title: "Explore",
    description: "Choose the services that belong in the conversation.",
  },
  {
    id: "configure",
    step: "02",
    title: "Configure",
    description: "Describe the project and who it is for.",
  },
  {
    id: "estimate",
    step: "03",
    title: "Estimate",
    description: "Review sample rates and anything that needs a custom quotation.",
  },
  {
    id: "prepare",
    step: "04",
    title: "Prepare",
    description: "Generate a summary you can keep.",
  },
  {
    id: "enquire",
    step: "05",
    title: "Enquire",
    description: "Carry the summary into the contact form. It still stays in your browser.",
  },
];

export const wizardSteps = [
  { id: "explore", label: "Explore", hint: "Choose services" },
  { id: "configure", label: "Configure", hint: "Describe the project" },
  { id: "plan", label: "Plan", hint: "Budget and timeline" },
  { id: "prepare", label: "Prepare", hint: "Review the summary" },
] as const;
