import { useRouter } from 'next/router';
import Script from 'next/script';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@devlaunchers/components/src/styles/global';

import 'react-toastify/dist/ReactToastify.css';
import theme from '@devlaunchers/components/src/styles/theme';

import { UserDataProvider } from '@devlaunchers/components/src/context/UserDataContext';
// import Footer from '@devlaunchers/components/Footer';
// import Header from '@devlaunchers/components/components/Header';



const hashRedirect = (router) => {
  // Strip out hash from url (if any) so we can transition from HashRouter to BrowserRouter
  if (router.asPath.startsWith('/#')) {
    router.push(router.asPath.replace('/#', ''));
  }
};

function MyApp(props) {
  const router = useRouter();
  hashRedirect(router);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-599284852"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'AW-599284852');
            `}
        </Script>
        <UserDataProvider>
        <div className="App">
          <ToastContainer
            className="toast-container"
            toastClassName="toast"
            progressClassName="toast-progress"
          />
        </div>
        <div>
          {/* <Header /> */}
          {/* <Component {...pageProps} />  */}
          {props.children}
          {/* <Footer /> */}
        </div>
        </UserDataProvider>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
