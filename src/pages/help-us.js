import React from "react";
import Head from "next/head";

import Header from "../components/common/Header";
import HelpUs from "../components/modules/HelpUs";
import Footer from "../components/common/Footer";

export default function Index() {
  return (
    <>
      <Head>
        <title>Become a Product Tester</title>
        <meta name="title" content="Become a Product Tester"></meta>
        <meta
          name="description"
          content="We build world changing software while preparing people to thrive in technical careers, Please help us test our new products!"
        ></meta>

        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://devlaunchers.org/"></meta>
        <meta
          property="og:image"
          content="/images/DevlaunchersGitHubThumb.png"
        ></meta>
        <meta property="og:title" content="Become a Product Tester"></meta>
        <meta
          property="og:description"
          content="We build world changing software while preparing people to thrive in technical careers, Please help us test our new products!"
        ></meta>

        <meta property="twitter:card" content="summary_large_image"></meta>
        <meta property="twitter:url" content="https://devlaunchers.org/"></meta>
        <meta
          property="twitter:image"
          content="/images/DevlaunchersGitHubThumb.png"
        ></meta>
        <meta property="twitter:title" content="Become a Product Tester"></meta>
        <meta
          property="twitter:description"
          content="We build world changing software while preparing people to thrive in technical careers, Please help us test our new products!"
        ></meta>
        <meta content="#ff7f0e" data-react-helmet="true" name="theme-color" />
      </Head>
      <div>
        <Header />
        <HelpUs />
        <Footer />
      </div>
    </>
  );
}
