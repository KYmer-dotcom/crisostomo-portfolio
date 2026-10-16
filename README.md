# 🚀 Kymer Oriel Crisostomo — Portfolio & Wireframe Design Hub

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![WCAG AAA](https://img.shields.io/badge/Accessibility-WCAG_AAA-10B981?style=for-the-badge)](https://www.w3.org/WAI/standards-guidelines/wcag/)
[![Wireframes Ready](https://img.shields.io/badge/Wireframes-Evaluation_Ready-38BDF8?style=for-the-badge)](wireframes.html)

> A modern, responsive, glassmorphic portfolio web application for **Kymer Oriel Crisostomo** (Full-Stack Software Developer & UI/UX Designer). Fully equipped with **Low-Fidelity & High-Fidelity Wireframes**, interactive **Blueprint Mode inspection**, and a **Design System Specification Hub** prepared for academic checking.

---

## 🎯 Quick Links for Evaluators & Reviewers

| Artifact | Description | Link |
|----------|-------------|------|
| 🌐 **Live Portfolio Website** | Main interactive portfolio application | [`index.html`](index.html) |
| 📐 **Design Spec & Wireframes Hub** | Dedicated evaluator page with Lo-Fi & Hi-Fi comparisons, tokens & simulator | [`wireframes.html`](wireframes.html) |
| 📋 **Wireframes Documentation** | Academic report with ASCII layouts, user flows, and rubric checklist | [`docs/WIREFRAMES.md`](docs/WIREFRAMES.md) |
| 🎨 **Design System Tokens** | Detailed color contrast ratios (WCAG 2.1 AA/AAA) and type scales | [`docs/DESIGN_SYSTEM.md`](docs/DESIGN_SYSTEM.md) |

---

## 📐 How to Check the Wireframes & Designs

### 1. Dedicated Checking Page (`wireframes.html`)
Open `wireframes.html` in any web browser to access:
- **Interactive Device Viewport Simulator:** Test responsive layout scaling across Desktop (1200px), Tablet (768px), and Mobile (375px) in real time.
- **Side-by-Side Wireframe Comparisons:** Low-Fidelity blueprints compared directly against High-Fidelity mockups.
- **One-Click Color Token Palette:** Click any color swatch to copy its HEX value with WCAG contrast ratios displayed.
- **Interactive Evaluator Rubric Checklist:** Tick off items (7/7 complete) and print or export as PDF.

### 2. In-Browser "Blueprint Mode" (Live Inspector)
On `index.html`, press **`B`** on your keyboard or click the **"Blueprint Mode"** button in the header:
- Colors transition into architectural blueprint styling.
- Layout bounding boxes and semantic HTML tags (`<header>`, `<nav>`, `<section#hero>`, `<article>`) become visible.
- A floating **Blueprint HUD** appears in the bottom-left displaying real-time viewport dimensions, active section ID, and device pixel ratio (DPR).

---

## 📁 Repository Structure

```
Crisostomo Project/
├── index.html                   # Main portfolio web application
├── wireframes.html              # Dedicated wireframes & design spec checking hub
├── css/
│   ├── variables.css            # Design tokens, color palette, typography & themes
│   ├── main.css                 # Responsive layout, glassmorphic styling & animations
│   └── wireframes.css           # Blueprint mode HUD, viewport simulator & rubric styles
├── js/
│   ├── main.js                  # Particle canvas, modal systems, theme switch & forms
│   └── wireframes-page.js       # Viewport switcher, color copy & rubric checklist logic
├── assets/
│   ├── images/
│   │   ├── profile_avatar.jpg        # Real Portrait of Kymer Oriel Crisostomo
│   │   ├── lantad_crayfish_logo.jpg  # Official Silay Superworm & Crayfish Logo
│   │   └── project_lantad_crayfish.jpg # Lantad Crayfish Aquaculture Dashboard
│   └── designs/
│       ├── lofi_wireframes_sheet.jpg  # Low-Fidelity wireframe schematics
│       ├── hifi_portfolio_mockup.jpg  # High-Fidelity UI design mockup
│       └── design_system_board.jpg    # Component architecture specification
├── docs/
│   ├── WIREFRAMES.md            # Comprehensive wireframe evaluation report
│   └── DESIGN_SYSTEM.md         # Atomic design system token documentation
└── README.md                    # Project documentation & checking guide
```

---

## 🛠️ Features & Engineering Highlights

- **Flagship Project:** Silay Superworm & Crayfish Aquaculture Management System (Lantad Crayfish) built with Django, HTMX, DRF, and real-time pond telemetry.
- **Pure Modern Vanilla Web Stack:** Zero build dependencies required — open `index.html` directly in any modern browser.
- **Interactive Canvas Mesh:** Lightweight particle animation that dynamically responds to mouse movement.
- **Glassmorphism & Micro-Interactions:** Modern frosted glass cards with subtle elevation transitions and Web Audio API click feedback.
- **Accessible & Semantic HTML5:** High-contrast color palette exceeding WCAG 2.1 AAA recommendations (up to 17.5:1).
- **Interactive Project Modals:** Deep-dive modal popups displaying architectural features and tech stack breakdowns.
- **Interactive Contact Form:** Live client-side validation and simulated message dispatch with toast notifications.
- **Print & PDF Optimization:** Dedicated `@media print` styling for generating clean offline evaluation sheets.

---

## 🚀 Running Locally or Deploying to GitHub Pages

### Running Locally
Simply double-click `index.html` or `wireframes.html` in Windows Explorer, or run a local static server:
```powershell
# Using Python
python -m http.server 8000

# Using Node.js npx
npx serve .
```

### GitHub Pages Deployment
1. Go to your repository on GitHub: `Settings > Pages`.
2. Under **Build and deployment > Source**, select **Deploy from a branch**.
3. Choose branch `main` and folder `/(root)`.
4. Click **Save**. The website will be live at `https://KYmer-dotcom.github.io/crisostomo-portfolio/`.

---

## 👨‍💻 Author

**Kymer Oriel Crisostomo**  
- **Email:** [kymerorielcrisostomo@gmail.com](mailto:kymerorielcrisostomo@gmail.com)  
- **GitHub:** [@KYmer-dotcom](https://github.com/KYmer-dotcom)  

---
*Prepared with pride for project and design checking.*
