/**
 * Opinionated config base for projects that enable depreciationjs
 * @see https://github.com/belgattitude/nextjs-monorepo-example/tree/main/packages/eslint-config-bases
 */

const deprecationPatterns = {
  files: ['*.{js,jsx,ts,tsx}'],
  excludedFiles: [
    '**/?(*.)+(test).{js,jsx,ts,tsx}',
    '*.stories.{js,ts,jsx,tsx}',
  ],
};

module.exports = {
  env: {
    browser: false,
    node: true,
  },
  overrides: [
    {
      files: deprecationPatterns.files,
      excludedFiles: deprecationPatterns.excludedFiles,
      extends: ['plugin:deprecation/recommended'],
      rules: {},
    },
  ],
};
