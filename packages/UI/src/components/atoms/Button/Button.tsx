import { EventHandler, FormEvent, MouseEventHandler, ReactNode } from 'react';

export type PropsType = {
  mode?: 'light' | 'dark';
  type?: 'primary' | 'secondary' | 'alt-primary' | 'alt-secondary';
  icon?: 'right' | 'left';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  onClick?: EventHandler<any>;
  children?: ReactNode;
  as?: 'button' | 'a';
  href?: string;
  target?: string;
};

const defaultProps: PropsType = {
  mode: 'dark',
  size: 'small',
  disabled: false,
  type: 'primary',
  icon: 'right',
  as: 'button',
};

export default function Button(props: PropsType) {
  props = { ...defaultProps, ...props };
  const {
    mode,
    icon,
    size,
    disabled,
    type,
    onClick,
    children,
    as,
    href,
    target,
  } = props;

  const Component = as === 'a' ? 'a' : 'button';

  let btnClasses = `${params.base} 
                    ${params.mode[mode ?? 'light'][type ?? 'primary'].default}
                    ${params.mode[mode ?? 'light'][type ?? 'primary'].hover}
                    ${params.mode[mode ?? 'light'][type ?? 'primary'].active}
                    ${params.mode[mode ?? 'light'][type ?? 'primary'].disabled}
                    ${params.size[size ?? 'small']}
                    ${params.icon[icon ?? 'right']}`;

  return (
    <Component
      href={href}
      onClick={onClick}
      className={btnClasses}
      disabled={disabled}
      target={target}
    >
      {children}
    </Component>
  );
}

const params = {
  base: 'rounded-md px-6 outline disabled:outline-none flex items-center gap-2',
  mode: {
    dark: {
      primary: {
        default:
          'bg-brand-alt-nebula-200 outline-2 text-black outline-transparent',
        hover: 'hover:bg-brand-alt-nebula-400',
        active: 'active:outline-brand-alt-nebula-800',
        disabled:
          'disabled:bg-brand-alt-nebula-800 disabled:text-brand-alt-nebula-600',
      },
      secondary: {
        default:
          'bg-grayscale-900 outline-1 outline-brand-alt-nebula-200 text-brand-alt-nebula-200 ',
        hover:
          'hover:shadow-[2px_2px_5px_0px] hover:shadow-brand-alt-nebula-400',
        active: 'active:outline-2',
        disabled:
          'disabled:bg-brand-alt-nebula-500 disabled:text-brand-alt-nebula-800 disabled:shadow-none',
      },
      'alt-primary': {
        default: 'bg-grayscale-50 outline-transparent text-black',
        hover: 'hover:shadow-[1px_1px_4px_0px] hover:shadow-grayscale-200',
        active: 'active:outline-grayscale-300 active:outline-2',
        disabled:
          'disabled:bg-grayscale-300 disabled:text-grayscale-600 disabled:shadow-none',
      },
      'alt-secondary': {
        default: 'bg-grayscale-900 outline-1 outline-white text-white',
        hover: 'hover:shadow-[2px_2px_4px_0px] hover:shadow-grayscale-400',
        active: 'active:outline-2',
        disabled:
          'disabled:bg-grayscale-600 disabled:text-grayscale-300 disabled:shadow-none',
      },
    },
    light: {
      primary: {
        default: 'bg-brand-alt-nebula-600 outline-transparent text-white',
        hover:
          'hover:bg-brand-alt-nebula-800 hover:shadow-[2px_2px_4px_0px] hover:shadow-grayscale-400',
        active: 'active:outline-brand-alt-nebula-400 active:outline-2',
        disabled:
          'disabled:bg-brand-alt-nebula-300 disabled:text-brand-alt-nebula-600 disabled:shadow-none',
      },
      secondary: {
        default:
          'bg-white outline-1 outline-brand-alt-nebula-600 text-brand-alt-nebula-600 ',
        hover:
          'hover:shadow-[2px_2px_5px_0px] hover:shadow-brand-alt-nebula-400',
        active: 'active:outline-2',
        disabled:
          'disabled:bg-brand-alt-nebula-50 disabled:text-brand-alt-nebula-300 disabled:shadow-none',
      },
      'alt-primary': {
        default:
          'bg-grayscale-800 outline-1 outline-transparent text-grayscale-50',
        hover: 'hover:shadow-[2px_2px_5px_0px] hover:shadow-grayscale-500',
        active: 'outline-grayscale-500 active:outline-2',
        disabled:
          'disabled:bg-grayscale-500 disabled:text-grayscale-200 disabled:shadow-none',
      },
      'alt-secondary': {
        default: 'bg-white outline-1 outline-grayscale-900 text-grayscale-800 ',
        hover: 'hover:shadow-[2px_2px_5px_0px] hover:shadow-grayscale-800',
        active: 'active:outline-2',
        disabled:
          'disabled:bg-brand-alt-nebula-50 disabled:text-grayscale-500 disabled:shadow-none',
      },
    },
  },
  size: {
    small: 'py-2',
    medium: 'py-[0.6rem]',
    large: 'py-[0.8rem]',
  },
  icon: {
    right: '',
    left: 'flex-row-reverse',
  },
};
