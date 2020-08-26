import React from "react";
import ReactDOM from "react-dom";

import style from "./HeroOverlay.module.css";

import Button from "../../../common/Button";

export default function HeroOverlay() {
  return (
    <div className={style.HeroOverlay}>
      <div className={style.Tagline}>
        Launch your imagination!
        <br />
        <Button
          className={style.HeroButton}
          //href="https://forms.gle/ktNmippzfYUTnwgb8"
          style={{ width: "80%", marginTop: "5%" }}
          href="/#/members"
        >
          BECOME A DEVELOPER!
        </Button>
      </div>
    </div>
  );
}
