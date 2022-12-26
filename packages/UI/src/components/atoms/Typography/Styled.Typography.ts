import styled from 'styled-components';
import type { TypographyProps } from '.';

const h1 = `
    font-family: Abel;
    font-size: 2.75rem;
    font-weight: 400;
    line-height: 3.5rem;

    @media only screen and (max-width: 62.5rem) {
        font-size: 2.5rem;
        line-height: 2.5rem;
    }
`;

const h2 = `
    font-family: 'Abel';
    font-size: 2.5rem;
    font-weight: 400;
    line-height: 3.1875rem;

    @media only screen and (max-width: 62.5rem) {
        font-size: 2.25rem;
        line-height: 3rem;
    }
`;

const h3 = `
    font-family: 'Abel';
    font-size: 2rem;
    font-weight: 400;
    line-height: 2.5625rem;
    @media only screen and (max-width: 62.5rem) {
        font-size: 1.5rem;
        line-height: 2rem;
    }
`;

const h4 = `
    font-family: 'Nunito Sans';
    font-size: 1.75rem;
    font-weight: 400;
    line-height: 2.375rem;
    @media only screen and (max-width: 62.5rem) {
        font-size: 1.5rem;
        line-height: 2.0625rem;
    }
`;

const h5 = `
    font-family: 'Nunito Sans';
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.375rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    @media only screen and (max-width: 62.5rem) {
        font-size: 1.25rem;
        line-height: 1.75rem;
    }
`;

const pLarge = `
    font-family: 'Nunito Sans';
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 1.75rem;
    @media only screen and (max-width: 62.5rem) {
        font-size: 1.25rem;
        line-height: 1.75rem;
    }
`;

const p = `
    font-family: 'Nunito Sans';
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5rem;
`;

const pSmall = `
    font-family: 'Nunito Sans';
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.25rem;
`;

const placeHolder = `
    font-family: 'Nunito Sans';
    font-size: 0.875rem;
    font-weight: 300;
    line-height: 1.25rem;
    @media only screen and (max-width: 62.5rem) {
        font-size: 1rem;
        line-height: 1.5rem;
    }
`;

const button = `
    font-family: 'Nunito Sans';
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    @media only screen and (max-width: 62.5rem) {
        letter-spacing: 0.0125em;
    }
`;

const label = `
    font-family: 'Nunito Sans';
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.25rem;
    text-transform: uppercase;
    @media only screen and (max-width: 62.5rem) {
        font-size: 1rem;
        line-height: 1.5rem;
    }
`;

const labelSmall = `
    font-family: 'Nunito Sans';
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1.25rem;
    text-transform: uppercase;
`;

export const typographyStyles = {
  h1,
  h2,
  h3,
  h4,
  h5,
  pLarge,
  p,
  pSmall,
  placeHolder,
  button,
  label,
  labelSmall,
} as const;

export const Text = styled.p<TypographyProps>`
  ${({ type }) => eval(type || p)};
  text-align: ${({ textAlign }) => textAlign};
`;
