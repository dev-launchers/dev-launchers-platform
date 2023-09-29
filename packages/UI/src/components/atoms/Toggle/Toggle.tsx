import { CheckBoxWrapper, CheckBox, Switch } from './StyledToggle';
import type { ToggleProps } from '.';

const Toggle = ({ disabled, label, name = "checkbox", htmlFor = "checkbox" }: ToggleProps) => {
  return (
    <div>
      <CheckBoxWrapper>
        <CheckBox
          disabled={disabled}
          name={name}
          type="checkbox"
          id={name}
        />
        <Switch htmlFor={htmlFor} />
        {label && (
          <label id="label" htmlFor={htmlFor}>
            {label}
          </label>
        )}
      </CheckBoxWrapper>
    </div>
  );
};

export default Toggle;
