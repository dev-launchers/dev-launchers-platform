import styled from 'styled-components';

export const Option = styled.label`
  background: #fff;
  font-family: ${({ theme }) => theme.fonts.normal};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  list-style: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  width: fit-content;
  position: relative;
  z-index: 1;

  p {
    pointer-events: none;
  }
`;

export const Input = styled.input`
  height: 24px;
  width: 24px;
  -webkit-appearance: none;
  appearance: none;
  border-radius: 24px;
  border: 1px solid black;
  outline: none;
  cursor: pointer;

  &:hover {
    &::after {
      content: '';
      height: 100%;
      width: 100%;
      position: absolute;
      z-index: 0;
      top: 0;
      left: 0;
      border-radius: 8px;
      box-shadow: 1px 1px 4px #7f7e7f;
    }
  }

  &:checked {
    border: 2px solid black;

    &::before {
      content: '';
      height: 16px;
      width: 16px;
      border-radius: 16px;
      background: black;
      position: absolute;
      left: 20px;
      top: 12px;
    }
  }

  &:disabled {
    cursor: not-allowed;
    &:before {
      content: '';
      width: 100%;
      height: 100%;
      background: #eee;
      z-index: -1;
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 8px;
    }
    &::after {
      cursor: not-allowed;
      box-shadow: none;
    }
  }
`;
