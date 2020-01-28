import React from "react";
import ReactDOM from "react-dom";

import style from "./HomeHeroOverlay.module.css";

import Button from "../../../common/Button";

export default class HomeHeroOverlay extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={style.HomeHeroOverlay}>
        <div className={style.Tagline}>
          Join the journey
          <br />
          <Button className={style.HeroButton} href="https://forms.gle/ktNmippzfYUTnwgb8">
            BECOME A DEVELOPER!
          </Button>
        </div>
      </div>
    );
  }
}
