/**
 * Opinionated config base for projects using react.
 * @see https://github.com/belgattitude/nextjs-monorepo-example/tree/main/packages/eslint-config-bases
 */

const { join, dirname } = require('path');

const reactPatterns = {
  files: ['*.{jsx,tsx}'],
};

/**
 * Fine-tune naming convention react typescript jsx (function components)
 * @link https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/naming-convention.md
 */

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  overrides: [
    {
      files: [...reactPatterns.files],
      extends: [
        // @see https://github.com/francoismassart/eslint-plugin-tailwindcss,
        'plugin:tailwindcss/recommended',
      ],
      rules: {
        'tailwindcss/no-arbitrary-value': 'warn',
      },
      settings: {
        callees: ['classnames', 'clsx', 'ctl', 'cn', 'tv'],
        tailwindcss: {
          config: join(
            dirname(
              require.resolve(join('@devlaunchers/tailwind', 'package.json'))
            ),
            'tailwind.config.js'
          ),
        },
      },
    },
  ],
};
