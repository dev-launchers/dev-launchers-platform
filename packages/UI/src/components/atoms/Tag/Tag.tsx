import { tv, type VariantProps } from 'tailwind-variants';
import { Close } from '../../../assets/icons';

export const tag = tv({
  base: 'inline-flex items-center font-medium bg-blue-500 text-white rounded-full active:opacity-80',
  variants: {
    color: {
      primary: 'bg-blue-500 hover:bg-blue-700 text-white',
      secondary: 'bg-purple-500 hover:bg-purple-700 text-white',
      success: 'bg-green-500 hover:bg-green-700 text-white',
      danger: 'bg-red-500 hover:bg-red-700 text-white',
      warning: 'bg-yellow-500 hover:bg-yellow-700 text-white',
      info: 'bg-cyan-500 hover:bg-cyan-700 text-black',
      light: 'bg-stone-200 hover:bg-stone-400 text-black',
      dark: 'bg-slate-800 hover:bg-slate-500 text-white',
    },
    size: {
      xs: 'px-2 py-1 text-xs',
      sm: 'px-2 py-1 text-sm',
      md: 'px-3 py-2 text-base',
      lg: 'px-4 py-2 text-lg',
      xl: 'px-4 py-3 text-xl',
    },
    selected: {
      true: 'cursor-pointer',
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'primary',
    selected: false,
  },
});

export interface TagProps extends VariantProps<typeof tag> {
  label: string;
  onClose?: () => void;
}

export function Tag({ ...props }: TagProps) {
  const handleClose = () => {
    props.onClose?.();
  };
  const iconFill =
    props.color === 'info' || props.color === 'light' ? 'black' : 'white';

  // return options for accessibility
  return props.selected ? (
    <button
      className={tag(props)}
      onClick={handleClose}
      onKeyDown={handleClose}
    >
      {props.label}
      <span className="pl-1">
        <Close stroke={iconFill} />
      </span>
    </button>
  ) : (
    <span className={tag(props)}>{props.label}</span>
  );
}

export default Tag;
