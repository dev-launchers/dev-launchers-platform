const { filterTokensByType } = require('./fns');
const tokens = require('./output/core.json');

const categories = [
  'color',
  'lineHeights',
  'letterSpacing',
  'paragraphSpacing',
  'boxShadow',
  'dropShadow',
  'innerShadow',
  'fontFamilies',
  'fontWeights',
  'typography',
  'textCase',
  'textDecoration',
  'borderRadius',
  'spacing',
  'sizing',
  'fontSizes',
];
const compatibleTokens = categories
  .map((category) => filterTokensByType(category, tokens))
  .reduce((r, c) => Object.assign(r, c), {});

function removeRedundant(obj) {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => {
      const category = `${key.split('-')[0]}-`;
      if (typeof value === 'object') {
        return removeRedundant(value);
      }
      return [key.replace(category, ''), value.replace(category, '')];
    })
  );
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: removeRedundant(compatibleTokens),
  variants: {},
  plugins: [],
};
