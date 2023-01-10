import styled, { css } from 'styled-components';
import { paddingStyles } from '../../atoms/Padding';
import { radiusStyles } from '../../atoms/Radius/StyledRadius';
import { typographyStyles } from '../../atoms/Typography';
import type { InputProps } from '.';


export const Label = styled.label`
  display: block;
  ${typographyStyles['label']};
  width: 100%;

  label {
    display: inline-block;
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
  background-color: ${({ theme }) => theme.colors.GREYSCALE_WHITE};
  border: 1px solid ${({ theme }) => theme.colors.GREYSCALE_BLACK};
  ${radiusStyles['radius200']};
  ${typographyStyles['placeHolder']}
  width: ${({ width }) => width || '100%'};

  ${paddingStyles.comPad700};
  padding-right: ${({ valid }) => !valid && '1rem'};
  &::placeholder {
    ${typographyStyles['placeHolder']};
  }
  &:focus,
  &:active {
    border: 1px solid ${({ theme }) => theme.colors.NOTIFICATION};
    outline: none;
  }
  /* Autocomplete styles in Chrome*/
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    background-color: ${({ theme }) => theme.colors.GREYSCALE_WHITE};
    border: 1px solid ${({ theme }) => theme.colors.GREYSCALE_BLACK};
  }
  ${({ valid }) =>
    valid &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.SUCCESS};
      &:focus,
      &:active {
        border: 1px solid ${({ theme }) => theme.colors.SUCCESS};
        outline: none;
      }
      /* Autocomplete styles in Chrome*/
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus {
        background: ${({ theme }) => theme.colors.GREYSCALE_WHITE};
        border: 1px solid ${({ theme }) => theme.colors.SUCCESS};
        outline: none;
      }
    `}
  ${({ error }) =>
    error &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.ERROR};
      outline: none;
      &:focus,
      &:active {
        border: 1px solid ${({ theme }) => theme.colors.ERROR};
        outline: none;
      }
      /* Autocomplete styles in Chrome*/
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus {
        border: 1px solid ${({ theme }) => theme.colors.ERROR};
      }
    `}
    ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${({ theme }) => theme.colors.GREYSCALE_OFF_WHITE};
      border: 1px solid ${({ theme }) => theme.colors.GREYSCALE_CHARCOAL};
      cursor: not-allowed;
      &:focus,
      &:active {
        border: 1px solid ${({ theme }) => theme.colors.GREYSCALE_BLACK};
        outline: none;
      }
    `}
`;

export const StyledInlineErrorMessage = styled.div`
  ${typographyStyles['pSmall']};
  color: ${({ theme }) => theme.colors.ERROR};
  margin-left: 0.625rem;
  margin-top: 0.5rem;
`;
