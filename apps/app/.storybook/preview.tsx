import type { Preview } from '@storybook/react';
import Head from 'next/head';
import Script from 'next/script';

import {
  Footer,
  Navigation,
} from '@devlaunchers/components/components/organisms';
import { UserDataProvider } from '@devlaunchers/components/context/UserDataContext';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import iubendaScript from '../scripts/iubendaScript';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (story) => (
      <UserDataProvider>
        <ThemeProvider theme={theme}>
          <div>
            <Script dangerouslySetInnerHTML={{ __html: iubendaScript }} />
            <Script async src="//cdn.iubenda.com/cs/iubenda_cs.js" />
            <Head>
              <script
                async
                src="https://www.googletagmanager.com/gtag/js?id=AW-599284852"
              ></script>
            </Head>

            <div className="App"></div>
            <Navigation />

            {story()}

            <Footer />
          </div>
        </ThemeProvider>
      </UserDataProvider>
    ),
  ],
};

export default preview;
