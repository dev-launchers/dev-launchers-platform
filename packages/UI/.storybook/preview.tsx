import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../src/styles/global';
import theme from '../src/styles/theme';
import { type Preview } from '@storybook/react';

const customViewports = {
  sm: {
    name: 'sm',
    styles: {
      width: `${theme.breakpoints.sm}px`,
      height: '100%',
    },
  },
  md: {
    name: 'md',
    styles: {
      width: `${theme.breakpoints.md}px`,
      height: '100%',
    },
  },
  lg: {
    name: 'lg',
    styles: {
      width: `${theme.breakpoints.lg}px`,
      height: '100%',
    },
  },
  xl: {
    name: 'xl',
    styles: {
      width: `${theme.breakpoints.xl}px`,
      height: '100%',
    },
  },
  xxl: {
    name: 'xxl',
    styles: {
      width: `${theme.breakpoints.xxl}px`,
      height: '100%',
    },
  },
};

const preview: Preview = {
  decorators: [
    (Story) => (
      <>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Story />
        </ThemeProvider>
      </>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      viewports: customViewports,
    },
  },
};
export default preview;
