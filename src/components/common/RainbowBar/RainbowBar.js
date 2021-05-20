import React from "react";
import CardGroup from "../CardGroup";
import { Wrapper, BarSection } from "./StyledRainbowBar";

import theme from "../../../styles/theme.js";

export default function RainbowBar({ width = "100%", height = ".5rem" }) {
  return (
    <Wrapper width={width} height={height}>
      <BarSection color={theme.colors.ACCENT_1} />
      <BarSection color={theme.colors.ACCENT_2} />
      <BarSection color={theme.colors.ACCENT_4} />
      <BarSection color={theme.colors.ACCENT_3} />
    </Wrapper>
  );
}
