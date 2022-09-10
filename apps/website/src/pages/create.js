import React from "react";
import queryString from "query-string";

import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../components/common/Header";
import Create from "../components/modules/Create";
import Footer from "../components/common/Footer";

export default function CreateRoute() {
  const router = useRouter();
  // Need to use GET params to get a specific variable
  const params = queryString.parse(router.locale);
  // console.log("router locale", router.locale);
  return (
    <>
      <Head>
        <title>Create</title>
      </Head>
      <div>
        <Header />
        <Create templateId={params.template} />
        <Footer />
      </div>
    </>
  );
}
