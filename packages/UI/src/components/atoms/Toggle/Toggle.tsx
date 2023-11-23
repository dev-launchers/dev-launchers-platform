import { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { CheckBoxWrapper, CheckBox, Switch } from './StyledToggle';
import type { ToggleProps } from '.';

const Toggle = ({ disabled, label, onChange }: ToggleProps) => {
  const { current: id } = useRef(uuidv4());

  return (
    <div>
      <CheckBoxWrapper>
        <CheckBox
          disabled={disabled}
          name={`Checkbox-${id}`}
          type="checkbox"
          id={`Checkbox-${id}`}
          onChange={onChange}
        />
        <Switch htmlFor={`Checkbox-${id}`} />
        {label && (
          <label id="label" htmlFor={`Checkbox-${id}`}>
            {label}
          </label>
        )}
      </CheckBoxWrapper>
    </div>
  );
};

export default Toggle;
