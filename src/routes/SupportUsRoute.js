import React from "react";
import ReactDOM from "react-dom";

//import style from "./HomeRoute.module.css";

import Header from "../components/common/Header";
import SupportUs from "../components/modules/SupportUs";
import Footer from "../components/common/Footer";

export default function SupportUsRoute() {
  return (
    <div>
      <Header />
      <SupportUs />
      <Footer />
    </div>
  );
}
