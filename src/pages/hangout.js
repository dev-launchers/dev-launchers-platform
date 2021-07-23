import React from "react";

import Head from "next/head";
import Header from "../components/common/Header";
import Hangout from "../components/modules/Hangout/Hangout";
import Footer from "../components/common/Footer";

export default function HangoutRoute() {
  return (
    <>
      <Head>
        <title>Hangout</title>
      </Head>
      <div>
        <Header />
        <Hangout />
        <Footer />
      </div>
    </>
  );
}
