import React from "react";
// import style from "./HomeRoute.module.css";
import Head from "next/head";
import DevlaunchersGitHubThumbnail from "../../public/images/DevlaunchersGitHubThumb.png";

import Header from "../components/common/Header";
import Home from "../components/modules/Home";
import Footer from "../components/common/Footer";

export default function Index() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="title" content="Home"></meta>
        <meta
          name="description"
          content="We build world changing software while preparing people to thrive in technical careers"
        ></meta>

        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://devlaunchers.com/"></meta>
        <meta property="og:title" content="Home"></meta>
        <meta
          property="og:description"
          content="We build world changing software while preparing people to thrive in technical careers"
        ></meta>
        <meta property="og:image" content={DevlaunchersGitHubThumbnail}></meta>

        <meta property="twitter:card" content="summary_large_image"></meta>
        <meta property="twitter:url" content="https://devlaunchers.com/"></meta>
        <meta property="twitter:title" content="Home"></meta>
        <meta
          property="twitter:description"
          content="We build world changing software while preparing people to thrive in technical careers"
        ></meta>
        <meta
          property="twitter:image"
          content={DevlaunchersGitHubThumbnail}
        ></meta>
      </Head>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}
