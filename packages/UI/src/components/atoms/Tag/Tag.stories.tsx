import type { Meta, StoryObj } from '@storybook/react';
// import type { TagProps } from './Tag';
import Tag from './Tag';

const meta: Meta<typeof Tag> = {
  component: Tag,
  title: 'Atoms/Tag',
  args: { label: 'My Tag' },
};

export default meta;

type Story = StoryObj<typeof Tag>;

/**
 * White tag color
 */
export const White: Story = {
  args: { color: 'white' },
};

/**
 * Black tag color
 */
export const Black: Story = {
  args: { color: 'black' },
};

/**
 * Cosmic tag color
 */
export const Cosmic: Story = {
  args: { color: 'cosmic' },
};

/**
 * Jupiter tag color
 */
export const Jupiter: Story = {
  args: { color: 'jupiter' },
};

/**
 * Nebula tag color
 */
export const Nebula: Story = {
  args: { color: 'nebula' },
};

/**
 * Neptune tag color
 */
export const Neptune: Story = {
  args: { color: 'neptune' },
};

/**
 * Saturn tag color
 */
export const Saturn: Story = {
  args: { color: 'saturn' },
};

/**
 * Uranus tag color
 */
export const Uranus: Story = {
  args: { color: 'uranus' },
};

/**
 * This is an example of multiple tags displaying together.
 */
export const TagBlockDisplayExample: Story = {
  render: (props) => (
    <div className="flex space-x-2">
      <Tag {...props} label="Black" />
      <Tag color="white" {...props} label="White" />
      <Tag color="jupiter" selected {...props} label="Jupiter" />
      <Tag color="uranus" {...props} label="Uranus" />
      <Tag color="neptune" {...props} label="Neptune" />
      <Tag color="cosmic" {...props} label="Cosmic" />
    </div>
  ),
};
