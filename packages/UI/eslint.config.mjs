import { getDefaultIgnorePatterns } from '@devlaunchers/eslint-config-bases/helpers';
import prettier from '@devlaunchers/eslint-config-bases/prettier';
import typescript from '@devlaunchers/eslint-config-bases/typescript';
import ts from 'typescript-eslint';

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
  prettier,
  { ignores: getDefaultIgnorePatterns() }
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
  //   languageOptions: {
  //       ecmaVersion: 5,
  //       sourceType: "script",
  //       // parserOptions: {
  //       //     tsconfigRootDir: __dirname,
  //       // },
  //   },
  // }
  //   // rules: {
  //   //     "tailwindcss/no-custom-classname": ["error", {
  //   //         whitelist: [],
  //   //     }],
  //   // },
  // },
);
