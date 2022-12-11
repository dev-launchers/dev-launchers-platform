import styled, { css } from 'styled-components';
import { typographyStyles } from '../../atoms/Typography/Styled.Typography';
import type { OpenResponseProps } from '.';
export const Label = styled.label`
  display: block;
  ${typographyStyles['label']};
  width: 100%;

  label {
    display: inline-block;
    margin-left: 1rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm + 'px'}) {
    label {
      margin-left: 0;
    }
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  position: relative;
  margin-top: 0.5rem;
`;

export const Input = styled.textarea<Omit<OpenResponseProps, 'label'>>`
  background-color: white;
  border: 1px solid black;
  border-radius: 16px;
  font-size: 0.875rem;
  font-weight: 300;
  padding: 1rem 1.5rem;
  resize: none;
  width: ${({ width }) => width || '100%'};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm + 'px'}) {
    border-radius: 8px;
  }

  &::placeholder {
    ${typographyStyles['placeHolder']};
  }

  &:focus,
  &:active {
    border: 1px solid #3959ff;
    outline: none;
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
