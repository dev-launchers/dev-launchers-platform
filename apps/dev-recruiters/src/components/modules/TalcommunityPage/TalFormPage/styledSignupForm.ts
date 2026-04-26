import styled from 'styled-components';

/**
 * ISSUE #2819: Global Style Alignment
 * This file has been updated to align the Sign-Up Form UI with the Figma design.
 * Primary focus: Theme token integration and consistent spacing.
 */

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin: 1rem;
  color: ${({ theme }) => theme?.colors?.Black || '#000000'};
  font-family: ${({ theme }) => theme?.fonts?.normal || 'sans-serif'};
  font-size: ${({ theme }) => theme.fontSizes?.small || '14px'};
`;

export const Input = styled.input<{ height?: string; width?: string }>`
  background-color: ${({ theme }) => theme?.colors?.NEUTRAL_9 || '#f0edee'};
  height: ${({ height }) => height || 'auto'};
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  padding: 0.5rem;
  width: ${({ width }) => width || '40%'};
  border: 1px solid ${({ theme }) => theme?.colors?.NEUTRAL_6 || '#ddd'};

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const TextArea = styled.textarea.attrs({ wrap: 'hard' })`
  resize: none;
  background-color: ${({ theme }) => theme?.colors?.NEUTRAL_9 || '#f0edee'};
  height: 175.5px;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  padding: 0.5rem;
  width: 70%;
  border: 1px solid ${({ theme }) => theme?.colors?.NEUTRAL_6 || '#ddd'};

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
  }
`;

export const RadioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme?.colors?.NEUTRAL_5 || '#2a2a2a'};
`;

export const CheckboxLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.small || '14px'};
  background-color: ${({ theme }) => theme?.colors?.NEUTRAL_9 || '#f0edee'};
  border-radius: 1.875rem;
  padding: 1.25rem;
  margin-bottom: 1.25rem;
  color: ${({ theme }) => theme?.colors?.Black || '#000000'};
`;

export const Slider = styled.input.attrs({ type: 'range' })`
  background-color: ${({ theme }) => theme?.colors?.NEUTRAL_9 || '#f0edee'};
  border-radius: 30px;
  padding: 0.5rem;
  width: 40%;
  margin-bottom: 1.25rem;
`;

export const FileUpload = styled.input.attrs({ type: 'file' })`
  margin-top: 1.25rem;
  color: ${({ theme }) => theme?.colors?.Black || '#000000'};
  background-color: ${({ theme }) => theme?.colors?.NEUTRAL_9 || '#f0edee'};
  border-radius: 30px;
  width: 40%;
`;

export const Statement = styled.p`
  color: ${({ theme }) => theme?.colors?.Black || '#000000'};
  font-family: ${({ theme }) => theme?.fonts?.normal || 'sans-serif'};
  font-size: 0.9rem;
  width: 50%;
  text-align: left;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const ErrorMsg = styled.div`
  color: ${({ theme }) => theme?.colors?.Red || '#ef4444'};
  font-family: ${({ theme }) => theme?.fonts?.normal || 'sans-serif'};
  font-size: ${({ theme }) => theme.fontSizes?.small || '14px'};
  margin-left: 1rem;
`;

export const SubmitButton = styled.button.attrs({ type: 'submit' })`
  background-color: ${({ theme }) => theme?.colors?.BLUE_700 || '#007bff'};
  border-radius: 30px;
  padding: 0.5rem;
  width: 15%;
  color: ${({ theme }) => theme?.colors?.White || '#ffffff'};
  cursor: pointer;
  border: none;
  font-weight: 600;
  transition: background-color 0.2s ease, transform 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme?.colors?.BLUE_800 || '#0056b3'};
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Header = styled.h1`
  color: ${({ theme }) => theme?.colors?.Black || '#000000'};
  line-height: 3.5rem;
  border-bottom: none;
  font-family: ${({ theme }) => theme?.fonts?.headline || 'sans-serif'};
  font-size: ${({ theme }) => theme.fontSizes?.medium || '24px'};
  margin-bottom: 1rem;
  text-align: center;
  flex-grow: 1;
`;

export const Tooltip = styled.p`
  color: ${({ theme }) => theme?.colors?.Black || '#000000'};
  font-family: ${({ theme }) => theme?.fonts?.normal || 'sans-serif'};
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
