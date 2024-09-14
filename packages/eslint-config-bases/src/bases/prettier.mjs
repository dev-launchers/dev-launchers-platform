/**
 * Custom config base for projects using prettier.
 * @see https://github.com/belgattitude/nextjs-monorepo-example/tree/main/packages/eslint-config-bases
 */

import { getPrettierConfig } from '../helpers/getPrettierConfig.js';
const { ...prettierConfig } = getPrettierConfig();
import eslintPluginPrettierRecommended from'eslint-plugin-prettier/recommended';
import ts from 'typescript-eslint';

export default ts.config({
  ...eslintPluginPrettierRecommended,
  // extends: ['prettier'],
  // plugins: ['prettier'],
  rules: {
    // 'prettier/prettier': ['error', prettierConfig],
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
  },
});
