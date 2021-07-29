import React from "react";
import Head from "next/head";

import Header from "../components/common/Header";
import SupportUs from "../components/modules/SupportUs";
import Footer from "../components/common/Footer";

export default function SupportUsRoute() {
  return (
    <>
      <Head>
        <title>Support Us</title>
      </Head>
      <div>
        <Header />
        <SupportUs />
        <Footer />
      </div>
    </>
  );
}
