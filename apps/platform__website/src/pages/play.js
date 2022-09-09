import React from "react";

import Head from "next/head";
import Header from "../components/common/Header";
import Play from "../components/modules/Play";
import Footer from "../components/common/Footer";

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
