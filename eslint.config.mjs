import globals from "globals";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

/** @type {import('eslint').Linter.Config} */
export default {
  files: ["**/*.{js,mjs,cjs,ts,tsx}"], // Match JS and TS files
  languageOptions: {
    parser: tsParser,                 // Use TypeScript parser for linting
    globals: {
      ...globals.browser,             // Include browser globals
      ...globals.node,                // Include Node.js globals
    },
  },
  plugins: {
    "@typescript-eslint": tsPlugin,   // Register TypeScript plugin
    "prettier": eslintPluginPrettierRecommended, // Register Prettier plugin
  },
  rules: {
    "no-unused-vars": "error",        // Error for unused variables
    "no-undef": "error",              // Error for undefined variables
    "prefer-const": "error",          // Prefer const over let if possible
    "no-console": "warn",             // Warn on console statements
    "@typescript-eslint/no-unused-vars": "error", // TS-specific unused vars rule
    "prettier/prettier": "error",     // Use Prettier formatting rules and show errors if formatting is wrong
  },
  ignores: ["**/node_modules/", "**/dist/"], // Ignore certain directories
  extends: [
    // Include Prettier's config last to disable any conflicting rules
    "eslint:recommended", 
    "plugin:@typescript-eslint/recommended",
    "prettier",   // Disable conflicting formatting rules from other plugins
  ],
};
