import type { Meta, StoryObj } from '@storybook/react';

import Switch from './Switch';

const meta: Meta<typeof Switch> = {
  component: Switch,
};

export default meta;
type Story = StoryObj<typeof Switch>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Untoggled: Story = {
  render: () => <Switch />,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rvdnSOeHdjODE0U7xdNTR9/DL-Universal-Design-System-(NEW)?type=design&node-id=12-3844&mode=design&t=8VGSbFcJwjPcf02d-4',
    },
  },
};

export const Toggled: Story = {
  render: () => <Switch defaultChecked />,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rvdnSOeHdjODE0U7xdNTR9/DL-Universal-Design-System-(NEW)?type=design&node-id=12-3838&mode=design&t=8VGSbFcJwjPcf02d-4',
    },
  },
};

export const Disabled: Story = {
  render: () => <Switch disabled />,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rvdnSOeHdjODE0U7xdNTR9/DL-Universal-Design-System-(NEW)?type=design&node-id=12-3841&mode=design&t=8VGSbFcJwjPcf02d-4',
    },
  },
};