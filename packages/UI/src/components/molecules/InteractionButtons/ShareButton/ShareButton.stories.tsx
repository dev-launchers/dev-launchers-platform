import type { ComponentStory, ComponentMeta } from '@storybook/react';

import ShareButton from './ShareButton';
export default {
  title: 'Molecules/Interactions/ShareButton',
  component: ShareButton,
} as ComponentMeta<typeof ShareButton>;

const TemplateShareButton: ComponentStory<typeof ShareButton> = (args) => (
  <ShareButton {...args}></ShareButton>
);

export const Default = TemplateShareButton.bind({});
Default.args = {
  text: 'share',
};
export const Small = TemplateShareButton.bind({});
Small.args = {
  text: '',
};

export const Disabled = TemplateShareButton.bind({});
Disabled.args = {
  text: 'share',
  disabled: true,
};
export const SmallDisabled = TemplateShareButton.bind({});
SmallDisabled.args = {
  text: '',
  disabled: true,
};
