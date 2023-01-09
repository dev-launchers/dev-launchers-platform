import styled, { css } from 'styled-components';
import type { OverlayProps } from '.';

const Overlay = styled.div<OverlayProps>`
  ${({ type, status }) => {
    switch (type) {
      case 'dark':
        if (status === 'default')
          return css`
            background-color: ${({ theme }) => theme.colors.GREYSCALE_GREY};
          `;
        else if (status === 'error')
          return css`
            background-color: ${({ theme }) => theme.colors.ERROR};
          `;
        else if (status === 'success')
          return css`
            background-color: ${({ theme }) => theme.colors.SUCCESS};
          `;
        else if (status === 'notification')
          return css`
            background-color: ${({ theme }) => theme.colors.NOTIFICATION};
          `;
        break;
      case 'light':
        if (status === 'default')
          return css`
            background-color: ${({ theme }) =>
              theme.colors.GREYSCALE_OFF_WHITE};
          `;
        else if (status === 'error')
          return css`
            background-color: ${({ theme }) => theme.colors.ERROR};
          `;
        else if (status === 'success')
          return css`
            background-color: ${({ theme }) => theme.colors.SUCCESS};
          `;
        else if (status === 'notification')
          return css`
            background-color: ${({ theme }) => theme.colors.NOTIFICATION};
          `;
        break;
      default:
        break;
    }
  }}
`;

export default Overlay;
