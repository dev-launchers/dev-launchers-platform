import React from "react";
import ReactDOM from "react-dom";

//import style from "./HomeRoute.module.css";

import Header from "../components/modules/Header";
import HomeBody from "../components/modules/HomeBody";
import Footer from "../components/modules/Footer";

export default class HomeRoute extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header />
        <HomeBody />
        <Footer />
      </div>
    );
  }
}
