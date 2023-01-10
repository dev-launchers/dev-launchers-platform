import { Option, Input } from './StyledCheckbox';
import type { CheckboxProps } from '.';

const Checkbox = ({
  disabled = false,
  label,
  onChange,
  ...props
}: CheckboxProps) => {
  return (
    <Option htmlFor={label}>
      <Input
        disabled={disabled}
        type="checkbox"
        id={label}
        name={label}
        onChange={(e) => {
          if (onChange) {
            onChange(e, label as string);
          }
        }}
        {...props}
      />
      {label && <p>{label}</p>}
    </Option>
  );
};

export default Checkbox;
