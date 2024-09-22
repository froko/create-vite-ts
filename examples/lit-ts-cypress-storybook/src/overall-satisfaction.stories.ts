import './overall-satisfaction';

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/Overall Satisfaction',
  args: {
    rating: 3
  },
  render: (args) => html`<overall-satisfaction overall-rating=${args.rating}></overall-satisfaction>`
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
