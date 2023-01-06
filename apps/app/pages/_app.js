import Head from 'next/head';
import { ToastContainer } from 'react-toastify';

import Footer from '@devlaunchers/components/components/Footer';
import Header from '@devlaunchers/components/components/Header';
import { UserDataProvider } from '@devlaunchers/components/context/UserDataContext';
import {
  initGA,
  logPageView,
} from '@devlaunchers/components/utils/GoogleAnalytics';
import { Router, useRouter } from 'next/router';
import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/globals';
import theme from '../styles/theme';

const hashRedirect = (router) => {
  // Strip out hash from url (if any) so we can transition from HashRouter to BrowserRouter
  if (router.asPath.startsWith('/#')) {
    router.push(router.asPath.replace('/#', ''));
  }
};

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  hashRedirect(router);

  // Google analytics/Google adwords
  React.useEffect(() => {
    // Google Analytics
    initGA();
    logPageView();
    Router.events.on('routeChangeComplete', () => {
      logPageView();
    });

    // Google AdSense
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'AW-599284852');
  }, []);

  return (
    <>
      <UserDataProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <div>
            <Head>
              <meta name="google-site-verification" content="KUjgcCuL0UXshh3A0F02itHW6KizSyra4BIsFE9Iz8I" />
              <script
                async
                src="https://www.googletagmanager.com/gtag/js?id=AW-599284852"
              ></script>
            </Head>

            <div className="App">
            </div>
            <Header />
            <Component {...pageProps} />
            {/* {props.children} */}
            <Footer />
          </div>
        </ThemeProvider>
      </UserDataProvider>
    </>
  );
}

export default MyApp;
