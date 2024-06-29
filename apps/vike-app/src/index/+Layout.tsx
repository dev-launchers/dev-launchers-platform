import theme from './styles/theme';
import { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';
import { SheetsProvider } from './context/SheetsContext';
import GlobalStyle from './styles/globals';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider theme={theme}>
      <SheetsProvider>
        <GlobalStyle />
        {children}
      </SheetsProvider>
    </ThemeProvider>
  );
};

export { Layout };
