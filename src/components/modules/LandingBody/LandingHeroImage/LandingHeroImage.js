import React from "react";
import ReactDOM from "react-dom";

import style from "./LandingHeroImage.module.css";

import Button from "../../../../components/common/Button";

export default class LandingHeroImage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={style.LandingHeroImage}>
        <div className={style.ImageContainer} />
      </div>
    );
  }
}
