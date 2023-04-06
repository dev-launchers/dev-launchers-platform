import type { ComponentStory, ComponentMeta } from '@storybook/react';

import SocialIconButton from './SocialIconButton';
export default {
  title: 'Molecules/SocialIconButton',
  component: SocialIconButton,
} as ComponentMeta<typeof SocialIconButton>;

const SocialIconButtonTemplate: ComponentStory<typeof SocialIconButton> = (
  args
) => <SocialIconButton {...args}></SocialIconButton>;

export const Twitter = SocialIconButtonTemplate.bind({});
Twitter.args = { type: 'twitter' };

export const Facebook = SocialIconButtonTemplate.bind({});
Facebook.args = { type: 'facebook' };

export const Instagram = SocialIconButtonTemplate.bind({});
Instagram.args = { type: 'instagram' };

export const Linkedin = SocialIconButtonTemplate.bind({});
Linkedin.args = { type: 'linkedin' };

export const Slack = SocialIconButtonTemplate.bind({});
Slack.args = { type: 'slack' };

export const Github = SocialIconButtonTemplate.bind({});
Github.args = { type: 'github' };

export const Discord = SocialIconButtonTemplate.bind({});
Discord.args = { type: 'discord' };

export const WhatsApp = SocialIconButtonTemplate.bind({});
Discord.args = { type: 'whatsApp' };

export const Reddit = SocialIconButtonTemplate.bind({});
Discord.args = { type: 'reddit' };
