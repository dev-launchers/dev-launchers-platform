import { Field } from 'formik';
import styled, { css } from 'styled-components';
import { typographyStyles } from '../../atoms/Typography/Styled.Typography';

export const Label = styled.label`
  ${typographyStyles['label']};
  margin-left: 1rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  position: relative;
  width: fit-content;
  margin-top: 0.5rem;
`;

export const Input = styled(Field)`
  background-color: white;
  border: 1px solid black;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 300;
  padding: 1rem 1.5rem;
  resize: none;

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
