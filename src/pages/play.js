import React from "react";

import Header from "../components/common/Header";
import Play from "../components/modules/Play";
import Footer from "../components/common/Footer";
import Head from "next/head";

export default function PlayRoute() {
  return (
    <>
      <Head>
        <title>Play</title>
      </Head>
      <div>
        <Header />
        <Play />
        <Footer />
      </div>
    </>
  );
}
