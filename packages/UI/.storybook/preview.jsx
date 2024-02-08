import React from 'react';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../src/styles/global';
import theme from '../src/styles/theme';
import '@devlaunchers/tailwind/tailwind.css';
const isDevelopmentEnv = process.env.NODE_ENV == 'development';
const customViewports = {
  mobile: {
    name: 'mobile',
    styles: {
      width: `412px`,
      height: '100%',
    },
  },
  sm: {
    name: 'sm',
    styles: {
      width: `640px`,
      height: '100%',
    },
  },
  md: {
    name: 'md',
    styles: {
      width: `768px`,
      height: '100%',
    },
  },
  lg: {
    name: 'lg',
    styles: {
      width: `1024px`,
      height: '100%',
    },
  },
  xl: {
    name: 'xl',
    styles: {
      width: `1280px`,
      height: '100%',
    },
  },
  '2xl': {
    name: '2xl',
    styles: {
      width: `1536px`,
      height: '100%',
    },
  },
};

/*
 * Global decorator to apply the styles to all stories
 * Read more about them at:
 * https://storybook.js.org/docs/react/writing-stories/decorators#global-decorators
 */
export const decorators = [
  // apply global theme
  (Story) => {
    return (
      <>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Story />
        </ThemeProvider>
      </>
    );
  },
  // do Figma comparison in development mode
  (Story, { parameters }) => {
    if (
      process.env.STORYBOOK_FIGMA_ACCESS_TOKEN &&
      isDevelopmentEnv &&
      parameters.design
    ) {
      const figmaUrl = new URL(parameters.design.url);
      return (
        <ftl-holster
          access-token={process.env.STORYBOOK_FIGMA_ACCESS_TOKEN}
          // extract the second slug from the figma url
          file-id={figmaUrl.pathname.match(/\/([^\/]+)\/([^\/]+)/)[2]}
          node={figmaUrl.searchParams.get('node-id').replace('-', ':')}
        >
          <Story />
        </ftl-holster>
      );
    }
    return <Story />
  },
];
export const parameters = {
  actions: { argTypesRegex: '^on.*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: customViewports,
  },
};
