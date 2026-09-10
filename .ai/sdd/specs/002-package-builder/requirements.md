# Feature: Interactive Package Builder

> Status: Draft
> Source: .ai/sdd/PLAN.md
> .status: requirements:draft

## Overview

The Interactive Package Builder is the core conversion engine of the Bean & Dream website. It transforms the process of requesting an event catering service from a passive contact form into an active, transparent, and high-end configuration experience. By allowing event planners to build their own packages and see real-time estimates, the system reduces friction and captures high-intent leads.

**Why this matters:** High-value clients expect transparency and efficiency. Providing an immediate estimate allows them to qualify their budget and requirements before the first interaction, significantly increasing the quality of leads handed off to the team.

## Business Context

The builder is the primary bridge between the Landing Page (`/`) and the Client Dashboard (`/dashboard`). It must balance "premium feel" (minimalism, high-end aesthetics) with "functional utility" (clear pricing, easy configuration). The objective is to move the user from curiosity to a "saved request" as quickly as possible.

## User Stories

### US-001: Package Configuration
**As an** event planner, **I want to** specify my guest count, select a base service tier, and add premium inclusions, **so that** I can tailor the beverage experience to my event's specific needs.

**Acceptance Criteria:**
- [ ] User can input/adjust guest count.
- [ ] User can select one base tier (e.g., "The Essential Cart").
- [ ] User can toggle multiple premium add-ons.
- [ ] All selections are reflected in the real-time estimate.

### US-002: Live Price Estimation
**As a** potential client, **I want to** see a running estimate of the cost as I modify my package, **so that** I can stay within my budget without waiting for a manual quote.

**Acceptance Criteria:**
- [ ] A sticky "Live Estimate" ticket updates dynamically as inputs change.
- [ ] The estimate is clearly labeled as a "Rough Estimate" or "Quote Estimate".
- [ ] The estimate includes a prominent disclaimer regarding venue logistics.

### US-003: Frictionless Lead Capture
**As a** user, **I want to** build my entire quote anonymously and only provide my details when I am ready to save the request, **so that** I can explore options without immediate commitment.

**Acceptance Criteria:**
- [ ] No authentication is required to use the builder.
- [ ] Clicking "Save & Request Availability" triggers an OTP login prompt.
- [ ] Upon successful OTP login, the configuration is saved and the user is routed to the Dashboard.

## Functional Requirements

### FR-001: Configuration Interface — Must Have
WHEN users access the `/builder` route, **THE SYSTEM SHALL** display an asymmetric grid interface containing a configuration scroll (guest count, tiers, add-ons) and a sticky live estimate sidebar, **SO THAT** the user has a cohesive view of their build and its cost.

### FR-002: Real-time Calculation — Must Have
WHEN the user modifies any input (guest count, tier, add-ons), **THE SYSTEM SHALL** update the live estimate ticket immediately without a page reload, **SO THAT** the user has instant feedback on pricing.

### FR-003: Lead Capture Gate — Must Have
WHEN a user clicks "Save & Request Availability", **THE SYSTEM SHALL** trigger a passwordless OTP (mobile login) prompt, **SO THAT** the lead is captured and the quote is persisted.

### FR-004: Configuration Persistence — Must Have
WHEN a user successfully authenticates via OTP, **THE SYSTEM SHALL** save the current configuration to the user's account, **SO THAT** it can be reviewed and finalized in the Dashboard.

### FR-005: Base Tier Selection — Must Have
WHEN configuring the package, **THE SYSTEM SHALL** allow the selection of exactly one base tier, **SO THAT** the core service level is defined before adding customizations.

### FR-006: Premium Add-ons — Should Have
WHEN building the package, **THE SYSTEM SHALL** allow users to toggle multiple "Premium Add-ons" (e.g., specific bean origins, specialized equipment), **SO THAT** the experience can be further bespoke.

### FR-007: Disclaimer Visibility — Should Have
WHEN the live estimate is displayed, **THE SYSTEM SHALL** show a clear disclaimer stating that the final price is subject to venue logistics and finalized via direct communication.

## Non-Functional Requirements

### NFR-001: Usability (Frictionless)
- The configuration flow should be a single, scrollable interface to eliminate click fatigue.
- The "Live Estimate" ticket must remain visible (sticky) regardless of scroll position.

### NFR-002: Performance (Responsiveness)
- Estimate updates must happen in under 100ms to feel "real-time".
- The transition from Builder $\rightarrow$ OTP $\rightarrow$ Dashboard must be seamless.

### NFR-003: Accessibility
- All configuration inputs (radio cards, toggles) must be keyboard navigable.
- Contrast ratios must meet WCAG 2.1 AA.

## Out of Scope
- Direct payment or deposit processing.
- Real-time calendar availability checking.
- Complex multi-user organization accounts.

## Decisions

### D-001: Pricing Model
**Decision:** Use a "Rough Estimate" with a prominent disclaimer.
**Reason:** Provides immediate value while protecting the business from unforeseen venue logistics.
**Source:** Q-001
**Impacts:** FR-002, FR-007.

### D-002: Lead Capture Timing
**Decision:** Lead capture (OTP login) occurs only at the final "Save & Request Availability" step.
**Reason:** Maximizes conversion by allowing value exploration before requesting identity.
**Source:** Q-002
**Impacts:** FR-003.

### D-003: Base Tier Logic
**Decision:** Mutually exclusive base tiers with additive premium add-ons.
**Reason:** Simplifies the starting point for the user while maintaining customization.
**Source:** Q-003
**Impacts:** FR-005, FR-006.

## Glossary
- **OTP:** One-Time Password (passwordless login).
- **Lead Capture:** The process of converting an anonymous visitor into a known potential client.
- **Live Estimate:** The dynamic pricing ticket that updates as the user configures their package.
