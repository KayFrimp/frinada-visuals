# Frinada Visuals

Official marketing site for **Frinada Visuals**, a Ghana-based creative technology company, built as a static Next.js application for Assignment 10: Technology Startup Website.

The site presents four services — web and software, branding, digital marketing, and cloud infrastructure — and a frontend demonstration of **Frinada Studio**, a guided workspace for shaping a project brief.

## Requirements

- Node.js 20.9 or newer (Node.js 22 is what this project was built with)
- npm

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Copy `.env.example` to `.env.local` when you have a public URL:

```bash
NEXT_PUBLIC_SITE_URL=https://your-deployment.example
```

That value is used for canonical links, Open Graph URLs, the sitemap, and robots.txt. It defaults to `http://localhost:3000`. No production domain is assumed.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Local development |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript |
| `npm test` | Vitest unit and component tests |

## Pages

| Route | Role |
| --- | --- |
| `/` | Positioning, services, Studio preview, process, concept work, scenarios, questions |
| `/services` | The four service categories and the interactive Studio brief |
| `/pricing` | Scope comparison, live sample estimator, pricing questions |
| `/about` | Story, mission, vision, values, and approach |
| `/contact` | Project brief form that stays in the browser |

## Frinada Studio

Studio is an **interactive product preview**. It does not create an account, store a project on a server, send a message, approve a quotation, or take payment.

The brief has four steps: Explore, Configure, Plan, and Prepare. Selections update an illustrative subtotal immediately. Amounts are stored as integer pesewas so totals are not affected by floating-point error. Services without a sample rate show **Custom quote required**.

The summary can be copied or downloaded as a text file. A brief kept in `sessionStorage` can be carried into the contact form without putting personal details in the URL.

Sample rates are demonstration figures, not a commercial offer. Package cards on the pricing page compare scope and do not publish fixed fees.

## Reusable structure

Business facts live once under `src/data` and are typed in `src/types`. Price calculation, summary text, and validation live in `src/lib` as pure functions.

UI primitives (`Button`, `Section`, `FormField`, `Accordion`, and the rest) live in `src/components/ui`. Layout, service, pricing, and Studio components compose those primitives. Pages stay as server components and mount client components only where there is interaction: navigation, the estimator, the Studio brief, accordions, and the contact form.

## Brand

Navy `#020051` and white carry the interface. Green is used for positive selection, red for the wordmark accent, errors, and focus. The supplied lockups are rasters on solid backgrounds, so the header uses a typographic reconstruction of the same wordmark and peak mark. The printed lockup is shown on the About page.

Public phone, email, office address, and social profiles are not listed. None were available to verify, and the site does not invent them.

## Deploy on Vercel

1. Push the repository to GitHub.
2. Import the project in Vercel. Framework preset: Next.js.
3. Set `NEXT_PUBLIC_SITE_URL` to the deployment URL.
4. Deploy. `npm run build` is the production command.

No database, authentication, or server form handler is required.

## Verification

`npm run typecheck`, `npm run lint`, `npm test`, and `npm run build` are the checks to run before submission.

Desktop and mobile screenshots of all five pages are in `docs/screenshots`. They were captured from the production build at 1440px and 390px. At 320px, 390px, and 1440px the document width matches the viewport, so the pages do not scroll sideways.

## Submission notes

The repository is ready to push to GitHub and import on Vercel. Those steps are still to be run from this workspace.

Sample rates and concept projects are labelled as demonstration content. A verified phone number, email address, or social profile can be added to the footer and contact page when one is confirmed.
