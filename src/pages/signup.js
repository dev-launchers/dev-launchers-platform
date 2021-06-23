import React from "react";

import Header from "../components/common/Header";
import SignUp from "../components/modules/SignUp/SignUp";
import Footer from "../components/common/Footer";
import Head from "next/head";

export default function SignUpRoute() {
  return (
    <>
      <Head>
        <title>Sign Up</title>
      </Head>
      <div>
        <Header />
        <SignUp />
        <Footer />
      </div>
    </>
  );
}
