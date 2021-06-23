import React from "react";

import Header from "../components/common/Header";
import Stories from "../components/modules/Stories/Stories";
import Footer from "../components/common/Footer";
import Head from "next/head";

export default function StoriesRoute() {
  return (
    <>
      <Head>
        <title>Stories</title>
      </Head>
      <div>
        <Header />
        <Stories />
        <Footer />
      </div>
    </>
  );
}
