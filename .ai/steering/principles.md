# Project Principles: Bean & Dream

## Workflow & Governance
- **Atomic Commits**: Every single completed task MUST be committed immediately.
- **Verification-First**: No task is "done" until `bun lint` and `bun typecheck` pass.
- **Commit-Loop**: If a commit fails due to the pre-commit hook (lint/typecheck), the agent MUST stop, fix the errors, and re-attempt the commit before moving to the next task.
- **Traceability**: Implementation must be strictly mapped to the approved SDD artifacts (Requirements $\rightarrow$ Design $\rightarrow$ Tasks).

## Decision Rules
- **Premium Over Generic**: When faced with a choice between a "standard" UI pattern and a "bespoke/editorial" one, prefer the latter to reinforce brand prestige.
- **Frictionless Conversion**: Prioritize the user's path to a "Saved Quote" above all other site interactions.
- **Transparency**: Pricing should be a "Rough Estimate" to provide immediate value while protecting the business from venue-specific logistics.
