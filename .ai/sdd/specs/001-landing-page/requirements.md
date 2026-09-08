# Feature: Landing Page

> Status: Draft
> Source: .ai/sdd/PLAN.md
> .status: requirements:draft

## Overview

This feature implements the main landing page for Bean & Dream, a specialty café in Dunggoan, Danao City, Philippines. The landing page serves as the primary digital hub where customers discover the café, explore its menu (coffee beans and matcha powder), learn about pop-up events, access blog updates and event galleries, and connect with the café's social media accounts.

**Why this matters:** Without a dedicated landing page, potential customers may miss critical information about the café's offerings, locations, and events, reducing foot traffic and online engagement.

## Business Context

This landing page supports Bean & Dream's digital-first strategy for the local market. It will showcase:
- Café brand identity and mission
- Menu of specialty coffee beans and matcha powder
- Pop-up stand reservation capabilities
- Event and blog content
- Social media integration

The landing page will be hard-coded using Astro and Tailwind for immediate deployment to Cloudflare, minimizing costs while delivering a professional first impression.

## User Stories

### US-001: Cafe Visitor Discovery

**As a** local resident or traveler in Dunggoan, **I want to** quickly understand Bean & Dream's offerings and location, **So that** I can decide whether to visit the café.

**Acceptance Criteria:**
- [ ] Page loads within 3 seconds on mobile and desktop
- [ ] Clear café name, tagline, and brief description visible above the fold
- [ ] Address and contact information prominently displayed

### US-002: Menu Exploration

**As a** potential customer, **I want to** browse the café's menu of coffee beans and matcha powder, **So that** I can learn about available products and pricing.

**Acceptance Criteria:**
- [ ] Static menu list displays coffee bean varieties with descriptions
- [ ] Static matcha powder offerings with preparation notes
- [ ] Menu items include any available pricing (if provided)

### US-003: Event Reservation

**As a** visitor interested in pop-up events, **I want** to submit a reservation request, **So that** I can secure a spot at the event.

**Acceptance Criteria:**
- [ ] Simple form with name, email, phone, event date preference
- [ ] Basic validation (required fields, email format)
- [ ] Confirmation message after submission

### US-004: Content Engagement

**As a** regular customer, **I want** to stay updated on café events and blog posts, **So that** I can participate in community activities.

**Acceptance Criteria:**
- [ ] Event gallery displays recent and upcoming pop-up stand activities
- [ ] Blog section shows recent posts with titles and excerpts
- [ ] Social media links enable easy connection to café accounts

## Functional Requirements

### FR-001: Page Structure and Layout — Must Have

WHEN users visit the root URL (`/`), **THE SYSTEM SHALL** display a responsive landing page with café information, **SO THAT** visitors can immediately understand the café's purpose and offerings.

### FR-002: Hero Section — Must Have

WHEN users access the landing page, **THE SYSTEM SHALL** show a full-width hero section with café name, tagline, and primary call-to-action, **SO THAT** first impressions are compelling.

### FR-003: Menu Display — Must Have

WHEN users navigate to the menu section, **THE SYSTEM SHALL** render static listings of coffee beans and matcha powder with descriptions, **SO THAT** customers can make informed purchase decisions.

### FR-004: Reservation Form — Must Have

WHEN visitors reach the reservation section, **THE SYSTEM SHALL** present a functional form with name, email, and phone fields, **SO THAT** users can submit pop-up stand reservation requests.

### FR-005: Content Sections — Should Have

WHEN users scroll through the page, **THE SYSTEM SHALL** reveal blog posts and event galleries with smooth scrolling animations, **SO THAT** content discovery is engaging.

### FR-006: Social Integration — Should Have

WHEN users interact with the landing page, **THE SYSTEM SHALL** provide clickable links to café's social media accounts, **SO THAT** visitors can follow updates and connect on social platforms.

### FR-007: Mobile Optimization — Could Have

WHEN viewed on mobile devices, **THE SYSTEM SHALL** adapt the layout for optimal readability and touch interaction, **SO THAT** the experience is consistent across devices.

### FR-008: SEO Basics — Could Have

WHEN search engines crawl the page, **THE SYSTEM SHALL** include semantic HTML and meta tags for key café information, **SO THAT** discoverability is improved.

### FR-009: Performance Monitoring — Won't Have Yet

WHEN the page loads, **THE SYSTEM SHALL NOT** include third-party analytics or performance monitoring tools, **SO THAT** deployment costs remain minimal in Phase 1.

## Non-Functional Requirements

### NFR-001: Usability

- The landing page shall use intuitive navigation with clear section anchors
- Form fields shall have descriptive labels and inline validation feedback
- Content hierarchy shall follow WCAG 2.1 Level AA guidelines where applicable

### NFR-002: Performance

- Page load time shall be under 3 seconds on 4G connections
- Static content shall be served with efficient asset optimization (images, fonts)
- No client-side JavaScript required for core functionality

### NFR-003: Accessibility

- All text content shall have a contrast ratio of at least 4.5:1 against background
- Interactive elements shall be keyboard navigable
- Alt text shall be provided for all meaningful images

### NFR-004: Security / Privacy

- No sensitive data collection beyond name, email, and phone for reservations
- Form submissions shall use HTTPS encryption
- User data shall not be stored or processed beyond immediate confirmation display

## Out of Scope

- Dynamic content management via CMS (Sanity planned for Phase 2)
- E-commerce functionality for product purchasing
- User account creation or authentication systems
- Advanced analytics or heat mapping tools
- Video hosting beyond basic static images

### D-004: Page Navigation Structure

**Decision:** Single-page scroll for the landing page, with dedicated routes for the full Blog and Gallery.

**Reason:** Maintains a high-impact landing experience while allowing for deep content exploration without overloading the main page.

**Impacts:** FR-001, FR-005. The landing page will feature "Preview" sections for Blog/Gallery that link to `/blog` and `/gallery`.

**Decision:** Use hard-coded Markdown files for content rather than a CMS.

**Reason:** Minimizes deployment complexity and costs for Phase 1, ensuring ASAP delivery.

**Source:** Low budget constraint, one-month timeline

**Impacts:** FR-005, FR-006, and FR-008 rely on manual content updates; Phase 3 will migrate to Sanity.

**Additional Decision:** Reservation data uses static JSON + email only (no persistence).

**Reason:** Keeps initial implementation lightweight; aligns with low-budget one-month timeline.

### D-002: Content Structure

**Decision:** Use Markdown files per section (hero, menu, reservations) for maximum simplicity.

**Reason:** Minimizes tooling overhead for Phase 1; allows direct content updates by the café owner.

**Source:** Q-001

**Impacts:** FR-005, FR-006, FR-008 rely on manual content updates; Phase 3 will migrate to Sanity.

### D-003: Hero Section

**Decision:** Static text and images only — no dynamic personalization.

**Reason:** Visual identity (logo, color palette, tagline) is stable for ≥3 months.

**Source:** Q-003

**Impacts:** FR-001 — hero section contains fixed text and placeholder images; content can be swapped via Markdown files.

## Questions

### Q-001: Content Structure

**Status:** answered

**Decision:** Approach A — Markdown files per section for maximum simplicity.

**Reason:** Minimizes tooling overhead for Phase 1; allows direct content updates by the café owner without additional infrastructure.

| Option | Answer | Choose this if... | Impact |
|--------|--------|-------------------|--------|
| **A** | **Use Markdown files per section (hero, menu, reservations)** | **Content updates are infrequent and handled by the café owner** | **Lowest initial effort; simplest deploy** |
| B | JSON-based content config | Frequent content updates needed | Moderate effort; easier programmatic access |
| C | Custom content approach | Unique requirements not covered by A or B | Will require custom solution development |

**Impact:** FR-005, FR-006, FR-008 rely on manual content updates; Phase 3 will migrate to Sanity.

### Q-002: Reservation Processing

**Status:** answered

**Decision:** Use a static JSON file for reservation data.

**Reason:** Aligns with the need for a lightweight MVP and fast delivery within the one-month timeline.

| Option | Answer | Choose this if... | Impact |
|--------|--------|-------------------|--------|
| **A** | **Static JSON file + email notification only** | **Very low budget and no persistence needed** | **Fastest MVP; data lost after deployment** |
| B | Cloudflare Workers KV + form submission | Need persistence and simple automation | Moderate backend; free tier available |
| C | Manual email forwarding | No technical resources for backend | Simplest; highest maintenance overhead |

**Impacts:** FR-004 (Reservation Form) — form submission writes to a local JSON file and triggers email notification; no server-side persistence. Data is not retained after deployment.

### Q-003: Hero Section Content

**Status:** answered

**Decision:** Static text and images only.

**Reason:** Visual identity (logo, color palette, tagline) is stable for at least 3 months; this minimizes risk of breaking the landing page during rapid content updates.

| Option | Answer | Choose this if... | Impact |
|--------|--------|-------------------|--------|
| **A** | **Static text and images only** | **Visual identity is stable for ≥3 months** | **Fastest delivery; zero backend dependency** |
| B | Limited CMS integration for quick updates | Café wants frequent visual updates | Adds slight complexity |
| C | Custom dynamic content from config | Unique requirements | More development time |

**Impact:** FR-001 (Page Structure) — hero section will contain fixed text and placeholder images; content can be swapped via Markdown files without affecting other sections.

## Glossary

- **Bean & Dream:** Specialty café in Dunggoan, Danao City, Philippines
- **Astro:** Static site generator framework used for the landing page
- **Tailwind:** CSS framework for styling and responsive design
- **Cloudflare:** Deployment platform via Wrangler
- **Pop-up Stand:** Mobile café events held at various locations
- **wrangler:** Cloudflare CLI tool for deployment
