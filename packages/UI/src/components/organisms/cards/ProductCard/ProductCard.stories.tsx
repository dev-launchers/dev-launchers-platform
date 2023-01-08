import type { ComponentStory, ComponentMeta } from '@storybook/react';

import ProductCard from './ProductCard';
export default {
  title: 'Organisms/ProductCard',
  component: ProductCard,
} as ComponentMeta<typeof ProductCard>;

const TemplateProductCard: ComponentStory<typeof ProductCard> = (args) => (
  <ProductCard {...args}></ProductCard>
);

export const LongANoImageNoInteraction = TemplateProductCard.bind({});

ProductCard.args = {};
