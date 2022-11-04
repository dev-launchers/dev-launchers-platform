import { Option, Input } from './StyledCheckbox';
import type { CheckboxProps } from '.';

const Checkbox = ({ disabled = false, label, onChange }: CheckboxProps) => {
  return (
    <Option htmlFor={label}>
      <Input
        disabled={disabled}
        type="checkbox"
        id={label}
        name={label}
        onChange={(e) => onChange(e, label as string)}
      />
      {label && <p>{label}</p>}
    </Option>
  );
};

export default Checkbox;
