import { defineConfig } from 'eslint/config'
import baseConfig from "./base"
import astroPlugin from "eslint-plugin-astro"
import tseslint from "typescript-eslint"
import * as astroParser from "astro-eslint-parser"
import importPlugin from 'eslint-plugin-import';


export default defineConfig(
    {
        ignores: [".astro/"],
    },
    ...baseConfig,
    ...astroPlugin.configs.recommended,
    ...astroPlugin.configs["flat/jsx-a11y-recommended"],
    {
        files: ["**/*.astro"],
        languageOptions: {
            parser: astroParser,
            parserOptions: {
                warnOnUnsupportedTypeScriptVersion: false,
                parser: tseslint.parser,
                extraFileExtensions: [".astro"],
                sourceType: "module",
            },
        },
        rules: {
            "no-undef": "off",
            "no-unused-vars": "off",
            "@typescript-eslint/no-unused-vars": "off",
        }
    },
    {
        settings: {
            // 1. Tells eslint-plugin-import to recognize Astro's built-in virtual modules
            "import/core-modules": ["astro:content", "astro:transitions"],

            // 2. Instructs the plugin on which parsers to handle for .astro files
            "import/parsers": {
                "astro-eslint-parser": [".astro"],
                "espree": [".js", ".mjs", ".cjs"],
                "@typescript-eslint/parser": [".ts", ".tsx"]
            }
        }
    }
)
