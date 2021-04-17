import React from "react";

import style from "./ProgressBar.module.css";

export default function ProgressBar(props) {
  return (
    <div className={style.barBackground} style={props.style}>
      <div
        className={style.barForeground}
        style={{ width: props.progressPercent + "%" }}
      />
    </div>
  );
}
