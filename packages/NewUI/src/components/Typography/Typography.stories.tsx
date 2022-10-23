import type { ComponentStory, ComponentMeta } from '@storybook/react';
import * as React from 'react';
import Typography from './Typography';

export default {
  title: 'Common Components/Typography',
  component: Typography,
} as ComponentMeta<typeof Typography>;

export const H1: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args}>{args.children}</Typography>
);

H1.args = {
  type: 'h1',
  children: 'Welcome to Dev Launchers Platform',
};

export const H2: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args}>{args.children}</Typography>
);

H2.args = {
  type: 'h2',
  children: 'Welcome to Dev Launchers Platform',
};

export const H3: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args}>{args.children}</Typography>
);

H3.args = {
  type: 'h3',
  children: 'Welcome to Dev Launchers Platform',
};

export const H4: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args}>{args.children}</Typography>
);

H4.args = {
  type: 'h4',
  children: 'Welcome to Dev Launchers Platform',
};

export const H5: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args}>{args.children}</Typography>
);

H5.args = {
  type: 'h5',
  children: 'Welcome to Dev Launchers Platform',
};

export const ParagraphLarge: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args}>{args.children}</Typography>
);

ParagraphLarge.args = {
  type: 'pLarge',
  children: 'Welcome to Dev Launchers Platform',
};

export const Paragraph: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args}>{args.children}</Typography>
);

Paragraph.args = {
  type: 'p',
  children: 'Welcome to Dev Launchers Platform',
};

export const ParagraphSmall: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args}>{args.children}</Typography>
);

ParagraphSmall.args = {
  type: 'pSmall',
  children: 'Welcome to Dev Launchers Platform',
};

export const Label: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args}>{args.children}</Typography>
);

Label.args = {
  type: 'label',
  children: 'Welcome to Dev Launchers Platform',
};
