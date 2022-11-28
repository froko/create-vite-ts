import { expect } from '@storybook/jest';
import { within } from '@storybook/testing-library';

import OverallSatisfaction from './OverallSatisfaction.vue';

export default {
  title: 'Components/Overall Satisfaction',
  args: {
    rating: 3
  }
};

const Template = (args) => ({
  components: { OverallSatisfaction },
  setup() {
    return { args };
  },
  template: '<OverallSatisfaction v-bind="args" />'
});

export const Default = Template.bind({});
Default.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);
  expect(canvas.getByText('Overall Satisfaction')).toBeInTheDocument();
};
