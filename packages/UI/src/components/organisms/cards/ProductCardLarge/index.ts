export { default } from './ProductCardLarge';

export interface ProductProps {
  socialButton?: boolean;
  defaultButton?: boolean;
  image?: boolean;
  saveButton?: boolean;
  button1: {
    text?: string;
    href?: string;
    onClick?: () => void;
  };
  button2: {
    text?: string;
    href?: string;
    onClick?: () => void;
  };
  title: string;
  subtitle: string;
  body: string;
}
