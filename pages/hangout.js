import React from "react";

import Header from "../components/common/Header";
import Hangout from "../components/modules/Hangout/Hangout";
import Footer from "../components/common/Footer";

export default function HangoutRoute() {
  React.useEffect(() => {
    document.title = "Hangout";
  }, []);

  return (
    <div>
      <Header />
      <Hangout />
      <Footer />
    </div>
  );
}
