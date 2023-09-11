import React from 'react';
import Head from 'next/head';

import Home from '../components/modules/Home';

export default function Index() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="title" content="Home"></meta>
        <meta
          name="description"
          content="We build world-changing software while preparing people to thrive in technical careers"
        ></meta>

        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://devlaunchers.org/"></meta>
        <meta
          property="og:image"
          content="/images/DevlaunchersGitHubThumb.png"
        ></meta>
        <meta property="og:title" content="Home"></meta>
        <meta
          property="og:description"
          content="We build world-changing software while preparing people to thrive in technical careers"
        ></meta>

        <meta property="twitter:card" content="summary_large_image"></meta>
        <meta property="twitter:url" content="https://devlaunchers.org/"></meta>
        <meta
          property="twitter:image"
          content="/images/DevlaunchersGitHubThumb.png"
        ></meta>
        <meta property="twitter:title" content="Home"></meta>
        <meta
          property="twitter:description"
          content="We build world-changing software while preparing people to thrive in technical careers"
        ></meta>
        <meta content="#ff7f0e" data-react-helmet="true" name="theme-color" />
      </Head>
      <div>
        <Home />
      </div>
    </>
  );
}
