# Mufteem Dev Portfolio

A modern Next.js portfolio for **Muhammad Bello Ibrahim (Mufteem Dev)** focused on frontend development, product work, campus technology, fintech, and digital health.

## Tech Stack
- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- next-themes

## Features
- Portrait-led hero with brand statement: **Think Bold, Build Smart.**
- About, skills, projects, experience timeline, education, vision/mission, contact
- Project filtering by domain
- GitHub repository integration
- Dark/light mode toggle
- Micro-interactions and scroll-reveal animations
- SEO metadata + JSON-LD schema
- Honest product status labels and verified profile links

## Project Structure
```text
src/
  app/
    globals.css
    layout.tsx
    page.tsx
  components/
    layout/
      footer.tsx
      navbar.tsx
      theme-toggle.tsx
    providers/
      theme-provider.tsx
    sections/
      about.tsx
      contact.tsx
      education.tsx
      github-showcase.tsx
      hero.tsx
      insights.tsx
      journey.tsx
      projects.tsx
      skills.tsx
      vision.tsx
    ui/
      animated-section.tsx
      section-heading.tsx
  data/
    portfolio.ts
public/
  cv/
    muhammad-bello-ibrahim-cv.pdf
  projects/
    connectrix.svg
    eguy.svg
    mesafe.svg
    routina.svg
```

## Run Locally
```bash
npm install
npm run dev
```

## Build & Validate
```bash
npm run lint
npm run build
```

## Content Updates
- Update all profile/project text in: `src/data/portfolio.ts`
- Replace project thumbnails in: `public/projects/`
