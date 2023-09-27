import Head from 'next/head';

import { Footer, Navigation } from '@devlaunchers/components/components/organisms';
import { UserDataProvider } from '@devlaunchers/components/context/UserDataContext';
import {
  initGA,
  logPageView,
} from '@devlaunchers/components/utils/GoogleAnalytics';
import { Router, useRouter } from 'next/router';
import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import Script from 'next/script';
import iubendaScript from '../scripts/iubendaScript';

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
          <div>
            <Script dangerouslySetInnerHTML={{ __html: iubendaScript }} />
            <Script async src="//cdn.iubenda.com/cs/iubenda_cs.js"></Script>
            <Head>
              <script
                async
                src="https://www.googletagmanager.com/gtag/js?id=AW-599284852"
              ></script>
            </Head>

            <div className="App">
            </div>
           <Navigation />
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
