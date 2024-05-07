import React from 'react';
import { tv } from 'tailwind-variants';
import { Slot } from './../../utils/Slot';

interface TypographyProps {
  children: React.ReactNode;
  /**
   * If true, the Typography will be rendered as a child of the parent element.
   */
  asChild?: boolean;
  type?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'subtitle'
    | 'pLarge'
    | 'p'
    | 'pSmall'
    | 'button'
    | 'label'
    | 'labelSmall'
    | 'link'
    | 'navLink';
}

const TypographyStyles = tv({
  base: '',
  variants: {
    type: {
      h1: 'text-7xl font-medium leading-none lg:text-6xl lg:leading-snug',
      'display-sm': '',
    },
  },
});
const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ type, children, asChild = false, ...props }, ref) => {
    let Comp;
    if (asChild) {
      Comp = Slot;
    } else {
      switch (type) {
        default:
          Comp = type?.toLowerCase();
          break;
      }
    }

    return (
      <Comp className={TypographyStyles({ type })} {...props} ref={ref}>
        {children}
      </Comp>
    );
  }
);
Typography.displayName = 'Typography';

export { Typography };
