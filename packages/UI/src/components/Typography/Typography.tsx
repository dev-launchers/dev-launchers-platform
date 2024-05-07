import { tv } from 'tailwind-variants';

interface TypographyProps {
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
  variants: {},
});

function Typography({ type }: TypographyProps) {
  return <div className={TypographyStyles({})}></div>;
}

export { Typography };
