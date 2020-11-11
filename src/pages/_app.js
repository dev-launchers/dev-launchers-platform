import "../styles/globals.css";
import React from "react";

import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AuthProvider } from "../context/AuthContext";
import { SheetsProvider } from "../context/SheetsContext";
import { RepoProvider } from "../context/RepoContext";
import { LeaderboardProvider } from "../context/LeaderboardContext";

const hashRedirect = router => {
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

  /* <Code added to debug iphone issue using alerts> */
  if (router.query.debug === "true") {
    injectErrorInterceptor();
  }
  /* </Code added to debug iphone issue using alerts> */

  return (
    <AuthProvider>
      <SheetsProvider>
        <RepoProvider>
          <LeaderboardProvider>
            <div className="App">
              <ToastContainer
                className="toast-container"
                toastClassName="toast"
                progressClassName="toast-progress"
              />
            </div>
            <Component {...pageProps} />
          </LeaderboardProvider>
        </RepoProvider>
      </SheetsProvider>
    </AuthProvider>
  );
}

export default MyApp;
