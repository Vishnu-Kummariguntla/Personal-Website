# Personal Website

[![CI](https://github.com/Vishnu-Kummariguntla/Personal-Website/actions/workflows/ci.yml/badge.svg)](https://github.com/Vishnu-Kummariguntla/Personal-Website/actions/workflows/ci.yml)
![React](https://img.shields.io/badge/React-19-61dafb?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646cff?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38bdf8?logo=tailwindcss&logoColor=white)

A living portfolio for my projects, debate experience, hobbies, and engineering interests. The site is built as a single-page React app with a custom animated background, project detail pages, a horizontal project timeline, debate results, and responsive portfolio sections.

## Preview

![Homepage screenshot](docs/screenshots/homepage.png)

## Features

- Interactive portfolio homepage with animated background effects.
- Project timeline sorted by date, with detail pages for each project.
- MiniLedger project page with repository link and SIE Trainer gallery image.
- Debate section with tournament results, roles, and personal reflections.
- Hobbies section with custom and Lucide-based icons.
- Responsive navigation with active-section highlighting.
- Contact widget with phone, email, GitHub, and LinkedIn links.

## Tech Stack

- React 19
- Vite 6
- Tailwind CSS 3
- Framer Motion
- Lucide React

## Architecture

```text
src/
  App.jsx                         Route handling and page composition
  data.js                         Portfolio content, projects, debate data, hobbies
  components/
    Card.jsx                      Shared card surface
    Navbar.jsx                    Responsive nav and active section tracking
    ProjectCard.jsx               Timeline card
    ProjectDetailPage.jsx         Detail view for each project
    InteractiveBackground.jsx     Animated site background
    sections/
      Hero.jsx
      AboutSection.jsx
      ProjectsSection.jsx
      DebateSection.jsx
      HobbiesSection.jsx
  utils/
    navigation.js                 Section id mapping and smooth scrolling
    sort.js                       Project and debate sorting helpers
public/
  images/                         Static images and project visuals
docs/
  screenshots/                    README screenshots
```

Most site content is data-driven from `src/data.js`. Project cards, detail pages, debate results, and hobby cards render from those arrays, which keeps content updates separate from component layout work.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the local development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Maintenance Workflow

Suggested commit style:

```text
feat: add new portfolio project
fix: correct debate section copy
style: sharpen card and timeline visuals
docs: update README screenshots
chore: update dependencies
```

Recommended checks before pushing:

```bash
npm run build
git status --short
```

## Repository Notes

- CI runs `npm ci` and `npm run build` on pushes to `main` and pull requests.
- Deployment metadata is not currently configured in this repo. Add a real deployment badge after connecting the site to a host such as GitHub Pages, Vercel, Netlify, or Firebase Hosting.
- GitHub repo description, website URL, and topics must be set from the GitHub repository settings page.
