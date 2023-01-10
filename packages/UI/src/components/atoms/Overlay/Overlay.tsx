import styled, { css } from 'styled-components';
import type { OverlayProps } from '.';

const Overlay = styled.div<OverlayProps>`
  ${({ type, status }) => {
    switch (type) {
      case 'light':
        if (status === 'default')
          return css`
            background-color: ${({ theme }) =>
              theme.colors.GREYSCALE_OFF_WHITE};
          `;
        else if (status === 'error')
          return css`
            background-color: ${({ theme }) => theme.colors.ERROR};
            opacity: 0.1;
          `;
        else if (status === 'success')
          return css`
            background-color: ${({ theme }) => theme.colors.SUCCESS};
            opacity: 0.1;
          `;
        else if (status === 'notification')
          return css`
            background-color: ${({ theme }) => theme.colors.NOTIFICATION};
            opacity: 0.1;
          `;
        break;
      case 'dark':
        if (status === 'default')
          return css`
            background-color: ${({ theme }) => theme.colors.GREYSCALE_GREY};
          `;
        else if (status === 'error')
          return css`
            background-color: ${({ theme }) => theme.colors.ERROR};
            opacity: 0.3;
          `;
        else if (status === 'success')
          return css`
            background-color: ${({ theme }) => theme.colors.SUCCESS};
            opacity: 0.3;
          `;
        else if (status === 'notification')
          return css`
            background-color: ${({ theme }) => theme.colors.NOTIFICATION};
            opacity: 0.3;
          `;
        break;
      default:
        break;
    }
  }}
`;

export default Overlay;
