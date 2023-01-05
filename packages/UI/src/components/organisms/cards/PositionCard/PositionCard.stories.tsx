import type { ComponentStory, ComponentMeta } from '@storybook/react';

import PositionCard from './PositionCard';
export default {
  title: 'Organisms/PositionCard',
  component: PositionCard,
} as ComponentMeta<typeof PositionCard>;

const TemplatePositionCard: ComponentStory<typeof PositionCard> = (args) => (
  <PositionCard {...args}></PositionCard>
);

const content = {
  title: 'Web Developer',
  level: 'junior',
  timeCommittment: '5 hrs per week',
  role: ' We are looking for a junior web developer who is willing and eagerto learn various web technologies mainly in the field of React while working within a team of ambitious developers! Our goal is to designa platform that brings people of from a diverse range of specialties together to collaboratively design the best possible software solutions. This project provides a space for people to establish and develop their ideas into working projects with input from others.',
  tags: ['unity', 'react', 'social', 'agile', 'digital media'],
  benefits: [
    'Be proficient in React.js and/or Next.js (strongly prefer both or at least Next)',
    'Experience with GitHub and version control using Git',
    'Backend experience preferred, especially using a CMS',
    'Be able tocommit at least 5 hours a week',
    'Self-sufficient learner',
    " Communicate with us on a weekly basis to see the progress you've been making",
  ],
  expectations: [
    'Be proficient in React.js and/or Next.js (strongly prefer both or at least Next)',
    'Experience with GitHub and version control using Git',
    'Backend experience preferred, especially using a CMS',
    'Be able tocommit at least 5 hours a week',
    'Self-sufficient learner',
    " Communicate with us on a weekly basis to see the progress you've been making",
  ],
};

export const LongASaveOnlyOpen = TemplatePositionCard.bind({});
LongASaveOnlyOpen.args = {
  buttonStyle: 'a',
  interaction: 'save-only',
  status: true,
  content,
};
export const LongASaveOnlyClosed = TemplatePositionCard.bind({});
LongASaveOnlyClosed.args = {
  buttonStyle: 'a',
  interaction: 'save-only',
  status: false,
  content,
};
export const LongBSaveOnlyOpen = TemplatePositionCard.bind({});
LongBSaveOnlyOpen.args = {
  buttonStyle: 'b',
  interaction: 'save-only',
  status: true,
  content,
};
export const LongBSaveOnlyClosed = TemplatePositionCard.bind({});
LongBSaveOnlyClosed.args = {
  buttonStyle: 'b',
  interaction: 'save-only',
  status: false,
  content,
};

export const LongAAllHOpen = TemplatePositionCard.bind({});
LongAAllHOpen.args = {
  buttonStyle: 'a',
  interaction: 'all-h',
  status: true,
  content,
};
export const LongAAllHClosed = TemplatePositionCard.bind({});
LongAAllHClosed.args = {
  buttonStyle: 'a',
  interaction: 'all-h',
  status: false,
  content,
};
export const LongBAllHOpen = TemplatePositionCard.bind({});
LongBAllHOpen.args = {
  buttonStyle: 'b',
  interaction: 'all-h',
  status: true,
  content,
};
export const LongBAllHClosed = TemplatePositionCard.bind({});
LongBAllHClosed.args = {
  buttonStyle: 'b',
  interaction: 'all-h',
  status: false,
  content,
};

export const LongAAllVOpen = TemplatePositionCard.bind({});
LongAAllVOpen.args = {
  buttonStyle: 'a',
  interaction: 'all-v',
  status: true,
  content,
};
export const LongAAllVClosed = TemplatePositionCard.bind({});
LongAAllVClosed.args = {
  buttonStyle: 'a',
  interaction: 'all-v',
  status: false,
  content,
};
export const LongBAllVOpen = TemplatePositionCard.bind({});
LongBAllVOpen.args = {
  buttonStyle: 'b',
  interaction: 'all-v',
  status: true,
  content,
};
export const LongBAllVClosed = TemplatePositionCard.bind({});
LongBAllVClosed.args = {
  buttonStyle: 'b',
  interaction: 'all-v',
  status: false,
  content,
};

export const LongANoneOpen = TemplatePositionCard.bind({});
LongANoneOpen.args = {
  buttonStyle: 'a',
  interaction: 'none',
  status: true,
  content,
};
export const LongANoneClosed = TemplatePositionCard.bind({});
LongANoneClosed.args = {
  buttonStyle: 'a',
  interaction: 'none',
  status: false,
  content,
};
export const LongBNoneOpen = TemplatePositionCard.bind({});
LongBNoneOpen.args = {
  buttonStyle: 'b',
  interaction: 'none',
  status: true,
  content,
};
export const LongBNoneClosed = TemplatePositionCard.bind({});
LongBNoneClosed.args = {
  buttonStyle: 'b',
  interaction: 'none',
  status: false,
  content,
};

export const MinimalANoneOpen = TemplatePositionCard.bind({});
MinimalANoneOpen.args = {
  buttonStyle: 'a',
  interaction: 'none',
  status: true,
  minimal: true,
  content,
};
export const MinimalANoneClosed = TemplatePositionCard.bind({});
MinimalANoneClosed.args = {
  buttonStyle: 'a',
  interaction: 'none',
  status: false,
  minimal: true,
  content,
};
export const MinimalBNoneOpen = TemplatePositionCard.bind({});
MinimalBNoneOpen.args = {
  buttonStyle: 'b',
  interaction: 'none',
  status: true,
  minimal: true,
  content,
};
export const MinimalBNoneClosed = TemplatePositionCard.bind({});
MinimalBNoneClosed.args = {
  buttonStyle: 'b',
  interaction: 'none',
  status: false,
  minimal: true,
  content,
};
