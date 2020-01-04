import React from "react";
import ReactDOM from "react-dom";

import style from "./LandingHeroOverlay.module.css";

import Button from "/src/components/common/Button";

export default class LandingHero extends React.Component {
  constructor() {
    super();
    this.state = { color: "red" };
  }
  render() {
    return (
      <div className={style.heroOverlay}>
        <div
          style={{
            position: "absolute",
            left: "10%",
            bottom: "10%",
            width: "50%",
            fontWeight: "bold",
            fontSize: "5vw",
            color: "white",
            fontFamily: "'Holtwood One SC', serif",
            lineHeight: "1.1em"
          }}
        >
          <span style={{ textShadow: "4px 4px 1px black" }}>
            Join the journey
          </span>
          <br />
          <Button label="BECOME A DEVELOPER!" />
        </div>
      </div>
    );
  }
}
