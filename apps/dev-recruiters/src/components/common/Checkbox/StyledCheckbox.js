import styled from 'styled-components';

export const CheckboxContainer = styled.label`
  position: relative;
  box-sizing: border-box;
  display: block;
  font-family: ${({ theme }) => theme?.fonts?.normal};
  width: 100%;
  margin: 0;
  cursor: pointer;
  font-size: 14px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  & input {
    display: none;
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
`;

export const CheckboxInput = styled.input.attrs({ type: 'checkbox' })`
  &:checked ~ .checkmark {
    background-color: ${({ theme }) => theme?.colors?.Crayola};
  }

  &:checked ~ .checkmark:after {
    display: block;
  }
`;

export const CheckMark = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 18px;
  width: 18px;
  background-color: ${({ theme }) => theme?.colors?.White};
  border: 1px solid ${({ theme }) => theme?.colors?.Crayola};
  border-radius: 3.03694px;
  &:after {
    content: '';
    position: absolute;
    display: none;
    left: 5px;
    top: 1px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;
