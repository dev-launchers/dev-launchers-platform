import { tv, type VariantProps } from 'tailwind-variants';
import { Close } from '../../../assets/icons';

// track which colors should have black text as the svg icon needs to fill with black
const blackTextIconColorVariantsLightMode: string[] = [
  'white',
  'jupiter',
  'saturn',
  'uranus',
];

/**
 * This is a helper function to determine the icon fill color
 * @param color The variant color string
 * @param mode The variant mode string
 * @returns The icon fill color
 */
const tagIconFillColor = (color = 'black', mode = 'light'): string => {
  if (mode === 'light') {
    return blackTextIconColorVariantsLightMode.includes(color)
      ? 'black'
      : 'white';
  } else {
    return color === 'black' ? 'white' : 'black';
  }
};

/**
 * Tag component variations
 */
const tag = tv({
  base: 'inline-flex items-center font-medium text-white rounded-full active:opacity-80',
  variants: {
    color: {
      white: 'bg-white text-black',
      black: 'bg-black',
      cosmic: 'bg-brand-alt-cosmic-500',
      jupiter: 'bg-jupiter-500 text-black',
      nebula: 'bg-brand-alt-nebula-500',
      neptune: 'bg-neptune-500',
      saturn: 'bg-saturn-500 text-black',
      uranus: 'bg-uranus-500 text-black',
    },
    size: {
      xs: 'px-2 py-1 gap-1 text-xs',
      sm: 'px-2 py-1 gap-1 text-sm',
      md: 'px-3 py-2 gap-2 text-base',
      lg: 'px-4 py-2 gap-2 text-lg',
      xl: 'px-4 py-3 gap-2 text-xl',
    },
    selected: {
      true: 'cursor-pointer',
    },
    shadow: {
      true: 'shadow-xl',
    },
    outline: {
      true: 'border-solid border-black', // may need a border radius
    },
    // TODO - need to define how light/dark mode works
    mode: {
      light: '',
      dark: '',
    },
  },
  compoundVariants: [
    // setup outline border sizes
    {
      outline: true,
      size: 'xs',
      className: 'border-2',
    },
    {
      outline: true,
      size: 'sm',
      className: 'border-2',
    },
    {
      outline: true,
      size: 'md',
      className: 'border-4',
    },
    {
      outline: true,
      size: 'lg',
      className: 'border-4',
    },
    {
      outline: true,
      size: 'xl',
      className: 'border-4',
    },

    // setup outline variants for the colors
    {
      mode: 'dark',
      outline: true,
      className: 'border-white',
    },

    // selected colors variations with dark and light mode
    {
      color: 'white',
      selected: true,
      className: 'hover:bg-gray-200',
    },
    {
      color: 'black',
      selected: true,
      className: 'hover:bg-gray-700',
    },
    {
      color: 'cosmic',
      selected: true,
      mode: 'light',
      className: 'hover:bg-brand-alt-cosmic-700',
    },
    {
      color: 'cosmic',
      selected: true,
      mode: 'dark',
      className: 'hover:bg-brand-alt-cosmic-500',
    },
    {
      color: 'jupiter',
      selected: true,
      mode: 'light',
      className: 'hover:bg-jupiter-700',
    },
    {
      color: 'jupiter',
      selected: true,
      mode: 'dark',
      className: 'hover:bg-jupiter-500',
    },
    {
      color: 'nebula',
      selected: true,
      mode: 'light',
      className: 'hover:bg-brand-alt-nebula-700',
    },
    {
      color: 'nebula',
      selected: true,
      mode: 'dark',
      className: 'hover:bg-brand-alt-nebula-500',
    },
    {
      color: 'neptune',
      selected: true,
      mode: 'light',
      className: 'hover:bg-neptune-700',
    },
    {
      color: 'neptune',
      selected: true,
      mode: 'dark',
      className: 'hover:bg-neptune-500',
    },
    {
      color: 'saturn',
      selected: true,
      mode: 'light',
      className: 'hover:bg-saturn-700',
    },
    {
      color: 'saturn',
      selected: true,
      mode: 'dark',
      className: 'hover:bg-saturn-500',
    },
    {
      color: 'uranus',
      selected: true,
      mode: 'light',
      className: 'hover:bg-uranus-700',
    },
    {
      color: 'uranus',
      selected: true,
      mode: 'dark',
      className: 'hover:bg-uranus-500',
    },

    // setup dark mode variations for the colors
    {
      color: 'cosmic',
      mode: 'dark',
      className: 'text-black bg-brand-alt-cosmic-300',
    },
    {
      color: 'jupiter',
      mode: 'dark',
      className: 'bg-jupiter-300',
    },
    {
      color: 'nebula',
      mode: 'dark',
      className: 'text-black bg-brand-alt-nebula-300',
    },
    {
      color: 'neptune',
      mode: 'dark',
      className: 'text-black bg-neptune-300',
    },
    {
      color: 'saturn',
      mode: 'dark',
      className: 'bg-saturn-300',
    },
    {
      color: 'uranus',
      mode: 'dark',
      className: 'bg-uranus-300',
    },
  ],
  defaultVariants: {
    size: 'md',
    color: 'black',
    selected: false,
    shadow: false,
    outline: false,
    mode: 'light',
  },
});

/**
 * Tag component properties interface
 */
interface TagProps extends VariantProps<typeof tag> {
  /**
   * The text to display in the tag.
   */
  label: string;

  /**
   * The color of the tag.
   * @default black
   */
  color?:
    | 'white'
    | 'black'
    | 'cosmic'
    | 'jupiter'
    | 'nebula'
    | 'neptune'
    | 'saturn'
    | 'uranus';

  /**
   * The size of the tag.
   * @default md
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';

  /**
   * Whether the tag is selected.
   * @default false
   */
  selected?: boolean;

  /**
   * Whether the tag has a shadow.
   * @default false
   */
  shadow?: boolean;

  /**
   * Whether the tag has an outline.
   * @default false
   */
  outline?: boolean;

  /**
   * The display mode of the tag.
   * @default light
   */
  mode?: 'light' | 'dark';

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
 * @property {boolean} TagProps.outline Whether the tag has an outline
 * @property {string} TagProps.mode The display mode of the tag
 * @property {() => void} TagProps.onClose Callback for when the tag is closed
 * @returns The JSX for the Tag
 * @example <Tag label="Tag" color="primary" size="md" selected shadow onClose={() => {}} />
 */
export function Tag({
  color = tag.defaultVariants.color,
  label,
  mode = tag.defaultVariants.mode,
  outline = tag.defaultVariants.outline,
  selected = tag.defaultVariants.selected,
  shadow = tag.defaultVariants.shadow,
  size = tag.defaultVariants.size,
  onClose,
  ...props
}: TagProps) {
  const styles = tag({ color, mode, outline, selected, shadow, size });

  // return options for accessibility
  return selected ? (
    <button className={styles} onClick={onClose} onKeyDown={onClose} {...props}>
      {label}
      <span className="p-0 m-0">
        <Close stroke={tagIconFillColor(color, mode)} />
      </span>
    </button>
  ) : (
    <span className={styles} {...props}>
      {label}
    </span>
  );
}

export default Tag;
