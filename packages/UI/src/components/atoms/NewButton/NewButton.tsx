import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const buttonStyles = tv({
  base: 'flex justify-center rounded-lg',
  variants: {
    type: {
      Primary:
        'text-Grey-Scale-white font-normal capitalize leading-normal tracking-wider bg-Blue-blue-600 hover:bg-Blue-blue-700',
    },
    size: {
      default: 'px-4 py-2',
      XL: 'px-6 py-3',
    },
  },
});

interface NewButtonProps extends VariantProps<typeof buttonStyles> {}

const NewButton: React.FC<NewButtonProps> = ({
  children,
  size,
  type,
  ...props
}) => {
  return (
    <button className={buttonStyles({ size, type })} {...props}>
      {children}
    </button>
  );
};
export default NewButton;
