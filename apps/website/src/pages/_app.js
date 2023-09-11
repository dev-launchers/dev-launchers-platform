import Head from 'next/head';
import { Router, useRouter } from 'next/router';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/globals';

import 'react-toastify/dist/ReactToastify.css';
import theme from '../styles/theme';
import { initGA, logPageView } from '../utils/GoogleAnalytics';

import { UserDataProvider } from '../context/UserDataContext';
import { SheetsProvider } from '../context/SheetsContext';

const hashRedirect = (router) => {
  // Strip out hash from url (if any) so we can transition from HashRouter to BrowserRouter
  if (router.asPath.startsWith('/#')) {
    router.push(router.asPath.replace('/#', ''));
  }
};

function MyApp(props) {
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
        <SheetsProvider>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <div>
              <Head>
                <script
                  async
                  src="https://www.googletagmanager.com/gtag/js?id=AW-599284852"
                ></script>
              </Head>

              <div className="App">
                <ToastContainer
                  className="toast-container"
                  toastClassName="toast"
                  bodyClassName="toast-body"
                  progressClassName="toast-progress"
                />
              </div>
              {/* <Component {...pageProps} /> */}
              {props.children}
            </div>
          </ThemeProvider>
        </SheetsProvider>
      </UserDataProvider>
    </>
  );
}

export default MyApp;
