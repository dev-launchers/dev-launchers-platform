import { m } from 'framer-motion';
import styled from 'styled-components';
import type { AlertProps } from '.';

type Styles = Omit<Partial<AlertProps>, 'text'>;

export const Container = styled(m.div)<Styles>`
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: ${({ signal, theme }) => {
    if (signal === 'error') return theme.colors.ERROR_250;
    else if (signal === 'success') return theme.colors.SUCCESS_200;
    else if (signal === 'notify') return theme.colors.LIGHT_BLUE_200;
  }};
  padding: 1rem 2rem;
  border-radius: 1rem;

  p,
  svg > path {
    ${({ signal, theme }) => {
      let signalColor;
      if (signal === 'error') signalColor = theme.colors.ERROR_600;
      else if (signal === 'success') signalColor = theme.colors.SUCCESS_700;
      else if (signal === 'notify') signalColor = theme.colors.NOTIFICATION_600;
      return `
        color: ${signalColor};
        stroke: ${signalColor};
      `;
    }}
  }

  & > button {
    border: none;
    background: none;
    cursor: pointer;
  }
`;
