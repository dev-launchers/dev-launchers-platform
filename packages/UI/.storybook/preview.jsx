import React from "react";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../src/styles/global";
import theme from "../src/styles/theme";
import * as NextImage from "next/image";
const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => (
    <OriginalNextImage
      {...props}
      unoptimized
    />
  ),
});

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
  nextRouter: {
    Provider: RouterContext.Provider,
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
