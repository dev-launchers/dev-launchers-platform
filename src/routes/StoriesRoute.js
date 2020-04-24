import React from "react";

import Header from "../components/common/Header";
import Stories from "../components/modules/Stories/Stories";
import Footer from "../components/common/Footer";

export default function StoriesRoute() {
  React.useEffect(() => {
    document.title = "Stories";
  }, []);

  return (
    <div>
      <Header />
      <Stories />
      <Footer />
    </div>
  );
}
