import type { StorybookConfig } from '@storybook/nextjs';
import path, { dirname, join } from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)', '../src/**/*.mdx'],
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-mdx-gfm',
  ].map(getAbsolutePath),
  framework: {
    name: getAbsolutePath('@storybook/nextjs') as "@storybook/nextjs",
    options: {},
  },
  webpackFinal: async (config) => {
    config?.module?.rules?.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto',
    });
    return config;
  },
  docs: {
    autodocs: true,
  },
  typescript: {
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
    reactDocgen: 'react-docgen-typescript',
    // skipBabel: true,
    check: true,
  }
};

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')));
}

export default config;