import React from "react";
import { withTheme } from "styled-components";
import { Wrapper, BarSection } from "./StyledRainbowBar";

function RainbowBar({ width = "100%", height = ".5rem", theme }) {
  return (
    <Wrapper width={width} height={height}>
      <BarSection color={theme.colors.ORANGE} />
      <BarSection color={theme.colors.YELLOW} />
      <BarSection color={theme.colors.LIGHT_BLUE} />
      <BarSection color={theme.colors.BLUE} />
    </Wrapper>
  );
}

export default withTheme(RainbowBar);
