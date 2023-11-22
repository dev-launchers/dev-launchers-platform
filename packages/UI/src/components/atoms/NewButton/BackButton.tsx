import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const ButtonStyles = tv({
  base: 'flex flex-row gap-2 items-center justify-center text-center text-black rounded-lg',
  variants: {
    color: {
      primary: 'bg-white shadow text-black uppercase',
      secondary: 'bg-red-400 text-white',
    },
    size: {
      sm: 'py-2 px-4',
      md: 'px-4 py-2',
      lg: 'px-4 py-3',
    },
  },
  compoundVariants: [
    {
      size: ['sm', 'md'],
      class: 'px-3 py-1',
    },
  ],
  defaultVariants: {
    size: 'md',
    color: 'primary',
  },
});

interface ButtonProps extends VariantProps<typeof ButtonStyles> {
  children?: React.ReactNode;
  onclick?: () => void;
  iconRight?: React.ReactNode;
  iconLeft?: React.ReactNode;
}

const Button = ({ size, color, children,  iconLeft, iconRight, onclick }: ButtonProps) => {
  return (
    <button onClick={onclick} className={ButtonStyles({ size, color })}>
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
};

export default Button;
