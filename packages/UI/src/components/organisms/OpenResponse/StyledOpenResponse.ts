import styled, { css } from 'styled-components';
import { radiusStyles } from '../../atoms/Radius/StyledRadius';
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
  background-color: ${({ theme }) => theme.colors.GREYSCALE_WHITE};
  border: 1px solid ${({ theme }) => theme.colors.GREYSCALE_BLACK};
  ${radiusStyles['radius300']};
  ${typographyStyles['placeHolder']};
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
    border: 1px solid ${({ theme }) => theme.colors.NOTIFICATION};
    outline: none;
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
  ${typographyStyles['pSmall']}
  color: ${({ theme }) => theme.colors.ERROR};
  margin-left: 0.625rem;
  margin-top: 0.5rem;
`;
