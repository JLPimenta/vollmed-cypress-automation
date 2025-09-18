import js from "@eslint/js";
import pluginCypress from 'eslint-plugin-cypress';
import { defineConfig } from "eslint/config";
import globals from "globals";

export default defineConfig([
  pluginMocha.configs.recommended,
  pluginCypress.configs.recommended,
  pluginCypress.configs.globals,
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: {
      js,
      cypress: pluginCypress
    },
    extends: ["js/recommended"],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
    rules: {
      "cypress/no-assigning-return-values": "error",
      "cypress/no-unnecessary-waiting": "error",
      "cypress/assertion-before-screenshot": "warn",
      "cypress/no-force": "warn",
      "cypress/no-async-tests": "error",
      "cypress/no-pause": "error"
    }
  },
]);
