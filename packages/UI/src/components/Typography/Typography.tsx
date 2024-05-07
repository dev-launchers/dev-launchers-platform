import { tv } from 'tailwind-variants';

interface TypographyProps {
  children: React.ReactNode;
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

function Typography({ type, children }: TypographyProps) {
  return <div className={TypographyStyles({ type })}>{children}</div>;
}

export { Typography };
