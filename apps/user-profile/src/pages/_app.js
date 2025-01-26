import Head from 'next/head';
import { Router, useRouter } from 'next/router';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/globals';

import 'react-toastify/dist/ReactToastify.css';
// Importing the theme from the DevLaunchers components
import theme from '@devlaunchers/components/styles/theme';
import { initGA, logPageView } from '../utils/GoogleAnalytics';

import { UserDataProvider } from '@devlaunchers/components/context/UserDataContext';

import { LazyMotion, domAnimation } from 'framer-motion';

/**
 * Redirects URLs with hash fragments (e.g., /#example) to URLs without the hash fragment.
 * This helps in transitioning from HashRouter to BrowserRouter.
 *
 * @param {Object} router - The Next.js router object.
 */
const hashRedirect = (router) => {
  if (router.asPath.startsWith('/#')) {
    router.push(router.asPath.replace('/#', ''));
  }
};

/**
 * MyApp Component
 *
 * This is the root component for the Next.js app, wrapping all pages with common providers,
 * styles, and functionality like Google Analytics and Toast notifications.
 *
 * Features:
 * - Global user data provider for app-wide user state.
 * - ThemeProvider for consistent styling with Styled Components.
 * - Google Analytics and Google AdSense integration.
 * - Toast notification setup.
 * - Support for Framer Motion animations via LazyMotion.
 *
 * @param {Object} props - The props passed to the component, including `children` (rendered pages).
 * @return {JSX.Element} The wrapped app with global functionality.
 */
function MyApp(props) {
  const router = useRouter();

  // Handle hash-based redirects to clean up URLs
  hashRedirect(router);

  // Google Analytics and Google AdSense integration
  React.useEffect(() => {
    // Initialize Google Analytics
    initGA();
    logPageView();
    Router.events.on('routeChangeComplete', () => {
      logPageView(); // Log page views on route changes
    });

    // Initialize Google AdSense
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments); // Push events to the data layer
    }
    gtag('js', new Date());
    gtag('config', 'AW-599284852'); // Configure with the AdSense ID
  }, []);

  return (
    <>
      <UserDataProvider>
        {/* ThemeProvider for consistent styling */}
        <ThemeProvider theme={theme}>
          {/* Global styles */}
          <GlobalStyle />
          <div>
            <Head>
              {/* Google AdSense script */}
              <script
                async
                src="https://www.googletagmanager.com/gtag/js?id=AW-599284852"
              ></script>
            </Head>

            {/* Toast notifications */}
            <div className="App">
              <ToastContainer
                className="toast-container"
                toastClassName="toast"
                bodyClassName="toast-body"
                progressClassName="toast-progress"
              />
            </div>

            {/* Framer Motion animations */}
            <LazyMotion features={domAnimation} strict>
              {/* Renders <UserProfilePage /> */}
              {props.children}
            </LazyMotion>
          </div>
        </ThemeProvider>
      </UserDataProvider>
    </>
  );
}

export default MyApp;
