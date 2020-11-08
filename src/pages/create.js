import React from "react";
import queryString from "query-string";

import Header from "../components/common/Header";
import Create from "../components/modules/Create";
import Footer from "../components/common/Footer";

import { useRouter } from "next/router";

export default function CreateRoute(props) {
  React.useEffect(() => {
    document.title = "Create";
  }, []);

  const router = useRouter();
  // Need to use GET params to get a specific variable
  let params = queryString.parse(router.locale);
  console.log("router locale", router.locale);
  return (
    <div>
      <Header />
      <Create templateId={params.template} />
      <Footer />
    </div>
  );
}
