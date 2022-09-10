import React from "react";

import Head from "next/head";
import Header from "../components/common/Header";
import Earn from "../components/modules/Earn";
import Footer from "../components/common/Footer";

export default function EarnRoute() {
  return (
    <>
      <Head>
        <title>Earn</title>
      </Head>
      <div>
        <Header />
        <Earn />
        <Footer />
      </div>
    </>
  );
}
