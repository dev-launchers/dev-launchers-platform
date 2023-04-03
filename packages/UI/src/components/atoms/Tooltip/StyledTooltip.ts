import styled from 'styled-components';
import { paddingStyles } from '../Padding';
import { radiusStyles } from '../Radius/StyledRadius';
import { typographyStyles } from '../Typography';

export const StyledTooltip = styled.div`
  ${typographyStyles['placeHolder']}
  ${radiusStyles['radius100']}
  ${paddingStyles['uniPad200']}
  color: ${({ theme }) => theme.colors.GREYSCALE_OFF_WHITE};
  position: absolute;
  transform: translateX(-50%);
  background-color: ${({ theme }) => theme.colors.GREYSCALE_BLACK};
  z-index: 1020;
  display: block;
  min-width: max-content;
  word-wrap: break-word;
  /* white-space: nowrap; */

  /* CSS border triangles */
  ${(props) =>
    props.showPointer
      ? `&::before {
    content: ' ';
    left: 50%;
    border: solid transparent;
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-width: 6px;
    margin-left: calc(6px * -1);
    }`
      : ''}

  /* Absolute positioning */
  &.top {
    bottom: 100%;
    left: 50%;
  }
  /* CSS border triangles */
  ${(props) =>
    props.showPointer
      ? `&.top::before {
    top: 100%;
    border-top-color: ${props.theme.colors.GREYSCALE_BLACK};}`
      : ''}
  }
  /* Absolute positioning */
  &.right {
    bottom: 50%;
    left: calc(0.5rem + 100%);
    transform: translateY(50%);
  }
  /* CSS border triangles */
  ${(props) =>
    props.showPointer
      ? `&.right::before {
    left: calc(6px * -1);
    top: 50%;
    transform: translateX(0) translateY(-50%);
    border-right-color: ${props.theme.colors.GREYSCALE_BLACK};}`
      : ''}
  }

  /* Absolute positioning */
  &.bottom {
    top: calc(0.5rem + 100%);
    left: 50%;
  }
  /* CSS border triangles */
  ${(props) =>
    props.showPointer
      ? `&.bottom::before {
    bottom: 100%;
    border-bottom-color: ${props.theme.colors.GREYSCALE_BLACK};}`
      : ''}
  }

  /* Absolute positioning */
  &.left {
    left: auto;
    right: calc(100% + 0.5rem);
    top: 50%;
    transform: translateX(0) translateY(-50%);
  }
  /* CSS border triangles */
  ${(props) =>
    props.showPointer
      ? `&.left::before {
    left: auto;
    right: calc(6px * -3);
    top: 50%;
    transform: translateX(0) translateY(-50%);
    border-left-color: ${props.theme.colors.GREYSCALE_BLACK};}`
      : ''}
  }
`;

export const Wrapper = styled.div`
  display: inline-block;
  position: relative;
`;
