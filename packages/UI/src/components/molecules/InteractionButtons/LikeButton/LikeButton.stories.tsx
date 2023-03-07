import type { ComponentStory, ComponentMeta } from '@storybook/react';

import LikeButton from './LikeButton';
export default {
  title: 'Molecules/Interactions/LikeButton',
  component: LikeButton,
} as ComponentMeta<typeof LikeButton>;

const TemplateLikeButton: ComponentStory<typeof LikeButton> = (args) => (
  <LikeButton {...args}></LikeButton>
);

export const Default = TemplateLikeButton.bind({});
Default.args = {
  text: 'like',
};
export const DefaultHasLikes = TemplateLikeButton.bind({});
DefaultHasLikes.args = {
  text: '479',
};
export const SelectedHasLikes = TemplateLikeButton.bind({});
SelectedHasLikes.args = {
  text: '480',
  filled: true,
};

export const Disabled = TemplateLikeButton.bind({});
Disabled.args = {
  text: 'like',
  filled: false,
  disabled: true,
};
export const DisabledHasLikes = TemplateLikeButton.bind({});
DisabledHasLikes.args = {
  text: '479',
  filled: true,
  disabled: true,
};
