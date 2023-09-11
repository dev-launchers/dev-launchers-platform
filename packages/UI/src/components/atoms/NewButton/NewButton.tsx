import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const button = tv({
  base: 'text-center text-black  ',
  variants: {
    color: {
      primary: 'bg-white shadow text-black text-center uppercase',
      secondary: 'bg-red-400 text-white',
    },
    size: {
      sm: ' rounded-lg py-2 px-4  flex flex-row gap-2 items-center justify-center',
      md: ' rounded-lg px-4 py-2  flex flex-row gap-2 items-center ',
      lg: ' rounded-lg px-4 py-3  flex flex-row gap-2 items-center ',
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

interface ButtonProps extends VariantProps<typeof button> {
  children?: React.ReactNode;
  onclick?: () => void;
  iconRight?: React.ReactNode;
  iconLeft?: React.ReactNode;
}

const Button = ({ size, color, children,  iconLeft, iconRight, onclick }: ButtonProps) => {
  return (
    <button onClick={onclick} className={button({ size, color })}>
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
};

export default Button;
