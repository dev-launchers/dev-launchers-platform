import React from 'react';

import Head from 'next/head';
import Stories from '../components/modules/Stories/Stories';

export default function StoriesRoute() {
  return (
    <>
      <Head>
        <title>Stories</title>
      </Head>
      <div>
        <Stories />
      </div>
    </>
  );
}
