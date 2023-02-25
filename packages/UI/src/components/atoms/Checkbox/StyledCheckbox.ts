import styled from 'styled-components';

export const Option = styled.label`
  font-family: ${({ theme }) => theme.fonts.normal};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  list-style: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  position: relative;
  width: fit-content;
  background: #fff;
  z-index: 1;

  &::after {
    content: '';
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    cursor: pointer;
    border-radius: 8px;
  }

  &:hover {
    &::after {
      box-shadow: 1px 1px 4px ${({ theme }) => theme.colors.GREYSCALE_GREY};
    }
  }
  p {
    pointer-events: none;
  }
`;

export const Input = styled.input`
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
