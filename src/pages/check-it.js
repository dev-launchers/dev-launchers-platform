import React from "react";

import Header from "../components/common/Header";
import SocialMedia from "../components/modules/SocialMedia/SocialMedia";
import Footer from "../components/common/Footer";
import Head from "next/head";

export default function SocialMediaRoute() {
  return (
    <>
      <Head>
        <title>Check us out</title>
      </Head>
      <div>
        <Header />
        <SocialMedia />
        <Footer />
      </div>
    </>
  );
}
