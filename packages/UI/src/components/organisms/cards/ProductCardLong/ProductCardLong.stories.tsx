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
  button1: { text: 'Product Details', href: '#' },
  button2: { text: 'Donate', href: '#' },
  socialButton: true,
  defaultButton: true,
  saveButton: true,
  tags: ['react', 'js', 'html', 'css', 'typescript'],
  verticalSocialButtons: false,
};
const TemplateProductCardLong: ComponentStory<typeof ProductCardLong> = (
  args
) => <ProductCardLong {...args}></ProductCardLong>;

export const ProductCardLongDefault = TemplateProductCardLong.bind({});

ProductCardLongDefault.args = {
  ...defaultArgs,
};

export const ProductCardLongDefaultNoSocialButtonsNoSaveButton =
  TemplateProductCardLong.bind({});

ProductCardLongDefaultNoSocialButtonsNoSaveButton.args = {
  ...defaultArgs,
  socialButton: false,
  saveButton: false,
};

export const ProductCardLongDefaultVerticalSocialButtons =
  TemplateProductCardLong.bind({});

ProductCardLongDefaultVerticalSocialButtons.args = {
  ...defaultArgs,
  verticalSocialButtons: true,
};

export const ProductCardLongDefaultVerticalSaveButton =
  TemplateProductCardLong.bind({});

ProductCardLongDefaultVerticalSaveButton.args = {
  ...defaultArgs,
  verticalSocialButtons: true,
  socialButton: false,
};

export const ProductCardLongAlternative = TemplateProductCardLong.bind({});

ProductCardLongAlternative.args = {
  ...defaultArgs,
  defaultButton: false,
};
export const ProductCardLongAlternativeNosicalButtonNoSaveButton =
  TemplateProductCardLong.bind({});

ProductCardLongAlternativeNosicalButtonNoSaveButton.args = {
  ...defaultArgs,
  defaultButton: false,
  socialButton: false,
  saveButton: false,
};

export const ProductCardLongAlternativeVerticalSocialButtons =
  TemplateProductCardLong.bind({});

ProductCardLongAlternativeVerticalSocialButtons.args = {
  ...defaultArgs,
  defaultButton: false,
  verticalSocialButtons: true,
};

export const ProductCardLongAlternativeVerticalSaveButton =
  TemplateProductCardLong.bind({});

ProductCardLongAlternativeVerticalSaveButton.args = {
  ...defaultArgs,
  defaultButton: false,
  socialButton: false,
  verticalSocialButtons: true,
};
