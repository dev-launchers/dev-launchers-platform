import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { Chevron } from '../../../assets/icons';

const button = tv({
  base: 'flex items-center gap-8 px-16 py-12 bg-white',
  variants: {
    color: {
      primary: 'bg-blue-500 text-white',
      secondary: 'bg-purple-500 text-white',
    },
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'px-4 py-3 text-lg',
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
  children: React.ReactNode;
  onclick?: () => void;
}

const Button = ({ size, color, children, onclick }: ButtonProps) => {
  return (
    <button onClick={onclick} className={button({ size, color })}>
      <Chevron />
      {children}
    </button>
  );
};

export default Button;
