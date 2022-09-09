// Workaround for https://github.com/eslint/eslint/issues/3458 (re-export of @rushstack/eslint-patch)
require("@devlaunchers/eslint-config-bases/patch/modern-module-resolution");

module.exports = {
  // Be sure to set root to true in monorepo.
  root: true,
  // Will help typescript extended rules.
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: "tsconfig.json",
  },
  ignorePatterns: ["**/node_modules", "**/.cache", "build"],
  extends: [
    "@devlaunchers/eslint-config-bases/typescript",
    "@devlaunchers/eslint-config-bases/prettier",
  ],
  rules: {
    // Specific global rules for your app or package
  },
  overrides: [
    // Specific file rules for your app or package
  ],
};