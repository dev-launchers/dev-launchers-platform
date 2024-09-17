/**
 * Opinionated config base for projects using react.
 * @see https://github.com/belgattitude/nextjs-monorepo-example/tree/main/packages/eslint-config-bases
 */

import { resolve } from 'node:path';

const reactPatterns = {
  files: ['*.{jsx,tsx}'],
};
import tailwind from 'eslint-plugin-tailwindcss';
import ts from 'typescript-eslint';
import globals from 'globals';
/**
 * Fine-tune naming convention react typescript jsx (function components)
 * @link https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/naming-convention.md
 */

export default ts.config(
  ...tailwind.configs['flat/recommended'],
  {
    files: [...reactPatterns.files],
    rules: {
      'tailwindcss/no-arbitrary-value': 'warn',
      "tailwindcss/no-custom-classname": "error"
    },
    settings: {
      tailwindcss: {
        callees: ['classnames', 'clsx', 'ctl', 'cn', 'tv'],
        config: resolve('../', 'tailwind-constructor/tailwind.config.js'),
      },
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2016,
        ...globals.node,
      },
    },
  },
  {
  }
);
