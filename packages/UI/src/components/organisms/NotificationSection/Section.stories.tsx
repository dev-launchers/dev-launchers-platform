import Section from './Section'; 
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Section> = {
  title: 'organisms/NotificationSection',
  component: Section,
}
export default meta;
type Story = StoryObj<typeof Section>;


export const SavedIdeas: Story = {
  args: {
    header: 'SAVED IDEAS',
    paragraph: 'Keep track of progress or updates related to your saved ideas',
    disabled: false,
  },
}
export const ProfileUpdates: Story = {
  args: {
    header: 'PROFILE UPDATES',
    paragraph: 'Stay informed about any updates to your profile and account settings.',
    disabled: false,
  },
}
export const Events: Story = {
  args: {
    header: 'EVENTS',
    paragraph: 'Get notified about upcoming events, workshops, or conferences.',
    disabled: false,
  },
}
export const TipOfTheDay: Story = {
  args: {
    header: 'TIP OF THE DAY',
    paragraph: 'Recieve daily tips, tricks, or helpful insights to enhance your experience.',
    disabled: false,
  },
}
export const LatestNews: Story = {
  args: {
    header: 'LATEST NEWS',
    paragraph: 'Stay up to date with the latest news and updates of the organization',
    disabled: false,
  },
}
