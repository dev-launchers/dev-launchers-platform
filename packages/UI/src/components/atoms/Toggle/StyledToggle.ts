import styled from 'styled-components';

export const CheckBoxWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: fit-content;
  padding: 0.5rem 1rem;
  background: #fff;
  z-index: 1;
  font-family: ${({ theme }) => theme.fonts.normal};
  border-radius: 8px;
  label#label {
    pointer-events: none;
  }
`;

export const Switch = styled.label`
  border: 1px solid black;
  width: 48px;
  height: 24px;
  border-radius: 15px;
  background: #fff;
  cursor: pointer;
  &::before {
    content: '';
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    border-radius: 8px;
  }

  &:hover {
    &:before {
      box-shadow: 1px 1px 4px #7f7e7f;
    }
  }
  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 22px;
    height: 22px;
    background: black;
    transition: 0.2s;
  }
`;
export const CheckBox = styled.input`
  display: none;
  border-radius: 16px;
  width: 48px;
  height: 24px;
  &:checked + ${Switch} {
    background: black;
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 22px;
      height: 22px;
      transform: translate(24px);
      background: white;
    }
  }
  &:disabled + ${Switch} {
    background: #f0edee;
    border: 1px solid #474747;
    cursor: not-allowed;
    &::before {
      content: '';
      height: 100%;
      width: 100%;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      cursor: not-allowed;
      border-radius: 8px;
      box-shadow: none;
    }

    &::after {
      background: #474747;
    }
  }
`;
