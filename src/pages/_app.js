import "../styles/globals.css";
import React from "react";

import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AuthProvider } from "../context/AuthContext";
import { SheetsProvider } from "../context/SheetsContext";
import { RepoProvider } from "../context/RepoContext";
import { LeaderboardProvider } from "../context/LeaderboardContext";

function MyApp({ Component, pageProps }) {
  /* <Code added to debug iphone issue using alerts> */
  const router = useRouter();
  if (router.query.debug === "true") {
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
