### Description
"Bean and Dream" has transitioned from a localized evening cafe into a highly scalable, premium mobile catering service. You provide bespoke specialty coffee, matcha, and artisan pastry experiences for both high-end evening galas (leaning into the moody "Ethereal Dreamscape" vibe) and crisp daytime events (utilizing the "Minimalist Alchemy" aesthetic). Your physical cafe now serves secondarily as a trusted headquarters and tasting room, grounding the brand's authenticity.

### The Website's Purpose: The Conversion Engine

The website is no longer a static digital flyer; it is a targeted sales application designed to capture high-value event leads. Its primary functions are:

* **Frictionless Lead Generation:** Driving event planners directly into an interactive, self-serve quoting tool rather than asking them to fill out a generic contact form.
* **Transparent Customization:** Allowing clients to dynamically build their own packages—adjusting guest counts, base tiers, and premium add-ons—while viewing a real-time price estimate.
* **Seamless Handoff:** Capturing client details effortlessly via mobile OTP login at the moment of highest intent, transitioning them to a personalized dashboard where they can finalize details directly with your team.


### Core Architecture & Tech Stack

* **Infrastructure:** Astro SSR for dynamic rendering, styled with Tailwind CSS, and utilizing Starwind UI components.
* **Deployment & Auth:** Deployed on Cloudflare Workers for rapid edge performance, with BetterAuth handling passwordless OTP (One-Time Password) mobile logins.
* **Sitemap Flow:** A streamlined conversion funnel moving from `/` (Home/Value Prop) to `/builder` (Interactive Quoting), ending at `/dashboard` (Client Hub), with `/headquarters` acting as a secondary page for the physical tasting room.

---

### Visual Identity (Dual-Theme System)

* **Dark Mode (Ethereal Dreamscape):** Deep charcoal backgrounds (`bg-[#121212]`) accented by warm amber active states, targeting evening events, galas, and nightlife planners.
* **Light Mode (Minimalist Alchemy):** Clean off-white bases (`bg-slate-50`) utilizing crisp black borders and typography, appealing to daytime weddings and corporate clients.
* **Typography:** A high-contrast modern serif for elegant headlines, paired exclusively with a highly legible geometric sans-serif for UI data and body copy.

---

### The Package Builder UI

* **Structural Layout:** A single, scrollable interface built on an asymmetric grid (`lg:grid-cols-12`) to eliminate multi-page click fatigue.
* **Configuration Scroll (`col-span-8`):** The left column houses chronological inputs: event date/logistics, large radio cards for base tiers (e.g., "The Essential Cart"), and simple toggle switches for add-ons.
* **Sticky Sidebar (`col-span-4`):** The right column features a receipt-style "Live Estimate" ticket that updates dynamically as the user modifies their package.

---

### Conversion & User Journey

* **Frictionless Capture:** Users build their entire quote anonymously. The OTP login prompt only fires when they click "Save & Request Availability," acting as a seamless lead-capture gate.
* **Expectation Management:** The UI explicitly states that generated quotes are estimates, protecting the business from unforeseen venue logistics.
* **Direct Handoff:** Once authenticated, users are routed to their personal dashboard where the primary call-to-action shifts to direct communication via Instagram DMs to finalize the booking.
