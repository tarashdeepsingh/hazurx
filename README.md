# HAZURX

Website for **HAZURX**, a founder-led software studio. *Inspired by roots. Built for the future.*

A multi-page, dark, minimal site with a Three.js glass "X" hero that moves and fades as you scroll, glass-style cards, scroll-driven animation, and a contact form that opens the visitor's email app with everything pre-filled.

## Pages

| Route | What it shows |
|---|---|
| `/` | Hero with the 3D scene, services marquee, key numbers, "what we do" pipeline, recent work, who we are, contact |
| `/services` | Six services as cards with animated icons, plus a scroll-driven "how it works" timeline |
| `/work` | Vetko Surveys (website, admin panel and Android scanner app) plus PARAKH, NIS.Cost and Isher Holdings, with real screenshots |
| `/experience` | Years of experience, headline results, the full results list, case studies, skills and awards |
| `/about` | The founder, how we work (principles), strengths and the meaning of the name |
| `/contact` | "Let's build." with the contact form |

## Tech stack

- [Next.js](https://nextjs.org) 16 (App Router) and React 19
- [Tailwind CSS](https://tailwindcss.com) 4
- [Three.js](https://threejs.org) via [@react-three/fiber](https://r3f.docs.pmnd.rs) and [@react-three/drei](https://drei.docs.pmnd.rs) for the 3D scene
- [Motion](https://motion.dev) for animation and [Lenis](https://lenis.darkroom.engineering) for smooth scrolling
- TypeScript and ESLint

## Getting started

Requires Node.js 20 or newer.

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build
npm run start      # serve the production build
npm run lint       # lint the code
npx tsc --noEmit   # type-check
```

## Project structure

```
src/
  app/                 Routes (page.tsx per route), layout, global styles, icons
  components/          UI sections and shared pieces
    Scene.tsx            The Three.js glass "X" scene (scroll-driven)
    SceneLoader.tsx      Loads the scene client-side and fades it as you scroll
    Hero.tsx, Work.tsx, Experience.tsx, Services.tsx, ...
    Tilt.tsx, Reveal.tsx, Magnetic.tsx   Reusable interaction helpers
  lib/
    content.ts         All site copy and data in one place
public/
  work/                Project screenshots (websites and Android app)
  tarashdeep-cutout.png   Founder portrait used on the About page
```

## Editing content

Almost all text lives in **`src/lib/content.ts`**: site details, services, projects, experience results, skills, principles and the founder bio. Change it there and the pages update. Screenshots go in `public/work/` and are referenced from the `projects` list.

The contact form (`src/components/ContactForm.tsx`) builds a `mailto:` link, so it needs no backend. It opens the visitor's email app with their name, email and message filled in. Visitors without an email app configured get a fallback link.

## Notes

- The 3D scene needs a GPU-accelerated browser. It uses a lighter setup on phones and low-core devices, and respects the system's reduced-motion setting where animations loop.
- Fonts: Inter Tight, Inter, JetBrains Mono and Noto Sans Gurmukhi (loaded through `next/font`).
- The favicon is `src/app/icon.svg` with `favicon.ico` and `apple-icon.png` alongside it.

## Deployment

Any host that supports Next.js works. The simplest is [Vercel](https://vercel.com): import the repository and deploy with the default settings.
