import React from "react";
import ReactDOM from "react-dom";

//import style from "./HomeRoute.module.css";

import Header from "../components/modules/Header";
import SupportUs from "../components/modules/SupportUs";
import Footer from "../components/modules/Footer";

export default function SupportUsRoute() {
  return (
    <div>
      <Header />
      <SupportUs />
      <Footer />
    </div>
  );
}
