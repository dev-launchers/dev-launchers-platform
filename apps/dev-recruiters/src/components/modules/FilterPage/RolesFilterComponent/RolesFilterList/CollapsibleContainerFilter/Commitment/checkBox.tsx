import React from 'react';
import styled from 'styled-components';

const Checkbox = styled.label`
  display: inline-block;
  position: relative;
  cursor: pointer;

  input[type='checkbox'] {
    display: none;
  }

  input[type='checkbox']:checked + span::before {
    content: '✔';
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 14px;
    font-weight: bold;
    color: white;
  }

  input[type='checkbox']:checked + span {
    background-color: black;
  }

  span {
    display: inline-block;
    width: 25px;
    height: 25px;
    background-color: white;
    border: 2px solid black;
    border-radius: 4px;
    transition: background-color 0.2s;
  }
`;

const StyledCheckbox = ({ isChecked, onChange }) => (
  <Checkbox>
    <input type="checkbox" checked={isChecked} onChange={onChange} />
    <span></span>
  </Checkbox>
);

export default StyledCheckbox;
