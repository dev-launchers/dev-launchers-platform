import styled from 'styled-components';

export const Checkbox = styled.input`
  background-color: white;
  height: 24px;
  width: 24px;
  aspect-ratio: 1/1;
  position: relative;

  -webkit-appearance: none;
  appearance: none;

  border-radius: 3px;
  border: 2px solid black;
  outline: none;
  cursor: pointer;

  &:checked {
    background-color: ${({ theme }) => theme.colors.GREYSCALE_BLACK};
    &::before {
      content: '✔';
      font-size: 1.2em;
      color: #fff;
      position: absolute;
      left: 15%;
      top: 0%;
      border-radius: 8px;
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
