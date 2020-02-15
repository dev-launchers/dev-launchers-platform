import React from "react";
import ReactDOM from "react-dom";

import style from "./HeroImage.module.css";

import Button from "../../../../components/common/Button";

export default function HeroImage() {
  return (
    <div className={style.HeroImage}>
      <div className={style.ImageContainer} />
    </div>
  );
}
