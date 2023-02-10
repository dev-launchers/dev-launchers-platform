import type { ComponentStory, ComponentMeta } from '@storybook/react';
import ProductCardLarge from './ProductCardLarge';

export default {
  title: 'Organisms/ProductCardLarge',
  component: ProductCardLarge,
} as ComponentMeta<typeof ProductCardLarge>;

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
const TemplateProductCardLarge: ComponentStory<typeof ProductCardLarge> = (
  args
) => <ProductCardLarge {...args}></ProductCardLarge>;

export const ProductCardLargeDefault = TemplateProductCardLarge.bind({});

ProductCardLargeDefault.args = {
  ...defaultArgs,
};
export const ProductCardLargeNoSocialButtonsWithImage =
  TemplateProductCardLarge.bind({});
ProductCardLargeNoSocialButtonsWithImage.args = {
  ...defaultArgs,
  socialButton: false,
};

export const ProductCardLargeAlternateButtonsNoSocialButtonsWithImage =
  TemplateProductCardLarge.bind({});
ProductCardLargeAlternateButtonsNoSocialButtonsWithImage.args = {
  ...defaultArgs,
  defaultButton: false,
  socialButton: false,
};

export const ProductCardLargeAlternateButtonsWithSocialButtonsWithImage =
  TemplateProductCardLarge.bind({});
ProductCardLargeAlternateButtonsWithSocialButtonsWithImage.args = {
  ...defaultArgs,
  defaultButton: false,
};

export const ProductCardLargeDefaultSaveButtonNoImage =
  TemplateProductCardLarge.bind({});

ProductCardLargeDefaultSaveButtonNoImage.args = {
  ...defaultArgs,
  image: false,
  saveButton: true,
};

export const ProductCardLargeNoSocialButtonsSaveButtonNoImage =
  TemplateProductCardLarge.bind({});
ProductCardLargeNoSocialButtonsSaveButtonNoImage.args = {
  ...defaultArgs,
  image: false,
  socialButton: false,
  saveButton: true,
};

export const ProductCardLargeAlternateButtonsNoSocialButtonsSaveButtonNoImage =
  TemplateProductCardLarge.bind({});
ProductCardLargeAlternateButtonsNoSocialButtonsSaveButtonNoImage.args = {
  ...defaultArgs,
  image: false,
  socialButton: false,
  defaultButton: false,
  saveButton: true,
};

export const ProductCardLargeAlternateButtonsWithSocialButtonsSaveButtonNoImage =
  TemplateProductCardLarge.bind({});
ProductCardLargeAlternateButtonsWithSocialButtonsSaveButtonNoImage.args = {
  ...defaultArgs,
  image: false,
  socialButton: true,
  defaultButton: false,
  saveButton: true,
};

export const ProductCardLargeDefaultNoSaveButtonNoImage =
  TemplateProductCardLarge.bind({});

ProductCardLargeDefaultNoSaveButtonNoImage.args = {
  ...defaultArgs,
  image: false,
  socialButton: true,
};
export const ProductCardLargeAlternateButtonsNoSocialButtonsNoSaveButtonNoImage =
  TemplateProductCardLarge.bind({});
ProductCardLargeAlternateButtonsNoSocialButtonsNoSaveButtonNoImage.args = {
  ...defaultArgs,
  defaultButton: false,
  image: false,
  socialButton: false,
  saveButton: false,
};

export const ProductCardLargeAlternateButtonsSocialButtonsNoSaveButtonNoImage =
  TemplateProductCardLarge.bind({});
ProductCardLargeAlternateButtonsSocialButtonsNoSaveButtonNoImage.args = {
  ...defaultArgs,
  image: false,
  defaultButton: false,
  socialButton: true,
  saveButton: false,
};
