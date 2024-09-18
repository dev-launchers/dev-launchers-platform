/**
 * Custom config base for projects using typescript / javascript.
 * @see https://github.com/belgattitude/nextjs-monorepo-example/tree/main/packages/eslint-config-bases
 */
import * as globals from 'globals';
import js from '@eslint/js';
import ts from'typescript-eslint';
// @ts-ignore
import importPlugin from 'eslint-plugin-import';
import { parser } from 'typescript-eslint';
import * as espree from 'espree';


export default ts.config(
  js.configs.recommended,
  ...ts.configs.recommended,
  {
    rules: {
      "@typescript-eslint/no-deprecated": "error",
      '@typescript-eslint/ban-tslint-comment': ['error'],
      '@typescript-eslint/no-empty-object-type': ['error', {
        allowInterfaces: 'with-single-extends'
      }],
      '@typescript-eslint/ban-ts-comment': [
        'error',
        {
          'ts-expect-error': 'allow-with-description',
          minimumDescriptionLength: 10,
          'ts-ignore': true,
          'ts-nocheck': true,
          'ts-check': false,
        },
      ],
      '@typescript-eslint/no-explicit-any': [
        'error',
        { ignoreRestArgs: false },
      ],
      '@typescript-eslint/no-empty-function': [
        'error',
        { allow: ['private-constructors'] },
      ],
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', ignoreRestSiblings: true },
      ],
      '@typescript-eslint/consistent-type-exports': 'error',
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports' },
      ],
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'default',
          format: ['camelCase'],
          leadingUnderscore: 'forbid',
          trailingUnderscore: 'forbid',
        },
        {
          selector: ['variable', 'import'],
          format: ['camelCase', 'PascalCase'],
          leadingUnderscore: 'allow',
        },
        {
          selector: ['function'],
          format: ['camelCase', 'PascalCase'],
        },
        {
          selector: 'parameter',
          format: ['camelCase', 'PascalCase'],
          leadingUnderscore: 'allow',
        },
        {
          selector: 'class',
          format: ['PascalCase'],
        },
        {
          selector: 'classProperty',
          format: ['camelCase'],
          leadingUnderscore: 'allow',
        },
        {
          selector: 'objectLiteralProperty',
          format: [
            'camelCase',
            // Some external libraries use snake_case for params
            'snake_case',
            // Env variables are generally uppercase
            'UPPER_CASE',
            // DB / Graphql might use PascalCase for relationships
            'PascalCase',
          ],
          leadingUnderscore: 'allowSingleOrDouble',
          trailingUnderscore: 'allowSingleOrDouble',
        },
        {
          selector: ['typeAlias', 'interface'],
          format: ['PascalCase'],
        },
        {
          selector: ['typeProperty'],
          format: ['camelCase'],
          // For graphql __typename
          leadingUnderscore: 'allowDouble',
        },
        {
          selector: ['typeParameter'],
          format: ['PascalCase'],
        },
      ],
    }
  },
  {
    ...importPlugin.flatConfigs.recommended,
    ...importPlugin.flatConfigs.typescript,
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        ...globals.es2016,
        ...globals.node,
      },
      parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
          globalReturn: false,
        },
        project: ['tsconfig.json'],
      },
    },
    settings: {
      'import/resolver': {
        'typescript': true
      },
    },
    rules: {
      'spaced-comment': [
        'error',
        'always',
        {
          line: {
            markers: ['/'],
            exceptions: ['-', '+'],
          },
          block: {
            markers: ['!'],
            exceptions: ['*'],
            balanced: true,
          },
        },
      ],
      // 'linebreak-style': ['error', 'unix'],
      'linebreak-style': 'off',
      'no-empty-function': 'off',
      // 'import/default': 'off',
      'no-undef': 'off',
      'import/no-duplicates': ['error', { considerQueryString: true }],
      'import/no-named-as-default-member': 'off',
      'import/no-named-as-default': 'off',
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
          ],
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
    },
  },
  {
    // commonjs or assumed
    files: ['*.js', '*.cjs'],
    languageOptions: {
      parser: espree,
      parserOptions: {
        project: ['tsconfig.json'],
        ecmaVersion: 2020,
      },
      globals: {
        ...globals.browser
      }
    },
    rules: {
      '@typescript-eslint/naming-convention': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/consistent-type-exports': 'off',
      '@typescript-eslint/consistent-type-imports': 'off',
      '@typescript-eslint/no-require-imports': 'off',
      'import/order': 'off',
    },
  }
);
