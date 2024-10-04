import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

import OverallSatisfaction from './OverallSatisfaction';

const meta: Meta<typeof OverallSatisfaction> = {
  title: 'Components/Overall Satisfaction',
  component: OverallSatisfaction,
  args: {
    rating: 3
  }
};

export default meta;
type Story = StoryObj<typeof OverallSatisfaction>;

export const Default: Story = {
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('Overall Satisfaction')).toBeInTheDocument();
  }
};
