import { Option, Input } from './StyledRadio';
import type { RadioProps } from '.';

const Radio = ({ disabled = false, label, onChange }: RadioProps) => {
  return (
    <Option htmlFor={label}>
      <Input
        disabled={disabled}
        type="radio"
        id={label}
        name="radio"
        onChange={(e) => onChange(e, label as string)}
      />
      {label && <p>{label}</p>}
    </Option>
  );
};

export default Radio;
