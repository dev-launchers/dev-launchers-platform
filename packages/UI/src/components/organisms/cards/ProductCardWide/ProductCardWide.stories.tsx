import type { ComponentStory, ComponentMeta } from '@storybook/react';
import ProductCardWide from './ProductCardWide';
import type { ProductProps } from '.';

export default {
  title: 'Organisms/ProductCardWide',
  component: ProductCardWide,
} as ComponentMeta<typeof ProductCardWide>;

const defaultArgs = {
  title: 'This is a Title',
  subtitle: 'this is a subtitle',
  body: 'this is a body',
  button1Text: 'Available Positions',
  button2Text: 'Donate',
  socialButton: true,
  defaultButton: true,
  image: true,
};
const TemplateProductCardWide: ComponentStory<typeof ProductCardWide> = (
  args
) => <ProductCardWide {...args}></ProductCardWide>;

export const ProductCardWideDefault = TemplateProductCardWide.bind({});

ProductCardWideDefault.args = {
  ...defaultArgs,
};
export const ProductCardWideNoSocialButtonsWithImage =
  TemplateProductCardWide.bind({});
ProductCardWideNoSocialButtonsWithImage.args = {
  ...defaultArgs,
  socialButton: false,
};

export const ProductCardWideAlternateButtonsNoSocialButtonsWithImage =
  TemplateProductCardWide.bind({});
ProductCardWideAlternateButtonsNoSocialButtonsWithImage.args = {
  ...defaultArgs,
  defaultButton: false,
  socialButton: false,
};

export const ProductCardWideAlternateButtonsWithSocialButtonsWithImage =
  TemplateProductCardWide.bind({});
ProductCardWideAlternateButtonsWithSocialButtonsWithImage.args = {
  ...defaultArgs,
  defaultButton: false,
};

export const ProductCardWideDefaultSaveButtonNoImage =
  TemplateProductCardWide.bind({});

ProductCardWideDefaultSaveButtonNoImage.args = {
  ...defaultArgs,
  image: false,
  saveButton: true,
};

export const ProductCardWideNoSocialButtonsSaveButtonNoImage =
  TemplateProductCardWide.bind({});
ProductCardWideNoSocialButtonsSaveButtonNoImage.args = {
  ...defaultArgs,
  image: false,
  socialButton: false,
  saveButton: true,
};

export const ProductCardWideAlternateButtonsNoSocialButtonsSaveButtonNoImage =
  TemplateProductCardWide.bind({});
ProductCardWideAlternateButtonsNoSocialButtonsSaveButtonNoImage.args = {
  ...defaultArgs,
  image: false,
  socialButton: false,
  defaultButton: false,
  saveButton: true,
};

export const ProductCardWideAlternateButtonsWithSocialButtonsSaveButtonNoImage =
  TemplateProductCardWide.bind({});
ProductCardWideAlternateButtonsWithSocialButtonsSaveButtonNoImage.args = {
  ...defaultArgs,
  image: false,
  socialButton: true,
  defaultButton: false,
  saveButton: true,
};

export const ProductCardWideDefaultNoSaveButtonNoImage =
  TemplateProductCardWide.bind({});

ProductCardWideDefaultNoSaveButtonNoImage.args = {
  ...defaultArgs,
  image: false,
  socialButton: true,
};
export const ProductCardWideAlternateButtonsNoSocialButtonsNoSaveButtonNoImage =
  TemplateProductCardWide.bind({});
ProductCardWideAlternateButtonsNoSocialButtonsNoSaveButtonNoImage.args = {
  ...defaultArgs,
  defaultButton: false,
  image: false,
  socialButton: false,
  saveButton: false,
};

export const ProductCardWideAlternateButtonsSocialButtonsNoSaveButtonNoImage =
  TemplateProductCardWide.bind({});
ProductCardWideAlternateButtonsSocialButtonsNoSaveButtonNoImage.args = {
  ...defaultArgs,
  image: false,
  defaultButton: false,
  socialButton: true,
  saveButton: false,
};
