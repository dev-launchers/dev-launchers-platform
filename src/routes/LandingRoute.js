import React from "react";
import ReactDOM from "react-dom";

//import style from "./LandingRoute.module.css";

import Header from "/src/components/modules/Header";
import LandingBody from "/src/components/modules/LandingBody";
import Footer from "/src/components/modules/Footer";

export default class LandingRoute extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header />
        <LandingBody />
        <Footer />
      </div>
    );
  }
}
