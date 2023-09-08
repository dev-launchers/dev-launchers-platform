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
 * This is a helper function to determine the icon fill color
 * @param color The variant color string
 * @returns The icon fill color
 */
const tagIconFillColor = (color: string): string => {
  return blackTextIconColorVariants.includes(color) ? 'black' : 'white';
};

/**
 * Tag component variations
 * @property {string} color The color of the tag
 * @property {string} size The size of the tag
 */
export const tag = tv({
  base: 'inline-flex items-center font-medium text-white rounded-full active:opacity-80 tag',
  variants: {
    color: {
      // TODO solidify classes for the light and dark mode variants
      primary: 'bg-blue-500 tag-primary',
      secondary: 'bg-purple-500 tag-secondary',
      success: 'bg-green-500 tag-success',
      danger: 'bg-red-500 tag-danger',
      warning: 'bg-yellow-300 text-black tag-warning',
      info: 'bg-teal-500 tag-info',
      light: 'bg-gray-200 text-black tag-light',
      dark: 'bg-gray-800 tag-dark',
      white: 'bg-white text-black tag-white',
      charcoal: 'bg-gray-700 tag-charcoal',
      black: 'bg-black tag-black',
      yellow: 'bg-yellow-500 text-black tag-yellow',
      'light-blue': 'bg-blue-200 text-black tag-light-blue',
      blue: 'bg-blue-500 tag-blue',
      orange: 'bg-orange-200 text-black tag-orange',
      jupiter: 'bg-brand-primary-jupiter-500 tag-jupiter',
      uranus: 'bg-brand-primary-uranus-500 tag-uranus',
      neptune: 'bg-brand-primary-neptune-500 tag-neptune',
      saturn: 'bg-brand-primary-saturn-500 tag-saturn',
      nebula: 'bg-brand-secondary-nebula-500 tag-nebula',
      cosmic: 'bg-brand-secondary-cosmic-500 tag-cosmic',
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
    // setup hover classes for when a color variant is selected
    {
      color: 'primary',
      selected: true,
      className: 'hover:bg-blue-700',
    },
    {
      color: 'secondary',
      selected: true,
      className: 'hover:bg-purple-700',
    },
    {
      color: 'success',
      selected: true,
      className: 'hover:bg-green-700',
    },
    {
      color: 'danger',
      selected: true,
      className: 'hover:bg-red-700',
    },
    {
      color: 'warning',
      selected: true,
      className: 'hover:bg-yellow-500',
    },
    {
      color: 'info',
      selected: true,
      className: 'hover:bg-teal-700',
    },
    {
      color: 'light',
      selected: true,
      className: 'hover:bg-gray-400',
    },
    {
      color: 'dark',
      selected: true,
      className: 'hover:bg-gray-500',
    },
    {
      color: 'white',
      selected: true,
      className: 'hover:bg-gray-200',
    },
    {
      color: 'charcoal',
      selected: true,
      className: 'hover:bg-gray-500',
    },
    {
      color: 'black',
      selected: true,
      className: 'hover:bg-gray-700',
    },
    {
      color: 'yellow',
      selected: true,
      className: 'hover:bg-yellow-700',
    },
    {
      color: 'light-blue',
      selected: true,
      className: 'hover:bg-blue-400',
    },
    {
      color: 'blue',
      selected: true,
      className: 'hover:bg-blue-700',
    },
    {
      color: 'orange',
      selected: true,
      className: 'hover:bg-orange-400',
    },
    {
      color: 'jupiter',
      selected: true,
      className: 'hover:bg-brand-primary-jupiter-700',
    },
    {
      color: 'uranus',
      selected: true,
      className: 'hover:bg-brand-primary-uranus-700',
    },
    {
      color: 'neptune',
      selected: true,
      className: 'hover:bg-brand-primary-neptune-700',
    },
    {
      color: 'saturn',
      selected: true,
      className: 'hover:bg-brand-primary-saturn-700',
    },
    {
      color: 'nebula',
      selected: true,
      className: 'hover:bg-brand-secondary-nebula-700',
    },
    {
      color: 'cosmic',
      selected: true,
      className: 'hover:bg-brand-secondary-cosmic-700',
    },
  ],
  defaultVariants: {
    size: 'md',
    color: 'primary',
    selected: false,
    shadow: false,
  },
});

/**
 * Tag component properties interface
 * @property {string} label The text to display in the tag
 * @property {string} color The color of the tag
 * @property {string} size The size of the tag
 * @property {boolean} selected Whether the tag is selected
 * @property {boolean} shadow Whether the tag has a shadow
 * @property {() => void} onClose Callback for when the tag is closed
 */
export interface TagProps extends VariantProps<typeof tag> {
  /**
   * The text to display in the tag.
   */
  label: string;

  /**
   * The color of the tag. The default color is `primary`.
   */
  color:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark'
    | 'white'
    | 'charcoal'
    | 'black'
    | 'yellow'
    | 'light-blue'
    | 'blue'
    | 'orange'
    | 'jupiter'
    | 'uranus'
    | 'neptune'
    | 'saturn'
    | 'nebula'
    | 'cosmic';

  /**
   * The size of the tag. The default size is `md`.
   */
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';

  /**
   * Whether the tag is selected. The default is `false`.
   */
  selected: boolean;

  /**
   * Whether the tag has a shadow. The default is `false`.
   */
  shadow: boolean;

  /**
   * This is clicked when the tag is closed and will only be displayed as clickable when the tag is selected.
   * @returns {void}
   */
  onClose?: () => void;
}

/**
 * This is the Tag component
 * @param {TagProps} TagProps Tag properties
 * @property {string} TagProps.label The text to display in the tag
 * @property {string} TagProps.color The color of the tag
 * @property {string} TagProps.size The size of the tag
 * @property {boolean} TagProps.selected Whether the tag is selected
 * @property {boolean} TagProps.shadow Whether the tag has a shadow
 * @property {() => void} TagProps.onClose Callback for when the tag is closed
 * @returns The JSX for the Tag
 * @example <Tag label="Tag" color="primary" size="md" selected shadow onClose={() => {}} />
 */
export function Tag({ ...props }: TagProps) {
  const handleClose = () => {
    props.onClose?.();
  };

  // return options for accessibility
  return props.selected ? (
    <button
      className={tag(props)}
      onClick={handleClose}
      onKeyDown={handleClose}
    >
      {props.label}
      <span className="p-0 m-0">
        <Close stroke={tagIconFillColor(props.color as string)} />
      </span>
    </button>
  ) : (
    <span className={tag(props)}>{props.label}</span>
  );
}

export default Tag;
