import React from 'react';
import styled from 'styled-components';
import { CheckboxContainer, CheckboxInput, CheckMark } from './StyledCheckbox';
// import {
//   CheckboxContainer,
//   HiddenCheckbox,
//   StyledCheckbox,
//   Icon,
//   Label,
// } from './StyledCheckbox';


export default function Checkbox({ id, label, checked, onChange }) {
  return (
    <CheckboxContainer htmlFor={id}>
      {label}
      <CheckboxInput
        checked={checked}
        onChange={onChange}
        type='checkbox'
        id={id}
      />

      <CheckMark className='checkmark' />
    </CheckboxContainer>
  );
}
