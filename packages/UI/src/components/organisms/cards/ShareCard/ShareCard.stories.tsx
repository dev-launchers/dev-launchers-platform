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
  platforms: 'twitter',
  link: '/sharelink',
};

export const Position = TemplateShareCard.bind({});
Position.args = {
  title: 'position',
  platforms: 'twitter',
  link: '/sharelink',
};

export const Product = TemplateShareCard.bind({});
Product.args = {
  title: 'product',
  platforms: 'twitter',
  link: '/sharelink',
};
