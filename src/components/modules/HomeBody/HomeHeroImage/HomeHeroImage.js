import React from "react";
import ReactDOM from "react-dom";

import style from "./HomeHeroImage.module.css";

import Button from "../../../../components/common/Button";

export default class HomeHeroImage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={style.HomeHeroImage}>
        <div className={style.ImageContainer} />
      </div>
    );
  }
}
