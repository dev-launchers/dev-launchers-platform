// eslint-disable-next-line no-use-before-define
import React from 'react';
import { withTheme, RainbowBarTheme } from 'styled-components';
// eslint-disable-next-line import/extensions
import { Wrapper, BarSection } from './StyledRainbowBar';

interface IRainbowBar {
  width: string;
  height: string;
  theme: RainbowBarTheme;
}
const RainbowBar: React.FC<IRainbowBar> = ({
  width = '100%',
  height = '.5rem',
  theme,
}) => (
  <Wrapper width={width} height={height}>
    <BarSection color={theme.colors.ORANGE} />
    <BarSection color={theme.colors.YELLOW} />
    <BarSection color={theme.colors.LIGHT_BLUE} />
    <BarSection color={theme.colors.BLUE} />
  </Wrapper>
);

export default withTheme(RainbowBar);
