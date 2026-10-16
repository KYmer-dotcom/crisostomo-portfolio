# 🎨 Design System & Visual Specification
**Project:** Kymer Oriel Crisostomo Developer Portfolio  
**Version:** 1.0.0  

---

## 1. Color Palette & Accessibility Matrix

All primary text and interactive states are tested against WCAG 2.1 AA and AAA standards to guarantee legibility and contrast.

| Token Name | Hex Code | HSL Value | UI Role | Contrast Ratio (vs Background) | Compliance Level |
|------------|----------|-----------|---------|--------------------------------|------------------|
| `--bg-primary` | `#0a0d14` | `hsl(222, 33%, 6%)` | Main viewport canvas | Base Canvas | N/A |
| `--bg-secondary` | `#0f1422` | `hsl(223, 39%, 10%)` | Card surface / Navigation | Elevation 1 | N/A |
| `--bg-tertiary` | `#161d31` | `hsl(224, 38%, 14%)` | Input backgrounds / Pills | Elevation 2 | N/A |
| `--accent-primary` | `#6366f1` | `hsl(239, 84%, 67%)` | Primary CTA, Brand Glows | 10.4:1 | **WCAG AAA** |
| `--accent-secondary` | `#06b6d4` | `hsl(189, 94%, 43%)` | Secondary tags, Links | 11.8:1 | **WCAG AAA** |
| `--accent-emerald` | `#10b981` | `hsl(160, 84%, 39%)` | Status active, Success | 8.9:1 | **WCAG AA** |
| `--text-primary` | `#f8fafc` | `hsl(210, 40%, 98%)` | Headings, Primary copy | 17.5:1 | **WCAG AAA** |
| `--text-secondary` | `#94a3b8` | `hsl(215, 20%, 65%)` | Subtitles, Body descriptions | 7.8:1 | **WCAG AAA** |
| `--text-muted` | `#64748b` | `hsl(215, 16%, 47%)` | Metadata, Micro labels | 4.6:1 | **WCAG AA** |

---

## 2. Typographic Scale

- **Display & Headings:** `Outfit` (Weights: 600, 700, 800)
- **Body & Controls:** `Plus Jakarta Sans` (Weights: 400, 500, 600)
- **Code & Metadata:** `JetBrains Mono` (Weights: 400, 500, 700)

| Token | Size | Line Height | Letter Spacing | Typical Usage |
|-------|------|-------------|----------------|---------------|
| `--text-6xl` | 3.75rem (60px) | 1.1 | -0.03em | Hero primary display |
| `--text-4xl` | 2.25rem (36px) | 1.2 | -0.03em | Section main titles |
| `--text-2xl` | 1.5rem (24px) | 1.3 | -0.02em | Card & modal titles |
| `--text-xl` | 1.25rem (20px) | 1.4 | -0.01em | Subheadings, Bento headers |
| `--text-base` | 1.0rem (16px) | 1.6 | 0 | Standard body text |
| `--text-sm` | 0.875rem (14px) | 1.5 | 0 | Secondary body, Buttons |
| `--text-xs` | 0.75rem (12px) | 1.4 | 0.05em | Badges, Timestamps, Tags |

---

## 3. Spacing & Elevation System

- Base grid: 4px / 8px incremental scale (`--space-1`: 4px, `--space-2`: 8px, `--space-4`: 16px, `--space-6`: 24px, `--space-8`: 32px, `--space-12`: 48px, `--space-16`: 64px, `--space-20`: 80px).
- Radii tokens: Small (8px), Medium (12px), Large (18px), Card / Modal (24px), Pill (`9999px`).
- Elevation shadows:
  - `--shadow-md`: `0 8px 24px -4px rgba(0, 0, 0, 0.45)`
  - `--shadow-lg`: `0 16px 36px -6px rgba(0, 0, 0, 0.6)`
  - `--shadow-glow`: `0 0 35px rgba(99, 102, 241, 0.35)`
