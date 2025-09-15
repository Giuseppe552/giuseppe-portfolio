import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import security from "eslint-plugin-security";
import noInlineStyles from "eslint-plugin-no-inline-styles";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    plugins: {
      security,
      'no-inline-styles': noInlineStyles,
    },
    rules: {
      ...security.configs.recommended.rules,
      // Forbid inline styles in JSX
      'react/style-prop-object': 'error',
      'no-inline-styles/no-inline-styles': 'error',
    },
  },
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
];

export default eslintConfig;
