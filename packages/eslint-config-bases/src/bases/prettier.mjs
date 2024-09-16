/**
 * Custom config base for projects using prettier.
 * @see https://github.com/belgattitude/nextjs-monorepo-example/tree/main/packages/eslint-config-bases
 */

import { getPrettierConfig } from '../helpers/getPrettierConfig.js';
const { ...prettierConfig } = getPrettierConfig();
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
if (eslintPluginPrettierRecommended.rules) {
  eslintPluginPrettierRecommended.rules['prettier/prettier'] = ['error', prettierConfig];
  eslintPluginPrettierRecommended.rules['arrow-body-style'] = 'off';
  eslintPluginPrettierRecommended.rules['prefer-arrow-callback'] = 'off';
}
export default eslintPluginPrettierRecommended;
