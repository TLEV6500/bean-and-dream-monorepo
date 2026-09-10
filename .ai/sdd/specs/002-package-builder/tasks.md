# Tasks: Interactive Package Builder

> Requirements: @requirements.md
> Design: @design.md
> Status: Approved
> Last Updated: 2026-09-08

## Requirement Coverage

| Requirement | Tasks | Notes |
|-------------|-------|-------|
| FR-001 | T1, T2 | Asymmetric grid and interface layout |
| FR-002 | T3 | Reactive calculation and live estimate update |
| FR-003 | T4 | BetterAuth OTP integration and trigger |
| FR-004 | T5 | Post-auth persistence to user profile |
| FR-005 | T2 | Base tier mutually exclusive selection |
| FR-006 | T2 | Premium add-on toggles |
| FR-007 | T3 | Disclaimer and estimate labeling |
| NFR-001 | T1 | Single-page scroll and sticky sidebar |
| NFR-002 | T3 | <100ms update latency |
| NFR-003 | T1, T2 | Accessible forms and ARIA labels |

## Implementation Slices

### Slice 1: Builder Shell & UI
- **Goal:** Create the layout and static UI components for the builder.
- **Tasks:** T1, T2
- **Validation:** Page renders as an asymmetric grid; inputs (guest count, tiers, add-ons) are visually present.

### Slice 2: Pricing Engine & Reactivity
- **Goal:** Implement the live calculation logic and sticky receipt.
- **Tasks:** T3
- **Validation:** Modifying inputs instantly updates the "Live Estimate" ticket.

### Slice 3: Auth Gate & Persistence
- **Goal:** Connect the "Save" action to BetterAuth and persist the quote.
- **Tasks:** T4, T5
- **Validation:** Clicking "Save" triggers OTP; successful login saves the config and routes to dashboard.

## Task Summary

| Task | Title | Priority | Estimate | Dependencies | Status |
|------|-------|----------|----------|--------------|--------|
| T1 | Builder Layout & Shell | P0 | 4h | none | done |
| T2 | Configuration Inputs | P0 | 4h | T1 | done |
| T3 | Reactive Pricing Engine | P0 | 6h | T2 | done |
| T4 | OTP Auth Integration | P0 | 6h | T3 | done |
| T5 | Configuration Persistence | P0 | 4h | T4 | done |

---

## Task T1: Builder Layout & Shell

**Priority:** P0  
**Covers:** FR-001, NFR-001  

### Work
- [x] Create `/builder` page in Astro.
- [x] Implement the 12-column asymmetric grid (`lg:grid-cols-12`).
- [x] Build the sticky sidebar container for the Live Estimate ticket.
- [x] Setup the main configuration scroll area.

### Acceptance Criteria
- [ ] Interface is a single-page scroll.
- [ ] Estimate sidebar remains sticky on desktop.
- [ ] Layout is responsive (collapses to single column on mobile).

### Files
- `apps/main-site/src/pages/builder.astro`
- `apps/main-site/src/components/BuilderSidebar.astro`

---

## Task T2: Configuration Inputs

**Priority:** P0  
**Covers:** FR-005, FR-006, NFR-003  

### Work
- [x] Implement Guest Count input (number field).
- [x] Create "Base Tier" selection using large, tactile radio cards.
- [x] Implement "Premium Add-ons" using toggle switches or checkboxes.
- [x] Ensure all inputs have proper ARIA labels and keyboard focus states.

### Acceptance Criteria
- [ ] Only one base tier can be selected at a time.
- [ ] Multiple add-ons can be selected.
- [ ] Inputs are visually distinct and follow the premium brand identity.

### Files
- `apps/main-site/src/components/BuilderInputs.astro`

---

## Task T3: Reactive Pricing Engine

**Priority:** P0  
**Covers:** FR-002, FR-007, NFR-002  
**Status:** done

### Work
- [x] Define a pricing data structure for tiers and add-ons.
- [x] Implement client-side state to track selections.
- [x] Create the calculation logic: `(BaseTierPrice * Guests) + sum(AddOnPrices)`.
- [x] Update the "Live Estimate" ticket in real-time.
- [x] Add the "Rough Estimate" disclaimer text.

### Acceptance Criteria
- [ ] Price updates instantly upon any input change.
- [ ] Calculations are mathematically correct.
- [ ] Disclaimer is visible and clear.

### Files
- `apps/main-site/src/components/BuilderSidebar.astro` (updates)
- `apps/main-site/src/scripts/builder-engine.ts` (or inline script)

---

## Task T4: OTP Auth Integration

**Priority:** P0  
**Covers:** FR-003  
**Status:** done

### Work
- [x] Configure BetterAuth for passwordless OTP login.
- [x] Implement the "Save & Request Availability" CTA.
- [x] Create the OTP input overlay/modal.
- [x] Handle successful authentication and session creation.

### Acceptance Criteria
- [ ] Clicking "Save" triggers the OTP prompt.
- [ ] User can successfully authenticate via mobile/email OTP.

### Files
- `apps/main-site/src/components/OTPModal.astro`
- `apps/main-site/src/lib/auth.ts`

---

## Task T5: Configuration Persistence

**Priority:** P0  
**Covers:** FR-004  
**Status:** done

### Work
- [x] Create a server-side endpoint/action to save the builder configuration.
- [x] Pass the current configuration payload upon successful authentication.
- [x] Store the configuration in the user's profile (Cloudflare KV or DB).
- [x] Route the user to `/dashboard` after successful save.

### Acceptance Criteria
- [ ] Configured package is persisted to the user's account.
- [ ] Redirect to dashboard happens only after successful persistence.

### Files
- `apps/main-site/src/pages/api/save-quote.ts`
- `apps/main-site/src/pages/dashboard.astro`
