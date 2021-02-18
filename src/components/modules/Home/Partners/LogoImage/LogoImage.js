import React from "react";
import style from "./LogoImage.module.css";

function LogoImage(props) {
  return (
    <div className={style.PartnerEntry}>
      <a href={props.href} target="_blank">
        <img
          className={style.PartnerEntryImage}
          width={props.width}
          src={props.src}
        />
      </a>
    </div>
  );
}

export default LogoImage;
