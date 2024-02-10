export { getPageElement };
import { ServerStyleSheet, ThemeProvider } from 'styled-components';
import theme from '@devlaunchers/components/src/styles/theme';

import React, { type ReactNode } from 'react';
import type { PageContext } from 'vike/types';
import { PageContextProvider } from '../hooks/usePageContext.js';

function getPageElement(pageContext: PageContext): JSX.Element {
  const Layout = pageContext.config.Layout ?? PassThrough;
  const Wrapper = pageContext.config.Wrapper ?? PassThrough;
  const VikeReactQueryWrapper =
    pageContext.config.VikeReactQueryWrapper ?? (PassThrough as any);
  const { Page } = pageContext;
  const page = (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <PageContextProvider pageContext={pageContext}>
          <VikeReactQueryWrapper pageContext={pageContext}>
            <Wrapper>
              <Layout>{Page ? <Page /> : null}</Layout>
            </Wrapper>
          </VikeReactQueryWrapper>
        </PageContextProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
  return page;
}

function PassThrough({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
