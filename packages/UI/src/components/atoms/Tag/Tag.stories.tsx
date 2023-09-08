import type { Meta, StoryObj } from '@storybook/react';
import type { TagProps } from './Tag';
import { Tag } from './Tag';

const meta: Meta<typeof Tag> = {
  component: Tag,
  title: 'Atoms/Tag',
};

export default meta;

type Story = StoryObj<typeof Tag>;

const defaultLabel = 'My Tag';

type DefaultTagProps = {
  label?: string;
  color?: string;
  selected?: boolean;
};

/**
 * Build the properties with a default label
 * @param {DefaultTagProps} props The properties to use for the tag
 * @returns {TagProps} The default properties
 */
const buildDefaultProps = (props: DefaultTagProps | undefined): TagProps => {
  return {
    ...props,
    label: props?.label ? props.label : defaultLabel,
  } as TagProps;
};

// NOTE: alternate render method to display variants

// export const Primary: Story = {
//   render: (props: TagProps) => <Tag {...buildDefaultProps(props)} />,
// };

// export const Secondary: Story = {
//   render: (props: TagProps) => (
//     <Tag {...buildDefaultProps({ ...props, color: 'secondary' })} />
//   ),
// };

/**
 * Primary tag color
 */
export const Primary: Story = {
  args: buildDefaultProps({ color: 'primary' }),
};

/**
 * Secondary tag color
 */
export const Secondary: Story = {
  args: buildDefaultProps({ color: 'secondary' }),
};

/**
 * Success tag color
 */
export const Success: Story = {
  args: buildDefaultProps({ color: 'success' }),
};

/**
 * Danger tag color
 */
export const Danger: Story = {
  args: buildDefaultProps({ color: 'danger' }),
};

/**
 * Warning tag color
 */
export const Warning: Story = {
  args: buildDefaultProps({ color: 'warning' }),
};

/**
 * Info tag color
 */
export const Info: Story = {
  args: buildDefaultProps({ color: 'info' }),
};

/**
 * Light tag color
 */
export const Light: Story = {
  args: buildDefaultProps({ color: 'light' }),
};

/**
 * Dark tag color
 */
export const Dark: Story = {
  args: buildDefaultProps({ color: 'dark' }),
};

/**
 * White tag color
 */
export const Jupiter: Story = {
  args: buildDefaultProps({ color: 'jupiter' }),
};

/**
 * Charcoal tag color
 */
export const Uranus: Story = {
  args: buildDefaultProps({ color: 'uranus' }),
};

/**
 * Neptune tag color
 */
export const Neptune: Story = {
  args: buildDefaultProps({ color: 'neptune' }),
};

/**
 * Saturn tag color
 */
export const Saturn: Story = {
  args: buildDefaultProps({ color: 'saturn' }),
};

/**
 * Nebula tag color
 */
export const Nebula: Story = {
  args: buildDefaultProps({ color: 'nebula' }),
};

/**
 * Cosmic tag color
 */
export const Cosmic: Story = {
  args: buildDefaultProps({ color: 'cosmic' }),
};

/**
 * This is an example of multiple tags displaying together.
 */
export const TagBlockDisplayExample: Story = {
  render: (props: TagProps) => (
    <div className="flex space-x-2">
      <Tag {...buildDefaultProps({ ...props })} />
      <Tag
        {...buildDefaultProps({
          ...props,
          label: 'Secondary',
          color: 'secondary',
        })}
      />
      <Tag
        {...buildDefaultProps({
          ...props,
          label: 'Jupiter',
          color: 'jupiter',
          selected: true,
        })}
      />
      <Tag
        {...buildDefaultProps({ ...props, label: 'Uranus', color: 'uranus' })}
      />
      <Tag
        {...buildDefaultProps({ ...props, label: 'Neptune', color: 'neptune' })}
      />
      <Tag
        {...buildDefaultProps({ ...props, label: 'Cosmic', color: 'cosmic' })}
      />
    </div>
  ),
};
