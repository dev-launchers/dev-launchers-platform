import typescript from './src/bases/typescript.mjs';
import prettier from './src/bases/prettier.mjs';

export default [
  ...typescript,
  ...prettier,
  {
    ignores: [
      '**/node_modules',
      '**/.cache',
      '**/.cache',
      '**/build',
      '**/dist',
      '**/.storybook',
      '**/storybook-static',
    ],
  },
];
