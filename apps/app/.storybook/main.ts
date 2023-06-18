import type { StorybookConfig } from '@storybook/nextjs';
const path = require('path')
const config: StorybookConfig = {
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: ['../public', '../../../packages/UI/public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: path.resolve(require.resolve('@storybook/nextjs/preset'), '..'),
  docs: {
    autodocs: 'tag',
  },
};
export default config;
