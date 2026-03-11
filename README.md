# OpenClaw Photographer Portfolio

## Description
A static personal portfolio and photo showcase for a photographer, built as a polished single-page site with an about section, featured gallery, contact form, and persistent light/dark mode toggle.

## Tech Stack
- Next.js (App Router) + TypeScript + Tailwind CSS
- Jest + React Testing Library
- Static deployment with `next build` and `next start`

## Getting Started
```bash
npm install --include=dev
npm run dev
```

## Features
- Hero section with photographer branding and call-to-action
- About me section with profile summary and key stats
- Photo showcase grid for featured work
- Contact form section for inquiries
- Persistent light/dark theme toggle
- Responsive single-page layout

## API Endpoints
None. This project is fully static.

## Database Schema
None. This project does not use a database.

## Project Structure
```text
src/
├── app/          # App Router pages and global styles
├── components/   # Reusable page sections and theme toggle
└── lib/          # Typed portfolio content
```

## Staging
After a successful production build, run:
```bash
npm run build
npm run start -- --hostname 0.0.0.0 --port 8080
```

## Notes
- Built as a static single-page showcase with placeholder content ready to customize.
