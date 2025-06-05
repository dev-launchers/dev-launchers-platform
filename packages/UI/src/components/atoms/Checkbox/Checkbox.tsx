import type { CheckboxProps } from '.';

const Checkbox = ({
  disabled = false,
  checked = false,
  label,
  onChange,
  theme = 'brand',
  size = 'base',
  ...props
}: CheckboxProps) => {
  // Size classes
  const sizeClass = size === 'base' ? 'h-6 w-6 text-xl' : 'h-4 w-4 text-sm';

  // Theme classes
  let baseColor = '';
  let checkedColor = '';
  let focusRing = '';

  switch (theme) {
    case 'grey':
      baseColor = 'border-gray-500';
      checkedColor = 'bg-black text-white';
      focusRing = 'focus:ring-gray-400';
      break;
    case 'error':
      baseColor = 'border-red-600';
      checkedColor = 'bg-red-600 text-white';
      focusRing = 'focus:ring-red-500';
      break;
    default:
      baseColor = 'border-purple-700';
      checkedColor = 'bg-purple-700 text-white';
      focusRing = 'focus:ring-purple-500';
  }

  const sharedClass = `appearance-none border-2 rounded flex items-center justify-center transition duration-200 ease-in-out hover:shadow-md ${sizeClass} ${baseColor} ${focusRing} ${checked ? checkedColor : ''} ${disabled ? 'bg-gray-200 border-gray-300 text-gray-400 cursor-not-allowed opacity-60' : 'cursor-pointer'}`;

  return (
    <label
      className={`inline-flex items-center gap-2 ${
        disabled ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'
      }`}
      htmlFor={label}
    >
      <input
        type="checkbox"
        id={label}
        name={label}
        disabled={disabled}
        checked={checked}
        onChange={(e) => {
          if (onChange) {
            onChange(e, label as string);
          }
        }}
        className={sharedClass}
        {...props}
      />
      {label && <span className="text-sm">{label}</span>}
    </label>
  );
};

export default Checkbox;
