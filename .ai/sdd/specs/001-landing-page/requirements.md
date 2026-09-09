# Feature: High-Conversion Landing Page

> Status: Draft
> Source: .ai/sdd/PLAN.md
> .status: requirements:draft

## Overview

The landing page is the entry point of the Bean & Dream conversion engine. It is designed to transition the brand from a local cafe to a premium mobile catering service. Instead of encouraging a physical visit, the page's sole purpose is to sell the "experience" of bespoke F&B catering and drive event planners into the Interactive Package Builder.

**Why this matters:** High-value event planners make split-second decisions based on visual alignment and perceived professionalism. A generic cafe page will fail to attract corporate or gala clients.

## Business Context

The landing page must establish the brand as a "premium provider" with two distinct visual identities to match the client's event type:
- **Evening/Gala:** "Ethereal Dreamscape" (Dark, moody, amber accents).
- **Daytime/Corporate:** "Minimalist Alchemy" (Light, crisp, professional).

## User Stories

### US-001: Event Planner First Impression
**As an** event planner, **I want to** immediately see that Bean & Dream provides premium mobile catering for high-end events, **so that** I know I am in the right place for a bespoke experience.

**Acceptance Criteria:**
- [ ] Clear value proposition visible above the fold.
- [ ] Visuals explicitly showcase the "mobile catering" aspect (pop-up stalls, event setups).
- [ ] Clear CTA to "Start Building Your Package".

### US-002: Aesthetic Alignment (Dual Theme)
**As a** client, **I want to** see a visual style that matches my event's vibe (whether it's a moody evening gala or a crisp corporate morning), **so that** I trust the provider's ability to execute my specific aesthetic.

**Acceptance Criteria:**
- [ ] Landing page demonstrates the dual-theme system.
- [ ] Transition between "Ethereal Dreamscape" and "Minimalist Alchemy" is seamless.
- [ ] Typography is high-contrast (Modern Serif for headlines, Geometric Sans-Serif for body).

### US-003: Service Discovery
**As a** potential client, **I want to** quickly understand the range of products offered (coffee, matcha, pastries, craft drinks), **so that** I can envision the menu for my event.

**Acceptance Criteria:**
- [ ] High-level overview of specialty offerings is present.
- [ ] Brief mention of "configurable inclusions" for pop-up stalls.

## Functional Requirements

### FR-001: Value Proposition & Hero — Must Have
WHEN users visit the root URL (`/`), **THE SYSTEM SHALL** display a high-impact hero section that positions Bean & Dream as a premium mobile catering provider, **SO THAT** the shift in business focus is immediately clear.

### FR-002: Dual-Theme Visuals — Must Have
WHEN accessing the landing page, **THE SYSTEM SHALL** implement the dual-theme identity (Dark: `#121212` / Light: `slate-50`), **SO THAT** the brand appeals to both nightlife and corporate planners.

### FR-003: Conversion CTA — Must Have
WHEN users interact with the hero or value prop sections, **THE SYSTEM SHALL** provide a prominent "Start Building" or "Get a Quote" CTA that redirects to `/builder`, **SO THAT** users are funneled into the lead generation process.

### FR-004: Service Overview — Should Have
WHEN users scroll, **THE SYSTEM SHALL** present the core offerings (Coffee, Matcha, Pastries, Desserts) as premium event experiences, **SO THAT** the scope of service is understood.

### FR-005: Headquarters Mention — Should Have
WHEN users reach the bottom of the page, **THE SYSTEM SHALL** provide a link to the `/headquarters` page, **SO THAT** the physical tasting room is mentioned as a secondary point of authenticity.

## Non-Functional Requirements

### NFR-001: Visual Quality (Premium)
- Use of high-resolution, curated imagery of mobile setups.
- Implementation of an asymmetric grid to avoid a "template" look.
- Smooth transitions and subtle animations to reinforce the "premium" feel.

### NFR-002: Performance
- Page must load under 2 seconds on mobile/desktop (essential for high-intent lead capture).
- Optimize images via Astro's built-in asset pipeline.

### NFR-003: Accessibility
- High contrast for both Light and Dark themes.
- Semantic HTML for SEO and screen readers.

## Out of Scope
- The actual quoting logic (moved to F02).
- Auth/Login (moved to F03).
- Retail e-commerce for individual bean sales.

## Glossary
- **Ethereal Dreamscape:** The dark-mode visual identity targeting evening/nightlife events.
- **Minimalist Alchemy:** The light-mode visual identity targeting daytime/corporate events.
- **Conversion Engine:** The strategy of using the website specifically to generate high-value leads.
