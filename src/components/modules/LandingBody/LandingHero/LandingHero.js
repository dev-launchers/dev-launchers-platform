import React from "react";
import ReactDOM from "react-dom";

import style from "./LandingHero.module.css";

import Button from "/src/components/common/Button";

export default class LandingHero extends React.Component {
  constructor() {
    super();
    this.state = { color: "red" };
  }
  render() {
    return (
      <div className={style.heroImageContainer}>
        <div className={style.heroImage} />
      </div>
    );
  }
}
