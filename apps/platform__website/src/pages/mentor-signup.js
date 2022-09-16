import React from 'react';

import Head from 'next/head';
import MentorSignup from '../components/modules/Home/MentorSignup/MentorSignup';

export default function MentorSignupRoute() {
  return (
    <>
      <Head>
        <title>Mentor Signup</title>
      </Head>
      <div>
        <MentorSignup />
      </div>
    </>
  );
}
