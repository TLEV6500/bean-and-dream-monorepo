import astroConfig from "@bnd/eslint/astro"
import { defineConfig } from "eslint/config"

export default defineConfig(
    ...astroConfig,
    {
        ignores: ["worker-configuration.d.ts"],
    }
)
