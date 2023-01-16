import type { ComponentStory, ComponentMeta } from '@storybook/react';

import SocialIconButton from './SocialIconButton';
export default {
  title: 'Molecules/SocialIconButton',
  component: SocialIconButton,
} as ComponentMeta<typeof SocialIconButton>;

const TemplateBackButton: ComponentStory<typeof SocialIconButton> = (args) => (
  <SocialIconButton {...args}></SocialIconButton>
);

export const Twitter = TemplateBackButton.bind({});
Twitter.args = { type: 'twitter' };

export const Facebook = TemplateBackButton.bind({});
Facebook.args = { type: 'facebook' };

export const Instagram = TemplateBackButton.bind({});
Instagram.args = { type: 'instagram' };

export const Linkedin = TemplateBackButton.bind({});
Linkedin.args = { type: 'linkedin' };

export const Slack = TemplateBackButton.bind({});
Slack.args = { type: 'slack' };

export const Github = TemplateBackButton.bind({});
Github.args = { type: 'github' };

export const Discord = TemplateBackButton.bind({});
Discord.args = { type: 'discord' };
