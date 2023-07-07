// use `mergeConfig` to recursively merge Vite options
const path = require('path');
module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: ['../public'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-a11y', '@storybook/addon-links', '@storybook/addon-viewport', '@storybook/addon-mdx-gfm'],
  framework: path.resolve(require.resolve('@storybook/nextjs/preset'), '..'),
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: "javascript/auto"
    });
    return config;
  },
  docs: {
    autodocs: true
  },
  refs: {
    'idea-space': {
      title: 'idea-space',
      url: 'http://localhost:6001',
    },
    'site-projects': {
      title: 'site-projects',
      url: 'http://localhost:6002',
    },
    'dev-recruit': {
      title: 'dev-recruit',
      url: 'http://localhost:6003',
    },
    'website': {
      title: 'website',
      url: 'http://localhost:6004',
    },
  },
};