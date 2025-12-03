# Phase 2 — "About Me" Page

**Status:** ✅ Complete
**Date:** 2025-12-03

---

## Content Structure

The About page is organized into 5 main sections:

### 1. Hero Section
- Bold headline: "I build software that fixes real problems"
- Subtitle: "From Brazil to Ireland. From handwritten orders to automated systems."
- Sets the tone immediately—no fluff

### 2. The Beginning (Personal Story)
**Focus:** How an online pool game in 2017 changed your career path

Key elements:
- 2017: Reconnected with Gregory (friend since 2006) during online pool game
- Gregory is now Software Architect at Microsoft
- Was working as real-estate agent in Brazil at the time
- Planned to move with fiancée, but life changed plans
- 2020: Came to Ireland alone to study programming
- Gregory became major mentor (documentation, tickets, technical help)
- Still lives in same city, hosts your projects on his server
- 20 years of friendship, feels like family
- Mother runs açaí delivery business in Brazil
- She has chronic pain, fibromyalgia, reduced mobility in left hand
- Used to manage orders manually in notebook despite constant discomfort
- Learning to code became way to help from a distance
- Built custom delivery system to remove manual work and reduce her pain

**Tone:** Authentic, personal journey. Real story with real people (Gregory named, specific timeline).

### 3. Building Real Solutions
**Focus:** The barbershop project as proof of production-ready work

Key elements:
- Continued building real solutions for real businesses
- Built complete management system for largest barbershop in Buritizeiro, MG
- System handles: scheduling, sales, expenses, cash flow, loyalty, plans, day-to-day operations
- Already being used in production
- Before: chaos in spreadsheets and notebooks
- Core philosophy: good software makes people's lives easier, especially when they need it most
- Not about adding features—about removing friction from actual days

**Tone:** Practical, proven results. Production systems, not just side projects.

### 4. How I Work (Personal Philosophy)
**Focus:** Your development approach

Key principles:
- Problem-first approach (not stack-first)
- Build end-to-end (backend, frontend, database, deployment)
- Write readable code, document what's not obvious
- Talk to users—conversation is best debugging tool
- Software that works > software that impresses

**Tone:** Senior developer perspective. Practical, not preachy.

### 5. Today (Current Life & Focus)
**Focus:** Current reality + what you're looking for

Key points:
- Studies Computer Science in Dublin (Monday-Wednesday)
- Works as Supervisor at Gleeson's Spar in Limerick (Thursday-Sunday)
- Been at Gleeson's for 3+ years
- Intense routine, but part of the journey that started in 2017
- Grateful for mother (inspired first real project)
- Grateful for Gregory (mentor, guide, pillar of support)
- Every project carries where you came from and who helped
- Looking for opportunities: backend-heavy projects, full-stack products
- Want to work on systems that matter with teams that care about users
- Call-to-action: "Get in Touch" button

---

## Writing Quality Checklist

✅ **No AI fingerprints:**
- No clichés like "seamless," "empower," "unlock potential"
- No repetitive sentence patterns
- Natural sentence length variation
- Conversational but professional

✅ **Human authenticity:**
- Real stories (mother's pain, barbershop chaos)
- Specific details (Buritizeiro, MG; chronic pain; handwritten orders)
- Honest motivations (not romanticized)
- Practical focus, not inspirational

✅ **Senior-level tone:**
- Confident without arrogance
- Experience-driven statements
- No excessive adjectives
- Clear, direct language

✅ **Emotional resonance:**
- Shows care without sentimentality
- Distance from mother adds context
- Impact on real businesses emphasized
- Personal connection to work is clear

---

## Technical Implementation

**Component:** `/src/app/about/page.tsx`

**Features:**
- Server-side rendering (Next.js 14 App Router)
- SEO metadata configured
- Responsive layout
- Uses SectionHeader component for consistency
- Dark theme with gradient accents
- Proper semantic HTML structure

**Sections use alternating backgrounds:**
- Standard: transparent
- Alternate: `bg-background-light/30` for visual separation

---

## Route

**URL:** `/about`

**Navigation:** Available in main navbar

---

## Next Steps

Move to **Phase 3: Project Page - Açaí Delivery** to create the detailed case study for your mother's delivery platform.
