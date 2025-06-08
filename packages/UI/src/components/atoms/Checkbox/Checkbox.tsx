import type { CheckboxProps } from '.';

const Checkbox = ({
  disabled = false,
  checked = false,
  label,
  onChange,
  theme = 'grey',
  size = 'base',
  ...props
}: CheckboxProps) => {
  // Size classes
  const sizeClass = size === 'base' ? 'h-6 w-6 text-xl' : 'h-4 w-4 text-sm';

  // Theme classes
  let baseColor = '';
  let checkedColor = 'text-white ';
  let focusRing = '';
  let hoverRing = '';

  switch (theme) {
    case 'error':
      baseColor = 'border-red-600';
      checkedColor += 'bg-red-600';
      focusRing = 'focus:ring-red-500';
      hoverRing = 'hover:[--tw-ring-color:#EBC4C4]';
      break;
    case 'brand':
      baseColor = 'border-purple-700';
      checkedColor += 'bg-purple-700';
      focusRing = 'focus:ring-purple-500';
      hoverRing = 'hover:[--tw-ring-color:#CDB7E1]';
      break;
    case 'grey':
      baseColor = 'border-gray-900';
      checkedColor += 'bg-black';
      focusRing = 'focus:ring-gray-400';
      hoverRing = 'hover:[--tw-ring-color:#DAD8D9]';
      break;
    default:
      break;
  }

  const sharedClass = `appearance-none border-2 rounded flex items-center justify-center transition duration-200 ease-in-out hover:shadow-md
  ${sizeClass} ${baseColor} ${focusRing} hover:ring-2 ${hoverRing}
  ${
    checked
      ? `${checkedColor} before:content-['✓'] before:text-white before:text-sm before:font-bold`
      : ''
  }
  ${
    disabled
      ? 'bg-gray-200 border-gray-300 text-gray-400 cursor-not-allowed opacity-60'
      : 'cursor-pointer'
  } relative before:absolute before:inset-0 before:flex before:items-center before:justify-center`;

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
