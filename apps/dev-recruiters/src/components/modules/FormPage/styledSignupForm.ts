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
  color: var(--grayscale-50, #fff);
  text-align: center;

  /* to sort/Universal/button */
  font-family: 'Nunito Sans';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  letter-spacing: 0.64px;
  text-transform: capitalize;

  cursor: pointer;
  display: flex;
  padding: var(--2, 8px) var(--6, 24px);
  align-items: center;
  width: 45%;

  margin-top: 10px;
  margin-left: auto;

  justify-content: center;
  gap: var(--25, 10px);
  border-radius: var(--2, 8px);
  border: var(--0, 1px) solid var(--brand-secondary-nebula-600, #69349d);
  background: var(--brand-alt-nebula-600, #69349d);
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

export const ModalUploadSection = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  font-family: ${(props) => props.theme?.fonts?.normal};
  font-style: normal;
  font-weight: 400;
  background-color: gray;

  & h3 {
    font-family: ${(props) => props.theme?.fonts?.normal};
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
  }

  & p {
    font-family: ${(props) => props.theme?.fonts?.normal};
    font-style: normal;
    font-size: 17px;
    line-height: 19px;
    line-height: 1.125rem;
    max-width: 28rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: pre-wrap;
  }
`;

export const ModalFooterSection = styled.div`
  display: flex;
  background-color: yellow;
  justify-content: space-around;
  font-family: ${(props) => props.theme?.fonts?.normal};
  font-style: normal;
  font-weight: 400;
  max-width: 300px;
`;

export const UploadButton = styled.button.attrs({ type: 'submit' })`
  color: var(--grayscale-50, #fff);
  text-align: center;

  /* to sort/Universal/button */
  font-family: 'Nunito Sans';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  letter-spacing: 0.64px;
  text-transform: capitalize;

  cursor: pointer;
  display: flex;
  padding: var(--2, 8px) var(--6, 24px);
  align-items: center;
  width: 20%;

  margin-top: 10px;

  justify-content: center;
  gap: var(--25, 10px);
  border-radius: var(--2, 8px);
  border: var(--0, 1px) solid var(--brand-secondary-nebula-600, #69349d);
  background: var(--brand-alt-nebula-600, #69349d);
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const CancelUploadButton = styled.button.attrs({ type: 'submit' })`
  color: var(--grayscale-50, #fff);
  text-align: center;

  /* to sort/Universal/button */
  font-family: 'Nunito Sans';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  letter-spacing: 0.64px;
  text-transform: capitalize;

  cursor: pointer;
  display: flex;
  padding: var(--2, 8px) var(--6, 24px);
  align-items: center;
  width: 20%;

  margin-top: 10px;
  margin-left: auto;

  justify-content: center;
  gap: var(--25, 10px);
  border-radius: var(--2, 8px);
  border: var(--0, 1px) solid var(--brand-secondary-nebula-600, #69349d);
  background: var(--brand-alt-nebula-600, #69349d);
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const OkButton = styled.button.attrs({ type: 'submit' })`
  color: var(--grayscale-50, #fff);
  text-align: center;

  /* to sort/Universal/button */
  font-family: 'Nunito Sans';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  letter-spacing: 0.64px;
  text-transform: capitalize;

  cursor: pointer;
  display: flex;
  padding: var(--2, 8px) var(--6, 24px);
  align-items: center;
  width: 30%;

  margin-top: 10;
  margin-left: 30;

  justify-content: center;
  gap: var(--25, 10px);
  border-radius: var(--2, 8px);
  border: var(--0, 1px) solid var(--brand-secondary-nebula-600, #69349d);
  background: var(--brand-alt-nebula-600, #69349d);
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const CancelButton = styled.button.attrs({ type: 'submit' })`
  color: var(--grayscale-500, #fff);
  text-align: center;

  /* to sort/Universal/button */
  font-family: 'Nunito Sans';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  letter-spacing: 0.64px;
  text-transform: capitalize;

  cursor: pointer;
  display: flex;
  padding: var(--2, 8px) var(--6, 24px);
  align-items: center;
  width: 30%;

  margin-top: 10;
  margin-right: 20;

  justify-content: center;
  gap: var(--25, 10px);
  border-radius: var(--2, 8px);
  border: var(--0, 1px) solid var(--brand-secondary-nebula-600, #69349d);
  background: var(--brand-alt-nebula-600, #69349d);
  @media (max-width: 768px) {
    width: 100%;
  }
`;
