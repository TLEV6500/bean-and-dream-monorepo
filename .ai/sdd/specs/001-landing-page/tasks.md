# Tasks: High-Conversion Landing Page

> Requirements: @requirements.md
> Design: @design.md
> Status: Approved
> Last Updated: 2026-09-08

## Requirement Coverage

| Requirement | Tasks | Notes |
|-------------|-------|-------|
| FR-001 | T1, T2 | Hero section and value proposition |
| FR-002 | T3, T4 | Dual-theme CSS system and toggle |
| FR-003 | T2 | Primary "Start Building" CTA |
| FR-004 | T5 | Asymmetric service overview grid |
| FR-005 | T6 | Footer and HQ link |
| NFR-001 | T5, T7 | Asymmetric layout and premium polish |
| NFR-002 | T2, T8 | Asset optimization and SSR performance |
| NFR-003 | T7 | Theme-specific contrast audit |

## Implementation Slices

### Slice 1: Theme Infrastructure & Base Layout
- **Goal:** Implement the Dual-Theme system so the rest of the page can be built with theme-aware classes.
- **Tasks:** T1, T3, T4
- **Validation:** Toggle works; background and text colors shift between Dark and Light modes.

### Slice 2: High-Impact Hero & CTA
- **Goal:** Establish the "Premium Mobile Catering" positioning immediately.
- **Tasks:** T2
- **Validation:** Hero renders with correct typography; CTA redirects to `/builder`.

### Slice 3: Editorial Content & Polish
- **Goal:** Build the asymmetric grid and refine the premium feel.
- **Tasks:** T5, T6, T7, T8
- **Validation:** Asymmetric grid displays correctly; images are optimized; A11y pass.

## Task Summary

| Task | Title | Priority | Estimate | Dependencies | Status |
|------|-------|----------|----------|--------------|--------|
| T1 | Brand Asset Setup | P0 | 2h | none | completed |
| T2 | Cinematic Hero & CTA | P0 | 4h | T1 | completed |
| T3 | Dual-Theme CSS System | P0 | 3h | none | completed |
| T4 | Theme Toggle Component | P0 | 2h | T3 | completed |
| T5 | Asymmetric Service Grid | P1 | 5h | T1, T3 | completed |
| T6 | Footer & HQ Navigation | P1 | 2h | T2 | completed |
| T7 | Premium Visual Polish | P1 | 3h | T5 | completed |
| T8 | Asset Optimization | P2 | 2h | T2, T5 | completed |

---

## Task T1: Brand Asset Setup

**Priority:** P0  
**Covers:** NFR-001, NFR-002  
**Status:** completed

### Work
- [x] Use placeholder images in place of high-res images of mobile catering setups (Coffee/Matcha/Pastries).
- [x] Convert all assets to `.avif` using Astro's pipeline.
- [x] Define the typography pairing (Modern Serif + Geometric Sans) in Tailwind config.

### Acceptance Criteria
- [x] Assets are optimized and stored in `src/assets/` (and `public/assets` for placeholders).
- [x] Typography is globally available via Tailwind classes.

---

## Task T2: Cinematic Hero & CTA

**Priority:** P0  
**Covers:** FR-001, FR-003  
**Status:** completed

### Work
- [x] Implement `Hero.astro` with high-impact headline and sub-headline.
- [x] Create the "Start Building Your Experience" CTA button using Starwind UI patterns.
- [x] Set up the background visual (cinematic loop or high-res image).

### Acceptance Criteria
- [x] Value prop is immediately visible above the fold.
- [x] CTA redirects to `/builder`.

---

## Task T3: Dual-Theme CSS System

**Priority:** P0  
**Covers:** FR-002  
**Status:** completed

### Work
- [x] Define CSS variables for both themes (Dreamscape and Alchemy).
- [x] Implement a theme-aware color palette in `src/styles/global.css`.
- [x] Setup the root `.dark` / `.light` class logic.

### Acceptance Criteria
- [x] Switching the root class updates the entire page palette.

---

## Task T4: Theme Toggle Component

**Priority:** P0  
**Covers:** FR-002  
**Status:** completed

### Work
- [x] Create a `ThemeToggle.astro` component for the navigation.
- [x] Implement `localStorage` persistence for theme choice.
- [x] Add a smooth transition effect between theme switches.

### Acceptance Criteria
- [x] Theme persists across page reloads.
- [x] Toggle is accessible and intuitive.

---

## Task T5: Asymmetric Service Grid

**Priority:** P1  
**Covers:** FR-004, NFR-001  
**Status:** completed

### Work
- [x] Implement a 12-column asymmetric grid layout for the service overview.
- [x] Build "Value Prop" blocks (Col 8) and "Detail" blocks (Col 4).
- [x] Integrate curated images of Coffee, Matcha, and Pastries.

### Acceptance Criteria
- [x] Layout feels "editorial" and non-template.
- [x] Grid collapses gracefully on mobile.

---

## Task T6: Footer & HQ Navigation

**Priority:** P1  
**Covers:** FR-005  
**Status:** completed

### Work
- [x] Build a minimalist footer with the brand essence statement.
- [x] Implement the link to `/headquarters` (The Tasting Room).
- [x] Add Instagram focus social links.

### Acceptance Criteria
- [x] HQ link is present and correctly routed.

---

## Task T7: Premium Visual Polish

**Priority:** P1  
**Covers:** NFR-001, NFR-003  
**Status:** completed

### Work
- [x] Add subtle entrance animations (fade-in, slide-up) using CSS or a lightweight lib.
- [x] Audit contrast ratios for both Light and Dark themes.
- [x] Refine spacing and margins using the asymmetric grid.

### Acceptance Criteria
- [x] Page feels "premium" and fluid.
- [x] Contrast meets WCAG 2.1 AA.

---

## Task T8: Asset Optimization

**Priority:** P2  
**Covers:** NFR-002  
**Status:** completed

### Work
- [x] Run Astro's build process to verify image optimization.
- [x] Test LCP (Largest Contentful Paint) for the Hero section.
- [x] Ensure no layout shifts (CLS) during theme switching or image loading.

### Acceptance Criteria
- [x] LCP is under 2.5 seconds.
