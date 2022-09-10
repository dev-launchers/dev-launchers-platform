import React from "react";

import Head from "next/head";
import Header from "../components/common/Header";
import MentorshipTiers from "../components/modules/MentorshipTiers/MentorshipTiers";
import Footer from "../components/common/Footer";

export default function MentorshipTiersRoute() {
  return (
    <>
      <Head>
        <title>Mentorship Tiers</title>
      </Head>
      <div>
        <Header />
        <MentorshipTiers />
        <Footer />
      </div>
    </>
  );
}
