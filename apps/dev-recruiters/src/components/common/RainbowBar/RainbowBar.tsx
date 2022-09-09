// eslint-disable-next-line no-use-before-define
import React from "react";
import { useTheme } from "styled-components";
// eslint-disable-next-line import/extensions
import { Wrapper, BarSection } from "./StyledRainbowBar";

interface IRainbowBar {
  width: string;
  height: string;
}
const RainbowBar: React.FC<IRainbowBar> = ({
  width = "100%",
  height = ".5rem",
}) => {
  const theme = useTheme();
  return (
    <Wrapper width={width} height={height}>
      <BarSection color={theme.colors.ACCENT_1} />
      <BarSection color={theme.colors.ACCENT_2} />
      <BarSection color={theme.colors.ACCENT_4} />
      <BarSection color={theme.colors.ACCENT_3} />
    </Wrapper>
  );
};

export default RainbowBar;
