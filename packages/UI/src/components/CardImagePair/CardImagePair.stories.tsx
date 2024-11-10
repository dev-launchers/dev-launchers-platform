import type { Meta, StoryObj } from '@storybook/react';
import CardImagePair from './CardImagePair';

const meta: Meta<typeof CardImagePair> = {
  component: CardImagePair,
  parameters: {
    docs: {
      description: {
        component:
          'A card image pair that houses a card with text and a button along with an adjacent image.',
      },
    },
  },
  argTypes: {
    image: {
      control: 'text',
      description: 'The path of the image',
    },
    altText: {
      control: 'text',
      description:
        "The alternative text that gets displayed when the image can't be found",
    },
    title: {
      control: 'text',
      description: 'The title of the card.',
    },
    subtitle: {
      control: 'text',
      description: 'The subtitle of the card. (optional)',
    },
    description: {
      control: 'text',
      description: 'The body text of the card.',
    },
    imagePosition: {
      control: 'text',
      description:
        'The position of the image with either (`left` or `right`). Default is `right`.',
    },
    layoutRatio: {
      control: 'text',
      description:
        'The layout ratio, with the first fraction being used for the card (`1/2-1/2`, `2/3-1/3`, `3/4-1/4`). Default is `2/3-1/3`.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof CardImagePair>;

/*
Image right, 1/2
*/
export const ImageRightHalf: Story = {
  args: {
    image: '/images/logo-monogram.png',
    altText: 'Dev Launchers Space Ship Logo (Gray)',
    title: 'Image Right (1/2-1/2)',
    description:
      'A story showcasing the card image pair where the image is located to the right and the layout ratio is 1/2-1/2',
    imagePosition: 'right',
    layoutRatio: '1/2-1/2',
  },
  render: (args) => <CardImagePair {...args} />,
};

/*
Image right, 2/3
*/
export const ImageRightThird: Story = {
  args: {
    image: '/images/logo-monogram.png',
    altText: 'Dev Launchers Space Ship Logo (Gray)',
    title: 'Image Right (2/3-1/3)',
    description:
      'A story showcasing the card image pair where the image is located to the right and the layout ratio is 2/3-1/3',
    imagePosition: 'right',
    layoutRatio: '2/3-1/3',
  },
  render: (args) => <CardImagePair {...args} />,
};

/*
Image right, 3/4
*/
export const ImageRightFourth: Story = {
  args: {
    image: '/images/logo-monogram.png',
    altText: 'Dev Launchers Space Ship Logo (Gray)',
    title: 'Image Right (3/4-1/4)',
    description:
      'A story showcasing the card image pair where the image is located to the right and the layout ratio is 3/4-1/4',
    imagePosition: 'right',
    layoutRatio: '3/4-1/4',
  },
  render: (args) => <CardImagePair {...args} />,
};

/*
Image left, 1/2
*/
export const ImageLeftHalf: Story = {
  args: {
    image: '/images/logo-monogram.png',
    altText: 'Dev Launchers Space Ship Logo (Gray)',
    title: 'Image Right (1/2-1/2)',
    description:
      'A story showcasing the card image pair where the image is located to the right and the layout ratio is 1/2-1/2',
    imagePosition: 'left',
    layoutRatio: '1/2-1/2',
  },
  render: (args) => <CardImagePair {...args} />,
};

/*
Image left, 2/3
*/
export const ImageLeftThird: Story = {
  args: {
    image: '/images/logo-monogram.png',
    altText: 'Dev Launchers Space Ship Logo (Gray)',
    title: 'Image Right (2/3-1/3)',
    description:
      'A story showcasing the card image pair where the image is located to the right and the layout ratio is 2/3-1/3',
    imagePosition: 'left',
    layoutRatio: '2/3-1/3',
  },
  render: (args) => <CardImagePair {...args} />,
};

/*
Image left, 3/4
*/
export const ImageLeftFourth: Story = {
  args: {
    image: '/images/logo-monogram.png',
    altText: 'Dev Launchers Space Ship Logo (Gray)',
    title: 'Image Right (3/4-1/4)',
    description:
      'A story showcasing the card image pair where the image is located to the right and the layout ratio is 3/4-1/4',
    imagePosition: 'left',
    layoutRatio: '3/4-1/4',
  },
  render: (args) => <CardImagePair {...args} />,
};
