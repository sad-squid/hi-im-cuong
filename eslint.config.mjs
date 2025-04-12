import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

import pluginPrettier from "eslint-plugin-prettier";
import styledComponentsA11y from "eslint-plugin-styled-components-a11y";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next", "next/typescript"),
  {
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      "prettier/prettier": "error",
    },
  },
  {
    plugins: {
      "styled-components-a11y": styledComponentsA11y,
    },
    rules: {
      ...styledComponentsA11y.configs.recommended.rules,
    },
  },
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },
];

export default eslintConfig;
