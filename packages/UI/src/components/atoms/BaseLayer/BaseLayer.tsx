import styled, { css } from 'styled-components';
import type { BaseLayersProps } from '.';

const BaseLayer = styled.div<BaseLayersProps>`
  ${({ type, color }) => {
    switch (type) {
      case 'dark':
        if (color === 'base')
          return css`
            background-color: ${({ theme }) => theme.colors.GREYSCALE_BLACK};
          `;
        else if (color === 'offbase')
          return css`
            background-color: ${({ theme }) =>
              theme.colors.GREYSCALE_OFF_BLACK};
          `;
        break;
      case 'light':
        if (color === 'base')
          return css`
            background-color: ${({ theme }) => theme.colors.GREYSCALE_WHITE};
          `;
        else if (color === 'offbase')
          return css`
            background-color: ${({ theme }) =>
              theme.colors.GREYSCALE_OFF_WHITE};
          `;
        break;
      default:
        break;
    }
  }}
`;

export default BaseLayer;
