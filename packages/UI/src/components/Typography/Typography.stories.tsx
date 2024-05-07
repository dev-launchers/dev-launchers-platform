import type { Meta, StoryObj } from '@storybook/react';

import { Typography } from './Typography';

/**
 * # Typography
 * https://www.figma.com/file/EwzuhhvTulvFRMvhTD5VAh/DL-Universal-Design-System?type=design&node-id=11487-34822&mode=design&t=VpHuObF3jxmDeewf-0
 */

const meta: Meta<typeof Typography> = {
  component: Typography,
};

export default meta;

type Story = StoryObj<typeof Typography>;
//
export const DefaultUnchecked: Story = {
  render: () => <Typography type="h1">Lorem ipsum</Typography>,
};
