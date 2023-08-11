import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../src/styles/global";
import theme from "../src/styles/theme";
import "@devlaunchers/tailwind/tailwind.css"

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
 
/*
 * Global decorator to apply the styles to all stories
 * Read more about them at:
 * https://storybook.js.org/docs/react/writing-stories/decorators#global-decorators
 */
export const decorators = [
  (Story) => (
    <>
      <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Story />
      </ThemeProvider>
    </>
  ),
];
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
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
