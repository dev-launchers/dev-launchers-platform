import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import Avatar from './Avatar';

const meta: Meta<typeof Avatar> = {
  component: Avatar,
};

export default meta;

export const Default: StoryObj<typeof Avatar> = {
  render: () => (
    <Avatar
      alt="Profile picture of John Doe"
      src={`/Person.svg`}
      delayMs={600}
      onLoadingStatusChange={action('onLoadingStatusChange')}
    />
  ),
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EwzuhhvTulvFRMvhTD5VAh/DL-Universal-Design-System?type=design&node-id=7760-6496&mode=design&t=1SqrP5S7pH7kkYa6-4',
    },
  },
};

export const FailToLoadFallback: StoryObj<typeof Avatar> = {
  render: () => (
    <Avatar
      alt="Profile picture of John Doe"
      src={`https://someUrlThatDoesNotReturnAnything.com/myPicture.png`}
      delayMs={600}
      onLoadingStatusChange={action('onLoadingStatusChange')}
    />
  ),
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EwzuhhvTulvFRMvhTD5VAh/DL-Universal-Design-System?type=design&node-id=8575-7191&mode=design&t=1SqrP5S7pH7kkYa6-4',
    },
  },
};

export const Playground: StoryObj<typeof Avatar> = {
  render({ src, delayMs, alt }) {
    return (
      <Avatar
        src={Array.isArray(src) ? src[0] : src}
        alt={alt}
        delayMs={delayMs}
        onLoadingStatusChange={action('onLoadingStatusChange')}
      />
    );
  },
  argTypes: { src: { control: { type: 'file', accept: '.png' } } },
  args: {
    alt: 'Profile picture of Arthur Wells',
    src: `/Person.svg`,
    delayMs: 600,
  },
  parameters: {
    docs: { disable: true },
  },
};
