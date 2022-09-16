import React from 'react';

import Head from 'next/head';
import SignUp from '../components/modules/SignUp/SignUp';

export default function SignUpRoute() {
  return (
    <>
      <Head>
        <title>Sign Up</title>
      </Head>
      <div>
        <SignUp />
      </div>
    </>
  );
}
