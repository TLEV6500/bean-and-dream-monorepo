import { defineConfig } from 'eslint/config'
import js from "@eslint/js"
import turboPlugin from "eslint-plugin-turbo"
import tseslint from "typescript-eslint"
import globals from "globals"

export default defineConfig(
    js.configs.recommended,
    tseslint.configs.recommended,
    {
        plugins: {
            "turbo": turboPlugin,
        },
        rules: {
            "turbo/no-undeclared-env-vars": "error",
            indent: "off",
            quotes: "off",
            semi: "off"
        },
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                ...globals.node,
                ...globals.browser,
            },
        },
    }
)
