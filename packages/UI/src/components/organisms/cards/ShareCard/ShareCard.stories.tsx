import type { ComponentStory, ComponentMeta } from '@storybook/react';
import ShareCard from './ShareCard';

export default {
  title: 'Organisms/ShareCard',
  component: ShareCard,
} as ComponentMeta<typeof ShareCard>;

const TemplateShareCard: ComponentStory<typeof ShareCard> = (args) => (
  <ShareCard {...args}></ShareCard>
);

export const Idea = TemplateShareCard.bind({});
Idea.args = {
  title: 'idea',
};

export const Position = TemplateShareCard.bind({});
Position.args = {
  title: 'position',
};

export const Product = TemplateShareCard.bind({});
Product.args = {
  title: 'product',
};
