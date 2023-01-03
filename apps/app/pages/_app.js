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
import Script from 'next/script';

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
            <Script>
              {`
      var _iub = _iub || [];
      _iub.csConfiguration = {
        lang: 'en',
        siteId: 2881142, 
        cookiePolicyId: 86187507, 

        enableCcpa: true,
        ccpaApplies: true,

        enableGdpr: true,
        gdprAppliesGlobally: false,
        gdprApplies: true,
        perPurposeConsent: true,

        timeoutLoadConfiguration: 30000,
        consentOnScroll: false, //avoid consent to be given when the user scrolls the page

        banner:{ acceptButtonCaptionColor:"#FFFFFF",acceptButtonColor:"#3A7CA5",acceptButtonDisplay:true,backgroundColor:"#FFFFFF",brandBackgroundColor:"#FFFFFF",brandTextColor:"#000000",closeButtonDisplay:false,customizeButtonCaptionColor:"#4D4D4D",customizeButtonColor:"#DADADA",customizeButtonDisplay:true,explicitWithdrawal:true,listPurposes:true,position:"float-bottom-left",rejectButtonCaptionColor:"#000000",rejectButtonColor:"#eee",rejectButtonDisplay:true,textColor:"#000000", logo:"data:image/png;base64,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"},
        callback: {
          onPreferenceExpressedOrNotNeeded: function (preference) {
            dataLayer.push({
              iubenda_ccpa_opted_out: _iub.cs.api.isCcpaOptedOut(),
            });

            if (!preference) {
              dataLayer.push({
                event: 'iubenda_preference_not_needed',
              });
            } else {
              if (preference.consent === true) {
                dataLayer.push({
                  event: 'iubenda_consent_given',
                });
              } else if (preference.consent === false) {
                dataLayer.push({
                  event: 'iubenda_consent_rejected',
                });
              } else if (preference.purposes) {
                for (var purposeId in preference.purposes) {
                  if (preference.purposes[purposeId]) {
                    dataLayer.push({
                      event: 'iubenda_consent_given_purpose_' + purposeId,
                    });
                  }
                }
              }
            }
          },
        },
      }
    `}
            </Script>
            <Script async src="//cdn.iubenda.com/cs/iubenda_cs.js"></Script>
            <Head>
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
