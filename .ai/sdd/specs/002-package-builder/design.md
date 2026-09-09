# Design: Interactive Package Builder

> Requirements: @requirements.md
> Status: Draft
> Last Updated: 2026-09-08

## 1. Executive Summary

The Package Builder is a high-utility "Conversion Engine" designed to move a lead from exploration to intent. The design prioritizes transparency and low friction, utilizing an asymmetric grid to keep the configuration inputs and the financial result (the Live Estimate) in a single, cohesive viewport. The experience is purely client-side until the final lead capture moment, ensuring maximum speed and responsiveness.

## 2. Requirements Mapping

| Requirement | Design Coverage | Notes |
|-------------|-----------------|-------|
| FR-001 (Interface) | Section 4 — Asymmetric 12-col grid (Config Scroll + Sticky Sidebar) | Eliminates click fatigue |
| FR-002 (Real-time Calc) | Section 5 — Reactive state management ( la la la) | Instant updates to the estimate ticket |
| FR-003 (Lead Capture) | Section 6 — BetterAuth OTP Overlay | Triggered only on "Save" |
| FR-004 (Persistence) | Section 5 — Post-auth POST request to user profile | Saves config to DB/KV |
| FR-005 (Base Tiers) | Section 4 — Large radio-style selection cards | Mutually exclusive |
| FR-006 (Add-ons) | Section 4 — Toggle switches for premium inclusions | Additive |
| FR-007 (Disclaimer) | Section 4 — Subtle "Estimate" label + Footer disclaimer | Manages expectations |
| NFR-001 (Usability) | Section 4 — Single-page scroll flow | Low friction |
| NFR-002 (Performance) | Section 7 — Client-side reactivity (Fast) | <100ms update latency |
| NFR-003 (Accessibility) | Section 7 — Accessible forms & ARIA labels | WCAG 2.1 AA |

## 3. System Architecture

### Component Layout
The page utilizes a split-screen approach on desktop:
- **Configuration Column (8/12):** A chronological scroll of inputs.
- **Estimate Column (4/12):** A sticky "Receipt" that follows the user.

### Data Flow
1. **Local State:** User inputs $\rightarrow$ Reactive calculation $\rightarrow$ UI update.
2. **Auth Gate:** "Save" $\rightarrow$ BetterAuth OTP $\rightarrow$ Success.
3. **Persistence:** Auth Success $\rightarrow$ Config Payload $\rightarrow$ User Profile.

## 4. Implementation Design

### Page Structure (`/builder`)

```text
- Layout (BaseLayout)
  - Header (Navbar)
  - Main (Asymmetric Grid)
    - Config Scroll (Left Col - span 8)
      - Guest Count Input (Number field)
      - Base Tier Selection (Large visual cards)
      - Premium Add-ons (Toggles/Checkboxes)
      - Primary CTA: "Save & Request Availability"
    - Live Estimate Ticket (Right Col - span 4, Sticky)
      - Header: "Your Experience Estimate"
      - Itemized List: [Tier Cost] + [Add-on costs]
      - Total: [Calculated Total]
      - Disclaimer: "Rough Estimate - subject to venue logistics"
```

### Visual Identity
- **Theme:** Inherits the active theme from the Landing Page (Dreamscape/Alchemy).
- **Inputs:** Large, tactile "Radio Cards" for tiers to make the choice feel significant.
- **The Ticket:** Styled like a premium physical receipt (dashed borders, monospace fonts for pricing) to reinforce the "bespoke" feel.

## 5. Technical Decisions

### TD-001: Client-Side State Management
- **Decision:** Use a simple reactive state (Astro/Nano-stores or vanilla JS state) for the builder.
- **Why:** Calculations are simple arithmetic; no need for server-side overhead until the final save.

### TD-002: OTP Implementation
- **Decision:** Use BetterAuth's passwordless OTP flow.
- **Why:** Minimizes friction. Users don't want to create a password for a one-time event quote.

### TD-003: Layout Strategy
- **Decision:** `lg:grid-cols-12` with a sticky sidebar for the estimate.
- **Why:** Keeps the "price" as a constant psychological anchor while the user explores options.

## 6. Edge Cases

| Case | Expected Behavior |
|------|-------------------|
| Guest count = 0 | Estimate shows $0; CTA is disabled. |
| Session timeout | User is prompted to re-authenticate if OTP expires. |
| Invalid Phone/Email | OTP provider handles validation; UI shows clear error state. |
| Large guest count | Estimate calculates a "Custom Quote Required" flag if over a certain threshold. |

## 7. Verification Strategy

- **Calculation Audit:** Verify that (Base Tier $\times$ Guests) + Add-ons = Total.
- **Auth Flow:** Test the transition from anonymous build $\rightarrow$ OTP $\rightarrow$ Dashboard.
- **Responsiveness:** Ensure the sticky sidebar moves to the bottom/top on mobile.
- **Performance:** Ensure the estimate updates instantly without layout shift.
