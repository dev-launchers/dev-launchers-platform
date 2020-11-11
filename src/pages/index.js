import React from "react";
//import style from "./HomeRoute.module.css";

import Header from "../components/common/Header";
import Home from "../components/modules/Home";
import Footer from "../components/common/Footer";

export default function Index() {
  React.useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}
