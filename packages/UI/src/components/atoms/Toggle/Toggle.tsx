import { CheckBoxWrapper, CheckBox, Switch } from './StyledToggle';
import type { ToggleProps } from '.';

const Toggle = ({ disabled, label }: ToggleProps) => {
  return (
    <div>
      <CheckBoxWrapper>
        <CheckBox
          disabled={disabled}
          name="checkbox"
          type="checkbox"
          id="checkbox"
        />
        <Switch htmlFor="checkbox" />
        {label && (
          <label id="label" htmlFor="checkbox">
            {label}
          </label>
        )}
      </CheckBoxWrapper>
    </div>
  );
};

export default Toggle;
