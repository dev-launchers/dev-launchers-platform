import React from 'react';

import Head from 'next/head';
import SocialMedia from '../components/modules/SocialMedia/SocialMedia';

export default function SocialMediaRoute() {
  return (
    <>
      <Head>
        <title>Check us out</title>
      </Head>
      <div>
        <SocialMedia />
      </div>
    </>
  );
}
