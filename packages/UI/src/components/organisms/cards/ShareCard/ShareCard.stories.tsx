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
  body: "Come check out DevLauncher's Idea at",
};

export const Position = TemplateShareCard.bind({});
Position.args = {
  title: 'position',
  body: "Come check out DevLauncher's Position at",
};

export const Product = TemplateShareCard.bind({});
Product.args = {
  title: 'product',
  body: "Come check out DevLauncher's Product at",
};
