# 📐 Wireframes & UI/UX Design System Specification
**Project:** Kymer Oriel Crisostomo — Personal Developer & Designer Portfolio  
**Author / Designer:** Kymer Oriel Crisostomo (`kymerorielcrisostomo@gmail.com`)  
**Repository:** [github.com/KYmer-dotcom/crisostomo-portfolio](https://github.com/KYmer-dotcom/crisostomo-portfolio)  
**Evaluation Status:** Prepared for Checking of Wireframes & Designs  

---

## 1. Executive Summary & Objective

The primary objective of this project is to architect a high-performance, visually engaging, and accessible personal portfolio website for **Kymer Oriel Crisostomo**. 

Before committing to code implementation, this document and its accompanying wireframes establish the **information architecture**, **component hierarchy**, **low-fidelity layout blueprints**, and **design token system** to guarantee optimal usability across all screen viewports.

---

## 2. Information Architecture (IA) & User Flow

```
[ Visitor Lands on Portfolio ]
              │
              ├──► Hero Section (Value Proposition, Status, Quick CTAs)
              │         │
              │         ├──► [Explore Projects] ──► Smooth scroll to Projects Grid
              │         ├──► [Check Wireframes] ──► Opens wireframes.html (Design Spec)
              │         └──► [Toggle Blueprint]  ──► Activates Live Wireframe Inspection Mode
              │
              ├──► Evaluation Banner (Direct access to checking artifacts & rubrics)
              │
              ├──► About Section (Bento Grid: Performance, Blueprint UX, Architecture, Mobile)
              │
              ├──► Featured Projects (Interactive filters: All / Full-Stack / Frontend / Systems)
              │         │
              │         └──► [View Architecture] ──► Interactive Deep-Dive Modal
              │
              ├──► Technical Competencies (Visual proficiency metrics: Frontend, Backend, UI/UX, DevOps)
              │
              ├──► Experience & Education Timeline (Chronological academic & project milestones)
              │
              └──► Contact Section (Validated input form + direct social/email channels)
```

---

## 3. Low-Fidelity Wireframe Blueprints (Lo-Fi)

### 3.1 Desktop Viewport Blueprint (1440px / 12-Column Grid)

```
┌───────────────────────────────────────────────────────────────────────────────┐
│ [KC. Kymer.dev]      [Home]  [About]  [Projects]  [Skills]  [📐 Wireframes]  [🌓] │
├───────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│  [● Available for Roles]                                 ┌─────────────────┐  │
│                                                          │  PROFILE CARD   │  │
│  Architecting Scalable Systems &                         │  [Avatar Image] │  │
│  Intuitive Digital Products.                             │                 │  │
│                                                          │  Kymer O. Cris. │  │
│  Hi, I'm Kymer Oriel Crisostomo — Full-Stack Engineer   │  Full-Stack Dev │  │
│  & UI/UX Designer...                                     │                 │  │
│                                                          │  [JS] [React]   │  │
│  [ Explore Work -> ]   [ 📐 Check Wireframes ]           └─────────────────┘  │
│                                                                               │
│  15+ Projects        100% Responsive        3+ Years Exp                      │
│                                                                               │
├───────────────────────────────────────────────────────────────────────────────┤
│  📐 EVALUATION CHECKPOINT: Wireframes & Design System Ready for Checking      │
│  [ Open Design Spec Hub -> ]               [ Inspect Live Blueprint Mode ]     │
├───────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│  ABOUT ME: Driven by Curiosity, Defined by Craft                             │
│                                                                               │
│  ┌─────────────────────────────────┐   ┌───────────────┬───────────────┐      │
│  │ Narrative Paragraphs:           │   │ ⚡ Performance │ 📐 Blueprint  │      │
│  │ Philosophy, architecture focus, │   ├───────────────┼───────────────┤      │
│  │ clean code & UX methodology.    │   │ 🔒 Clean Arch │ 📱 Responsive │      │
│  └─────────────────────────────────┘   └───────────────┴───────────────┘      │
│                                                                               │
├───────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│  PORTFOLIO SHOWCASE: Selected Engineering Works                               │
│  [ All Projects ]   [ Full-Stack ]   [ Frontend & UI ]   [ Systems & Real-time ]│
│                                                                               │
│  ┌──────────────────────┐ ┌──────────────────────┐ ┌──────────────────────┐   │
│  │ [Image: NexusCloud]  │ │ [Image: AuraFlow]    │ │ [Image: FinPulse]    │   │
│  │ Cloud Infrastructure │ │ AI & Creative Tool   │ │ FinTech Terminal     │   │
│  │ NexusCloud Dashboard │ │ AuraFlow Studio      │ │ FinPulse Trading     │   │
│  │ [React] [Node] [K8s] │ │ [TS] [WebGL] [FastAPI│ │ [JS] [Canvas] [WS]   │   │
│  └──────────────────────┘ └──────────────────────┘ └──────────────────────┘   │
│                                                                               │
├───────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│  TECHNICAL COMPETENCIES & MATRIX                                              │
│  ┌──────────────────┐ ┌──────────────────┐ ┌──────────────────┐ ┌───────────┐ │
│  │ Frontend Eng     │ │ Backend & Data   │ │ UI/UX Design     │ │ DevOps    │ │
│  │ HTML5/CSS3   95% │ │ Node/Express 88% │ │ Lo-Fi/Hi-Fi  95% │ │ Git/GH 94%│ │
│  │ JS/TS        90% │ │ SQL/Postgres 85% │ │ Figma Sys    90% │ │ Docker 82%│ │
│  │ React/Next   88% │ │ REST/GraphQL 90% │ │ Accessibility 92%│ │ CI/CD  80%│ │
│  └──────────────────┘ └──────────────────┘ └──────────────────┘ └───────────┘ │
│                                                                               │
├───────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│  GET IN TOUCH: Contact Form & Channels                                        │
│  ┌──────────────────────────────────┐ ┌─────────────────────────────────────┐ │
│  │ ✉️ kymerorielcrisostomo@gmail.com │ │ Name:    [________________________] │ │
│  │ 🐙 github.com/KYmer-dotcom       │ │ Email:   [________________________] │ │
│  │ 📍 Philippines (GMT+8)           │ │ Subject: [________________________] │ │
│  │                                  │ │ Message: [________________________] │ │
│  │ [ 📐 View Design Spec Sheet ]    │ │          [ Send Message -> ]        │ │
│  └──────────────────────────────────┘ └─────────────────────────────────────┘ │
├───────────────────────────────────────────────────────────────────────────────┤
│  © 2026 Kymer Oriel Crisostomo. All rights reserved. • Handcrafted UI/UX      │
└───────────────────────────────────────────────────────────────────────────────┘
```

---

### 3.2 Mobile Viewport Blueprint (375px Screen)

```
┌─────────────────────────────────┐
│ [KC] Kymer.dev            [ ☰ ] │
├─────────────────────────────────┤
│ [● Available for Roles]         │
│                                 │
│ Architecting                    │
│ Scalable Systems &              │
│ Intuitive Digital               │
│ Products.                       │
│                                 │
│ Hi, I'm Kymer Oriel Crisostomo  │
│ Full-Stack Dev & UI/UX Designer │
│                                 │
│ [ Explore Featured Work -> ]    │
│ [ 📐 Check Design Specs ]       │
│                                 │
│ ┌─────────────────────────────┐ │
│ │       PROFILE CARD          │ │
│ │       [Avatar Image]        │ │
│ │  Kymer Oriel Crisostomo     │ │
│ │  [JS] [React] [Node] [UX]   │ │
│ └─────────────────────────────┘ │
├─────────────────────────────────┤
│ 📐 EVALUATION CHECKPOINT        │
│ Wireframes Ready for Checking   │
│ [ Open Design Spec Hub ]        │
├─────────────────────────────────┤
│ ABOUT ME                        │
│ Bento Cards (Stacked):          │
│ ┌─────────────────────────────┐ │
│ │ ⚡ High Performance         │ │
│ └─────────────────────────────┘ │
│ ┌─────────────────────────────┐ │
│ │ 📐 Blueprint-First UX       │ │
│ └─────────────────────────────┘ │
├─────────────────────────────────┤
│ FEATURED PROJECTS               │
│ [Filter Dropdown / Pills]       │
│ ┌─────────────────────────────┐ │
│ │ [Project Thumbnail]         │ │
│ │ NexusCloud Dashboard        │ │
│ │ [View Architecture Modal]   │ │
│ └─────────────────────────────┘ │
├─────────────────────────────────┤
│ CONTACT FORM                    │
│ [Name]                          │
│ [Email]                         │
│ [Message]                       │
│ [ Send Message ]                │
├─────────────────────────────────┤
│ © 2026 Kymer Oriel Crisostomo   │
└─────────────────────────────────┘
```

---

## 4. Evaluator Rubric & Compliance Matrix

| # | Criterion | Implementation Detail | Location | Status |
|---|-----------|-----------------------|----------|--------|
| **1** | **Low-Fidelity Wireframes** | Desktop (1440px) & Mobile (375px) schematics with structural layout notes | `wireframes.html` & `assets/designs/lofi_wireframes_sheet.jpg` | ✅ Complete |
| **2** | **High-Fidelity Mockup** | Cyber-slate aesthetic, glowing ambient lighting, glassmorphic elevation | `wireframes.html` & `assets/designs/hifi_portfolio_mockup.jpg` | ✅ Complete |
| **3** | **Design Token Palette** | Hex, HSL, RGB, and WCAG 2.1 AA/AAA contrast ratios verified (4.5:1 to 17.5:1) | `css/variables.css` & `wireframes.html` | ✅ Complete |
| **4** | **Typography Scale** | Modular scale using Outfit, Plus Jakarta Sans, and JetBrains Mono | `css/variables.css` & `wireframes.html` | ✅ Complete |
| **5** | **Responsive Layout** | Fluid Grid, CSS Flexbox, and mobile breakpoint queries (max-width: 992px, 768px) | `css/main.css` & Viewport Simulator | ✅ Complete |
| **6** | **Component States** | Buttons, form inputs, badges, and project cards in Default, Hover, Focus, Disabled | `wireframes.html` (Component States Matrix) | ✅ Complete |
| **7** | **Live Blueprint Mode** | In-browser toggle showing semantic tags (`<header>`, `<section>`, `<nav>`) and HUD | Global toggle button (Shortcut: `B`) | ✅ Complete |

---

## 5. Visual Artifact Files in Repository

- **Low-Fidelity Wireframe Sheet:** `assets/designs/lofi_wireframes_sheet.jpg`
- **High-Fidelity UI Design Mockup:** `assets/designs/hifi_portfolio_mockup.jpg`
- **Master Design System Board:** `assets/designs/design_system_board.jpg`
- **Interactive Wireframe Checking Page:** `wireframes.html`
- **Main Portfolio Live Application:** `index.html`
