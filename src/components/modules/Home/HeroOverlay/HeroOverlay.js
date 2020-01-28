import React from "react";
import ReactDOM from "react-dom";

import style from "./HeroOverlay.module.css";

import Button from "../../../common/Button";

export default class HeroOverlay extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={style.HeroOverlay}>
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
