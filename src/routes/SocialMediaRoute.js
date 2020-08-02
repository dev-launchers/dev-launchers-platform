import React from "react";

import Header from "../components/common/Header";
import SocialMedia from "../components/modules/SocialMedia/SocialMedia";
import Footer from "../components/common/Footer";

export default function SocialMediaRoute() {
  React.useEffect(() => {
    document.title = "Check us out";
  }, []);

  return (
    <div>
      <Header />
      <SocialMedia />
      <Footer />
    </div>
  );
}
