import styled, { css } from 'styled-components';
import { typographyStyles } from '../../atoms/Typography';
import type { InputProps } from '.';

export const Label = styled.label`
  display: block;
  ${typographyStyles['label']};
  width: 100%;

  label {
    margin-left: 1rem;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  position: relative;
  margin-top: 0.5rem;

  svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 1.5rem;
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const Input = styled.input<Omit<InputProps, 'label'>>`
  background-color: white;
  border: 1px solid black;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 300;
  width: ${({ width }) => width || '100%'};
  padding: 1rem 1.5rem;
  &::placeholder {
    ${typographyStyles['placeHolder']};
  }
  &:focus,
  &:active {
    border: 1px solid #3959ff;
    outline: none;
  }
  /* Autocomplete styles in Chrome*/
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    background-color: white;
    border: 1px solid black;
  }
  ${({ valid }) =>
    valid &&
    css`
      border: 1px solid #5bb14d;
      &:focus,
      &:active {
        border: 1px solid #5bb14d;
        outline: none;
      }
      /* Autocomplete styles in Chrome*/
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus {
        background: white;
        border: 1px solid #5bb14d;
        outline: none;
      }
    `}
  ${({ error }) =>
    error &&
    css`
      border: 1px solid #f03d3e;
      outline: none;
      &:focus,
      &:active {
        border: 1px solid #f03d3e;
        outline: none;
      }
      /* Autocomplete styles in Chrome*/
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus {
        border: 1px solid #f03d3e;
      }
    `}
    ${({ disabled }) =>
    disabled &&
    css`
      background-color: #f0edee;
      border: 1px solid #474747;
      cursor: not-allowed;
      &:focus,
      &:active {
        border: 1px solid black;
        outline: none;
      }
    `}
`;

export const StyledInlineErrorMessage = styled.div`
  ${typographyStyles['pSmall']}
  color: #f03d3e;
  margin-left: 0.625rem;
  margin-top: 0.5rem;
`;
