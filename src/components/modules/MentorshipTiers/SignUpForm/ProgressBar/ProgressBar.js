import React from "react";

import style from "./ProgressBar.module.css";

export default function ProgressBar(props) {
  return (
    <div class={style.barBackground} style={props.style}>
      <div
        class={style.barForeground}
        style={{ width: props.progressPercent + "%" }}
      />
    </div>
  );
}
