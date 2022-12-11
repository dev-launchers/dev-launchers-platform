import React from 'react';
import { NextRouter, useRouter } from 'next/router';
import Script from 'next/script';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/globals';

import Nav from '../components/modules/Nav/nav';

import { UserDataProvider } from '@devlaunchers/components/context/UserDataContext';
import IdeasBetaFeedbackModal from '../components/modules/IdeasBetaFeedbackModal';

import 'react-toastify/dist/ReactToastify.css';
import theme from '../styles/theme';

import useMockDataInDevelopment from "../utils/useMockData";

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
        <UserDataProvider>
          <GlobalStyle />
          <Nav />
          <IdeasBetaFeedbackModal />
          {props.children}     
        </UserDataProvider> 
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
