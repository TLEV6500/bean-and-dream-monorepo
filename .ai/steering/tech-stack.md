# Tech Stack: Bean & Dream

## Core Runtime & Frameworks
- **Runtime**: Bun
- **Frontend**: Astro (SSR mode)
- **Styling**: Tailwind CSS + Starwind UI
- **Authentication**: BetterAuth (Passwordless OTP)
- **Infrastructure**: Cloudflare Workers / Pages

## Verification Commands
The following commands MUST be run and pass before any task is considered complete and committed:
- `bun lint`: Runs ESLint via Turbo.
- `bun typecheck`: Runs `astro check` to validate TypeScript and Astro types.

## Constraints
- **Performance**: Target LCP < 2.5s for high-intent lead capture.
- **A11y**: WCAG 2.1 AA compliance for both Light and Dark themes.
- **Runtime**: Production code must be compatible with Cloudflare Workers.
