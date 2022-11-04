import styled, { css } from 'styled-components';
import type { AlertProps } from '.';

type Styles = Omit<Partial<AlertProps>, 'text'>;

export const Text = styled.p<Styles>`
  font-family: 'Roboto';
  font-size: 1rem;
  font-weight: 400;
  line-height: 18.75px;
  padding: 0;
  margin: 0;
  flex: 1;
`;

export const Container = styled.div<Styles>`
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: ${({ signal }) => {
    if (signal === 'error') return '#f9c8c8';
    else if (signal === 'success') return '#add8a6';
    else if (signal === 'notify') return '#c0e1eb';
  }};
  padding: 1rem 2rem;
  border-radius: 1rem;

  ${Text}, svg > path {
    ${({ signal }) => {
      let signalColor;
      if (signal === 'error') signalColor = '#a82b2b';
      else if (signal === 'success') signalColor = '#24471f';
      else if (signal === 'notify') signalColor = '#283eb3';
      return `
        color: ${signalColor};
        stroke: ${signalColor};
      `;
    }}
  }
`;
