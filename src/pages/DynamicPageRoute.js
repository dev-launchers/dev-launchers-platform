import React from "react";
import queryString from "query-string";

import Header from "../components/common/Header";
import DynamicPage from "../components/modules/DynamicPage";
import Footer from "../components/common/Footer";

export default function DynamicPageRoute(props) {
  React.useEffect(() => {
    document.title = "Page";
  }, []);

  const params = props.match.params;
  const pageId = params.pageId;

  return (
    <div>
      <Header />
      <DynamicPage pageId={pageId} />
      <Footer />
    </div>
  );
}
