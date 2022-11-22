import styled from 'styled-components';
import type { BoxProps } from './index';
export const Box = styled.div<BoxProps>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  gap: ${({ gap }) => gap};
  margin: ${({ margin }) => margin};
  margin-block:${({ marginBlock }) => marginBlock};
  margin-inline: ${({ marginInline }) => marginInline};
  padding: ${({ padding }) => padding};
  padding-block: ${({ paddingBlock }) => paddingBlock};
  padding-inline: ${({ paddingInline }) => paddingInline};

`;
