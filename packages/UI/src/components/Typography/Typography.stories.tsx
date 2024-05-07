import type { Meta, Story } from '@storybook/react';
// import { Typography } from './Typography';

/**
 * @description This component is used to style text in different ways.
 * https://www.figma.com/file/EwzuhhvTulvFRMvhTD5VAh/DL-Universal-Design-System?type=design&node-id=11487-34822&mode=design&t=VpHuObF3jxmDeewf-0
 */
const meta: Meta = {
  title: 'Typography',
};

export default meta;

// type Story = Story;

export const DefaultUnchecked: Story = (args) => (
  <h1 className="h1" {...args}>
    Lorem ipsum
  </h1>
);

DefaultUnchecked.args = {
  type: 'h1',
};

DefaultUnchecked.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/EwzuhhvTulvFRMvhTD5VAh/DL-Universal-Design-System?type=design&node-id=11487-34822&mode=design&t=VpHuObF3jxmDeewf-0',
  },
};
