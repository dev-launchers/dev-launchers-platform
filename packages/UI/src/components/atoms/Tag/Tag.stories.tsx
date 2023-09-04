import type { Meta, StoryObj } from '@storybook/react';
import type { TagProps } from './Tag';
import { Tag, tag } from './Tag';

const meta: Meta<typeof Tag> = {
  component: Tag,
  title: 'Atoms/Tag',
};

export default meta;

type Story = StoryObj<typeof Tag>;

/**
 * Build the properties with a default label
 * @param props The properties to use for the tag
 * @returns The default properties
 */
const buildDefaultProps = (props: TagProps): TagProps => {
  return {
    ...props,
    label: props.label ? props.label : 'My Tag',
  };
};

export const Primary: Story = {
  render: (props: TagProps) => <Tag {...buildDefaultProps(props)} />,
};

export const Secondary: Story = {
  render: (props: TagProps) => (
    <Tag {...buildDefaultProps({ ...props, color: 'secondary' })} />
  ),
};

export const Success: Story = {
  render: (props: TagProps) => (
    <Tag {...buildDefaultProps({ ...props, color: 'success' })} />
  ),
};

export const Danger: Story = {
  render: (props: TagProps) => (
    <Tag {...buildDefaultProps({ ...props, color: 'danger' })} />
  ),
};

export const Warning: Story = {
  render: (props: TagProps) => (
    <Tag {...buildDefaultProps({ ...props, color: 'warning' })} />
  ),
};

export const Info: Story = {
  render: (props: TagProps) => (
    <Tag {...buildDefaultProps({ ...props, color: 'info' })} />
  ),
};

export const Light: Story = {
  render: (props: TagProps) => (
    <Tag {...buildDefaultProps({ ...props, color: 'light' })} />
  ),
};

export const Dark: Story = {
  render: (props: TagProps) => (
    <Tag {...buildDefaultProps({ ...props, color: 'dark' })} />
  ),
};
