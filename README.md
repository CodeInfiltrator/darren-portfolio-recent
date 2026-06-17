# Darren Portfolio — Next.js

A responsive, reusable portfolio website for Frizzia Darren Suherman, combining Computer Science, Apple Developer Academy journey, project work, and modeling profile.

## Tech Stack

- Next.js App Router
- React
- TypeScript
- Plain CSS, no external UI dependency
- Ready for Vercel deployment

## How to Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## How to Update Content

Most personal content is stored in:

```txt
src/data/profile.ts
```

Edit this file to update:

- Name, role, email, social links
- Projects
- Skills
- Experience timeline
- Modeling details
- Contact CTA

## How to Deploy to Vercel

### Option 1 — GitHub Import

1. Create a new GitHub repository.
2. Push this project to GitHub.
3. Open Vercel and choose **Add New Project**.
4. Import the GitHub repository.
5. Use the default Next.js settings.
6. Deploy.

### Option 2 — Vercel CLI

```bash
npm install -g vercel
vercel --prod
```

## Suggested Next Updates

- Replace the DS placeholder with a real photo.
- Add GitHub links for each project.
- Add Figma/case study links for Apple Developer Academy challenges.
- Add a downloadable resume PDF.
- Add a `/case-studies` route later when projects become deeper.
