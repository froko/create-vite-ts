import { expect } from '@storybook/jest';
import { within } from '@storybook/testing-library';

import OverallSatisfaction from './OverallSatisfaction';

export default {
  title: 'Components/Overall Satisfaction',
  component: OverallSatisfaction,
  args: {
    rating: 3
  }
};

export const Default = {
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('Overall Satisfaction')).toBeInTheDocument();
  }
};
