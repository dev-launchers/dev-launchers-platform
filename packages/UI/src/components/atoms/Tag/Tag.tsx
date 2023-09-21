import { tv, type VariantProps } from 'tailwind-variants';
import { Close } from '../../../assets/icons';

// track which colors should have black text as the svg icon needs to fill with black
const blackTextIconColorVariantsLightMode: string[] = [
  // 'warning',
  // 'light',
  // 'yellow',
  // 'light-blue',
  // 'orange',
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
const tagIconFillColor = (color: string, mode: string): string => {
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
 * @property {string} color The color of the tag
 * @property {string} size The size of the tag
 */
export const tag = tv({
  base: 'inline-flex items-center font-medium text-white rounded-full active:opacity-80 tag',
  variants: {
    color: {
      // TODO solidify classes for the light and dark mode variants
      // primary: 'bg-blue-500 tag-primary',
      // secondary: 'bg-purple-500 tag-secondary',
      // success: 'bg-green-500 tag-success',
      // danger: 'bg-red-500 tag-danger',
      // warning: 'bg-yellow-300 text-black tag-warning',
      // info: 'bg-teal-500 tag-info',
      // light: 'bg-gray-200 text-black tag-light',
      // dark: 'bg-gray-800 tag-dark',
      // charcoal: 'bg-gray-700 tag-charcoal',
      // yellow: 'bg-yellow-500 text-black tag-yellow',
      // 'light-blue': 'bg-blue-200 text-black tag-light-blue',
      // blue: 'bg-blue-500 tag-blue',
      // orange: 'bg-orange-200 text-black tag-orange',
      white: 'bg-white text-black tag-white',
      black: 'bg-black tag-black',
      cosmic: 'bg-brand-alt-cosmic-500 tag-cosmic',
      jupiter: 'bg-jupiter-500 text-black tag-jupiter',
      nebula: 'bg-brand-alt-nebula-500 tag-nebula',
      neptune: 'bg-neptune-500 tag-neptune',
      saturn: 'bg-saturn-500 text-black tag-saturn',
      uranus: 'bg-uranus-500 text-black tag-uranus',
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
    outline: {
      true: 'border-solid border-black tag-outline', // may need a border radius
    },
    mode: {
      light: 'tag-mode-light',
      dark: 'tag-mode-dark',
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
    // // setup dark mode variations for the colors
    // {
    //   mode: 'dark',
    //   color: 'primary',
    //   className: 'bg-blue-700',
    // },

    // setup hover classes for when a color variant is selected
    // {
    //   color: 'primary',
    //   selected: true,
    //   className: 'hover:bg-blue-700',
    // },
    // {
    //   color: 'secondary',
    //   selected: true,
    //   className: 'hover:bg-purple-700',
    // },
    // {
    //   color: 'success',
    //   selected: true,
    //   className: 'hover:bg-green-700',
    // },
    // {
    //   color: 'danger',
    //   selected: true,
    //   className: 'hover:bg-red-700',
    // },
    // {
    //   color: 'warning',
    //   selected: true,
    //   className: 'hover:bg-yellow-500',
    // },
    // {
    //   color: 'info',
    //   selected: true,
    //   className: 'hover:bg-teal-700',
    // },
    // {
    //   color: 'light',
    //   selected: true,
    //   className: 'hover:bg-gray-400',
    // },
    // {
    //   color: 'dark',
    //   selected: true,
    //   className: 'hover:bg-gray-500',
    // },
    // {
    //   color: 'charcoal',
    //   selected: true,
    //   className: 'hover:bg-gray-500',
    // },
    // {
    //   color: 'yellow',
    //   selected: true,
    //   className: 'hover:bg-yellow-700',
    // },
    // {
    //   color: 'light-blue',
    //   selected: true,
    //   className: 'hover:bg-blue-400',
    // },
    // {
    //   color: 'blue',
    //   selected: true,
    //   className: 'hover:bg-blue-700',
    // },
    // {
    //   color: 'orange',
    //   selected: true,
    //   className: 'hover:bg-orange-400',
    // },

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

  // color:
  // | 'primary'
  // | 'secondary'
  // | 'success'
  // | 'danger'
  // | 'warning'
  // | 'info'
  // | 'light'
  // | 'dark'
  // | 'charcoal'
  // | 'yellow'
  // | 'light-blue'
  // | 'blue'
  // | 'orange'
  // | 'white'
  // | 'black'
  // | 'cosmic'
  // | 'jupiter'
  // | 'nebula'
  // | 'neptune'
  // | 'saturn'
  // | 'uranus';

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
        <Close
          stroke={tagIconFillColor(props.color as string, props.mode as string)}
        />
      </span>
    </button>
  ) : (
    <span className={tag(props)}>{props.label}</span>
  );
}

export default Tag;
