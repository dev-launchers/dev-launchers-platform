import styled from 'styled-components';
import { atoms } from '@devlaunchers/components/src/components'
export const StyledRanbow = styled.div`
  margin: 1.3rem auto 0 auto;
  max-width: 24.8rem;
  height: 5px;
`;

export const TextAreaWrapper = styled.div`
  position: relative;
  width: 100%;
  border: 2px solid
    ${({ hasError, isCompleted, isFocused }) => {
      if (isFocused) return '#3F1F5F';
      if (hasError) return '#882D2D';
      if (isCompleted) return '#1B501D';
      return '#494949';
    }};
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.white};
  overflow: hidden;
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 560px;
  margin-bottom: 16px;
`;

export const FieldLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 2px;
  color: #1c1c1c;
  margin-bottom: 8px;
`;

export const RequiredAsterisk = styled.span`
  color: #ae3a3a;
`;

export const StyledTextArea = styled.textarea`
  width: 100%;
  min-height: 192px;
  padding: 24px;
  border: none;
  outline: none;
  color: #000;
  font-family: 'Nunito Sans', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  resize: vertical;
  border-radius: 0px;
  display: block;
  margin: 0;

  &::placeholder {
    color: var(--static-content-text-grey-muted, #494949);
    font-family: 'Nunito Sans';
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: 24px;
    letter-spacing: 0px;
  }
`;

export const CharacterCounter = styled.div`
  text-align: right;
  color: #7339ac;
  padding: 4px 16px;
  margin-top: 4px;
  color: ${({ isLimit }) => (isLimit ? '#ae3a3a' : '#7339ac')};
`;

export const StyledInput = styled.input`
  width: 100%;
  min-height: 60px;
  padding: 24px;
  border: none;
  outline: none;
  color: #000;
  font-family: 'Nunito Sans', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  border-radius: 24px;

  &::placeholder {
    color: var(--static-content-text-grey-muted, #494949);
    font-family: 'Nunito Sans';
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: 24px;
    letter-spacing: 0px;
  }
`;

export const GroupWrapper = styled.fieldset`
  border: none;
  padding: 0;
  margin: 0 0 32px 0;
`;

export const GroupLabel = styled.legend`
  display: flex;
  align-items: center;
  gap: 2px;
  color: #1c1c1c;
  font: 400 16px/24px 'Nunito Sans', sans-serif;
  padding: 8px 0;
`;

export const RadioButton = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  background-color: #fff;
  border-radius: 16px;
  padding: 24px;
  margin-top: 8px;
  @media (max-width: 991px) {
    padding: 20px;
  }
`;

export const RadioInput = styled.input`
  appearance: none;
  width: 24px;
  height: 24px;
  border: 2px solid #52287a;
  border-radius: 50%;
  outline: none;
  cursor: pointer;

  &:checked {
    background-color: #52287a;
    border: 6px solid #fff;
    box-shadow: 0 0 0 2px #52287a;
  }
`;

export const RadioLabel = styled.label`
  font: 400 14px/20px 'Nunito Sans', sans-serif;
  color: #303030;
`;

export const ErrorText = styled.div`
  text-align: right;
  color: #ae3a3a;
  font: 400 14px/20px 'Nunito Sans', sans-serif;
  padding: 4px 16px;
  margin-top: 4px;
`;

export const SuccessText = styled.div`
  text-align: right;
  color: #28a745;
  font: 400 14px/20px 'Nunito Sans', sans-serif;
  padding: 4px 16px;
  margin-top: 4px;
`;
