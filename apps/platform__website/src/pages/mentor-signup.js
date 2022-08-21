import React from "react";

import Head from "next/head";
import Header from "../components/common/Header";
import MentorSignup from "../components/modules/Home/MentorSignup/MentorSignup";
import Footer from "../components/common/Footer";

export default function MentorSignupRoute() {
  return (
    <>
      <Head>
        <title>Mentor Signup</title>
      </Head>
      <div>
        <Header />
        <MentorSignup />
        <Footer />
      </div>
    </>
  );
}
