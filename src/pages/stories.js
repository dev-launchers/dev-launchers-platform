import React from "react";

import Head from "next/head";
import Header from "../components/common/Header";
import Stories from "../components/modules/Stories/Stories";
import Footer from "../components/common/Footer";

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
