# Project Conventions: Bean & Dream

## Client-Side Logic (Astro)
- **MUST**: Use `<script>` tags for all client-side interactivity.
- **MUST**: Access DOM elements using `document.getElementById`, `document.querySelector`, or similar vanilla JS methods.
- **MUST NOT**: Use function references or complex expressions inside HTML attributes (e.g., `onclick={toggleMenu}`). Astro attributes are vanilla HTML; they do not accept function references like React.
- **Standard**: Use `addEventListener` inside the `<script>` block for a clean separation of concerns.

## Visual & UI Patterns
- **Layout**: Use an **Asymmetric Grid** (`lg:grid-cols-12`) to create an "editorial" and "bespoke" feel, avoiding generic centered templates.
- **Theme**: Implement the **Dual-Theme system** (Ethereal Dreamscape / Minimalist Alchemy) using CSS variables managed via a root class (`.dark` / `.light`).
- **Typography**: High-contrast pairing of Modern Serif (headlines) and Geometric Sans-Serif (body).

## Code Structure
- **Pages**: Astro pages in `src/pages/`.
- **Components**: Reusable UI components in `src/components/`.
- **API**: Server-side endpoints in `src/pages/api/`.
- **Scripts**: Shared client-side logic in `src/scripts/`.
