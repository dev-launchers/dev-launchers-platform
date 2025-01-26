import type { Meta, StoryObj } from '@storybook/react';
import Typography from './Typography';
import '@devlaunchers/tailwind/tailwind.css';

const meta: Meta<typeof Typography> = {
  title: 'components/atoms/Typography',
  component: Typography,
  parameters: {
    docs: {
      argTypes: {
        exclude: [],
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/proto/EwzuhhvTulvFRMvhTD5VAh/DL-Universal-Design-System?node-id=16008-38063&t=DhhTCcnqJtz4lNXR-1&scaling=min-zoom&content-scaling=fixed&page-id=11487%3A34822&starting-point-node-id=11976%3A27794',
    },
  },
  argTypes: {
    as: {
      control: { type: 'select' },
      description:
        'Determines the semantic HTML tags. Example: "h1", "p", etc.',
      options: [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'p',
        'span',
        'figcaption',
        'summary',
        'cite',
        'em',
        'a',
        'q',
        'time',
        'li',
        'dt',
        'dd',
        'dfn',
      ],
      table: { defaultValue: { summary: 'p' } },
    },
    children: {
      control: 'text',
      description: 'Text to be rendered inside semantic HTML tags.',
      table: {
        defaultValue: {
          summary: 'Dev Launchers',
        },
      },
    },
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary'],
      description:
        'Variant determines the typography style. "primary" for headings, "secondary" for body text like "p" or "span"',
      table: {
        defaultValue: {
          summary: 'secondary',
        },
      },
    },
    leading: {
      options: ['tight', 'snug', 'normal', 'relaxed'],
      control: { type: 'select' },
      description: 'Custom line height for precise vertical spacing.',
      table: { defaultValue: { summary: 'normal' } },
    },
    textCase: {
      control: { type: 'select' },
      options: ['uppercase', 'lowercase', 'capitalize', 'normal'],
      description:
        'Controls text transformation (uppercase, capitalize, etc.).',
      table: {
        defaultValue: {
          summary: 'normal',
        },
      },
    },
    textAlign: {
      control: { type: 'select' },
      options: ['left', 'center', 'right'],
      description: 'Text alignment, e.g., "left", "center", "right".',
      table: {
        defaultValue: {
          summary: 'left',
        },
      },
    },
    textWeight: {
      control: { type: 'select' },
      options: ['light', 'normal', 'semibold', 'bold'],
      description:
        'Font weight, supporting common weights like "light" and "bold".',
      table: {
        defaultValue: {
          summary: 'normal',
        },
      },
    },
    textStyle: {
      control: { type: 'select' },
      options: ['normal', 'italic'],
      description: 'Supports normal and italic for font style.',
      table: {
        defaultValue: {
          summary: 'normal',
        },
      },
    },
    textDecoration: {
      control: { type: 'select' },
      options: ['underline', 'lineThrough', 'noUnderline'],
      description: 'Adds underlines or strikethroughs.',
      table: {
        defaultValue: {
          summary: 'no-underline',
        },
      },
    },
    size: {
      control: { type: 'select' },
      options: [
        'xs3',
        'xs2',
        'xs',
        'sm',
        'base',
        'lg',
        'xl',
        'xl2',
        'xl3',
        'xl4',
        'xl5',
        'xl6',
        'xl7',
      ],
      description:
        'Size corresponds to predefined font sizes, e.g., "base", etc.',
      table: {
        defaultValue: {
          summary: '7xl',
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

// Default Story
export const Default: Story = {
  args: {
    as: 'p',
    children: 'Welcome to Dev Launchers Platform',
    variant: 'secondary',
    leading: 'normal',
    textCase: 'normal',
    textAlign: 'left',
    textWeight: 'normal',
    textStyle: 'normal',
    textDecoration: 'noUnderline',
    size: 'xl7',
  },
};

// You can add more stories here
