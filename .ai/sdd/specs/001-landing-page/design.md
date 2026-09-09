# Design: High-Conversion Landing Page

> Requirements: @requirements.md
> Status: Draft
> Last Updated: 2026-09-08

## 1. Executive Summary

The landing page is the "front door" of the conversion engine. It is designed to immediately signal prestige and professional scale. The design moves away from a traditional cafe layout to a high-end agency-style presentation, utilizing a dual-theme system to appeal to two distinct high-value client segments: evening gala planners and daytime corporate coordinators.

## 2. Requirements Mapping

| Requirement | Design Coverage | Notes |
|-------------|-----------------|-------|
| FR-001 (Value Prop) | Section 4 — Cinematic Hero with high-impact typography | Focus on "Bespoke Mobile Experiences" |
| FR-002 (Dual Theme) | Section 5 — Theme Toggle & Variable CSS Palette | Dark (#121212) / Light (slate-50) |
| FR-003 (Conversion CTA) | Section 4 — Primary CTA "Start Building" $\rightarrow$ `/builder` | High-contrast button in Hero and Value sections |
| FR-004 (Service Overview) | Section 4 — Asymmetric grid showcasing the F&B offerings | Visual focus on Coffee, Matcha, Pastries |
| FR-005 (HQ Mention) | Section 4 — Minimalist footer link to `/headquarters` | Positioned as "The Tasting Room" |
| NFR-001 (Premium Quality) | Section 5 — Asymmetric layouts & Starwind UI components | Avoiding standard Bootstrap/Tailwind patterns |
| NFR-002 (Performance) | Section 7 — Astro SSR + Optimized AVIF images | Target <2s LCP |
| NFR-003 (Accessibility) | Section 7 — Contrast check for both themes | WCAG 2.1 AA compliance |

## 3. System Architecture

### Layout Strategy
The page utilizes an **Asymmetric Grid** (`lg:grid-cols-12`). This breaks the traditional centered layout, creating a more "editorial" and "high-end" feel.

### Dual-Theme Implementation
We will use a CSS-variable based system managed by a theme provider (or simple class toggle on `<html>`).
- **Ethereal Dreamscape (Dark):** Background `#121212`, Accents: Warm Amber, Typography: Off-white/Silver.
- **Minimalist Alchemy (Light):** Background `slate-50`, Accents: Deep Charcoal/Black, Typography: Rich Black.

## 4. Implementation Design

### Page Structure (`index.astro`)

```text
- Navigation (Transparent $\rightarrow$ Sticky)
  - Brand Mark
  - Theme Toggle (Alchemy $\leftrightarrow$ Dreamscape)
  - Quick Link: "The Tasting Room" (/headquarters)

- Hero Section (Full Height)
  - Big-type Headline (Modern Serif)
  - Sub-headline (Geometric Sans)
  - Primary CTA: "Start Building Your Experience"
  - Background: High-res cinematic loop or image of a mobile setup

- The "Experience" Grid (Asymmetric)
  - [Col 8] Value Prop: "Bespoke Coffee & Matcha" $\rightarrow$ Image + Copy
  - [Col 4] Detail: "Configurable Inclusions"
  - [Col 4] Detail: "The Artisan Pastry"
  - [Col 8] Value Prop: "Craft Drinks & Desserts" $\rightarrow$ Image + Copy

- The Transition Section (Dual Theme Showcase)
  - A visual split or slider demonstrating the "Day vs Night" capability.
  - CTA: "Match Your Event's Vibe"

- Footer
  - Brand Essence Statement
  - Secondary Link: "Visit our Tasting Room" (/headquarters)
  - Socials (Instagram focus)
```

### Visual Identity Details

- **Typography:**
  - **Headlines:** High-contrast Modern Serif (either Playfair Display or Cormorant Garamond).
  - **UI/Body:** Geometric Sans-Serif (e.g., Inter or Montserrat).
- **Components (Starwind UI):**
  - Use a specialized `Button` component for the CTA to ensure a consistent "premium" interaction.
  - Use `Grid` layouts for the asymmetric sections.

## 5. Technical Decisions

### TD-001: Client-Side Theme Switching
- **Decision:** Implement theme switching via a `localStorage` persisted class on the root element.
- **Why:** Allows the user to "preview" the vibe they want for their event immediately, increasing emotional investment.

### TD-002: Asymmetric Layout
- **Decision:** Use a 12-column Tailwind grid instead of standard flex-centering.
- **Why:** Editorial layouts are perceived as more professional and "bespoke" than centered templates.

### TD-003: Image Optimization
- **Decision:** All hero and gallery images to be served in `.avif` format via Astro's `<Image />` component.
- **Why:** Maximizes quality while minimizing payload for fast conversion.

## 6. Edge Cases

| Case | Expected Behavior |
|------|-------------------|
| No image found | Fallback to a high-end CSS gradient that matches the current theme |
| Theme conflict | Default to "Ethereal Dreamscape" (Dark) as it is the brand's core identity |
| Mobile view | Asymmetric grid collapses into a single, clean vertical stack |

## 7. Verification Strategy

- **Visual Audit:** Compare the rendered page against the "Ethereal Dreamscape" and "Minimalist Alchemy" moodboards.
- **Conversion Test:** Ensure the "Start Building" CTA redirects correctly to `/builder`.
- **Theme Test:** Verify that switching themes updates all colors (bg, text, accents) without layout shifts.
- **Performance:** Lighthouse score $\ge$ 90 for performance and accessibility.
