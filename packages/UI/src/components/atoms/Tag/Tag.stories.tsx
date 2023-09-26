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

/**
 * White tag color
 */
export const White: Story = {
  args: buildDefaultProps({ color: 'white' }),
};

/**
 * Black tag color
 */
export const Black: Story = {
  args: buildDefaultProps({ color: 'black' }),
};

/**
 * Cosmic tag color
 */
export const Cosmic: Story = {
  args: buildDefaultProps({ color: 'cosmic' }),
};

/**
 * Jupiter tag color
 */
export const Jupiter: Story = {
  args: buildDefaultProps({ color: 'jupiter' }),
};

/**
 * Nebula tag color
 */
export const Nebula: Story = {
  args: buildDefaultProps({ color: 'nebula' }),
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
 * Uranus tag color
 */
export const Uranus: Story = {
  args: buildDefaultProps({ color: 'uranus' }),
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
          label: 'White',
          color: 'white',
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
