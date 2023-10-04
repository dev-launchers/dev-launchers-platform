import React from "react";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "../src/styles/global";
import theme from "../src/styles/theme";
import "@devlaunchers/tailwind/tailwind.css";

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
