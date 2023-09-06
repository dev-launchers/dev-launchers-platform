import { tv, type VariantProps } from 'tailwind-variants';
import { Close } from '../../../assets/icons';

// track which colors should have black text as the svg icon needs to fill with black
const blackTextIconColorVariants: string[] = [
  'warning',
  'light',
  'white',
  'yellow',
  'light-blue',
  'orange',
];

/**
 * Tag component variations
 */
export const tag = tv({
  base: 'inline-flex items-center font-medium bg-blue-500 text-white rounded-full active:opacity-80 tag',
  variants: {
    color: {
      // TODO solidify classes for the dark mode variants
      primary: 'bg-blue-500 hover:bg-blue-700 tag-primary',
      secondary: 'bg-purple-500 hover:bg-purple-700 tag-secondary',
      success: 'bg-green-500 hover:bg-green-700 tag-success',
      danger: 'bg-red-500 hover:bg-red-700 tag-danger',
      warning: 'bg-yellow-300 hover:bg-yellow-500 text-black tag-warning',
      notification: 'bg-teal-500 hover:bg-teal-700 tag-notification',
      light: 'bg-gray-200 hover:bg-gray-400 text-black tag-light',
      dark: 'bg-gray-800 hover:bg-gray-500 tag-dark',
      white: 'bg-white hover:bg-gray-200 text-black tag-white',
      charcoal: 'bg-gray-700 hover:bg-gray-500 tag-charcoal',
      black: 'bg-black hover:bg-gray-800 tag-black',
      yellow: 'bg-yellow-500 hover:bg-yellow-700 text-black tag-yellow',
      'light-blue': 'bg-blue-200 hover:bg-blue-400 text-black tag-light-blue',
      blue: 'bg-blue-500 hover:bg-blue-700 tag-blue',
      orange: 'bg-orange-200 hover:bg-orange-400 text-black tag-orange',
      jupiter:
        'bg-brand-primary-jupiter-500 hover:bg-brand-primary-jupiter-700 tag-jupiter',
      uranus:
        'bg-brand-primary-uranus-500 hover:bg-brand-primary-uranus-700 tag-uranus',
      neptune:
        'bg-brand-primary-neptune-500 hover:bg-brand-primary-neptune-700 tag-neptune',
      saturn:
        'bg-brand-primary-saturn-500 hover:bg-brand-primary-saturn-700 tag-saturn',
      nebula:
        'bg-brand-secondary-nebula-500 hover:bg-brand-secondary-nebula-700 tag-nebula',
      cosmic:
        'bg-brand-secondary-cosmic-500 hover:bg-brand-secondary-cosmic-700 tag-cosmic',
    },
    mode: {
      dark: 'tag-mode-dark mode:dark',
      light: 'tag-mode-light mode:light',
    },
    size: {
      xs: 'px-2 py-1 gap-1 text-xs tag-xs',
      sm: 'px-2 py-1 gap-1 text-sm tag-sm',
      md: 'px-3 py-2 gap-2 text-base tag-md',
      lg: 'px-4 py-2 gap-2 text-lg tag-lg',
      xl: 'px-4 py-3 gap-2 text-xl tag-xl',
    },
    selected: {
      true: 'cursor-pointer tag-selected',
    },
    shadow: {
      true: 'shadow-xl tag-shadow',
    },
  },
  compoundVariants: [
    // TODO need classes for the light mode variants
    {
      color: 'white',
      mode: 'light',
      className: 'border border-black',
    },
    {
      color: 'light',
      mode: 'light',
      className: 'border border-black',
    },
    {
      color: 'orange',
      mode: 'light',
      className: 'bg-orange-500 hover:bg-orange-700',
    },
  ],
  defaultVariants: {
    size: 'md',
    color: 'primary',
    selected: false,
    shadow: false,
    mode: 'dark',
  },
});

/**
 * Tag properties interface
 */
export interface TagProps extends VariantProps<typeof tag> {
  label: string;
  onClose?: () => void;
}

/**
 * This is the Tag component
 * @param TagProps Tag properties
 * @returns The JSX for the Tag
 */
export function Tag({ ...props }: TagProps) {
  const handleClose = () => {
    props.onClose?.();
  };
  const iconFill = blackTextIconColorVariants.includes(props.color as string)
    ? 'black'
    : 'white';

  // return options for accessibility
  return props.selected ? (
    <button
      className={tag(props)}
      onClick={handleClose}
      onKeyDown={handleClose}
    >
      {props.label}
      <span className="p-0 m-0">
        <Close stroke={iconFill} />
      </span>
    </button>
  ) : (
    <span className={tag(props)}>{props.label}</span>
  );
}

export default Tag;
