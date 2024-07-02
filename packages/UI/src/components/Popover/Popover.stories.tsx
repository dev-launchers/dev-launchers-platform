import type { Meta, StoryObj } from '@storybook/react';
import { Bell, Settings } from 'lucide-react';
import Button from '../atoms/Button';
import NotificationItem from '../NotificationItem/NotificationItem';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverClose,
} from './Popover';

const meta: Meta<typeof Popover> = {
  component: Popover,
};

export default meta;
type Story = StoryObj<typeof Popover>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button buttonType="primary" buttonSize="standard">
          Open
        </Button>
      </PopoverTrigger>
      <PopoverContent hasCloseBtn={false}>
        {' '}
        Click outside of the popover to close
      </PopoverContent>
    </Popover>
  ),
};

export const WithClose: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button buttonType="primary" buttonSize="standard">
          Open
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-96"> Click X to close </PopoverContent>
    </Popover>
  ),
};

export const UsingPopoverClose: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button buttonType="primary" buttonSize="standard">
          Open
        </Button>
      </PopoverTrigger>
      <PopoverContent
        hasCloseBtn={false}
        className="flex w-96 items-center justify-between"
      >
        <p>Click button to close</p>
        <PopoverClose>
          <Button buttonType="primary" buttonSize="standard">
            {' '}
            Close{' '}
          </Button>
        </PopoverClose>
      </PopoverContent>
    </Popover>
  ),
};

export const NotificationsPopover: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <button>
          <Bell width="24px" height="24px" />
        </button>
      </PopoverTrigger>
      <PopoverContent
        hasCloseBtn={false}
        className="flex max-w-xl flex-col items-center rounded-2xl bg-grayscale-50 p-0 shadow-2xl"
      >
        <div className="flex items-center justify-between self-stretch px-8 py-4">
          {/* 👇 TODO: APPLY PROPER TYPOGRAPHY */}
          <strong className="h5 text-right !font-bold text-grayscale-900">
            Notifications
          </strong>
          <button className="p-d-d text-right !leading-none text-neptune-600">
            Mark all as read
          </button>
        </div>
        <ul className="flex max-h-96 flex-col items-center self-stretch overflow-auto bg-grayscale-100">
          {[1, 2, 3].map((num) => (
            <NotificationItem
              key={num}
              action="commented on"
              avatar={{
                alt: 'Profile picture of Arthur Wells',
                src: '/Person.svg',
              }}
              message="What you want to achieve through an online questionnaire is quality rather than quantity."
              name="Arthur Wells"
              profileLink="https://devlaunchers.org/users/me"
              status="unRead"
              target="DevSocials"
              targetLink="https://devlaunchers.org/projects/DL-IdeaSpace"
              timeStamp="P3Y6M4DT12H30M5S"
            />
          ))}
        </ul>
        <div className="flex items-center justify-between self-stretch px-6 py-4">
          <a
            href="/notifications"
            className="p-d-d text-right !leading-none text-neptune-600"
          >
            View all notifications
          </a>
          <a href="/notifications/settings" className="flex items-start gap-2">
            <Settings width="17px" height="17px" />
            Settings
          </a>
        </div>
      </PopoverContent>
    </Popover>
  ),
};
