import { defineConfig } from 'eslint/config'
import js from "@eslint/js"
import turboPlugin from "eslint-plugin-turbo"
import tseslint from "typescript-eslint"
import globals from "globals"

export default defineConfig(
    js.configs.recommended,
    tseslint.configs.recommended,
    {
        ignores: [
            "**/node_modules/**",
            "**/dist/**",
            "**/.vercel/**",
        ],
        plugins: {
            "turbo": turboPlugin,
        },

        rules: {
            "turbo/no-undeclared-env-vars": "error",
            indent: "off",
            quotes: "off",
            semi: "off",
            "no-undef": "off"
        },
        languageOptions: {
            parserOptions: {
                warnOnUnsupportedTypeScriptVersion: false,
            },
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                ...globals.node,
                ...globals.browser,
            },
        },
    }
)
