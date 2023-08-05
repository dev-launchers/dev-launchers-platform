import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
export const Label = styled.label`
  margin: 1rem;
  color: ${({ theme }) => theme?.colors?.Black};
  font-family: ${({ theme }) => theme?.fonts?.normal};
  font-size: ${({ theme }) => theme.fontSizes.small};
`;
export const Input = styled.input<{ height?: string; width?: string }>`
  background-color: ${({ theme }) => theme.colors.SilverSand};
  height: ${({ height }) => height || 'auto'};
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  padding: 0.5rem;
  width: ${({ width }) => width || '40%'};
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const TextArea = styled.textarea.attrs({ wrap: 'hard' })`
  resize: none;
  background-color: ${({ theme }) => theme.colors.SilverSand};
  height: 175.5px;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  padding: 0.5rem;
  width: 70%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const Radio = styled.input.attrs({ type: 'radio' })`
  margin: 0.5rem;
`;
export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  margin: 0.5rem;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    align-items: center;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  #commitment {
    width: 40%;
    @media (max-width: 768px) {
      width: 100%;
    }
`;
export const RadioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme?.colors?.BlackCoral};
`;

export const CheckboxLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.small};
  background-color: ${({ theme }) => theme.colors.SilverSand};
  border-radius: 1.875rem;
  padding: 1.25rem;
  margin-bottom: 1.25rem;
`;

export const Slider = styled.input.attrs({ type: 'range' })`
  background-color: ${({ theme }) => theme.colors.SilverSand};
  border-radius: 30px;
  padding: 0.5rem;
  width: 40%;
  margin-bottom: 1.25rem;
`;

export const FileUpload = styled.input.attrs({ type: 'file' })`
  margin-top: 1.25rem;
  color: ${({ theme }) => theme?.colors?.Black};
  background-color: ${({ theme }) => theme.colors.SilverSand};
  border-radius: 30px;
  width: 40%;
`;

export const Statement = styled.p`
  color: ${({ theme }) => theme?.colors?.Black};
  font-family: ${({ theme }) => theme?.fonts?.normal};
  font-size: 0.9rem;
  width: 50%;
  text-align: left;
  @media (max-width: 768px) {
    width: 90%;
  }
`;
export const ErrorMsg = styled.div`
  color: ${({ theme }) => theme.colors.Red};
  font-family: ${({ theme }) => theme?.fonts?.normal};
  font-size: ${({ theme }) => theme.fontSizes.small};
  margin-left: 1rem;
`;

export const SubmitButton = styled.button.attrs({ type: 'submit' })`
  background-color: ${({ theme }) => theme?.colors?.White};
  border-radius: 30px;
  padding: 0.5rem;
  width: 15%;
  color: ${({ theme }) => theme?.colors?.Black};
  cursor: pointer;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const Header = styled.h1`
  color: ${({ theme }) => theme?.colors?.Black};
  line-height: 3.5rem;
  border-bottom: none;
  font-family: ${({ theme }) => theme.fonts.headline};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  margin-bottom: 1rem;
  text-align: center;
  flex-grow: 1;
`;

export const Tooltip = styled.p`
  color: ${({ theme }) => theme.colors.Black};
  font-family: ${({ theme }) => theme?.fonts?.normal};
  font-size: 1rem;
  width: 50%;
  text-align: left;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const GradientLine = styled.div<{ height?: string }>`
  width: 100%;
  height: ${(props) => props.height ?? '10px'};
  border: none;
  margin: 20px 0px 0px 0px;
  background: linear-gradient(
    to right,
    #ff7f0e 25%,
    #ffab00 25% 50%,
    #81c3d7 50% 75%,
    #3a7ca5 75% 100%
  );
`;
