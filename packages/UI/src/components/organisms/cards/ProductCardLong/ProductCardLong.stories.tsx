import type { ComponentStory, ComponentMeta } from '@storybook/react';
import ProductCardLong from './ProductCardLong';
export default {
  title: 'Organisms/ProductCardLong',
  component: ProductCardLong,
} as ComponentMeta<typeof ProductCardLong>;

const defaultArgs = {
  subtitle: 'Product Type',
  title: 'Product Title',
  description: 'Product Description',
  body: 'Our goal is to design a platform that brings people of from a diverse range of specialties together to collaboratively design the best possible software solutions',
  button1: { text: 'Available Positions' },
  button2: { text: 'Donate' },
  socialButton: true,
  defaultButton: true,
  saveButton: true,
  image: true,
  tags: ['react', 'js', 'html', 'css', 'typescript'],
};
const TemplateProductCardLong: ComponentStory<typeof ProductCardLong> = (
  args
) => <ProductCardLong {...args}></ProductCardLong>;

export const ProductCardLongDefault = TemplateProductCardLong.bind({});

ProductCardLongDefault.args = {
  ...defaultArgs,
  button1: {
    text: 'Available Positions',
    href: '#',
  },
};
