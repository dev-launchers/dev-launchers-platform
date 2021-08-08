import React from "react";

import { BarBackground, BarForeground } from "./StyledProgressBar";

export default function ProgressBar(props) {
  return (
    <BarBackground style={props.style}>
      <BarForeground style={{ width: `${props.progressPercent}%` }} />
    </BarBackground>
  );
}
