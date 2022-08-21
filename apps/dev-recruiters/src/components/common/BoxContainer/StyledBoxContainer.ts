import styled from 'styled-components';
import { Theme } from '../../../styles/theme';


export const Container = styled.div<{
  bgColor?: Partial<keyof Theme['colors']>;
  marginTop?: number;
  marginBottom?: number;
}>`
  overflow: hidden;
  width: 100;
  height: auto;
  background: ${({ theme, bgColor }) =>
    bgColor ? theme?.colors[bgColor as keyof typeof bgColor] : 'transparent'};
`;

export const Content = styled.div<{
  paddingHorizontal?: number;
  paddingVertical?: number;
}>`
  box-sizing: border-box;
  width: 100%;
  margin: auto auto;
  padding-top: ${({ paddingVertical }) =>
    paddingVertical ? `${paddingVertical}px` : 0};
  padding-bottom: ${({ paddingVertical }) =>
    paddingVertical ? `${paddingVertical}px` : 0};
  padding-left: ${({ paddingHorizontal }) =>
    paddingHorizontal ? `${paddingHorizontal}px` : 0};
  padding-right: ${({ paddingHorizontal }) =>
    paddingHorizontal ? `${paddingHorizontal}px` : 0};

  /* @media (min-width: 640px) {
    max-width: 640px;
  }
  @media (min-width: 768px) {
    max-width: 768px;
  } */
  /* @media (min-width: 1024px) {
    max-width: 1024px;
  } */
  /* @media (min-width: 1280px) {
    max-width: 1280px;
  } */
  @media (min-width: 1536px) {
    max-width: 1536px;
  }
`;
