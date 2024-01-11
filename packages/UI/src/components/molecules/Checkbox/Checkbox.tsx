import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const CheckboxStyles = tv({
  base: 'h-6 w-6 appearance-none bg-grayscale-50 outline outline-2 outline-offset-2 outline-brand-alt-nebula-500',
});



const Checkbox = () => {
  return <input type="checkbox" className={CheckboxStyles()}></input>;
};

Checkbox.displayName = 'Checkbox';
export default Checkbox;
