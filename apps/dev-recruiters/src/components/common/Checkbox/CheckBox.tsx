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

interface Props {
  id: string;
  label: any;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Checkbox({ id, label, checked, onChange }: Props) {
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
