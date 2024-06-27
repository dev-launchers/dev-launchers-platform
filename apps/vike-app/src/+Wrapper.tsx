import { UserDataProvider } from '@devlaunchers/components/src/context/UserDataContext';
import theme from '@devlaunchers/components/src/styles/theme';
import { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';
import '@devlaunchers/tailwind/tailwind.css';

const Wrapper = ({ children }: PropsWithChildren) => {
  return (
    <UserDataProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </UserDataProvider>
  );
};

export { Wrapper };
