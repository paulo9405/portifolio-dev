# Phase 1 — Portfolio Architecture

**Status:** ✅ Complete
**Date:** 2025-12-03

---

## Folder Structure

```
/portifolio-dev
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout with metadata
│   │   ├── page.tsx                # Homepage
│   │   ├── about/
│   │   ├── projects/
│   │   │   ├── acai-delivery/
│   │   │   └── barbershop-system/
│   │   ├── skills/
│   │   └── contact/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx          # Navigation bar
│   │   │   └── Footer.tsx          # Footer component
│   │   ├── ui/
│   │   │   └── ProjectCard.tsx     # Project card component
│   │   └── shared/
│   │       └── SectionHeader.tsx   # Reusable section header
│   ├── styles/
│   │   └── globals.css             # Global styles + Tailwind
│   ├── lib/                        # Utility functions
│   └── data/                       # Static data (projects, skills)
├── public/
│   └── images/
│       ├── projects/               # Project screenshots
│       └── icons/                  # Icons and logos
├── docs/                           # Documentation
├── tailwind.config.ts              # Tailwind configuration
└── package.json
```

---

## Routing Plan

**App Router (Next.js 14)**

| Route | Page | Purpose |
|-------|------|---------|
| `/` | Home | Hero + brief intro |
| `/about` | About Me | Personal story, motivation, philosophy |
| `/projects` | Projects List | Overview of all projects |
| `/projects/acai-delivery` | Açaí Delivery | Full project case study |
| `/projects/barbershop-system` | Barbershop System | Full project case study |
| `/skills` | Skills & Tech Stack | Technologies and capabilities |
| `/contact` | Contact | Contact form/info |

---

## Color Palette (Dark Theme)

**Background Colors:**
- `background`: `#0a0a0f` (main dark)
- `background-dark`: `#050508` (darker)
- `background-light`: `#12121a` (cards)

**Primary Colors (Purple):**
- `primary`: `#8b5cf6`
- `primary-light`: `#a78bfa`
- `primary-dark`: `#7c3aed`

**Accent Colors:**
- `accent-purple`: `#c084fc`
- `accent-pink`: `#e879f9`
- `accent-blue`: `#60a5fa`

**Text Colors:**
- `text-primary`: `#f8fafc` (headings)
- `text-secondary`: `#cbd5e1` (body)
- `text-muted`: `#64748b` (subtle text)

**Border Colors:**
- `border`: `#1e293b`
- `border-light`: `#334155`

---

## Typography

**Font Family:**
- Sans: Inter (via Google Fonts)
- Mono: System monospace

**Scale:**
- h1: `text-4xl md:text-5xl lg:text-6xl`
- h2: `text-3xl md:text-4xl lg:text-5xl`
- h3: `text-2xl md:text-3xl`
- Body: `text-base` (16px)

---

## Spacing Scale

Custom spacing added to Tailwind:
- `spacing-18`: 4.5rem
- `spacing-88`: 22rem
- `spacing-128`: 32rem

---

## Reusable Components

### Layout Components
- **Navbar**: Fixed navigation with active state
- **Footer**: Site footer with links

### UI Components
- **ProjectCard**: Card for project preview
- **SectionHeader**: Consistent section titles

### Utility Classes
- `container-custom`: Max-width container with padding
- `section-padding`: Consistent section spacing
- `card`: Card styling
- `btn-primary`: Primary button
- `btn-secondary`: Secondary button

---

## Gradients & Effects

**Background Gradients:**
- `bg-gradient-dark`: Dark gradient background
- `bg-gradient-purple`: Purple gradient
- `bg-gradient-accent`: Multi-color accent gradient

**Glow Effects:**
- `shadow-glow-sm`: Small purple glow
- `shadow-glow-md`: Medium purple glow
- `shadow-glow-lg`: Large purple glow

**Animations:**
- `animate-fade-in`: Fade in effect
- `animate-slide-up`: Slide up on load
- `animate-glow`: Pulsing glow effect

---

## Next Steps

Move to **Phase 2: "About Me" Page** to write the personal story content.
