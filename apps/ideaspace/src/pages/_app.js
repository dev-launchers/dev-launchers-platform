import React from 'react';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/globals';
import RainbowBar from '../../../site-projects/src/components/common/RainbowBar';
import Head from 'next/head';


import { UserDataProvider } from '@devlaunchers/components/context/UserDataContext';
import IdeasBetaFeedbackModal from '../components/modules/IdeasBetaFeedbackModal';

import 'react-toastify/dist/ReactToastify.css';
import platformTheme from '@devlaunchers/components/styles/theme';
import ideaspaceTheme from '../styles/theme';

import useMockDataInDevelopment from "../utils/useMockData";
let theme = {platformTheme, ...ideaspaceTheme};
// ideaspace need both package theme for storybook component and ideaspace theme
/*
import { UserDataProvider } from "@contexts/UserDataContext";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer"
*/

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
    <div className="IdeasApp">
      <ThemeProvider theme={theme}>
        <Head><meta name="google-site-verification" content="KUjgcCuL0UXshh3A0F02itHW6KizSyra4BIsFE9Iz8I" /></Head>
        <UserDataProvider>
          <GlobalStyle />
          <RainbowBar />
          <IdeasBetaFeedbackModal />
          <RainbowBar />
          {props.children}
        </UserDataProvider>
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
