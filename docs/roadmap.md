# **PORTFOLIO ROADMAP — Professional Developer Portfolio (EN)**

**Version:** 1.0
**Author:** Paulo Gomes
**Stack:** Next.js 14 + TailwindCSS
**Style:** Dark Modern (Purple / Black / Gradient)
**Language:** English Only
**Audience:** Tech recruiters, founders, senior engineers
**Goal:** Create a portfolio that feels human, polished, and senior-level — without traces of AI writing.

---

# 📌 **DOCUMENT RULES (read before using)**

To ensure the content looks **human-written**, all outputs generated via the prompts must follow these rules:

### **1. Natural Human Writing**

* No repetitive patterns
* No generic inspirational lines
* No robotic tone
* Vary sentence length
* Include small natural imperfections
* Prefer clarity over “marketing speech”

### **2. Zero AI Fingerprints**

* Avoid clichés like “Unlock your potential”, “Seamless experience”, “Empowering businesses”
* No bullet-point spam unless necessary
* Do not structure paragraphs identically
* No “As an AI model…” type structures

### **3. Strict English Quality**

* Concise, confident, senior tone
* Avoid excessive adjectives
* Use industry vocabulary naturally
* Avoid fluff

### **4. Consistent Branding**

* Dark theme
* Developer aesthetic
* Touch of personality, not drama
* Pages must feel handcrafted

---

# 📁 **INDEX**

1. [Phase 0 — Identity & Positioning](#phase-0)
2. [Phase 1 — Portfolio Architecture](#phase-1)
3. [Phase 2 — “About Me” Page](#phase-2)
4. [Phase 3 — Project Açaí Page](#phase-3)
5. [Phase 4 — Project Barbershop Page](#phase-4)
6. [Phase 5 — Skills & Tech Stack Page](#phase-5)
7. [Phase 6 — Contact Page](#phase-6)
8. [Phase 7 — Visual Layout & Components](#phase-7)
9. [Phase 8 — Deploy](#phase-8)
10. [Phase 9 — Final Review Checklist](#phase-9)

Each phase includes:

* Objective
* Deliverables
* Acceptance Criteria
* Prompts for Claude
* Notes to keep writing human

---

# <a name="phase-0"></a>

# **PHASE 0 — Identity & Positioning**

**Goal:** Define who you are AND who your portfolio speaks to.

---

## 🎯 **Objectives**

* Craft your professional identity
* Define tone, voice, and personality
* Establish your “developer narrative”
* Define target audience: backend, full stack, product teams, founders

---

## 📌 **Deliverables**

1. One-line personal headline
2. 3–4 sentence professional summary
3. Positioning statement
4. Tone & writing rules

---

## ✅ **Acceptance Criteria**

* English sounds natural
* Zero AI markers
* Senior-level clarity
* Short, confident sentences

---

## 🤖 **Prompt for Claude (PHASE 0)**

```
You are writing for a developer portfolio in English. 
Your job: generate my Identity & Positioning Pack.

Follow these constraints:

Tone:
- senior, calm, confident
- no generic or vague phrases
- avoid marketing tone
- avoid robotic sentence patterns
- vary sentence length naturally

Context about me:
- Brazilian full-stack developer living in Ireland
- I build real products for real businesses
- I created a custom delivery platform to help my mother, who has chronic pain and limited hand mobility
- I built a full management system for the largest barbershop in Buritizeiro, MG
- I specialize in building systems that reduce manual work and fix real operational pain points

Generate:
1. A one-line headline (max 10 words)
2. A short bio (4–6 sentences)
3. A positioning statement: who I am + who I help + what I build
4. A small list of writing rules for my portfolio (to sound human)

Output must be clean, natural, and polished.
```

---

# <a name="phase-1"></a>

# **PHASE 1 — Portfolio Architecture**

**Goal:** Define structure, routes, folders, components, and layout system.

---

## 📌 **Deliverables**

* Folder structure (Next.js + Tailwind)
* Routing plan
* Shared components (Navbar, Footer, Layout, Hero, SectionHeader)
* Theme settings (colors, typography, spacing)
* Dark mode guidelines

---

## 📁 **Structure Example**

```
/src
  /app
    /about
    /projects
      /acai-delivery
      /barbershop-system
    /skills
    /contact
  /components
  /styles
  /lib
  /data
```

---

## 🤖 **Prompt for Claude (PHASE 1)**

```
Create the full architectural structure for my Next.js + Tailwind portfolio.
Style: dark modern, purple/black gradient.

Include:
- folder tree
- pages/routes
- base layout component
- reusable components
- color palette (dark theme)
- typography settings
- spacing scale
- Tailwind config extension

Rules:
- no boilerplate text
- no AI tone
- short explanations only
- code must be clean and modern
```

---

# <a name="phase-2"></a>

# **PHASE 2 — “About Me” Page**

**Goal:** Build a **human, authentic** life story + professional summary.

This page **must not sound AI-generated**.

---

## 🧩 **Structure**

* Hero section
* Personal story (Ireland + your mother + motivation)
* The “Why I build software” story
* Personal philosophy
* Timeline (optional)

---

## 🤖 **Prompt for Claude (PHASE 2)**

```
Write the full content for my “About Me” page.
Tone: human, calm, real. No inspirational clichés. No AI patterns.

Include:
- where I'm from
- why I moved to Ireland
- the story of building a custom delivery system to help my mother 
  (chronic pain, mobility limitations, handwritten orders)
- my sister helping her
- how building software became a way for me to stay close even from far away
- the barbershop system (largest in Buritizeiro, MG)
- what I believe good software should do
- how I work as a developer

Rules:
- No dramatic tone
- No marketing clichés
- Vary sentence length
- Sound like a real person
```

---

# <a name="phase-3"></a>

# **PHASE 3 — Project Page: Açaí Delivery**

**Goal:** Present the project with both **technical depth** and **human impact**.

---

## 🧩 **Sections**

* Project overview
* The problem (your mom’s pain, handwriting difficulty)
* The solution
* System architecture
* Features
* Real-world impact
* Tech stack
* Screenshots & flows
* What you learned

---

## 🤖 **Prompt for Claude (PHASE 3)**

```
Generate the full project page content for “Açaí Delivery”.

Tone rules:
- professional
- human
- senior
- avoid AI-like repetition
- avoid exaggerated enthusiasm

Include:
1. Short overview
2. The real-world problem (mother’s chronic pain, difficulty writing orders)
3. What I built and why
4. Key features (use natural language)
5. Architecture summary
6. Technical challenges and solutions
7. Real impact on her daily work
8. What I learned building it
9. Final section: “What’s next”

Write in English. Human tone.
```

---

# <a name="phase-4"></a>

# **PHASE 4 — Project Page: Barbershop System**

**Goal:** Present the second major project with clarity & technical strength.

---

## 🧩 **Sections**

* Overview
* The real client (largest barbershop in Buritizeiro–MG)
* Business needs
* Modules & capabilities
* Architecture
* Features
* Operational impact
* Learnings

---

## 🤖 **Prompt for Claude (PHASE 4)**

```
Write the complete project page for “Barbershop Management System”.

Tone:
- senior engineer
- calm, confident, human
- no AI clichés
- varied sentence length

Include:
- the business context
- modules (scheduling, sales, cash register, products, expenses, plans, loyalty)
- design decisions
- technical challenges
- impact on operations
- why this project matters
- what I learned

Short paragraphs. Clean English.
```

---

# <a name="phase-5"></a>

# **PHASE 5 — Skills & Tech Stack Page**

---

## 🧩 **Sections**

* Core languages
* Frameworks & tools
* Architecture skills
* Soft skills
* Real-world experience

---

## 🤖 **Prompt for Claude (PHASE 5)**

```
Generate the content for my “Skills” page.

Tone:
- human
- concise
- no buzzwords

Include:
- Languages (Python, JavaScript, TypeScript)
- Frameworks (Django, DRF, React, Next.js)
- Systems I built (delivery, management, scheduling)
- What I'm good at in architecture and backend
- My philosophy as a developer
```

---

# <a name="phase-6"></a>

# **PHASE 6 — Contact Page**

---

## 🤖 **Prompt for Claude (PHASE 6)**

```
Generate the text for my Contact page.
Tone: short, friendly, human.
Include:
- brief note on how people can reach me
- email line
- optional LinkedIn line
```

---

# <a name="phase-7"></a>

# **PHASE 7 — Visual Layout & Components**

---

## 🤖 **Prompt for Claude (PHASE 7)**

```
Generate all UI components in React + Tailwind:
- Navbar
- Footer
- SectionHeader
- ProjectCard
- Timeline
- SkillsGrid
- ContactForm (simple)
- Dark gradient backgrounds

Follow the dark modern theme (purple/black).
```

---

# <a name="phase-8"></a>

# **PHASE 8 — Deploy**

---

## 🤖 **Prompt for Claude (PHASE 8)**

```
Give me the steps to deploy this Next.js portfolio on:
- Vercel

Include:
- env setup
- build settings
- domain setup
```

---

# <a name="phase-9"></a>

# **PHASE 9 — Final Review Checklist**

---

## ✔️ **Content**

* English natural
* No AI fingerprints
* Consistent tone

## ✔️ **Technical**

* SEO titles + meta
* Mobile responsiveness
* Lighthouse score > 90

## ✔️ **Visual**

* Colors consistent
* Typography clean
* No clutter

---

# ✅ **ROADMAP C FINALIZADO**
