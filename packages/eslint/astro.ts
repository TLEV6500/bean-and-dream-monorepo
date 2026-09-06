import { defineConfig } from 'eslint/config'
import baseConfig from "./base"
import astroPlugin from "eslint-plugin-astro"
import tseslint from "typescript-eslint"


export default defineConfig(
    ...baseConfig,
    ...astroPlugin.configs["flat/recommended"],
    ...astroPlugin.configs["flat/jsx-a11y-recommended"],
    {
        files: ["**/*.astro"],
        languageOptions: {
            parserOptions: {
                parser: tseslint.parser,
                extraFileExtensions: [".astro"],
            },
        },
    }
)
