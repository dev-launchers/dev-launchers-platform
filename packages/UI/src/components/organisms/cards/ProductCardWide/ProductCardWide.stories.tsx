import type { ComponentStory, ComponentMeta } from '@storybook/react';

import ProductCardWide from './ProductCardWide';
export default {
  title: 'Organisms/ProductCardWide',
  component: ProductCardWide,
} as ComponentMeta<typeof ProductCardWide>;

const TemplateProductCardWide: ComponentStory<typeof ProductCardWide> = (
  args
) => <ProductCardWide {...args}></ProductCardWide>;

export const ProductCardWideDefault = TemplateProductCardWide.bind({});

ProductCardWideDefault.args = {
  social: true,
  defaultButton: true,
};
export const ProductCardWideNoSocialButtons = TemplateProductCardWide.bind({});
ProductCardWideNoSocialButtons.args = {
  defaultButton: true,
};

export const ProductCardWideAlternateButtonsNoSocialButtons =
  TemplateProductCardWide.bind({});
ProductCardWideAlternateButtonsNoSocialButtons.args = {};

export const ProductCardWideAlternateButtonsWithSocialButtons =
  TemplateProductCardWide.bind({});
ProductCardWideAlternateButtonsWithSocialButtons.args = {
  social: true,
};
