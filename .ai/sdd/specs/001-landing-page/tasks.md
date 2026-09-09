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
| T1 | Brand Asset Setup | P0 | 2h | none | pending |
| T2 | Cinematic Hero & CTA | P0 | 4h | T1 | pending |
| T3 | Dual-Theme CSS System | P0 | 3h | none | pending |
| T4 | Theme Toggle Component | P0 | 2h | T3 | pending |
| T5 | Asymmetric Service Grid | P1 | 5h | T1, T3 | pending |
| T6 | Footer & HQ Navigation | P1 | 2h | T2 | pending |
| T7 | Premium Visual Polish | P1 | 3h | T5 | pending |
| T8 | Asset Optimization | P2 | 2h | T2, T5 | pending |

---

## Task T1: Brand Asset Setup

**Priority:** P0  
**Covers:** NFR-001, NFR-002  

### Work
- [ ] Use placeholder images in place of high-res images of mobile catering setups (Coffee/Matcha/Pastries).
- [ ] Convert all assets to `.avif` using Astro's pipeline.
- [ ] Define the typography pairing (Modern Serif + Geometric Sans) in Tailwind config.

### Acceptance Criteria
- [ ] Assets are optimized and stored in `src/assets/`.
- [ ] Typography is globally available via Tailwind classes.

---

## Task T2: Cinematic Hero & CTA

**Priority:** P0  
**Covers:** FR-001, FR-003  

### Work
- [ ] Implement `Hero.astro` with high-impact headline and sub-headline.
- [ ] Create the "Start Building Your Experience" CTA button using Starwind UI patterns.
- [ ] Set up the background visual (cinematic loop or high-res image).

### Acceptance Criteria
- [ ] Value prop is immediately visible above the fold.
- [ ] CTA redirects to `/builder`.

---

## Task T3: Dual-Theme CSS System

**Priority:** P0  
**Covers:** FR-002  

### Work
- [ ] Define CSS variables for both themes (Dreamscape and Alchemy).
- [ ] Implement a theme-aware color palette in `src/styles/global.css` (e.g., `bg-brand-bg`, `text-brand-main`).
- [ ] Setup the root `.dark` / `.light` class logic.

### Acceptance Criteria
- [ ] Switching the root class updates the entire page palette.

---

## Task T4: Theme Toggle Component

**Priority:** P0  
**Covers:** FR-002  

### Work
- [ ] Create a `ThemeToggle.astro` component for the navigation.
- [ ] Implement `localStorage` persistence for theme choice.
- [ ] Add a smooth transition effect between theme switches.

### Acceptance Criteria
- [ ] Theme persists across page reloads.
- [ ] Toggle is accessible and intuitive.

---

## Task T5: Asymmetric Service Grid

**Priority:** P1  
**Covers:** FR-004, NFR-001  

### Work
- [ ] Implement a 12-column asymmetric grid layout for the service overview.
- [ ] Build "Value Prop" blocks (Col 8) and "Detail" blocks (Col 4).
- [ ] Integrate curated images of Coffee, Matcha, and Pastries.

### Acceptance Criteria
- [ ] Layout feels "editorial" and non-template.
- [ ] Grid collapses gracefully on mobile.

---

## Task T6: Footer & HQ Navigation

**Priority:** P1  
**Covers:** FR-005  

### Work
- [ ] Build a minimalist footer with the brand essence statement.
- [ ] Implement the link to `/headquarters` (The Tasting Room).
- [ ] Add Instagram focus social links.

### Acceptance Criteria
- [ ] HQ link is present and correctly routed.

---

## Task T7: Premium Visual Polish

**Priority:** P1  
**Covers:** NFR-001, NFR-003  

### Work
- [ ] Add subtle entrance animations (fade-in, slide-up) using CSS or a lightweight lib.
- [ ] Audit contrast ratios for both Light and Dark themes.
- [ ] Refine spacing and margins using the asymmetric grid.

### Acceptance Criteria
- [ ] Page feels "premium" and fluid.
- [ ] Contrast meets WCAG 2.1 AA.

---

## Task T8: Asset Optimization

**Priority:** P2  
**Covers:** NFR-002  

### Work
- [ ] Run Astro's build process to verify image optimization.
- [ ] Test LCP (Largest Contentful Paint) for the Hero section.
- [ ] Ensure no layout shifts (CLS) during theme switching or image loading.

### Acceptance Criteria
- [ ] LCP is under 2.5 seconds.
