import type { StorybookConfig } from '@storybook/nextjs';
const path = require('path');
const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: path.resolve(require.resolve('@storybook/nextjs/preset'), '..'),
  docs: {
    autodocs: 'tag',
  },
  core: {
    crossOriginIsolated: false,
  },
  features: {
    buildStoriesJson: true,
  },
};
export default config;
