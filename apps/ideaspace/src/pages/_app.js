import React from 'react';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@devlaunchers/components/src/styles/global';
import Head from 'next/head';

import IdeasBetaFeedbackModal from '../components/modules/IdeasBetaFeedbackModal';

import 'react-toastify/dist/ReactToastify.css';
import theme from '@devlaunchers/components/styles/theme';

import useMockDataInDevelopment from "../utils/useMockData";

const hashRedirect = (router) => {
  // Strip out hash from url (if any) so we can transition from HashRouter to BrowserRouter
  if (router.asPath.startsWith('/#')) {
    router.push(router.asPath.replace('/#', ''));
  }
};

function MyApp(props) {
  //useMockDataInDevelopment();

  const router = useRouter();
  hashRedirect(router);

  React.useEffect(() => {
    //initGA();
    //logPageView();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Head><meta name="google-site-verification" content="KUjgcCuL0UXshh3A0F02itHW6KizSyra4BIsFE9Iz8I" /></Head>
      <GlobalStyle />
      <IdeasBetaFeedbackModal />
      {props.children}
    </ThemeProvider>
  );
}

export default MyApp;
