import React from "react";
//import style from "./HomeRoute.module.css";

import { useRouter } from "next/router";
import * as queryString from "query-string";

import Header from "../components/common/Header";
import Home from "../components/modules/Home";
import Footer from "../components/common/Footer";

export default function Index() {
  React.useEffect(() => {
    document.title = "Home";
  }, []);

  /* <Code added to debug iphone issue using alerts> */
  const router = useRouter();
  if (router.query.debug === "true") {
    window.addEventListener("error", handleError, true);

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
  }
  /* </Code added to debug iphone issue using alerts> */

  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}
