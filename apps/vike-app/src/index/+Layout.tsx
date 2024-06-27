import theme from './styles/theme';
import { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';

const Layout = ({ children }: PropsWithChildren) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export { Layout };
