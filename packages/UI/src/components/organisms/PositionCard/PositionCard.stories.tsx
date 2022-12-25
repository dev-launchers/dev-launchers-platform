import type { ComponentStory, ComponentMeta } from '@storybook/react';

import PositionCard from './PositionCard';
export default {
  title: 'Organisms/PositionCard',
  component: PositionCard,
} as ComponentMeta<typeof PositionCard>;

const TemplatePositionCard: ComponentStory<typeof PositionCard> = (args) => (
  <PositionCard {...args}></PositionCard>
);

export const LongASaveOnlyOpen = TemplatePositionCard.bind({});
LongASaveOnlyOpen.args = {
  buttonStyle: 'a',
  interaction: 'save-only',
  status: 'open',
};
export const LongASaveOnlyClosed = TemplatePositionCard.bind({});
LongASaveOnlyClosed.args = {
  buttonStyle: 'a',
  interaction: 'save-only',
  status: 'closed',
};
export const LongBSaveOnlyOpen = TemplatePositionCard.bind({});
LongBSaveOnlyOpen.args = {
  buttonStyle: 'b',
  interaction: 'save-only',
  status: 'open',
};
export const LongBSaveOnlyClosed = TemplatePositionCard.bind({});
LongBSaveOnlyClosed.args = {
  buttonStyle: 'b',
  interaction: 'save-only',
  status: 'closed',
};

export const LongAAllHOpen = TemplatePositionCard.bind({});
LongAAllHOpen.args = {
  buttonStyle: 'a',
  interaction: 'all-h',
  status: 'open',
};
export const LongAAllHClosed = TemplatePositionCard.bind({});
LongAAllHClosed.args = {
  buttonStyle: 'a',
  interaction: 'all-h',
  status: 'closed',
};
export const LongBAllHOpen = TemplatePositionCard.bind({});
LongBAllHOpen.args = {
  buttonStyle: 'b',
  interaction: 'all-h',
  status: 'open',
};
export const LongBAllHClosed = TemplatePositionCard.bind({});
LongBAllHClosed.args = {
  buttonStyle: 'b',
  interaction: 'all-h',
  status: 'closed',
};

export const LongAAllVOpen = TemplatePositionCard.bind({});
LongAAllVOpen.args = {
  buttonStyle: 'a',
  interaction: 'all-v',
  status: 'open',
};
export const LongAAllVClosed = TemplatePositionCard.bind({});
LongAAllVClosed.args = {
  buttonStyle: 'a',
  interaction: 'all-v',
  status: 'closed',
};
export const LongBAllVOpen = TemplatePositionCard.bind({});
LongBAllVOpen.args = {
  buttonStyle: 'b',
  interaction: 'all-v',
  status: 'open',
};
export const LongBAllVClosed = TemplatePositionCard.bind({});
LongBAllVClosed.args = {
  buttonStyle: 'b',
  interaction: 'all-v',
  status: 'closed',
};

export const LongANoneOpen = TemplatePositionCard.bind({});
LongANoneOpen.args = {
  buttonStyle: 'a',
  interaction: 'none',
  status: 'open',
};
export const LongANoneClosed = TemplatePositionCard.bind({});
LongANoneClosed.args = {
  buttonStyle: 'a',
  interaction: 'none',
  status: 'closed',
};
export const LongBNoneOpen = TemplatePositionCard.bind({});
LongBNoneOpen.args = {
  buttonStyle: 'b',
  interaction: 'none',
  status: 'open',
};
export const LongBNoneClosed = TemplatePositionCard.bind({});
LongBNoneClosed.args = {
  buttonStyle: 'b',
  interaction: 'none',
  status: 'closed',
};
