import React from "react";
import ReactDOM from "react-dom";

import style from "./LandingHeroOverlay.module.css";

import Button from "../../../common/Button";

export default class LandingHeroOverlay extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={style.LandingHeroOverlay}>
        <div className={style.Tagline}>
          Join the journey
          <br />
          <Button className={style.HeroButton}>
            BECOME A DEVELOPER!
          </Button>
        </div>
      </div>
    );
  }
}
