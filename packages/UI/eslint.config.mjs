import { resolve } from 'node:path';
import { getDefaultIgnorePatterns } from '@devlaunchers/eslint-config-bases/helpers';
import prettier from '@devlaunchers/eslint-config-bases/prettier';
import tailwind from '@devlaunchers/eslint-config-bases/tailwind';
import typescript from '@devlaunchers/eslint-config-bases/typescript';
import ts, { parser } from 'typescript-eslint';
export default ts.config(
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
  ...tailwind,
  prettier,
  { ignores: getDefaultIgnorePatterns() },
  {
    settings: {
      tailwindcss: {
        callees: ['classnames', 'clsx', 'ctl', 'cn', 'tv'],
        config: resolve('../', 'tailwind-constructor/tailwind.config.js'),
      },
    },
  },
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
  {
    languageOptions: {
      parser,
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
        project: ['./tsconfig.json'],
      },
    },
  }
);
