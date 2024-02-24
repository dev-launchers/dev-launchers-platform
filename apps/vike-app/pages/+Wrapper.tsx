import theme from '@devlaunchers/components/src/styles/theme';
import { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';

const Wrapper = ({ children }: PropsWithChildren) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export { Wrapper };
