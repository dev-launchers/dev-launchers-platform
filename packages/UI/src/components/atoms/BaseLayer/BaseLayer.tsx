import styled, { css } from 'styled-components';
import type { BaseLayersProps } from '.';

const BaseLayer = styled.div<BaseLayersProps>`
  ${({ type, interactive }) => {
    switch (type) {
      case 'dark':
        return css`
          background-color: ${({ theme }) => theme.colors.GREYSCALE_BLACK};
          box-shadow: 10px 10px;
          &:hover {
            background-color: ${({ theme }) =>
              interactive && theme.colors.GREYSCALE_OFF_BLACK};
          }
        `;
      case 'light':
        return css`
          background-color: ${({ theme }) => theme.colors.GREYSCALE_WHITE};
          &:hover {
            background-color: ${({ theme }) =>
              interactive && theme.colors.GREYSCALE_OFF_BLACK};
          }
        `;
      default:
        break;
    }
  }}
`;

export default BaseLayer;
