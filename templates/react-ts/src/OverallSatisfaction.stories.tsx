import { ComponentStory, ComponentMeta } from '@storybook/react';

import OverallSatisfaction from './OverallSatisfaction';

export default {
  title: 'Components/Overall Satisfaction',
  parameters: {
    layout: 'centered'
  },
  component: OverallSatisfaction
} as ComponentMeta<typeof OverallSatisfaction>;

const Template: ComponentStory<typeof OverallSatisfaction> = (args) => <OverallSatisfaction {...args} />;

export const Default = Template.bind({});
Default.args = {
  rating: 3
};
