import GlobalStyle from "../styles/globals";
import React from "react";

import { Router, useRouter } from "next/router";
import Head from "next/head";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import theme from "../styles/theme";
import { initGA, logPageView } from "../utils/GoogleAnalytics.js";

import { SheetsProvider } from "../context/SheetsContext";
import { RepoProvider } from "../context/RepoContext";
import { LeaderboardProvider } from "../context/LeaderboardContext";
import { UserDataProvider } from "../context/UserDataContext";
import { ThemeProvider } from "styled-components";

const hashRedirect = (router) => {
  // Strip out hash from url (if any) so we can transition from HashRouter to BrowserRouter
  if (router.asPath.startsWith("/#")) {
    router.push(router.asPath.replace("/#", ""));
  }
};

/* <Code added to debug iphone issue using alerts> */
const injectErrorInterceptor = () => {
  alert("Entering debug mode - console errors will now display in alerts");
  function handleError(evt) {
    if (evt.message) {
      // Chrome sometimes provides this
      alert(
        "error: " +
          evt.message +
          " at linenumber: " +
          evt.lineno +
          " of file: " +
          evt.filename
      );
    } else {
      alert(
        "error: " +
          evt.type +
          " from element: " +
          (evt.srcElement || evt.target)
      );
    }
  }
  window.addEventListener("error", handleError, true);
};
/* </Code added to debug iphone issue using alerts> */

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  hashRedirect(router);

  // Google analytics/Google adwords
  React.useEffect(() => {
    // Google Analytics
    initGA();
    logPageView();
    Router.events.on("routeChangeComplete", () => {
      logPageView();
    });

    // Google AdSense
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "AW-599284852");
  }, []);

  /* <Code added to debug iphone issue using alerts> */
  if (router.query.debug === "true") {
    injectErrorInterceptor();
  }
  /* </Code added to debug iphone issue using alerts> */

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div>
          <Head>
            <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=AW-599284852"
            ></script>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
              href="https://fonts.googleapis.com/css2?family=Abel&family=Holtwood+One+SC&family=Roboto&family=Alfa+Slab+One&family=Vollkorn&family=Nunito+Sans&display=swap"
              rel="stylesheet"
            />
            <link
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
              rel="stylesheet"
            />
          </Head>
          <SheetsProvider>
            <RepoProvider>
              <LeaderboardProvider>
                <UserDataProvider>
                  <div className="App">
                    <ToastContainer
                      className="toast-container"
                      toastClassName="toast"
                      progressClassName="toast-progress"
                    />
                  </div>
                  <Component {...pageProps} />
                </UserDataProvider>
              </LeaderboardProvider>
            </RepoProvider>
          </SheetsProvider>
        </div>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
