import React from "react";

import Header from "../components/common/Header";
import Learn from "../components/modules/Learn/Learn";
import Footer from "../components/common/Footer";
import Head from "next/head";

export default function LearnRoute() {
  return (
    <>
      <Head>
        <title>Learn</title>
      </Head>
      <div>
        <Header />
        <Learn />
        <Footer />
      </div>
    </>
  );
}
