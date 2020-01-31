import React from "react";
import ReactDOM from "react-dom";

//import style from "./HomeRoute.module.css";

import Header from "../components/modules/Header";
import Home from "../components/modules/Home";
import Footer from "../components/modules/Footer";

export default function HomeRoute() {
  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}
