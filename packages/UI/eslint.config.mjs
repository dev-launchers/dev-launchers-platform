import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import typescript from '@devlaunchers/eslint-config-bases/typescript';
// const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  // {
  //   ignores: [
  //     '**/node_modules',
  //     '**/.cache',
  //     '**/storybook-static',
  //     '**/build',
  //     '**/.next',
  //   ],
  // },
  ...typescript,
  // ...compat
  //   .extends(
  //   // "@devlaunchers/eslint-config-bases/sonar",
  //   // "@devlaunchers/eslint-config-bases/regexp",
  //   // "@devlaunchers/eslint-config-bases/react",
  //   // "@devlaunchers/eslint-config-bases/jest",
  //   // "@devlaunchers/eslint-config-bases/rtl",
  //   // "@devlaunchers/eslint-config-bases/storybook",
  //   // "@devlaunchers/eslint-config-bases/playwright",
  //   // "@devlaunchers/eslint-config-bases/tailwind",
  //   // "@devlaunchers/eslint-config-bases/prettier",
  //   ),
  // {
  //   // languageOptions: {
  //   //     ecmaVersion: 5,
  //   //     sourceType: "script",
  //   //     parserOptions: {
  //   //         tsconfigRootDir: "/home/momaqbol/Documents/github/dev-launchers-platform/packages/UI",
  //   //         project: "tsconfig.json",
  //   //     },
  //   // },
  //   // rules: {
  //   //     "tailwindcss/no-custom-classname": ["error", {
  //   //         whitelist: [],
  //   //     }],
  //   // },
  // },
];
